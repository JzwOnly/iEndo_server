define({ "api": [
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
    "url": "/case/caseNo",
    "title": "1.3 病例编号",
    "description": "<p>病例编号，用于新增病例</p>",
    "name": "caseNo",
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
          "content": "{\n     \"code\": 0,\n     \"data\": {\"CaseNo\": \"xxxxxxxxx\"},\n     \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/case/caseNo"
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
    "url": "/case/search",
    "title": "1.2 病例搜索",
    "description": "<p>病例搜索</p>",
    "name": "search",
    "group": "病例（Case）",
    "parameter": {
      "fields": {
        "Parameter": [
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
            "type": "string",
            "optional": true,
            "field": "Name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
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
  }
] });
