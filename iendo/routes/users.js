var express = require('express');
var router = express.Router();
var db = require('../server');
// var co = require('co')
var co = require('co');
const { responseTool, repSuccess, repSuccessMsg, repError, repErrorMsg, repParamsErrorMsg } = require('../lib/responseData');
const { validateJson, purviewSchema, addUserSchema } = require('../lib/schema');
const { sql } = require('../server');


/* GET users listing. */
/*********************************************************************************用户列表数据*************************************************************************************/
/**
 * @api {get} /users/list 1.1 用户列表数据
 * @apiDescription 用户列表数据
 * @apiName list
 * @apiGroup User 
 * @apiParam {string} type （account-登录账号列表， manager-用户列表）
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "1",
 *      "data" : {
 *          "data" : "data",
 *      },
 *      "msg" : "请求成功",
 *  }
 * @apiSampleRequest http://localhost:3000/users/list
 * @apiVersion 1.0.0
 */
 router.get('/users/list', function (req, res, next) {
  var params = req.query || req.params;
  var type = params.type || "account"
  //获取参数
  var sqlStr = ""
  if (type == "account") {
    sqlStr = 'select u.UserName, u.Des, u.CreatedAt, u.LastLoginAt, u.LoginTimes, u.CanUSE, p.* from dbo.users u, dbo.Purview p where u.UserID = p.UserID and u.CanUSE=1;';
  } else {
    sqlStr = 'select u.UserName, u.Des, u.CreatedAt, u.LastLoginAt, u.LoginTimes, u.CanUSE, p.* from dbo.users u, dbo.Purview p where u.UserID = p.UserID;';
  }
  db.sql(sqlStr, function (err, result) {
    if (err) {
      res.send(responseTool({}, repError, repErrorMsg));
      return;
    } else {
      var data = result['recordset']
      // responseTool(data, repSuccess, repSuccessMsg)
      res.send(responseTool(data, repSuccess, repSuccessMsg))
    }
  });
});

/*********************************************************************************用户登录*************************************************************************************/
// #region 用户登录
/**
 * @api {post} /users/login 1.2 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup User 
 * @apiParam {string} UserName 用户名
 * @apiParam {string} Password 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "1",
 *      "data" : {
 *           "userID": userID,
 *           "Role": Role
 *      },
 *      "msg" : "请求成功",
 *  }
 * @apiSampleRequest http://localhost:3000/users/login
 * @apiVersion 1.0.0
 */
// #endregion
router.post('/users/login', function (req, res, next) {
  co(function* () {
    var mUserName = req.body.UserName;
    var mPassword = req.body.Password;
    try {
      // 校验数据
      let result = yield getCheckData(mUserName, mPassword);
      if (result.result == false) {
        res.send(responseTool({}, repError, result.msg))
      } else {
        let purview = yield __getPurview(result.userID)
        var data = {};
        if (purview) {
          data = { "userID": result.userID, "Role": result.role, "purview": purview };
        } else {
          data = { "userID": result.userID, "Role": result.role, "purview": {} };
        }
        res.send(responseTool(data, repSuccess, repSuccessMsg));
      }
    } catch (error) {
      res.send(responseTool({}, repError, '登录失败'))
    }
  });
});


// #region 获取用户权限
/**
 * @api {get} /users/purview 1.3 获取用户权限
 * @apiDescription 获取用户权限
 * @apiName purview
 * @apiGroup User 
 * @apiParam {string} UserID 用户ID
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "1",
 *      "data" : {
 *           "CanEdit": true,
 *      },
 *      "msg" : "请求成功",
 *  }
 * @apiSampleRequest http://localhost:3000/users/purview
 * @apiVersion 1.0.0
 */
// #endregion
 router.get('/users/purview', function (req, res, next) {
  co(function* () {
    try {
      var params = req.query || req.params;
      if (params.UserID == null) {
        res.send(responseTool({}, repError, '用户ID不能为空'))
      } else {
        let purview = yield __getPurview(params["UserID"])
        if (purview) {
          res.send(responseTool(purview, repSuccess, repSuccessMsg))
        } else {
          res.send(responseTool({}, repSuccess, repSuccessMsg))
        }
      }
    } catch (error) {
      res.send(responseTool({}, repError, repParamsErrorMsg))
    }
  });
});

// #region 新增用户
/**
 * @api {post} /users/addUser 1.4 新增用户
 * @apiDescription 新增用户
 * @apiName addUser
 * @apiGroup User
 * @apiParam {int} UserID 当前用户ID
 * @apiParam {string} Role 新增的用户角色
 * @apiParam {string} UserName 新用户的名字
 * @apiParam {string} Password 新用户的密码
 * @apiParam {string} Des 新用户的描述
 * @apiParam {string} CanUSE 新用户是否激活1激活，0是未激活
 * @apiParam {int} [UserMan] 用户管理 (0 关闭 1 开启, 下同) 
 * @apiParam {int} [CanPsw] 设置口令
 * @apiParam {int} [SnapVideoRecord] 拍照录像
 * @apiParam {int} [LiveStream] 直播
 * @apiParam {int} [DeviceSet] 喷吸吹设置
 * @apiParam {int} [CanNew] 登记病人
 * @apiParam {int} [CanEdit] 修改病历
 * @apiParam {int} [CanDelete] 删除病历
 * @apiParam {int} [CanPrint] 打印病历
 * @apiParam {int} [UnPrinted] 仅限未打印病例
 * @apiParam {int} [ExportRecord] 导出病例
 * @apiParam {int} [ExportVideo] 导出录像
 * @apiParam {int} [ExportImage] 导出图片
 * @apiParam {int} [CanBackup] 备份数据
 * @apiParam {int} [OnlySelf] 仅限本人病例
 * @apiParam {int} [VideoSet] 视频设置
 * @apiParam {int} [HospitalInfo] 医院信息
 * @apiParam {int} [ReportStyle] 报告样式
 * @apiParam {int} [SeatAdjust] 座椅操作
 * @apiParam {int} [WorkstationControl] 工作站是否对设备有控制权
 * @apiParam {int} [MobileControl] 移动端是否对设备有控制权
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "code": 0,
 *      "data": {},
 *      "msg": ""
 * }
 * @apiSampleRequest http://localhost:3000/users/addUser
 * @apiVersion 1.0.0
 */
// #endregion
router.post('/users/addUser', function (req, res, next) {
  var params = req.body
  const schemaResult = validateJson(addUserSchema, params)
  if (!schemaResult.result) {
    res.send(responseTool({}, repError, JSON.stringify(schemaResult.errors)))
    // res.status(400).json(schemaResult.errors)
    return;
  }
  co(function* () {
    try {
      // 修改用户ID
      var UserID = params.UserID
      // 被修改用户ID
      var Role = params.Role
      var UserName = params.UserName
      var Password = params.Password
      var Des = params.Des
      var CanUSE = params.CanUSE
      var purviewObj = {
        UserMan: params.UserMan || 0,
        CanPsw: params.CanPsw || 0,
        SnapVideoRecord: params.SnapVideoRecord || 0,
        LiveStream: params.LiveStream || 0,
        DeviceSet: params.DeviceSet || 0,
        CanNew: params.CanNew || 0,
        CanEdit: params.CanEdit || 0,
        CanDelete: params.CanDelete || 0,
        CanPrint: params.CanPrint || 0,
        UnPrinted: params.UnPrinted || 0,
        ExportRecord: params.ExportRecord || 0,
        ExportVideo: params.ExportVideo || 0,
        ExportImage: params.ExportImage || 0,
        CanBackup: params.CanBackup || 0,
        OnlySelf: params.OnlySelf || 0,
        VideoSet: params.VideoSet || 0,
        HospitalInfo: params.HospitalInfo || 0,
        ReportStyle: params.ReportStyle || 0,
        SeatAdjust: params.SeatAdjust || 0,
        WorkstationControl: params.WorkstationControl || 0,
        MobileControl: params.MobileControl || 0
      }

      let purview = yield __getPurview(UserID)
      let canEdit = false
      if (purview.hasOwnProperty("UserMan")) {
        canEdit = purview["UserMan"]
      }
      if (canEdit) {
        let isExist = yield __queryUserWithUsername(UserName)
        if (!isExist && UserName.toLowerCase() !== "Admin".toLowerCase()) {
          // 新增用户, 有users表有触发器，会自动新增一条权限记录
          yield __addUser(UserName, Password, Des, CanUSE)
          let UserID = yield __getUserID(UserName, Password)
          if (UserID) {
            // 新增权限
            yield __addPurview(purviewObj, UserID, Role)
            res.send(responseTool({ "UserID": UserID, "UserName": UserName }, repSuccess, repSuccessMsg))
          } else {
            res.send(responseTool({}, repError, repParamsErrorMsg))
          }
        } else {
          res.send(responseTool({}, repError, "用户名已存在"));
        }
      } else {
        res.send(responseTool({}, repError, "当前账号无权限新增用户"));
      }
    } catch (error) {
      res.send(responseTool({}, repError, repParamsErrorMsg))
    }
  })
});

/*********************************************************************************删除用户*************************************************************************************/
// #region 删除用户
/**
 * @api {post} /users/deleteUserById 1.5 删除用户
 * @apiDescription 删除用户
 * @apiName deleteUserById
 * @apiGroup User 
 * @apiParam {string} DeleteUserID 被修改用户ID
 * @apiParam {string} CurrentUserID 当前用户ID
 * @apiParam {string} CurrentRelo 当前权限
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "1",
 *      "data" : {
 *          "data" : "data",
 *      },
 *      "msg" : "请求成功",
 *  }
 * @apiSampleRequest http://localhost:3000/users/deleteUserById
 * @apiVersion 1.0.0
 */
// #endregion
 router.post('/users/deleteUserById', function (req, res, next) {
  co(function* () {
    try {
      /**
       * 1. 超级管理员不能删除
       * 2. 自己不能删除自己
       * 3. 有用户管理权限就可以删除
       */
      var mCurrentUserID = req.body.CurrentUserID;
      var mDeleteUserID = req.body.DeleteUserID;
      var nCurrentRelo = req.body.CurrentRelo;
      if (parseInt(mDeleteUserID) == 1) {
        res.send(responseTool({}, repError, '超级管理员不能被删除'))
      } else {
        if (parseInt(mCurrentUserID) == parseInt(mDeleteUserID)) {
          res.send(responseTool({}, repError, '当前登录为此用户，不能删除'))
        } else {
          let purview = yield __getPurview(mCurrentUserID)
          let canDelete = false
          if (purview.hasOwnProperty("UserMan")) {
            canDelete = purview["UserMan"]
          }
          if (canDelete) {
            //删除用户
            var deleteStatue = yield deleteUserById(mDeleteUserID)
            //删除用户所关联的权限表格 
            var deleteStatueWithPurview = yield deleteUserByIdWithPurview(mDeleteUserID)
            res.send(responseTool({}, repSuccess, repSuccessMsg))
          } else {
            res.send(responseTool({}, repError, '当前账号无权限删除用户'))
          }
        }
      }
    } catch (error) {
      res.send(responseTool({}, repError, "参数错误"))
    }
  })
})


/*********************************************************************************修改自己的密码*************************************************************************************/
// #region 修改自己的密码
/**
 * @api {post} /users/changeMyselfPassword 1.6 修改自己的密码
 * @apiDescription 修改自己的密码
 * @apiName changePassword
 * @apiGroup User 
 * @apiParam {string} UserID 自己的ID
 * @apiParam {string} oldPassword 原来的密码
 * @apiParam {string} newPassword 原来的密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "1",
 *      "data" : {
 *          "data" : "data",
 *      },
 *      "msg" : "请求成功",
 *  }
 * @apiSampleRequest http://localhost:3000/users/changeMyselfPassword
 * @apiVersion 1.0.0
 */
// #endregion
 router.post('/users/changeMyselfPassword', function (req, res, next) {
  co(function* () {
    try {
      var mUserID = req.body.UserID;
      var mOldPassword = req.body.oldPassword;
      var mNewPassword = req.body.newPassword;
      //查询原来密码是否正确
      var mOldPasswordStatue = yield getCurrentPasswordStatue(mUserID, mOldPassword);
      if (mOldPasswordStatue == mOldPassword) {
        //修改密码
        yield setNewPassword(mUserID, mNewPassword)
        res.send(responseTool({}, repSuccess, repSuccessMsg))
      } else {
        res.send(responseTool({}, repError, '原密码不正确'))
      }
    } catch {
      res.send(responseTool({}, repError, '参数错误'))
    }
  });
});

/*********************************************************************************修改其他人的密码*************************************************************************************/
// #region 修改其他人的密码
/**
 * @api {post} /users/changeElsePassword 1.7 修改其他人的密码
 * @apiDescription 修改其他人的密码
 * @apiName changeElsePassword
 * @apiGroup User 
 * @apiParam {string} userID 自己的ID
 * @apiParam {string} changedUserID 被修改用户ID
 * @apiParam {string} userRelo 自己的权限
 * @apiParam {string} changedUserRelo 被修改用户的权限
 * @apiParam {string} changedPassword 新密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "1",
 *      "data" : {
 *          "data" : "data",
 *      },
 *      "msg" : "请求成功",
 *  }
 * @apiSampleRequest http://localhost:3000/users/changeElsePassword
 * @apiVersion 1.0.0
 */
// #endregion
 router.post('/users/changeElsePassword', function (req, res, next) {
  co(function* () {
    /**
     * editor: jiangziwei
     * time: 2022-03-24 14:23
     */
    try {
      var mUserID = req.body.userID;
      var mChangedUserID = req.body.changedUserID;
      var mChangedPassword = req.body.changedPassword;
      if (parseInt(mChangedUserID) == 1) {
        // 超级管理员不能被修改
        res.send(responseTool({}, repError, "超级管理员密码无法修改"));
      } else {
        let purview = yield __getPurview(mUserID)
        let canChange = false
        if (purview.hasOwnProperty("CanPsw")) {
          canChange = purview["CanPsw"]
        }
        if (canChange) {
          //修改密码
          yield setNewPassword(mChangedUserID, mChangedPassword);
          res.send(responseTool({}, repSuccess, repSuccessMsg));
        } else {
          res.send(responseTool({}, repError, "当前账号无权限修改密码"));
        }
      }
    } catch {
      res.send(responseTool({}, repError, "参数错误"));
    }
  });
});

// #region 修改用户信息和权限
/**
 * @api {post} /users/changePurviewDetail 1.8 修改用户信息和权限
 * @apiDescription 修改用户信息和权限 (修改了详细权限，Role传入3自定义，需客户端控制)
 * @apiName changePurviewDetail
 * @apiGroup User
 * @apiParam {int} oUserID 当前用户ID
 * @apiParam {int} cUserID 被修改用户ID
 * @apiParam {string} Role 被修改用户权限
 * @apiParam {string} Des  被修改用户描述
 * @apiParam {int} [CanUSE] 状态(0 冻结 1 激活)
 * @apiParam {int} [UserMan] 用户管理 (0 关闭 1 开启, 下同) 
 * @apiParam {int} [CanPsw] 设置口令
 * @apiParam {int} [SnapVideoRecord] 拍照录像
 * @apiParam {int} [LiveStream] 直播
 * @apiParam {int} [DeviceSet] 喷吸吹设置
 * @apiParam {int} [CanNew] 登记病人
 * @apiParam {int} [CanEdit] 修改病历
 * @apiParam {int} [CanDelete] 删除病历
 * @apiParam {int} [CanPrint] 打印病历
 * @apiParam {int} [UnPrinted] 仅限未打印病例
 * @apiParam {int} [ExportRecord] 导出病例
 * @apiParam {int} [ExportVideo] 导出录像
 * @apiParam {int} [ExportImage] 导出图片
 * @apiParam {int} [CanBackup] 备份数据
 * @apiParam {int} [OnlySelf] 仅限本人病例
 * @apiParam {int} [VideoSet] 视频设置
 * @apiParam {int} [HospitalInfo] 医院信息
 * @apiParam {int} [ReportStyle] 报告样式
 * @apiParam {int} [SeatAdjust] 座椅操作
 * @apiParam {int} [WorkstationControl] 工作站是否对设备有控制权
 * @apiParam {int} [MobileControl] 移动端是否对设备有控制权
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "code": 0,
 *      "data": {},
 *      "msg": ""
 * }
 * @apiSampleRequest http://localhost:3000/users/changePurviewDetail?ID=10
 * @apiVersion 1.0.0
 */
// #endregion
router.post('/users/changePurviewDetail', function (req, res, next) {
  var params = req.body
  const schemaResult = validateJson(purviewSchema, params)
  if (!schemaResult.result) {
    res.send(responseTool({}, repError, JSON.stringify(schemaResult.errors)))
    // res.status(400).json(schemaResult.errors)
    return;
  }
  co(function* () {
    try {
      // 修改用户ID
      var oUserID = params.oUserID
      // 被修改用户ID
      var cUserID = params.cUserID
      var Role = params.Role
      var CanUSE = params.CanUSE
      var Des = params.Des
      var purviewObj = {
        UserMan: params.UserMan,
        CanPsw: params.CanPsw,
        SnapVideoRecord: params.SnapVideoRecord,
        LiveStream: params.LiveStream,
        DeviceSet: params.DeviceSet,
        CanNew: params.CanNew,
        CanEdit: params.CanEdit,
        CanDelete: params.CanDelete,
        CanPrint: params.CanPrint,
        UnPrinted: params.UnPrinted,
        ExportRecord: params.ExportRecord,
        ExportVideo: params.ExportVideo,
        ExportImage: params.ExportImage,
        CanBackup: params.CanBackup,
        OnlySelf: params.OnlySelf,
        VideoSet: params.VideoSet,
        HospitalInfo: params.HospitalInfo,
        ReportStyle: params.ReportStyle,
        SeatAdjust: params.SeatAdjust,
        WorkstationControl: params.WorkstationControl,
        MobileControl: params.MobileControl
      }
      if (parseInt(cUserID) == 1) {
        res.send(responseTool({}, repError, '超级管理员不能修改'))
      } else {
        let purview = yield __getPurview(oUserID)
        let canEdit = false
        if (purview.hasOwnProperty("UserMan")) {
          canEdit = purview["UserMan"]
        }
        if (canEdit) {
          yield __updateUserInfo(cUserID, CanUSE, Des);
          yield __updatePurviewDetail(purviewObj, cUserID, Role);
          res.send(responseTool({}, repSuccess, repSuccessMsg))
        } else {
          res.send(responseTool({}, repError, '当前账号无权限修改用户角色'))
        }
      }
    } catch (error) {
      res.send(responseTool({}, repError, repParamsErrorMsg))
    }
  })
});

// #region 用户详情
/**
 * @api {get} /users/detail 1.9 用户详情
 * @apiDescription 用户详情
 * @apiName detail
 * @apiGroup User 
 * @apiParam {string} UserID 用户ID
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "1",
 *      "data" : {
 *          "data" : "data",
 *      },
 *      "msg" : "请求成功",
 *  }
 * @apiSampleRequest http://localhost:3000/users/detail
 * @apiVersion 1.0.0
 */
// #endregion
 router.get('/users/detail', function (req, res, next) {
  co(function* () {
    var params = req.query || req.params;
    var UserID = params.UserID
    try {
      let userInfo = yield __getUserInfo(UserID)
      let purview = yield __getPurview(UserID)
      if (userInfo) {
        var data = { "user": userInfo, "purview": purview };
        res.send(responseTool(data, repSuccess, repSuccessMsg));
      } else {
        res.send(responseTool(data, repError, "账号不存在"));
      }
    } catch (error) {
      res.send(responseTool({}, repError, '参数错误'))
    }
  });
});

// 检查账号密码
function getCheckData(mUserName, mPassword) {
  return new Promise((resolve, reject) => {
    var sqlString = `select u.UserID, u.Password, p.Role, u.CanUSE from  dbo.Purview p, dbo.users u where u.UserName='${mUserName}' and u.UserID = p.UserID;`;
    db.sql(sqlString, function (err, result) {
      if (err) {
        console.log("登录========== OK", err);
        reject(false);
        return;
      } else {
        let data = result['recordset']
        console.log("登录========== data", data);
        console.log("登录========== data[0]", data[0]["Password"]);
        console.log("登录========== mPassword", mPassword);
        var checkResult = {};
        if (data.length > 0) {
          // 校验密码是否正确
          console.log(mPassword == data[0]["Password"])
          if (mPassword == data[0]["Password"]) {
            let UserID = data[0]["UserID"]
            let Role = data[0]["Role"]
            if (data[0]["CanUSE"] == 1) {
              checkResult = {
                "result": true,
                "userID": UserID,
                "role": Role,
              }
            } else {
              checkResult = {
                "result": false,
                "msg": "账号未激活"
              }
            }
            // CanUSE
          } else {
            checkResult = {
              "result": false,
              "msg": "密码错误"
            }
          }
        } else {
          // 账号不存在
          checkResult = {
            "result": false,
            "msg": "账号不存在"
          }
        }
        resolve(checkResult);
        // if(mPassword==data[0]["Password"]){
        //   resolve(true);
        // }else{
        //   reject(false);
        // }
        // // responseTool(data, repSuccess, repSuccessMsg)

        // resolve(data);
      }
    });



  });


}
// 获取用户详情
function __getUserInfo(UserID) {
  return new Promise((resolve, result) => {
    var sqlString = `select u.UserID, u.UserName, u.Des, u.CreatedAt, u.LastLoginAt, u.LoginTimes, u.CanUSE, p.Role from dbo.Purview p, dbo.users u where u.UserID=p.UserID and u.UserID=${UserID};`;
    db.sql(sqlString, function (err, result) {
      if (err) {
        reject(false);
        return;
      } else {
        let data = result['recordset']
        // responseTool(data, repSuccess, repSuccessMsg)
        if (data.length > 0) {
          resolve(data[0]);
        } else {
          resolve(null);
        }
      }
    });
  });
}
// 获取权限信息
function __getPurview(UserID) {
  return new Promise((resolve, result) => {
    var sqlString = `select * from Purview where UserID=${UserID};`;
    db.sql(sqlString, function (err, result) {
      if (err) {
        reject(false);
        return;
      } else {
        let data = result['recordset']
        // responseTool(data, repSuccess, repSuccessMsg)
        if (data.length > 0) {
          resolve(data[0]);
        } else {
          resolve(null);
        }
      }
    });
  });
}

//查询原来密码是否正确
function getCurrentPasswordStatue(mUserID, mOldPassword) {
  return new Promise((resolve, result) => {
    console.log("查询原来密码是否正确=======开始查询");
    var sqlString = `select Password from  users where UserID=${mUserID};`;
    db.sql(sqlString, function (err, result) {
      if (err) {
        reject(false);
        console.log("查询原来密码是否正确=======DDD2222=== error", err);
        return;
      } else {
        let data = result['recordset']
        // responseTool(data, repSuccess, repSuccessMsg)
        if (data.length > 0) {
          data = data[0]['Password']
        }
        console.log("查询原来密码是否正确=======DDD2222=== OK", data);
        resolve(data);
      }
    });
  });
}

//修改密码
function setNewPassword(mUserID, mNewPassword) {
  return new Promise((resolve, reject) => {
    console.log("修改密码=======开始修改密码");
    var sqlString = `update dbo.users set Password='${mNewPassword}' where UserID=${mUserID}`;
    db.sql(sqlString, function (err, result) {
      if (err) {
        reject(false);
        console.log("修改密码==========失败", err);
        return;
      } else {
        let data = result['recordset']
        // responseTool(data, repSuccess, repSuccessMsg)
        console.log("修改密码========== OK", data);
        resolve(data);
      }
    });
  });
}

// 通过用户名查询用户是否存在
function __queryUserWithUsername(username) {
  return new Promise((resolve, reject) => {
    var sqlStr = `select * from users where UserName='${username}'`;
    db.sql(sqlStr, function (err, result) {
      if (err) {
        reject(false)
      } else {
        var data = result['recordset']
        if (data.length == 0) {
          resolve(false)
        } else {
          resolve(true)
        }
      }
    });
  })
}

// 删除用户
function deleteUserById(mDeleteUserID) {
  return new Promise((resolve, reject) => {
    var sqlStr = `delete from dbo.users where UserID=${mDeleteUserID};`;
    db.sql(sqlStr, function (err, result) {
      if (err) {
        reject(false)
      } else {
        var data = result['recordset']
        console.log("我的测试=======删除用户===" + data);
        resolve(true)
      }
    })
  })
}

// 删除用户--所关联的权限表格
function deleteUserByIdWithPurview(mDeleteUserID) {
  return new Promise((resolve, reject) => {
    var sqlStr = `delete from dbo.Purview where UserID=${mDeleteUserID};`;
    db.sql(sqlStr, function (err, result) {
      if (err) {
        reject(false)
      } else {
        var data = result['recordset']
        console.log("我的测试=======删除用户===" + data);
        resolve(true)
      }
    })
  })
}

// 新增用户
function __addUser(username, password, des, canUse) {
  return new Promise((resolve, reject) => {
    var sqlStr = `insert into users(UserName,Password,Des,CanUSE) values('${username}','${password}','${des}',${canUse});`
    db.sql(sqlStr, function (err, result) {
      if (err) {
        reject(err)
        return
      }
      resolve(true)
    });
  })
}

// 获取用户ID
function __getUserID(username, password) {
  return new Promise((resolve, reject) => {
    var sqlStr = `select UserID from users where UserName='${username}' and Password='${password}'`
    db.sql(sqlStr, function (err, result) {
      if (err) {
        reject(err)
        return
      }
      let records = result['recordset']
      if (records.length > 0) {
        resolve(records[0]["UserID"])
      } else {
        resolve(null)
      }
    });
  })
}

// 新增用户权限
function __addPurview(purviewObj, UserID, role) {
  return new Promise((resolve, reject) => {
    var sqlStr = ""
    if (parseInt(role) == 1) {
      // 管理员 role = 1
      // sqlStr = `update dbo.Purview set UserMan=1, CanPsw=1, CanNew=1, CanEdit=1, CanDelete=1, CanPrint=1, ReportStyle=1, DictsMan=1, GlossaryMan=1,
      // TempletMan=1, HospitalInfo=1, CanBackup=1, ViewBackup=1, VideoSet=1, OnlySelf=0, UnPrinted=0, FtpSet=0, ChangeDepartment=1, ExportRecord=1,
      // ExportImage=1, ExportVideo=1, DeviceSet=1, SeatAdjust=1, SnapVideoRecord=1, LiveStream=1, WorkstationControl=1, MobileControl=1, Role=1 where UserID=${UserID}`;
      sqlStr = `update dbo.Purview set UserMan=1, CanPsw=1, CanNew=1, CanEdit=1, CanDelete=1, CanPrint=1, ReportStyle=1, DictsMan=1, GlossaryMan=1,
      TempletMan=1, HospitalInfo=1, CanBackup=1, ViewBackup=1, VideoSet=1, OnlySelf=0, UnPrinted=0, FtpSet=0, ChangeDepartment=1, ExportRecord=1,
      ExportImage=1, ExportVideo=1, DeviceSet=1, SeatAdjust=1, SnapVideoRecord=1, LiveStream=1, Role=1 where UserID=${UserID}`;
    } else if (parseInt(role) == 2) {
      // 操作员 role = 2
      // sqlStr = `update dbo.Purview set UserMan=0, CanPsw=0, CanNew=1, CanEdit=1, CanDelete=1, CanPrint=1, ReportStyle=1, DictsMan=1, GlossaryMan=1,
      // TempletMan=1, HospitalInfo=0, CanBackup=1, ViewBackup=1, VideoSet=0, OnlySelf=1, UnPrinted=0, FtpSet=0, ChangeDepartment=0, ExportRecord=0,
      // ExportImage=0, ExportVideo=0, DeviceSet=0, SeatAdjust=0, SnapVideoRecord=0, LiveStream=0, WorkstationControl=0, MobileControl=0, Role=2 where UserID=${UserID}`;
      sqlStr = `update dbo.Purview set UserMan=0, CanPsw=0, CanNew=1, CanEdit=1, CanDelete=1, CanPrint=1, ReportStyle=1, DictsMan=1, GlossaryMan=1,
      TempletMan=1, HospitalInfo=0, CanBackup=1, ViewBackup=1, VideoSet=0, OnlySelf=1, UnPrinted=0, FtpSet=0, ChangeDepartment=0, ExportRecord=0,
      ExportImage=0, ExportVideo=0, DeviceSet=0, SeatAdjust=0, SnapVideoRecord=0, LiveStream=0, Role=2 where UserID=${UserID}`;
    } else if (parseInt(role) == 3) {
      // 普通用户 role = 3
      // sqlStr = `update dbo.Purview set UserMan=0, CanPsw=0, CanNew=0, CanEdit=0, CanDelete=0, CanPrint=1, ReportStyle=0, DictsMan=0, GlossaryMan=0,
      // TempletMan=0, HospitalInfo=0, CanBackup=0, ViewBackup=1, VideoSet=0, OnlySelf=0, UnPrinted=0, FtpSet=0, ChangeDepartment=0, ExportRecord=0,
      // ExportImage=0, ExportVideo=0, DeviceSet=0, SeatAdjust=0, SnapVideoRecord=0, LiveStream=0, WorkstationControl=0, MobileControl=0, Role=3 where UserID=${UserID}`;
      sqlStr = `update dbo.Purview set UserMan=0, CanPsw=0, CanNew=0, CanEdit=0, CanDelete=0, CanPrint=1, ReportStyle=0, DictsMan=0, GlossaryMan=0,
      TempletMan=0, HospitalInfo=0, CanBackup=0, ViewBackup=1, VideoSet=0, OnlySelf=0, UnPrinted=0, FtpSet=0, ChangeDepartment=0, ExportRecord=0,
      ExportImage=0, ExportVideo=0, DeviceSet=0, SeatAdjust=0, SnapVideoRecord=0, LiveStream=0, Role=3 where UserID=${UserID}`;
    } else {
      // 自定义用户 role = 0
      // sqlStr = `update dbo.Purview set UserMan=${purviewObj.UserMan}, CanPsw=${purviewObj.CanPsw}, CanNew=${purviewObj.CanNew}, CanEdit=${purviewObj.CanEdit}, CanDelete=${purviewObj.CanDelete}, CanPrint=${purviewObj.CanPrint}, ReportStyle=${purviewObj.ReportStyle}, DictsMan=0, GlossaryMan=0,
      // TempletMan=0, HospitalInfo=${purviewObj.HospitalInfo}, CanBackup=${purviewObj.CanBackup}, ViewBackup=1, VideoSet=${purviewObj.VideoSet}, OnlySelf=${purviewObj.OnlySelf}, UnPrinted=${purviewObj.UnPrinted}, FtpSet=0, ChangeDepartment=0, ExportRecord=${purviewObj.ExportRecord},
      // ExportImage=${purviewObj.ExportImage}, ExportVideo=${purviewObj.ExportVideo}, DeviceSet=${purviewObj.DeviceSet}, SeatAdjust=${purviewObj.SeatAdjust}, SnapVideoRecord=${purviewObj.SnapVideoRecord}, LiveStream=${purviewObj.LiveStream}, WorkstationControl=${purviewObj.WorkstationControl}, MobileControl=${purviewObj.MobileControl}, Role=0 where UserID=${UserID}`;
      sqlStr = `update dbo.Purview set UserMan=${purviewObj.UserMan}, CanPsw=${purviewObj.CanPsw}, CanNew=${purviewObj.CanNew}, CanEdit=${purviewObj.CanEdit}, CanDelete=${purviewObj.CanDelete}, CanPrint=${purviewObj.CanPrint}, ReportStyle=${purviewObj.ReportStyle}, DictsMan=0, GlossaryMan=0,
      TempletMan=0, HospitalInfo=${purviewObj.HospitalInfo}, CanBackup=${purviewObj.CanBackup}, ViewBackup=1, VideoSet=${purviewObj.VideoSet}, OnlySelf=${purviewObj.OnlySelf}, UnPrinted=${purviewObj.UnPrinted}, FtpSet=0, ChangeDepartment=0, ExportRecord=${purviewObj.ExportRecord},
      ExportImage=${purviewObj.ExportImage}, ExportVideo=${purviewObj.ExportVideo}, DeviceSet=${purviewObj.DeviceSet}, SeatAdjust=${purviewObj.SeatAdjust}, SnapVideoRecord=${purviewObj.SnapVideoRecord}, LiveStream=${purviewObj.LiveStream}, Role=0 where UserID=${UserID}`;
    }
    db.sql(sqlStr, function (err, result) {
      if (err) {
        reject(err)
        return
      }
      resolve(true)
    });
  })
}
// 修改用户
function __updateUserInfo(UserID, CanUSE, Des) {
  return new Promise((resolve, reject) => {
    var sqlStr = `update dbo.users set CanUSE=${CanUSE}, Des='${Des}' where UserID=${UserID};`
    db.sql(sqlStr, function (err, result) {
      if (err) {
        reject(err)
        return
      }
      resolve(true)
    });
  })
}

// 修改用户权限
function __updatePurviewDetail(purviewObj, UserID, Role) {
  return new Promise((resolve, reject) => {
    var valueStr = ""
    for (key in purviewObj) {
      if (purviewObj[key] == null) {
        continue
      } else {
        valueStr += `${key}=${purviewObj[key]},`
      }
    }
    valueStr += `Role='${Role}'`;
    var sqlStr = `update dbo.Purview set ${valueStr} where UserID=${UserID};`
    db.sql(sqlStr, function (err, result) {
      if (err) {
        reject(err)
        return
      }
      resolve(true)
    });
  })
}
module.exports = router;
