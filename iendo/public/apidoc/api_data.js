define({ "api": [
  {
    "type": "post",
    "url": "/users/addUser",
    "title": "1.4 新增用户",
    "description": "<p>新增用户</p>",
    "name": "addUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "UserID",
            "description": "<p>当前用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Role",
            "description": "<p>新增的用户角色</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserName",
            "description": "<p>新用户的名字</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Password",
            "description": "<p>新用户的密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Des",
            "description": "<p>新用户的描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "CanUSE",
            "description": "<p>新用户是否激活1激活，0是未激活</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "UserMan",
            "description": "<p>用户管理 (0 关闭 1 开启, 下同)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "CanPsw",
            "description": "<p>设置口令</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "SnapVideoRecord",
            "description": "<p>拍照录像</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "LiveStream",
            "description": "<p>直播</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "DeviceSet",
            "description": "<p>喷吸吹设置</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "CanNew",
            "description": "<p>登记病人</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "CanEdit",
            "description": "<p>修改病历</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "CanDelete",
            "description": "<p>删除病历</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "CanPrint",
            "description": "<p>打印病历</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "UnPrinted",
            "description": "<p>仅限未打印病例</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "ExportRecord",
            "description": "<p>导出病例</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "ExportVideo",
            "description": "<p>导出录像</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "ExportImage",
            "description": "<p>导出图片</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "CanBackup",
            "description": "<p>备份数据</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "OnlySelf",
            "description": "<p>仅限本人病例</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "VideoSet",
            "description": "<p>视频设置</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "HospitalInfo",
            "description": "<p>医院信息</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "ReportStyle",
            "description": "<p>报告样式</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "SeatAdjust",
            "description": "<p>座椅操作</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "WorkstationControl",
            "description": "<p>工作站是否对设备有控制权</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "MobileControl",
            "description": "<p>移动端是否对设备有控制权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": {},\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/addUser"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/changeElsePassword",
    "title": "1.7 修改其他人的密码",
    "description": "<p>修改其他人的密码</p>",
    "name": "changeElsePassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userID",
            "description": "<p>自己的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "changedUserID",
            "description": "<p>被修改用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userRelo",
            "description": "<p>自己的权限</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "changedUserRelo",
            "description": "<p>被修改用户的权限</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "changedPassword",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"1\",\n    \"data\" : {\n        \"data\" : \"data\",\n    },\n    \"msg\" : \"请求成功\",\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/changeElsePassword"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/changeMyselfPassword",
    "title": "1.6 修改自己的密码",
    "description": "<p>修改自己的密码</p>",
    "name": "changePassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>自己的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>原来的密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newPassword",
            "description": "<p>原来的密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"1\",\n    \"data\" : {\n        \"data\" : \"data\",\n    },\n    \"msg\" : \"请求成功\",\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/changeMyselfPassword"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/changePurviewDetail",
    "title": "1.8 修改用户信息和权限",
    "description": "<p>修改用户信息和权限 (修改了详细权限，Role传入3自定义，需客户端控制)</p>",
    "name": "changePurviewDetail",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "oUserID",
            "description": "<p>当前用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cUserID",
            "description": "<p>被修改用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Role",
            "description": "<p>被修改用户权限</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Des",
            "description": "<p>被修改用户描述</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "CanUSE",
            "description": "<p>状态(0 冻结 1 激活)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "UserMan",
            "description": "<p>用户管理 (0 关闭 1 开启, 下同)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "CanPsw",
            "description": "<p>设置口令</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "SnapVideoRecord",
            "description": "<p>拍照录像</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "LiveStream",
            "description": "<p>直播</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "DeviceSet",
            "description": "<p>喷吸吹设置</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "CanNew",
            "description": "<p>登记病人</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "CanEdit",
            "description": "<p>修改病历</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "CanDelete",
            "description": "<p>删除病历</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "CanPrint",
            "description": "<p>打印病历</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "UnPrinted",
            "description": "<p>仅限未打印病例</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "ExportRecord",
            "description": "<p>导出病例</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "ExportVideo",
            "description": "<p>导出录像</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "ExportImage",
            "description": "<p>导出图片</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "CanBackup",
            "description": "<p>备份数据</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "OnlySelf",
            "description": "<p>仅限本人病例</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "VideoSet",
            "description": "<p>视频设置</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "HospitalInfo",
            "description": "<p>医院信息</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "ReportStyle",
            "description": "<p>报告样式</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "SeatAdjust",
            "description": "<p>座椅操作</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "WorkstationControl",
            "description": "<p>工作站是否对设备有控制权</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "MobileControl",
            "description": "<p>移动端是否对设备有控制权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": {},\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/changePurviewDetail?ID=10"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/deleteUserById",
    "title": "1.5 删除用户",
    "description": "<p>删除用户</p>",
    "name": "deleteUserById",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "DeleteUserID",
            "description": "<p>被修改用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "CurrentUserID",
            "description": "<p>当前用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "CurrentRelo",
            "description": "<p>当前权限</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"1\",\n    \"data\" : {\n        \"data\" : \"data\",\n    },\n    \"msg\" : \"请求成功\",\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/deleteUserById"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/detail",
    "title": "1.9 用户详情",
    "description": "<p>用户详情</p>",
    "name": "detail",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"1\",\n    \"data\" : {\n        \"data\" : \"data\",\n    },\n    \"msg\" : \"请求成功\",\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/detail"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/list",
    "title": "1.1 用户列表数据",
    "description": "<p>用户列表数据</p>",
    "name": "list",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>（account-登录账号列表， manager-用户列表）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"1\",\n    \"data\" : {\n        \"data\" : \"data\",\n    },\n    \"msg\" : \"请求成功\",\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/list"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "1.2 用户登录",
    "description": "<p>用户登录</p>",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"1\",\n    \"data\" : {\n         \"userID\": userID,\n         \"Role\": Role\n    },\n    \"msg\" : \"请求成功\",\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/login"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/purview",
    "title": "1.3 获取用户权限",
    "description": "<p>获取用户权限</p>",
    "name": "purview",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"1\",\n    \"data\" : {\n         \"CanEdit\": true,\n    },\n    \"msg\" : \"请求成功\",\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/purview"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/case/add",
    "title": "1.5 新增病例",
    "description": "<p>新增病例</p>",
    "name": "add",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserName",
            "description": "<p>操作员用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "EndoType",
            "description": "<p>工作站类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Married",
            "description": "<p>婚否 （已婚，未婚）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Sex",
            "description": "<p>性别 （男，女）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Tel",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Address",
            "description": "<p>住址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "PatientNo",
            "description": "<p>病人编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "CardID",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "MedHistory",
            "description": "<p>医疗病史</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "FamilyHistory",
            "description": "<p>家族病史</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Race",
            "description": "<p>民族种族</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Occupatior",
            "description": "<p>职业</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "InsuranceID",
            "description": "<p>社保卡ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "NativePlace",
            "description": "<p>籍贯</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "IsInHospital",
            "description": "<p>是否还在医院住院</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "LastCheckUserID",
            "description": "<p>最后一个来查房的医生</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "DOB",
            "description": "<p>生日</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "PatientAge",
            "description": "<p>患者年龄</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "AgeUnit",
            "description": "<p>年龄单位 （岁，月，天）</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "ReturnVisit",
            "description": "<p>初复诊 （0-初诊 1-复诊）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "BedID",
            "description": "<p>病床号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "WardID",
            "description": "<p>病区号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "CaseID",
            "description": "<p>病历号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "SubmitDoctor",
            "description": "<p>申请医生</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Department",
            "description": "<p>科室</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Device",
            "description": "<p>设备</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Fee",
            "description": "<p>收费</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "FeeType",
            "description": "<p>收费类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "ChiefComplaint",
            "description": "<p>主诉</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Test",
            "description": "<p>试验</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Advice",
            "description": "<p>建议</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "InpatientID",
            "description": "<p>住院号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "OutpatientID",
            "description": "<p>门诊号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Others",
            "description": "<p>其他</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Await1",
            "description": "<p>待定1</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Await2",
            "description": "<p>待定2</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Await3",
            "description": "<p>待定3</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Await4",
            "description": "<p>待定4</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Await5",
            "description": "<p>待定5</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Biopsy",
            "description": "<p>活检</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Ctology",
            "description": "<p>细胞学</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Pathology",
            "description": "<p>病理学</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "ExaminingPhysician",
            "description": "<p>检查医生</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "ClinicalDiagnosis",
            "description": "<p>临床诊断</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "CheckContent",
            "description": "<p>检查内容（镜检所见）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "CheckDiagnosis",
            "description": "<p>镜检诊断</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": {\"ID\":ID},\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/case/add"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "get",
    "url": "/case/caseInfo",
    "title": "1.8 病例详细信息",
    "description": "<p>病例详细信息</p>",
    "name": "caseInfo",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ID",
            "description": "<p>内部ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": {case},\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/case/caseInfo?ID=10"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "get",
    "url": "/case/caseTemplate",
    "title": "2.7 查询病例模板",
    "description": "<p>查询病例模板</p>",
    "name": "caseTemplate",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "EndoType",
            "description": "<p>工作站类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": {dict},\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/case/caseTemplate"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "get",
    "url": "/case/caseimages",
    "title": "1.9 病例图片",
    "description": "<p>病例图片</p>",
    "name": "caseimages",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ID",
            "description": "<p>内部ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": [{image}],\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/case/caseimages?ID=10"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "get",
    "url": "/case/casevideos",
    "title": "1.9 病例视频",
    "description": "<p>病例视频</p>",
    "name": "casevideos",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ID",
            "description": "<p>内部ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": [{video}],\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/case/casevideos?ID=10"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "post",
    "url": "/case/delete",
    "title": "1.7 删除病例",
    "description": "<p>删除病例</p>",
    "name": "delete",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ID",
            "description": "<p>内部ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserName",
            "description": "<p>操作员用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "EndoType",
            "description": "<p>工作站类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": {},\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/case/delete?ID=10"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "get",
    "url": "/case/hospitalInfo",
    "title": "2.0 查询报告医院信息",
    "description": "<p>查询报告医院信息</p>",
    "name": "hospitalInfo",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "EndoType",
            "description": "<p>工作站类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": {dict},\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/case/hospitalInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "get",
    "url": "/case/list",
    "title": "1.1 病例列表",
    "description": "<p>病例列表</p>",
    "name": "list",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "EndoType",
            "description": "<p>工作站类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "datetime",
            "description": "<p>（YYYY-MM-DD） 日期</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": [{case},{case}],\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/case/list?datetime=2021-09-09"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "get",
    "url": "/case/listDicts",
    "title": "1.4 病例数据字典",
    "description": "<p>病例数据字典</p>",
    "name": "listDicts",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "EndoType",
            "description": "<p>工作站类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": [{dic},{dic}],\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/case/listDicts"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "get",
    "url": "/report/reportExists",
    "title": "2.5 查询服务端是否已经生成报告",
    "description": "<p>查询服务端是否已经生成报告</p>",
    "name": "reportExists",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ID",
            "description": "<p>病例ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": {\"exists\": true, \"url\": \"xxx.bmp\"},\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/reportExists"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "get",
    "url": "/case/search",
    "title": "1.2 病例搜索",
    "description": "<p>病例搜索</br></br><text style=\"color:#EA0000\">特别说明：如果某个字段查询全部或不进行筛选有两种传值方式</br>1. 不传该字段</br>2. 传 “全部”</text></p>",
    "name": "search",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "EndoType",
            "description": "<p>工作站类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "CheckDateStart",
            "description": "<p>检查日期开始 （YYYY-MM-DD）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "CheckDateEnd",
            "description": "<p>检查日期结束 （YYYY-MM-DD）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "CaseNo",
            "description": "<p>检查号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "ReturnVisit",
            "description": "<p>初复诊 （0-初诊 1-复诊）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Sex",
            "description": "<p>性别 （男，女）</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "PatientAgeStart",
            "description": "<p>患者年龄开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "PatientAgeEnd",
            "description": "<p>患者年龄结束</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "AgeUnit",
            "description": "<p>年龄单位 （岁，月，天）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Married",
            "description": "<p>婚否 （已婚，未婚）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "InpatientID",
            "description": "<p>住院号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "BedID",
            "description": "<p>病床号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "WardID",
            "description": "<p>病区号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Department",
            "description": "<p>科室</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "ExaminingPhysician",
            "description": "<p>检查医生</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "SubmitDoctor",
            "description": "<p>申请医生</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "CaseID",
            "description": "<p>病历号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "InsuranceID",
            "description": "<p>社保卡ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Occupatior",
            "description": "<p>职业</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Device",
            "description": "<p>设备</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "CheckContent",
            "description": "<p>检查内容（镜检所见）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "CheckDiagnosis",
            "description": "<p>镜检诊断</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Advice",
            "description": "<p>建议</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": [{case},{case}],\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/case/search?CheckDateStart=2021-09-09&CheckDateEnd=2021-09-14"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "post",
    "url": "/report.aspx",
    "title": "2.3 报告搜索 (用于微信小程序)",
    "description": "<p>报告搜索</br></br><text style=\"color:#EA0000\">特别说明：OutpatientID、CardID、InsuranceID 三选一必传, 另外两个传空字符串或不传</text></p>",
    "name": "searchReport",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Sex",
            "description": "<p>性别 （男，女）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "OutpatientID",
            "description": "<p>门诊号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "CardID",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "InsuranceID",
            "description": "<p>社保卡ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": [{case},{case}],\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/report.aspx?Name=xxx&Sex=xx"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "post",
    "url": "/report/selectImages",
    "title": "2.4 报告图片选择 (用于打印报告)",
    "description": "<p>报告图片选择</p>",
    "name": "selectImages",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "CaseID",
            "description": "<p>病例ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "oldImageIDs",
            "description": "<p>修改前图片ID字符串，最多选择9张图片，多个图片ID用 英文的',' 分割, 例子：230,220,245</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newImageIDs",
            "description": "<p>修改后图片ID字符串，同上</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": {},\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/selectImages"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "get",
    "url": "/case/serverStatus",
    "title": "2.6 查询直播流是否静音",
    "description": "<p>查询直播流是否静音</p>",
    "name": "serverStatus",
    "group": "病例（Case）",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": {dict},\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/case/serverStatus"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "post",
    "url": "/case/update",
    "title": "1.6 修改病例",
    "description": "<p>修改病例</p>",
    "name": "update",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ID",
            "description": "<p>内部ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "CaseNo",
            "description": "<p>病历编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserName",
            "description": "<p>操作员用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "EndoType",
            "description": "<p>工作站类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Married",
            "description": "<p>婚否 （已婚，未婚）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Sex",
            "description": "<p>性别 （男，女）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Tel",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Address",
            "description": "<p>住址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "PatientNo",
            "description": "<p>病人编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "CardID",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "MedHistory",
            "description": "<p>医疗病史</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "FamilyHistory",
            "description": "<p>家族病史</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Race",
            "description": "<p>民族种族</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Occupatior",
            "description": "<p>职业</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "InsuranceID",
            "description": "<p>社保卡ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "NativePlace",
            "description": "<p>籍贯</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "IsInHospital",
            "description": "<p>是否还在医院住院</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "LastCheckUserID",
            "description": "<p>最后一个来查房的医生</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "DOB",
            "description": "<p>生日</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "PatientAge",
            "description": "<p>患者年龄</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "AgeUnit",
            "description": "<p>年龄单位 （岁，月，天）</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "ReturnVisit",
            "description": "<p>初复诊 （0-初诊 1-复诊）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "BedID",
            "description": "<p>病床号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "WardID",
            "description": "<p>病区号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "CaseID",
            "description": "<p>病历号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "SubmitDoctor",
            "description": "<p>申请医生</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Department",
            "description": "<p>科室</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Device",
            "description": "<p>设备</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Fee",
            "description": "<p>收费</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "FeeType",
            "description": "<p>收费类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "ChiefComplaint",
            "description": "<p>主诉</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Test",
            "description": "<p>试验</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Advice",
            "description": "<p>建议</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "InpatientID",
            "description": "<p>住院号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "OutpatientID",
            "description": "<p>门诊号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Others",
            "description": "<p>其他</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Await1",
            "description": "<p>待定1</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Await2",
            "description": "<p>待定2</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Await3",
            "description": "<p>待定3</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Await4",
            "description": "<p>待定4</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Await5",
            "description": "<p>待定5</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Biopsy",
            "description": "<p>活检</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Ctology",
            "description": "<p>细胞学</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "Pathology",
            "description": "<p>病理学</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "ExaminingPhysician",
            "description": "<p>检查医生</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "ClinicalDiagnosis",
            "description": "<p>临床诊断</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "CheckContent",
            "description": "<p>检查内容（镜检所见）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "CheckDiagnosis",
            "description": "<p>镜检诊断</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": {},\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/case/update"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "post",
    "url": "/case/updateHospitalInfo",
    "title": "2.1 修改报告医院信息",
    "description": "<p>修改报告医院信息</p>",
    "name": "updateHospitalInfo",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ID",
            "description": "<p>内部ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserName",
            "description": "<p>操作员用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "EndoType",
            "description": "<p>工作站类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "szHospital",
            "description": "<p>主标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "szSlave",
            "description": "<p>副标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "szAddress",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "szTelephone",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "szPostCode",
            "description": "<p>邮编</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "szTitle",
            "description": "<p>软件标题</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": [],\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/case/updateHospitalInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  },
  {
    "type": "post",
    "url": "/case/uploadHospitalLogo",
    "title": "2.2 上传医院徽标",
    "description": "<p>上传医院徽标</br></br><text style=\"color:#EA0000\">特别说明：Content-Type:formData </br>接口测试 参数 body/form-data</text></p>",
    "name": "uploadHospitalLogo",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "logo",
            "description": "<p>上传的图片</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": 0,\n     \"data\": {},\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/case/uploadHospitalLogo"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/case.js",
    "groupTitle": "病例（Case）"
  }
] });
