var express = require('express');
var router = express.Router();
var db = require('../server');
var co =require('co');

const { responseTool, repSuccess,repSuccessMsg,repError,repErrorMsg } = require('../lib/responseData');

/* GET users listing. */

/* * 
  用户列表数据及权限,无参请求
*/ 

router.post('/users/list', function(req, res, next) {
  //获取参数 
  var sqlStr ='select * from dbo.users;';
  db.sql(sqlStr,function(err,result){
      if(err){
        res.send(responseTool({}, repError, repErrorMsg));
        return;
      }else{
        var data = result['recordset']
        // responseTool(data, repSuccess, repSuccessMsg)
        console.log("获取用户列表===非空参数====查询OK=",data);
        res.send("123");
      }
  });

});


//修改权限
/* * 
  修改权限,当前用户ID和被修改权限用户ID
*/ 
router.post('/users/changePurview',function(req,res,nest){

    //查询当前用户权限，是否比要删除的用户权限大，
    //再次查询要删除的用户是否存在

    var CurrentUserID =  req.body.CurrentUserID
    var ChangeUserID =  req.body.ChangeUserID
    console.log("被修改用户===空参数====CurrentUserID=",CurrentUserID);
    console.log("被修改用户===空参数====ChangeUserID=",ChangeUserID);
    co(function* () {
      // try {
        var useridIfEexist = yield getReadUseridIfExist(ChangeUserID);
        // console.log("被修改用户===空参数====useridIfEexist=",useridIfEexist);
      // } catch (error) {
        console.log("被修改用户===非空参数====参数错误=== repError");
        res.send(responseTool({}, repError, "参数错误"))
      // }
    })
    // select userID,UserName from  users where UserID='111';
    // 先判断需要查询用户是否存在

  // var sqlChangeUserIDStr =  'select userID from  users where UserID='+"'"+ChangeUserID+"';";

  // db.sql(sqlChangeUserIDStr,function(err,result){
  //       if(err){
  //         //被修改用户不存在
  //         console.log("被修改用户===空参数====被修改用户不存在=",data);
  //         res.send(responseTool({}, repError, repErrorMsg));
  //         return;
  //       }else{
  //         var data = result['recordset']
  //         if(Array.isArray(data)){
  //           if(data.length==0){
  //             res.send(responseTool({}, repError, repErrorMsg));
  //           }else{
  //           // responseTool(data, repSuccess, repSuccessMsg)
  //           console.log("被修改用户===非空参数====查询OK=",data);
  //           res.send("123");
  //           }
  //         }
        
  //       }
  //     });

});


//判断被修改用户是否存在
function getReadUseridIfExist(ChangeUserID) {
    return new Promise((resolve, reject) => {
      // var sqlChangeUserIDStr = `select userID from users where UserID='${ChangeUserID}';`  //字符串
      var sqlChangeUserIDStr = `select userID from users where UserID=${ChangeUserID};`  //bigint
      console.log("被修改用户===非空参数====被修改用户不存在====ChangeUserID" + ChangeUserID);
      db.sql(sqlChangeUserIDStr, function (err, result) {
        if (err) {
          //被修改用户不存在
          reject(err)
          console.log("被修改用户===非空参数====被修改用户不存在=" + err);
          return;
        } else {
          var data = result['recordset']
          if (Array.isArray(data)) {
            if (data.length == 0) {
              // resolve(null)
              console.log("被修改用户===非空参数====被修改用户不存在=== 0");
            } else {
              // responseTool(data, repSuccess, repSuccessMsg)
              // resolve('true')
              console.log("被修改用户===非空参数====被修改用户不存在=== true");
            }
          }
        }
      });

    })
}








/* * 
  删除用户，需要传入当前用户ID和被删除用户ID（UserID）



*/ 
router.post('/users/deleteUserById',function(req,res,next){



});

module.exports = router;
