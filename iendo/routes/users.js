var express = require('express');
var router = express.Router();
var db = require('../server');
// var co = require('co')
var co = require('co');
const { responseTool, reqSuccess, reqSuccessMsg, reqError, reqErrorMsg } = require('../lib/responseData');
const { sql } = require('../server');
const { RequestError } = require('mssql');



/*********************************************************************************用户登录*************************************************************************************/
/**
 * @api {post} /users/login 用户登录
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
router.post('/users/login', function (req, res, next) {
  co(function* () {
    var mUserName = req.body.UserName;
    var mPassword = req.body.Password;
    try {
      // 校验数据
      yield getCheckData(mUserName, mPassword);
      // 获取当前用户的ID
      var userID = yield getCreateUserID(mUserName, mPassword);
      // 获取当前用户的权限等级
      var Role = yield getCurrentRole(userID);
      var response = {
        'code': 1,
        'data': { "userID": userID, "Role": Role, },
        'msg': 'OK',
      }
      res.send(response);
    } catch (error) {
      res.send(responseTool({}, reqError, '登录失败'))
    }
  });
});

// 检查密码
function getCheckData(mUserName,mPassword){
  return new Promise((resolve,reject)=>{
    var sqlString = `select Password from  users where UserName='${mUserName}';`;
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
        if(mPassword==data[0]["Password"]){
          resolve(true);
        }else{
          reject(false);
        }
        // // responseTool(data, repSuccess, repSuccessMsg)
        
        // resolve(data);
      }
    });



  });


}





/*********************************************************************************修改自己的密码*************************************************************************************/
/**
 * @api {post} /users/changeMyselfPassword 修改密码
 * @apiDescription 修改密码
 * @apiName changePassword
 * @apiGroup User 
 * @apiParam {string} userId 自己的ID
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
router.post('/users/changeMyselfPassword', function (req, res, next) {
  co(function* () {
    var mUserID = req.body.UserID;
    var mOldPassword = req.body.oldPassword;
    var mNewPassword = req.body.newPassword;
    //查询原来密码是否正确
    var mOldPasswordStatue = yield getCurrentPasswordStatue(mUserID, mOldPassword);
    if (mOldPasswordStatue == mOldPassword) {
      //修改密码
      yield setNewPassword(mUserID, mNewPassword)
      var response = {
        // userID   Relo
        'code': 1,
        'data': "OK",
        'msg': 'OK',
      }
      res.send(response);
    } else {
      res.send(responseTool({}, reqError, '原密码不正确'))
    }
  });

});


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


/*********************************************************************************修改其他人的密码*************************************************************************************/
/**
 * @api {post} /users/changeElsePassword 修改其他人的密码
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
router.post('/users/changeElsePassword', function (req, res, next) {
  co(function* () {
    var mUserID = req.body.userID;
    var mChangedUserID = req.body.changedUserID;
    var mUserRelo = req.body.userRelo;
    var mChangedUserRelo = req.body.changedUserRelo;
    var mChangedPassword = req.body.changedPassword;
    var response = {
      'code': 1,
      'data': "OK",
      'msg': 'OK',
    }
    //只有超级管理员和管理员可以修改其他人密码的权限--- 0超级管理员 1管理员  2操作员 3 查询员
    console.log("V========== 开始", mUserRelo, mChangedUserRelo);
    if (mUserRelo == 0) {  //超级管理员
      //修改密码
      yield setNewPassword(mChangedUserID, mChangedPassword);
      res.send(response);
    } else if (mUserRelo == 1) {//管理员
      if (mUserRelo == mChangedUserRelo) {
        //修改密码
        yield setNewPassword(mChangedUserID, mChangedPassword);
        res.send(response);
      } else {
        res.send(responseTool({}, reqError, "没有修改权限~"));
      }
    } else {//没有权限用户
      res.send(responseTool({}, reqError, "没有修改权限~"));
    }
  });
});


/* GET users listing. */
/*********************************************************************************用户列表数据*************************************************************************************/
/**
 * @api {get} /users/list 用户列表数据
 * @apiDescription 用户列表数据
 * @apiName list
 * @apiGroup User 
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
  //获取参数 
  var sqlStr = 'select * from dbo.users;';
  db.sql(sqlStr, function (err, result) {
    if (err) {
      res.send(responseTool({}, reqError, reqErrorMsg));
      return;
    } else {
      var data = result['recordset']
      // responseTool(data, repSuccess, repSuccessMsg)
      var response = {
        'code': 1,
        'data': data,
        'msg': 'OK',
      }
      res.send(response);
    }
  });

});

/*********************************************************************************添加新用户*************************************************************************************/
/**
 * @api {post} /users/createUser 添加新用户
 * @apiDescription 添加新用户 
 * @apiName createUser
 * @apiGroup User 
 * @apiParam {string} CurrentRelo 当前用户权限
 * @apiParam {string} CreateRelo 新用户的权限
 * @apiParam {string} UserName 新用户的名字
 * @apiParam {string} Password 新用户的密码
 * @apiParam {string} Des 新用户的描述
 * @apiParam {string} CanSUE 新用户是否激活1激活，0是未激活
 * 
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "1",
 *      "data" : {
 *          "data" : "data",
 *      },
 *      "msg" : "请求成功",
 *  }
 * @apiSampleRequest http://localhost:3000/users/createUser
 * @apiVersion 1.0.0
 */

router.post('/users/createUser', function (req, res, next) {

  var mCurrentRelo = req.body.CurrentRelo;  //只有超级管理员0或者管理员1的时候才可以添加用户
  var mCreateRelo = req.body.CreateRelo;
  var mUserName = req.body.UserName;
  var mPassword = req.body.Password;
  var mDes = req.body.Des;
  var mCanSUE = req.body.CanSUE;
  var response = {
    'code': 1,
    'data': 'ok',
    'msg': '请求成功',
  }

  co(function* () {
    // try{
    if (0 == mCurrentRelo || 1 == mCurrentRelo) {

      if (mCreateRelo >= 1 || mCreateRelo <= 3) {
        // 添加用户表格
        yield createUser(mCreateRelo, mUserName, mPassword, mDes, mCanSUE);
        var createUserID = yield getCreateUserID(mUserName, mPassword);
        yield createUserWithPurview(mCreateRelo, createUserID);
        console.log("添加相关联的权限表格===添加相关联的权限表格=======OK=======");

        res.send(response);
        // 添加相关联的权限表格

      } else if (0 == mCreateRelo) { //超级管理员有且唯一
        res.send(responseTool({}, reqError, "超级管理员有且唯一"));
        return;
      } else {
        res.send(responseTool({}, reqError, "未知错误"));
      }



    } else {
      res.send(responseTool({}, reqError, reqErrorMsg));
    }
  }
    //   catch (error) {
    //   res.send(responseTool({}, reqError, "参数错误"))
    //   return
    // }


    // }
  )

});

// 添加用户表格
function createUser(mCreateRelo, mUserName, mPassword, mDes, mCanSUE) {
  return new Promise((resolve, reject) => {

    var sqlStr = `insert into users(UserName,Password,Des,CanUSE)values('${mUserName}','${mPassword}','${mDes}',${mCanSUE});`;
    console.log("添加用户表格===添加用户表格====sqlStr===111====" + sqlStr);

    db.sql(sqlStr, function (err, result) {
      if (err) {
        console.log("添加用户表格=======DDD2222=== 失败");
        reject(false)
      } else {
        var data = result['recordset']
        console.log("添加用户表格=======GGG2222=== 成功" + data);
        resolve(true)

      }
    });




  })
}

//获取刚刚创建用户的userID
function getCreateUserID(mUserName, mPassword) {
  return new Promise((resolve, reject) => {
    // select UserID FROM users where UserName = 'DDD'and Password='202cb962ac59075b964b07152d234b60';
    var sqlStr = `select UserID FROM users where UserName = '${mUserName}'and Password='${mPassword}';`;
    db.sql(sqlStr, function (err, result) {
      if (err) {
        console.log("获取刚刚创建用户的userID=======DDD2222=== 失败");
        reject(null)
      } else {
        console.log("获取刚刚创建用户的userID=======GGG2222=== 成功result====", result);
        let data = result['recordset']
        if (data.length > 0) {
          data = data[0]["UserID"];
        }
        console.log("获取刚刚创建用户的userID=======GGG2222=== 成功", data);
        resolve(data)
      }
    });

  })

}

//更新新用户的权限表格
function createUserWithPurview(mCreateRelo, createUserID) {
  return new Promise((resolve, reject) => {
    //1-管理员
    var sqlStr01 = `update  dbo.Purview set UserMan='1',CanPsw='1',CanNew='1',CanEdit='1',CanDelete='1',CanPrint='1',
    ReportStyle='1',DictsMan='1',GlossaryMan='1',TempletMan='1',HospitalInfo='1',CanBackup='1',ViewBackup='1',
    VideoSet='1',OnlySelf='0',UnPrinted='0',FtpSet='0',ChangeDepartment='0',ExportRecord='0',ExportImage='0',ExportVideo='0',
    DeviceSet='0',SeatAdjust='0',SnapVideoRecord='0',LiveStream='0',Role='1' where UserID =${createUserID};`

    //2-操作员
    var sqlStr02 = `update  dbo.Purview set UserMan='0',CanPsw='1',CanNew='1',CanEdit='1',CanDelete='1',CanPrint='1',
    ReportStyle='1',DictsMan='1',GlossaryMan='1',TempletMan='1',HospitalInfo='0',CanBackup='1',ViewBackup='1',
    VideoSet='0',OnlySelf='1',UnPrinted='0',FtpSet='0',ChangeDepartment='0',ExportRecord='0',ExportImage='0',ExportVideo='0',
    DeviceSet='0',SeatAdjust='0',SnapVideoRecord='0',LiveStream='0',Role='2' where UserID =${createUserID};`;

    //3-查询员
    var sqlStr03 = `update  dbo.Purview set UserMan='0',CanPsw='0',CanNew='0',CanEdit='0',CanDelete='0',CanPrint='1',
    ReportStyle='0',DictsMan='0',GlossaryMan='0',TempletMan='0',HospitalInfo='0',CanBackup='0',ViewBackup='1',
    VideoSet='0',OnlySelf='0',UnPrinted='0',FtpSet='0',ChangeDepartment='0',ExportRecord='0',ExportImage='0',ExportVideo='0',
    DeviceSet='0',SeatAdjust='0',SnapVideoRecord='0',LiveStream='0',Role='3' where UserID =${createUserID};`;

    console.log("权限相关==01====mCreateRelo=== ", mCreateRelo);

    //1-管理员，2-操作员，3-查询员
    if (1 == mCreateRelo) {
      console.log("权限相关==01======== ");
      db.sql(sqlStr01, function (err, result) {
        if (err) {
          console.log("权限相关==01======== ", err);
          reject(false)
          return;
        } else {
          console.log("权限相关==01======== ", result);
          resolve(true);
        }
      });
    } else if (2 == mCreateRelo) {
      console.log("权限相关==02======== ");
      db.sql(sqlStr02, function (err, result) {
        if (err) {
          reject(false)
          console.log("权限相关==02======== ", err);

          return;
        } else {
          console.log("权限相关==02======== ", result);
          resolve(true);
        }
      });
    } else if (3 == mCreateRelo) {
      console.log("权限相关==03======== ");
      db.sql(sqlStr03, function (err, result) {
        if (err) {
          console.log("权限相关==03======== ", err);
          reject(false)
          return;
        } else {
          console.log("权限相关==03======== ", result);
          resolve(true);
        }
      });
    }


  })

}


/*********************************************************************************删除用户*************************************************************************************/
/**
 * @api {post} /users/deleteUserById 删除用户
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
router.post('/users/deleteUserById', function (req, res, next) {

  var mCurrentUserID = req.body.CurrentUserID;
  var mDeleteUserID = req.body.DeleteUserID;
  var nCurrentRelo = req.body.CurrentRelo;
  co(function* () {
    try {
      console.log("mDeleteUserID=====" + mDeleteUserID)
      // 查询被删除用户是否存在
      var mExist = yield getDeleteDataExist(mDeleteUserID);
      var mExistCurrent = yield getDeleteDataExist(mCurrentUserID);
      // 查询被删除用户权限
      var mDeletedRole = yield getCurrentRole(mDeleteUserID);
      console.log("mExist=====" + mExist)
      console.log("mExistCurrent=====" + mExistCurrent)
      console.log("mDeletedRole=====" + mDeletedRole)
      if (mExist && mExistCurrent) {
        //自己不能删除自己
        if (mDeleteUserID == 1) { //超级用户不能被删除
          res.send(responseTool({}, reqError, '超级用户不能被删除'))
          return
        }
        if (nCurrentRelo == 0) {//超级管理员   
          if (mCurrentUserID != mDeleteUserID) {
            //删除用户
            var deleteStatue = yield deleteUserById(mDeleteUserID)
            //删除用户所关联的权限表格 
            var deleteStatueWithPurview = yield deleteUserByIdWithPurview(mDeleteUserID)
            if (deleteStatue && deleteStatueWithPurview) {
              var response = {
                'code': 1,
                'data': { data: 'ok' },
                'msg': '请求成功'
              }
              res.send(response)
            } else {
              res.send(responseTool({}, reqError, '超级管理员，删除错误'))
            }
          } else {
            res.send(responseTool({}, reqError, '自己不能删除自己'))
          }
        } else if (nCurrentRelo == 1) {//管理员，自己不能删除自己
          if (mCurrentUserID == mDeleteUserID) {
            res.send(responseTool({}, reqError, '自己不能删除自己'))
          } else if (mDeleteUserID > 1) {
            //删除用户
            var deleteStatue = yield deleteUserById(mDeleteUserID)
            //删除用户所关联的权限表格 
            var deleteStatueWithPurview = yield deleteUserByIdWithPurview(mDeleteUserID)
            if (deleteStatue) {
              var response = {
                'code': 1,
                'data': { data: 'ok' },
                'msg': '请求成功'
              }
              res.send(response)
            } else {
              res.send(responseTool({}, reqError, '管理员，删除错误'))
            }
          }
        } else {
          res.send(responseTool({}, reqError, '不具备删除权限'))
        }

        var response = {
          'code': 1,
          'data': { data: 'ok' },
          'msg': '请求成功'
        }
      } else {
        res.send(responseTool({}, reqError, '请求参数错误'))
      }
    } catch (error) {
      res.send(responseTool({}, reqError, "参数错误"))
    }

  })

})


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


//查询删除用户是否存在
function getDeleteDataExist(mDeleteUserID) {
  return new Promise((resolve, reject) => {
    // var sqlChangeUserIDStr = `select userID from users where UserID='${ChangeUserID}';`  //字符串
    var sqlChangeUserIDStr = `select userID from users where UserID=${mDeleteUserID};`  //bigint  这里是bit
    console.log("被修改用户===非空参数====被修改用户不存在====getReadUseridIfExist" + mDeleteUserID);
    db.sql(sqlChangeUserIDStr, function (err, result) {
      if (err) {
        //被修改用户不存在
        reject(false)
        console.log("被修改用户===非空参数====被修改用户不存在====getReadUseridIfExist===" + err);
        return;
      } else {
        var data = result['recordset']
        console.log("getReadUseridIfExist==被修改用户ID==OK");
        if (Array.isArray(data)) {
          if (data.length == 0) {
            resolve(false)
            console.log("getReadUseridIfExist==被修改用户ID==1231231231");
          } else {
            console.log("getReadUseridIfExist==被修改用户ID==不存在");
            // responseTool(data, repSuccess, repSuccessMsg)
            resolve(true)

          }
        }

      }
    });
  })
}
/*********************************************************************************修改权限*************************************************************************************/
/**
 *修改权限
 * params:
 * 必填：当前用户UserID,UserName,被修改用户ChangeUserID，Relo 需要被修改的用户权限等级// 0超级管理员 1管理员  2操作员 3 查询员
 */

/**
* @api {post} /users/changePurview 修改权限
* @apiDescription 
* 修改权限
* @apiName changePurview
* @apiGroup User 
* @apiParam {string} CurrentUserID 当前登入的用户ID
* @apiParam {string} ChangeUserID 需要被修改权限的用户ID
* @apiParam {string} UserName 当前用户名字
* @apiParam {string}  Relo 需要被修改的用户权限等级
* @apiSuccess {json} result
* @apiSuccessExample {json} Success-Response:
*  {
*      "code" : "1",
*      "data" : {
*          "data" : "data",
*      },
*      "msg" : "请求成功",
*  }
* @apiSampleRequest http://localhost:3000/users/changePurview
* @apiVersion 1.0.0
*/
router.post('/users/changePurview', function (req, res, nest) {
  //查询当前用户权限，是否比要删除的用户权限大，
  //再次查询要删除的用户是否存在
  var CurrentUserID = req.body.CurrentUserID
  var ChangeUserID = req.body.ChangeUserID
  var CurrentUserName = req.body.UserName
  var Relo = req.body.Relo
  co(function* () {
    try {
      // 查询被修改用户是否存在
      var useridIfEexist = yield getReadUseridIfExist(ChangeUserID);
      // 超级用户才可以更改 ，因为Role 字段两者都为0状态不能区分，通过UserName=Adimn 和 Role=0来判断
      // 获取当前登入用户权限
      var currentRelostatue = yield getCurrentRole(CurrentUserID);
      console.log("当前用户名-=======0===" + CurrentUserName)
      console.log("当前用户权限-=========1===" + currentRelostatue)
      console.log("被查询用户是否存在-========11===" + useridIfEexist)
      // 被查询用户存在 并且 是超级管理员 并且  currentRelostatue =0
      if (useridIfEexist && 'Admin' == CurrentUserName) {
        if (currentRelostatue == 0) {//超级用户
          // 修改权限
          var changeRelostatue = yield setChangeRole(ChangeUserID, Relo);
          var response = {
            'code': 1,
            'data': { data: 'ok' },
            'msg': '请求成功',
          }
          res.send(response)
        } else {
          res.send(responseTool({}, reqError, "参数错误D"))

        }

      } else {
        res.send(responseTool({}, reqError, "参数错误C"))
      }

      if (null != useridIfEexist) {  //存在
        // res.send(responseTool({}, repError, "参数错误"))
      } else {//不存在
        console.log("changePurview==被修改用户ID==不存在", useridIfEexist);
        res.send(responseTool({}, reqError, "参数错误B"))
        return
      }
    } catch (error) {
      res.send(responseTool({}, reqError, "参数错误A"))
    }
  })
  // select userID,UserName from  users where UserID='111';


});

// 设置被修改用户的权限
function setChangeRole(ChangeUserID, Relo) {
  // update dbo.Purview set Role='1' where UserID = '22';
  return new Promise((resolve, reject) => {
    var sqlCurrentRole = `update dbo.Purview set Role=${Relo} where UserID =${ChangeUserID};`
    db.sql(sqlCurrentRole, function (err, result) {
      if (err) {
        console.log("我的测试=======DDD2222=== 失败");
        reject(false)
      } else {
        var data = result['recordset']
        console.log("我的测试=======GGG2222=== 成功" + data);
        resolve(true)

      }

    });

  })
}

//获取当前用户权限
function getCurrentRole(CurrentUserID) {
  console.log("getCurrentRole==getCurrentRole==getCurrentRole");
  return new Promise((resolve, reject) => {
    // var sqlCurrentRole = `select Role from Purview where UserID = '${CurrentUserID}';`
    var sqlChangeRole = `select Role from Purview where UserID = ${CurrentUserID};`
    db.sql(sqlChangeRole, function (err, result) {
      if (err) {
        console.log("获取到当前数据====333");
        reject(null)
        console.log("getCurrentRole-err")
      } else {
        console.log("获取到当前数据====444");
        var data = result['recordset']
        console.log("getCurrentRole==getCurrentRole==getCurrentRole");
        console.log(data)
        if (data.length > 0) {
          console.log("获取到当前数据====000");
          var CurrentRole = data[0]['Role'];
          resolve(CurrentRole)
        } else {
          console.log("获取到当前数据====111");
          resolve(false)
        }
      }

    });
  })
}

//判断被修改用户是否存在
function getReadUseridIfExist(ChangeUserID) {
  return new Promise((resolve, reject) => {
    // var sqlChangeUserIDStr = `select userID from users where UserID='${ChangeUserID}';`  //字符串
    var sqlChangeUserIDStr = `select userID from users where UserID=${ChangeUserID};`  //bigint
    console.log("被修改用户===非空参数====被修改用户不存在====getReadUseridIfExist" + ChangeUserID);
    db.sql(sqlChangeUserIDStr, function (err, result) {
      if (err) {
        //被修改用户不存在
        reject()
        console.log("被修改用户===非空参数====被修改用户不存在====getReadUseridIfExist===" + err);
        return;
      } else {
        var data = result['recordset']
        console.log("getReadUseridIfExist==被修改用户ID==OK");
        if (Array.isArray(data)) {
          if (data.length == 0) {
            resolve(false)
            console.log("getReadUseridIfExist==被修改用户ID==1231231231");
          } else {
            console.log("getReadUseridIfExist==被修改用户ID==不存在");
            // responseTool(data, repSuccess, repSuccessMsg)
            resolve(true)

          }
        }

      }
    });
  })
}


/**********************************************************************************************************************************************************************/

// 异步转同步方法
// co(function* (){
//   try{

//   }catch(error){
//     res.send(responseTool({}, reqError, "参数错误"))
//   }

// })

module.exports = router;
