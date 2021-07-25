define({ "api": [
  {
    "type": "post",
    "url": "/data/:flow_id",
    "title": "Create a DataPoint",
    "name": "Create_a_DataPoint",
    "description": "<p>Create a DataPoint to t6. This needs to post the datapoint over a flow from your own collection. The payload can be crypted using aes-256-cbc algorithm and optionally signed as well. Using both encrypting and signature require to sign the payload first and then to encrypt the new payload as an enveloppe. On both Sign &amp; Encrypt, it is required to claim the object_id in the body so that the symmetric Secret Key can be found on the object as well as the Crypt Secret.</p>",
    "group": "0._DataPoint_Measure",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "flow_id",
            "description": "<p>Flow ID you want to add Data Point to. This parameter is optional as it can be defined in the payload itself</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "uuid-v4",
        "optional": false,
        "field": "flow_id",
        "description": "<p>Flow ID you want to add Data Point to</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "value",
        "description": "<p>Data Point value</p>"
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": true,
        "field": "publish",
        "defaultValue": "true",
        "description": "<p>Flag to publish to Mqtt Topic ; This parameter might become deprecated.</p>"
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": true,
        "field": "save",
        "defaultValue": "false",
        "description": "<p>Flag to store in database the Value</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "unit",
        "defaultValue": "undefined",
        "description": "<p>Unit of the Value</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "mqtt_topic",
        "defaultValue": "Default value from the Flow resource",
        "description": "<p>Mqtt Topic to publish value</p>"
      },
      {
        "group": "Body",
        "type": "uuid-v4",
        "optional": true,
        "field": "datatype_id",
        "defaultValue": "Default value from the Flow resource",
        "description": "<p>DataType Id</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "text",
        "defaultValue": "undefined",
        "description": "<p>Optional text to qualify Value</p>"
      },
      {
        "group": "Body",
        "type": "uuid-v4",
        "optional": true,
        "field": "object_id",
        "defaultValue": "undefined",
        "description": "<p>Optional object_id uuid used for Signed payload; for decrypt and encrypting in the Mqtt; The object_id must be own by the user in JWT.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "latitude",
        "defaultValue": "39.800327",
        "description": "<p>Optional String to identify where does the datapoint is coming from. (This is only used for rule specific operator)</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "longitude",
        "defaultValue": "6.343530",
        "description": "<p>Optional String to identify where does the datapoint is coming from. (This is only used for rule specific operator)</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "signedPayload",
        "defaultValue": "undefined",
        "description": "<p>Optional Signed payload containing datapoint resource</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "encryptedPayload",
        "defaultValue": "undefined",
        "description": "<p>Optional Encrypted payload containing datapoint resource</p>"
      },
      {
        "group": "Body",
        "type": "Object",
        "optional": true,
        "field": "influx_db_cloud",
        "description": "<p>influx_db_cloud object to define what bucket should be used to save data on the cloud</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "influx_db_cloud.token",
        "description": "<p>Authentication token ID</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "influx_db_cloud.org",
        "description": "<p>Organization ID</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "influx_db_cloud.url",
        "description": "<p>HTTP address of InfluxDB</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "influx_db_cloud.bucket",
        "description": "<p>Bucket name</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/data.js",
    "groupTitle": "0._DataPoint_Measure",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/data/:flow_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        },
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412",
            "description": "<p>Precondition Failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "401sign Response",
          "content": "HTTP/1.1 401 Invalid Signature\n{\n  \"message\": \"Invalid Signature\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "412 Response",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n  \"message\": \"Precondition Failed\",\n  \"id\": \"\",\n  \"code\": 412\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/data/:flow_id/:data_id?",
    "title": "Get DataPoints",
    "name": "Get_DataPoints",
    "group": "0._DataPoint_Measure",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "flow_id",
            "description": "<p>Flow ID you want to get data from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "desc",
            "description": "<p>Set to sorting order, the value can be either &quot;asc&quot; or ascending or &quot;desc&quot; for descending.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Page offset</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "start",
            "description": "<p>Timestamp or formatted date YYYY-MM-DD HH:MM:SS</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "end",
            "description": "<p>Timestamp or formatted date YYYY-MM-DD HH:MM:SS</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-5000",
            "optional": true,
            "field": "limit",
            "description": "<p>Set the number of expected resources.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"min\"",
              "\"max\"",
              "\"first\"",
              "\"last\"",
              "\"sum\"",
              "\"count\""
            ],
            "optional": true,
            "field": "select",
            "description": "<p>Modifier function to modify the results</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"10ns, 100µ, 3600ms, 3600s, 1m, 3h, 4d, 2w, 365d\""
            ],
            "optional": true,
            "field": "group",
            "description": "<p>Group By Clause</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dateFormat",
            "description": "<p>See momentJs documentation to foarmat date displays</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"bar\"",
              "\"line\"",
              "\"pie\"",
              "\"voronoi\""
            ],
            "optional": false,
            "field": "graphType",
            "description": "<p>Type of graph</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "xAxis",
            "description": "<p>Label value in X axis</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "yAxis",
            "description": "<p>Label value in Y axis</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "width",
            "description": "<p>output width of SVG chart</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "height",
            "description": "<p>output height of SVG chart</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>DataPoint from the Flow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>Data point Type</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Data point Identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.links",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.links.self",
            "description": "<p>Data point Url</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.attributes",
            "description": "<p>Data point attributes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.attributes.time",
            "description": "<p>Time of Data point</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.attributes.timestamp",
            "description": "<p>Unix Timestamp of Data point</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.attributes.value",
            "description": "<p>Value of Data point</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/data.js",
    "groupTitle": "0._DataPoint_Measure",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/data/:flow_id/:data_id?"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/objects/:object_id/build",
    "title": "Build Object Arduino source",
    "name": "Build_Object_Arduino_source",
    "group": "1._Object_and_User_Interfaces",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "object_id",
            "description": "<p>Object Id</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/objects.js",
    "groupTitle": "1._Object_and_User_Interfaces",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/objects/:object_id/build"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412",
            "description": "<p>Precondition Failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "412 Response",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n  \"message\": \"Precondition Failed\",\n  \"id\": \"\",\n  \"code\": 412\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/objects",
    "title": "Create new Object",
    "name": "Create_new_Object",
    "group": "1._Object_and_User_Interfaces",
    "version": "2.0.1",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "name",
        "defaultValue": "unamed",
        "description": "<p>Object Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "type",
        "defaultValue": "default",
        "description": "<p>Object Type, to customize icon on the List</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "size": "1024",
        "optional": true,
        "field": "description",
        "description": "<p>Object Description</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "position",
        "description": "<p>Object Location Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "longitude",
        "description": "<p>Object Location Longitude</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "latitude",
        "description": "<p>Object Location Latitude</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "ipv4",
        "description": "<p>Object IP v4</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "ipv6",
        "description": "<p>Object IP v6</p>"
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": true,
        "field": "isPublic",
        "defaultValue": "false",
        "description": "<p>Flag to allow dedicated page to be viewable from anybody</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "secret_key",
        "description": "<p>Object Secret Key in symmetric signature</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "secret_key_crypt",
        "description": "<p>Object Secret Key in symmetric cryptography</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "fqbn",
        "description": "<p>fqbn</p>"
      },
      {
        "group": "Body",
        "type": "Integer",
        "optional": true,
        "field": "source_version",
        "defaultValue": "0",
        "description": "<p>Source version</p>"
      },
      {
        "group": "Body",
        "type": "uuid-v4",
        "optional": true,
        "field": "source_id",
        "description": "<p>Source Id</p>"
      },
      {
        "group": "Body",
        "type": "uuid-v4",
        "optional": true,
        "field": "ui_id",
        "description": "<p>UI Id</p>"
      },
      {
        "group": "Body",
        "type": "Object",
        "optional": true,
        "field": "communication",
        "description": "<p>Communication parameters</p>"
      },
      {
        "group": "Body",
        "type": "String[]",
        "allowedValues": [
          "\"onoff\"",
          "\"lowerupper\"",
          "\"openclose\"",
          "\"setvalgetval\""
        ],
        "optional": true,
        "field": "communication.allowed_commands",
        "description": "<p>Commands</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"restAPI\"",
          "\"messageQueue\""
        ],
        "optional": true,
        "field": "communication.interface",
        "description": "<p>Interface</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/objects.js",
    "groupTitle": "1._Object_and_User_Interfaces",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/objects"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/objects/:object_id",
    "title": "Delete an Object",
    "name": "Delete_an_Object",
    "group": "1._Object_and_User_Interfaces",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "object_id",
            "description": "<p>Object Id to be deleted</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/objects.js",
    "groupTitle": "1._Object_and_User_Interfaces",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/objects/:object_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/objects/:object_id/:pName",
    "title": "Edit Object Custom Parameter",
    "name": "Edit_Object_Custom_Parameter",
    "group": "1._Object_and_User_Interfaces",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "object_id",
            "description": "<p>Object Id</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "pName",
        "description": "<p>Custom Parameter Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "value",
        "description": "<p>Custom Parameter Value</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/objects.js",
    "groupTitle": "1._Object_and_User_Interfaces",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/objects/:object_id/:pName"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/objects/:object_id",
    "title": "Edit an Object",
    "name": "Edit_an_Object",
    "group": "1._Object_and_User_Interfaces",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "object_id",
            "description": "<p>Object Id</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "name",
        "description": "<p>Object Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "type",
        "description": "<p>Object Type, to customize icon on the List</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "size": "1024",
        "optional": true,
        "field": "description",
        "description": "<p>Object Description</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "position",
        "description": "<p>Object Location Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "longitude",
        "description": "<p>Object Location Longitude</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "latitude",
        "description": "<p>Object Location Latitude</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "ipv4",
        "description": "<p>Object IP v4</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "ipv6",
        "description": "<p>Object IP v6</p>"
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": true,
        "field": "isPublic",
        "defaultValue": "false",
        "description": "<p>Flag to allow dedicated page to be viewable from anybody</p>"
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": true,
        "field": "is_public",
        "defaultValue": "false",
        "description": "<p>Alias of isPublic</p>"
      },
      {
        "group": "meta",
        "type": "Integer",
        "optional": true,
        "field": "meta.revision",
        "description": "<p>If set to the current revision of the resource (before PUTing), the value is checked against the current revision in database.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "secret_key",
        "description": "<p>Object Secret Key in symmetric signature</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "secret_key_crypt",
        "description": "<p>Object Secret Key in symmetric cryptography</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "fqbn",
        "description": "<p>fqbn</p>"
      },
      {
        "group": "Body",
        "type": "Integer",
        "optional": true,
        "field": "source_version",
        "description": "<p>Source version</p>"
      },
      {
        "group": "Body",
        "type": "uuid-v4",
        "optional": true,
        "field": "source_id",
        "description": "<p>Source Id</p>"
      },
      {
        "group": "Body",
        "type": "uuid-v4",
        "optional": true,
        "field": "ui_id",
        "description": "<p>UI Id</p>"
      },
      {
        "group": "Body",
        "type": "Object",
        "optional": true,
        "field": "communication",
        "description": "<p>Communication parameters</p>"
      },
      {
        "group": "Body",
        "type": "String[]",
        "allowedValues": [
          "\"onoff\"",
          "\"lowerupper\"",
          "\"openclose\"",
          "\"setvalgetval\""
        ],
        "optional": true,
        "field": "communication.allowed_commands",
        "description": "<p>Commands</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"restAPI\"",
          "\"messageQueue\""
        ],
        "optional": true,
        "field": "communication.interface",
        "description": "<p>Interface</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/objects.js",
    "groupTitle": "1._Object_and_User_Interfaces",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/objects/:object_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request, require a Bearer Authentication or revision is incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409",
            "description": "<p>Conflict</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Response",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Bad Request\",\n  \"id\": \"\",\n  \"code\": 400\n}",
          "type": "json"
        },
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "409 Response",
          "content": "HTTP/1.1 409 conflict\n{\n  \"message\": \"conflict\",\n  \"id\": \"\",\n  \"code\": 409\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/objects/:object_id/:pName",
    "title": "Get Object Custom Parameter",
    "name": "Get_Object_Custom_Parameter",
    "group": "1._Object_and_User_Interfaces",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "object_id",
            "description": "<p>Object Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pName",
            "description": "<p>Customer Parameter Name</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/objects.js",
    "groupTitle": "1._Object_and_User_Interfaces",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/objects/:object_id/:pName"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/objects/:object_id/latest-version",
    "title": "Get Object OTA latest version",
    "name": "Get_Object_OTA_latest_version",
    "group": "1._Object_and_User_Interfaces",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "object_id",
            "description": "<p>Object Id</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/objects.js",
    "groupTitle": "1._Object_and_User_Interfaces",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/objects/:object_id/latest-version"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/objects/:object_id/ota-status",
    "title": "Get Object OTA status",
    "name": "Get_Object_OTA_status",
    "group": "1._Object_and_User_Interfaces",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "object_id",
            "description": "<p>Object Id</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/objects.js",
    "groupTitle": "1._Object_and_User_Interfaces",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/objects/:object_id/ota-status"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/objects/",
    "title": "Get Objects",
    "name": "Get_Objects",
    "group": "1._Object_and_User_Interfaces",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "object_id",
            "description": "<p>Object Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Object Name you want to search for; this is using an case-insensitive regexp</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/objects.js",
    "groupTitle": "1._Object_and_User_Interfaces",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/objects/"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/objects/:object_id",
    "title": "Get Public Object",
    "name": "Get_Public_Object",
    "group": "1._Object_and_User_Interfaces",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "object_id",
            "description": "<p>Object Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Optional Object name</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/objects.js",
    "groupTitle": "1._Object_and_User_Interfaces",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/objects/:object_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/objects/:object_id/ui",
    "title": "Get UI for an Object",
    "name": "Get_UI_for_an_Object",
    "group": "1._Object_and_User_Interfaces",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "object_id",
            "description": "<p>Object Id</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/objects.js",
    "groupTitle": "1._Object_and_User_Interfaces",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/objects/:object_id/ui"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/objects/:object_id/qrcode/:typenumber/:errorcorrectionlevel",
    "title": "Get qrcode for an Object",
    "name": "Get_qrcode_for_an_Object",
    "group": "1._Object_and_User_Interfaces",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "object_id",
            "description": "<p>Object Id</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "typenumber",
            "description": "<p>Typenumber 1 to 10</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1",
            "allowedValues": [
              "\"L\"",
              "\"M\"",
              "\"Q\"",
              "\"H\""
            ],
            "optional": true,
            "field": "errorcorrectionlevel",
            "description": "<p>Error correction level</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/objects.js",
    "groupTitle": "1._Object_and_User_Interfaces",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/objects/:object_id/qrcode/:typenumber/:errorcorrectionlevel"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/objects/:object_id/show",
    "title": "Show an Object UI",
    "name": "Show_an_Object_UI",
    "group": "1._Object_and_User_Interfaces",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/objects.js",
    "groupTitle": "1._Object_and_User_Interfaces",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/objects/:object_id/show"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/objects/:object_id/unlink/:source_id",
    "title": "Unlink Object from Source",
    "name": "Unlink_Object_from_Source",
    "group": "1._Object_and_User_Interfaces",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "object_id",
            "description": "<p>Object Id</p>"
          },
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "source_id",
            "description": "<p>Source Id</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/objects.js",
    "groupTitle": "1._Object_and_User_Interfaces",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/objects/:object_id/unlink/:source_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412",
            "description": "<p>Precondition Failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "412 Response",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n  \"message\": \"Precondition Failed\",\n  \"id\": \"\",\n  \"code\": 412\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/exploration/boxplot",
    "title": "Explore Boxplot",
    "name": "Explore_Boxplot",
    "group": "10._Exploratory_Data_Analysis_EDA",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/exploration.js",
    "groupTitle": "10._Exploratory_Data_Analysis_EDA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/exploration/boxplot"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/exploration/kernelDensityEstimation",
    "title": "Explore Distribution KDE",
    "name": "Explore_Distribution_KDE",
    "description": "<p>Explore Distribution Kernel Density Estimation</p>",
    "group": "10._Exploratory_Data_Analysis_EDA",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "flow_id",
            "description": "<p>Flow ID you want to get data from</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "start",
            "description": "<p>Timestamp or formatted date YYYY-MM-DD HH:MM:SS</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "end",
            "description": "<p>Timestamp or formatted date YYYY-MM-DD HH:MM:SS</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-5000",
            "optional": true,
            "field": "limit",
            "description": "<p>Set the number of expected resources.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"min\"",
              "\"max\"",
              "\"first\"",
              "\"last\"",
              "\"sum\"",
              "\"count\""
            ],
            "optional": true,
            "field": "select",
            "description": "<p>Modifier function to modify the results</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"10ns, 100µ, 3600ms, 3600s, 1m, 3h, 4d, 2w, 365d\""
            ],
            "optional": true,
            "field": "group",
            "description": "<p>Group By Clause</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "xAxis",
            "description": "<p>Label value in X axis</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "yAxis",
            "description": "<p>Label value in Y axis</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "width",
            "description": "<p>output width of SVG chart</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "height",
            "description": "<p>output height of SVG chart</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "ticks",
            "defaultValue": "10",
            "description": "<p>Ticks</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Svg",
            "optional": false,
            "field": "Svg",
            "description": "<p>image file</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/exploration.js",
    "groupTitle": "10._Exploratory_Data_Analysis_EDA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/exploration/kernelDensityEstimation"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/exploration/:flow_id/exploration",
    "title": "Get Exploration",
    "name": "Explore_Flows",
    "group": "10._Exploratory_Data_Analysis_EDA",
    "version": "2.0.1",
    "deprecated": {
      "content": "/!\\ Please use other Apis"
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "flow_id",
            "description": "<p>Flow ID you want to get data from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "desc",
            "description": "<p>Set to sorting order, the value can be either &quot;asc&quot; or ascending or &quot;desc&quot; for descending.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Page offset</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "start",
            "description": "<p>Timestamp or formatted date YYYY-MM-DD HH:MM:SS</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "end",
            "description": "<p>Timestamp or formatted date YYYY-MM-DD HH:MM:SS</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-5000",
            "optional": true,
            "field": "limit",
            "description": "<p>Set the number of expected resources.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"min\"",
              "\"max\"",
              "\"first\"",
              "\"last\"",
              "\"sum\"",
              "\"count\""
            ],
            "optional": true,
            "field": "select",
            "description": "<p>Modifier function to modify the results</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"10ns, 100µ, 3600ms, 3600s, 1m, 3h, 4d, 2w, 365d\""
            ],
            "optional": true,
            "field": "group",
            "description": "<p>Group By Clause</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dateFormat",
            "description": "<p>See momentJs documentation to foarmat date displays</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"bar\"",
              "\"line\"",
              "\"pie\"",
              "\"voronoi\""
            ],
            "optional": false,
            "field": "graphType",
            "description": "<p>Type of graph</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "xAxis",
            "description": "<p>Label value in X axis</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "yAxis",
            "description": "<p>Label value in Y axis</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "width",
            "description": "<p>output width of SVG chart</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "height",
            "description": "<p>output height of SVG chart</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "ticks",
            "defaultValue": "10",
            "description": "<p>Ticks</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>DataPoint from the Flow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>Data point Type</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Data point Identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.links",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.links.self",
            "description": "<p>Data point Url</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.attributes",
            "description": "<p>Data point attributes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.attributes.time",
            "description": "<p>Time of Data point</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.attributes.timestamp",
            "description": "<p>Unix Timestamp of Data point</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.attributes.value",
            "description": "<p>Value of Data point</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        },
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/exploration.js",
    "groupTitle": "10._Exploratory_Data_Analysis_EDA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/exploration/:flow_id/exploration"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/exploration/frequencyDistribution",
    "title": "Explore Frequency Distribution",
    "name": "Explore_Frequency_Distribution",
    "group": "10._Exploratory_Data_Analysis_EDA",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "flow_id",
            "description": "<p>Flow ID you want to get data from</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "start",
            "description": "<p>Timestamp or formatted date YYYY-MM-DD HH:MM:SS</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "end",
            "description": "<p>Timestamp or formatted date YYYY-MM-DD HH:MM:SS</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-5000",
            "optional": true,
            "field": "limit",
            "description": "<p>Set the number of expected resources.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"min\"",
              "\"max\"",
              "\"first\"",
              "\"last\"",
              "\"sum\"",
              "\"count\""
            ],
            "optional": true,
            "field": "select",
            "description": "<p>Modifier function to modify the results</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"10ns, 100µ, 3600ms, 3600s, 1m, 3h, 4d, 2w, 365d\""
            ],
            "optional": true,
            "field": "group",
            "description": "<p>Group By Clause</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "xAxis",
            "description": "<p>Label value in X axis</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "yAxis",
            "description": "<p>Label value in Y axis</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "width",
            "description": "<p>output width of SVG chart</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "height",
            "description": "<p>output height of SVG chart</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Svg",
            "optional": false,
            "field": "Svg",
            "description": "<p>image file</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/exploration.js",
    "groupTitle": "10._Exploratory_Data_Analysis_EDA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/exploration/frequencyDistribution"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/exploration/loess",
    "title": "Explore LOESS",
    "name": "Explore_LOESS",
    "description": "<p>Explore  LOcally Estimated Scatterplot Smoothing</p>",
    "group": "10._Exploratory_Data_Analysis_EDA",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "flow_id",
            "description": "<p>Flow ID you want to get data from</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "start",
            "description": "<p>Timestamp or formatted date YYYY-MM-DD HH:MM:SS</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "end",
            "description": "<p>Timestamp or formatted date YYYY-MM-DD HH:MM:SS</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-5000",
            "optional": true,
            "field": "limit",
            "description": "<p>Set the number of expected resources.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"min\"",
              "\"max\"",
              "\"first\"",
              "\"last\"",
              "\"sum\"",
              "\"count\""
            ],
            "optional": true,
            "field": "select",
            "description": "<p>Modifier function to modify the results</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"10ns, 100µ, 3600ms, 3600s, 1m, 3h, 4d, 2w, 365d\""
            ],
            "optional": true,
            "field": "group",
            "description": "<p>Group By Clause</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "xAxis",
            "description": "<p>Label value in X axis</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "yAxis",
            "description": "<p>Label value in Y axis</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "span",
            "defaultValue": "0.75",
            "description": "<p>0 to inf, default 0.75</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "band",
            "defaultValue": "0",
            "description": "<p>0 to 1, default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"constant\"",
              "\"linear\"",
              "\"quadratic\""
            ],
            "optional": true,
            "field": "degree",
            "defaultValue": "quadratic",
            "description": "<p>Lower degree fitting function computes faster.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "width",
            "description": "<p>output width of SVG chart</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "height",
            "description": "<p>output height of SVG chart</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Svg",
            "optional": false,
            "field": "Svg",
            "description": "<p>image file</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/exploration.js",
    "groupTitle": "10._Exploratory_Data_Analysis_EDA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/exploration/loess"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/exploration/outliers",
    "title": "Explore Outliers",
    "name": "Explore_Outliers",
    "group": "10._Exploratory_Data_Analysis_EDA",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/exploration.js",
    "groupTitle": "10._Exploratory_Data_Analysis_EDA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/exploration/outliers"
      }
    ]
  },
  {
    "type": "get",
    "url": "/exploration/seasonality",
    "title": "Explore Seasonality",
    "name": "Explore_Seasonality",
    "group": "10._Exploratory_Data_Analysis_EDA",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/exploration.js",
    "groupTitle": "10._Exploratory_Data_Analysis_EDA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/exploration/seasonality"
      }
    ]
  },
  {
    "type": "get",
    "url": "/exploration/trend",
    "title": "Explore Trend",
    "name": "Explore_Trend",
    "group": "10._Exploratory_Data_Analysis_EDA",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/exploration.js",
    "groupTitle": "10._Exploratory_Data_Analysis_EDA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/exploration/trend"
      }
    ]
  },
  {
    "type": "get",
    "url": "/exploration/normality",
    "title": "Explore for normality",
    "name": "Explore_for_normality",
    "group": "10._Exploratory_Data_Analysis_EDA",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "flow_id",
            "description": "<p>Flow ID to explore</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": true,
            "field": "x",
            "description": "<p>raw score x</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "expectedValue",
            "description": "<p>Expected value of the population mean</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "skewness",
            "description": "<p>Skewness</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "z_score",
            "description": "<p>zScore</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "t_test",
            "description": "<p>tTest of the x value</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/exploration.js",
    "groupTitle": "10._Exploratory_Data_Analysis_EDA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/exploration/normality"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/exploration/summary",
    "title": "Explore summary",
    "name": "Explore_summary",
    "group": "10._Exploratory_Data_Analysis_EDA",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "flow_id",
            "description": "<p>Flow ID to explore</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/exploration.js",
    "groupTitle": "10._Exploratory_Data_Analysis_EDA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/exploration/summary"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/exploration/head",
    "title": "Explore the first n rows",
    "name": "Explore_the_first_n_rows",
    "group": "10._Exploratory_Data_Analysis_EDA",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "flow_id",
            "description": "<p>Flow ID to explore</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "n",
            "description": "<p>Number of rows</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/exploration.js",
    "groupTitle": "10._Exploratory_Data_Analysis_EDA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/exploration/head"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/exploration/tail",
    "title": "Explore the last n rows",
    "name": "Explore_the_last_n_rows",
    "group": "10._Exploratory_Data_Analysis_EDA",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "flow_id",
            "description": "<p>Flow ID to explore</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "n",
            "description": "<p>Number of rows</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/exploration.js",
    "groupTitle": "10._Exploratory_Data_Analysis_EDA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/exploration/tail"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/exploration/export",
    "title": "Export rough data as json array",
    "name": "Export_rough_data_as_json_array",
    "group": "10._Exploratory_Data_Analysis_EDA",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "flow_id",
            "description": "<p>Flow ID you want to get data from</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "start",
            "description": "<p>Timestamp or formatted date YYYY-MM-DD HH:MM:SS</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "end",
            "description": "<p>Timestamp or formatted date YYYY-MM-DD HH:MM:SS</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-5000",
            "optional": true,
            "field": "limit",
            "description": "<p>Set the number of expected resources.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"min\"",
              "\"max\"",
              "\"first\"",
              "\"last\"",
              "\"sum\"",
              "\"count\""
            ],
            "optional": true,
            "field": "select",
            "description": "<p>Modifier function to modify the results</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"10ns, 100µ, 3600ms, 3600s, 1m, 3h, 4d, 2w, 365d\""
            ],
            "optional": true,
            "field": "group",
            "description": "<p>Group By Clause</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Svg",
            "optional": false,
            "field": "Svg",
            "description": "<p>image file</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/exploration.js",
    "groupTitle": "10._Exploratory_Data_Analysis_EDA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/exploration/export"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/exploration/line",
    "title": "Get Explore Plot line",
    "name": "Get_Explore_Plot_line",
    "group": "10._Exploratory_Data_Analysis_EDA",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/exploration.js",
    "groupTitle": "10._Exploratory_Data_Analysis_EDA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/exploration/line"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/flows",
    "title": "Create new Flow",
    "name": "Create_new_Flow",
    "group": "2._Flow",
    "version": "2.0.1",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "name",
        "defaultValue": "unamed",
        "description": "<p>Flow Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "data_type",
        "description": "<p>Flow Data Type, this parameter is really important and will define the Value cast in datastore</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "unit",
        "description": "<p>Flow Unit</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "theme",
        "description": "<p>Flow theme, deprecated</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "mqtt_topic",
        "description": "<p>] Mqtt topic</p>"
      },
      {
        "group": "Body",
        "type": "uuid-v4",
        "optional": true,
        "field": "track_id",
        "description": "<p>The flow_id of the primary sensor in case using Sensor-Fusion</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "fusion_algorithm",
        "description": "<p>Data Fusion algorithm</p>"
      },
      {
        "group": "Body",
        "type": "Integer",
        "optional": true,
        "field": "ttl",
        "description": "<p>Time To Live before datapoint on Flow will expire</p>"
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": true,
        "field": "require_signed",
        "defaultValue": "false",
        "description": "<p>require_signed</p>"
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": true,
        "field": "require_encrypted",
        "defaultValue": "false",
        "description": "<p>require_encrypted</p>"
      },
      {
        "group": "Body",
        "type": "Integer",
        "optional": false,
        "field": "permission",
        "description": "<p>Permission is not used anymore (deprecated)</p>"
      },
      {
        "group": "Body",
        "type": "String[]",
        "optional": true,
        "field": "objects",
        "description": "<p>List of Object Ids</p>"
      },
      {
        "group": "Body",
        "type": "Object",
        "optional": true,
        "field": "influx_db_cloud",
        "description": "<p>influx_db_cloud object to define what bucket should be used to save data on the cloud</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/flows.js",
    "groupTitle": "2._Flow",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/flows"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request, require a Bearer Authentication or revision is incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Response",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Bad Request\",\n  \"id\": \"\",\n  \"code\": 400\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/flows/:flow_id",
    "title": "Delete a Flow",
    "name": "Delete_a_Flow",
    "group": "2._Flow",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "flow_id",
            "description": "<p>Flow Id to be deleted</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/flows.js",
    "groupTitle": "2._Flow",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/flows/:flow_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/flows/:flow_id",
    "title": "Edit a Flow",
    "name": "Edit_a_Flow",
    "group": "2._Flow",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "flow_id",
            "description": "<p>Flow Id</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "name",
        "description": "<p>Flow Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "data_type",
        "description": "<p>Flow Data Type, this parameter is really important and will define the Value cast in datastore</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "unit",
        "description": "<p>Flow Unit</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "mqtt_topic",
        "description": "<p>] Mqtt topic</p>"
      },
      {
        "group": "Body",
        "type": "uuid-v4",
        "optional": true,
        "field": "track_id",
        "description": "<p>The flow_id of the primary sensor in case using Sensor-Fusion</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "fusion_algorithm",
        "description": "<p>Data Fusion algorithm</p>"
      },
      {
        "group": "Body",
        "type": "Integer",
        "optional": true,
        "field": "ttl",
        "description": "<p>Time To Live before datapoint on Flow will expire</p>"
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": true,
        "field": "require_signed",
        "defaultValue": "false",
        "description": "<p>require_signed</p>"
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": true,
        "field": "require_encrypted",
        "defaultValue": "false",
        "description": "<p>require_encrypted</p>"
      },
      {
        "group": "Body",
        "type": "Object[]",
        "optional": true,
        "field": "permission",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String[]",
        "optional": true,
        "field": "objects",
        "description": "<p>List of Object Ids</p>"
      },
      {
        "group": "meta",
        "type": "Integer",
        "optional": true,
        "field": "meta.revision",
        "description": "<p>If set to the current revision of the resource (before PUTing), the value is checked against the current revision in database.</p>"
      },
      {
        "group": "Body",
        "type": "Object",
        "optional": true,
        "field": "influx_db_cloud",
        "description": "<p>influx_db_cloud object to define what bucket should be used to save data on the cloud</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/flows.js",
    "groupTitle": "2._Flow",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/flows/:flow_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request, require a Bearer Authentication or revision is incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409",
            "description": "<p>Conflict</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Response",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Bad Request\",\n  \"id\": \"\",\n  \"code\": 400\n}",
          "type": "json"
        },
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "409 Response",
          "content": "HTTP/1.1 409 conflict\n{\n  \"message\": \"conflict\",\n  \"id\": \"\",\n  \"code\": 409\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/flows/:flow_id",
    "title": "Get Flows",
    "name": "Get_Flows",
    "group": "2._Flow",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "flow_id",
            "description": "<p>Flow Id</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/flows.js",
    "groupTitle": "2._Flow",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/flows/:flow_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/flows/:flow_id/track",
    "title": "Get Track from a Flow",
    "name": "Get_Track_from_a_Flow",
    "group": "2._Flow",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "flow_id",
            "description": "<p>Flow Id which is selected as a track on other Flows</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/flows.js",
    "groupTitle": "2._Flow",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/flows/:flow_id/track"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/dashboards",
    "title": "Create new Dashboard",
    "name": "Create_new_Dashboard",
    "group": "3._Dashboard",
    "version": "2.0.1",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "name",
        "defaultValue": "unamed",
        "description": "<p>Dashboard Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "description",
        "description": "<p>Dashboard Description</p>"
      },
      {
        "group": "Body",
        "type": "String[]",
        "optional": true,
        "field": "snippets",
        "description": "<p>List of Snippets Ids</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/dashboards.js",
    "groupTitle": "3._Dashboard",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/dashboards"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request, require a Bearer Authentication or revision is incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Response",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Bad Request\",\n  \"id\": \"\",\n  \"code\": 400\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/dashboards/:dashboard_id",
    "title": "Delete a Dashboard",
    "name": "Delete_a_Dashboard",
    "group": "3._Dashboard",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "dashboard_id",
            "description": "<p>Dashboard Id to be deleted</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/dashboards.js",
    "groupTitle": "3._Dashboard",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/dashboards/:dashboard_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/dashboards/:dashboard_id",
    "title": "Edit a Dashboard",
    "name": "Edit_a_Dashboard",
    "group": "3._Dashboard",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "flow_id",
            "description": "<p>Dashboard Id</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "name",
        "defaultValue": "unamed",
        "description": "<p>Dashboard Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "description",
        "defaultValue": "the previous value before edition",
        "description": "<p>Dashboard Description</p>"
      },
      {
        "group": "Body",
        "type": "String[]",
        "optional": true,
        "field": "snippets",
        "defaultValue": "the previous value before edition",
        "description": "<p>List of Snippets Ids</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/dashboards.js",
    "groupTitle": "3._Dashboard",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/dashboards/:dashboard_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request, require a Bearer Authentication or revision is incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409",
            "description": "<p>Conflict</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Response",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Bad Request\",\n  \"id\": \"\",\n  \"code\": 400\n}",
          "type": "json"
        },
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "409 Response",
          "content": "HTTP/1.1 409 conflict\n{\n  \"message\": \"conflict\",\n  \"id\": \"\",\n  \"code\": 409\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/dashboards/:dashboard_id",
    "title": "Get Dashboards",
    "name": "Get_Dashboards",
    "group": "3._Dashboard",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "dashboard_id",
            "description": "<p>Dashboard Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/dashboards.js",
    "groupTitle": "3._Dashboard",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/dashboards/:dashboard_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/snippets",
    "title": "Create new Snippet",
    "name": "Create_new_Snippet",
    "group": "4._Snippet",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "unamed",
            "description": "<p>Snippet Name</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "type",
        "description": "<p>Snippet Type</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "icon",
        "description": "<p>Snippet Icon</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "color",
        "description": "<p>Snippet Color</p>"
      },
      {
        "group": "Body",
        "type": "String[]",
        "optional": true,
        "field": "flows",
        "description": "<p>List of Flow Ids</p>"
      },
      {
        "group": "Body",
        "type": "String[]",
        "optional": true,
        "field": "options",
        "description": "<p>Options as json object</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/snippets.js",
    "groupTitle": "4._Snippet",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/snippets"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request, require a Bearer Authentication or revision is incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Response",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Bad Request\",\n  \"id\": \"\",\n  \"code\": 400\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/snippets/:snippet_id",
    "title": "Delete a Snippet",
    "name": "Delete_a_Snippet",
    "group": "4._Snippet",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "snippet_id",
            "description": "<p>Snippet Id to be deleted</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/snippets.js",
    "groupTitle": "4._Snippet",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/snippets/:snippet_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/snippets/:snippet_id",
    "title": "Edit a Snippet",
    "name": "Edit_a_Snippet",
    "group": "4._Snippet",
    "version": "2.0.1",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "name",
        "defaultValue": "unamed",
        "description": "<p>Snippet Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "type",
        "description": "<p>Snippet Type</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "icon",
        "description": "<p>Snippet Icon</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "color",
        "description": "<p>Snippet Color</p>"
      },
      {
        "group": "Body",
        "type": "String[]",
        "optional": true,
        "field": "flows",
        "description": "<p>List of Flow Ids</p>"
      },
      {
        "group": "Body",
        "type": "String[]",
        "optional": true,
        "field": "options",
        "description": "<p>Options as json object</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/snippets.js",
    "groupTitle": "4._Snippet",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/snippets/:snippet_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request, require a Bearer Authentication or revision is incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409",
            "description": "<p>Conflict</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Response",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Bad Request\",\n  \"id\": \"\",\n  \"code\": 400\n}",
          "type": "json"
        },
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "409 Response",
          "content": "HTTP/1.1 409 conflict\n{\n  \"message\": \"conflict\",\n  \"id\": \"\",\n  \"code\": 409\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/snippets/:snippet_id",
    "title": "Get Snippets",
    "name": "Get_Snippets",
    "group": "4._Snippet",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "snippet_id",
            "description": "<p>Snippet Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Filter by name</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/snippets.js",
    "groupTitle": "4._Snippet",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/snippets/:snippet_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/rules",
    "title": "Create new Rule",
    "name": "Create_new_Rule",
    "group": "5._Rule",
    "version": "2.0.1",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "name",
        "defaultValue": "unamed",
        "description": "<p>Rule Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "rule",
        "description": "<p>Rule</p>"
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": true,
        "field": "active",
        "description": "<p>Status of the rule</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/rules.js",
    "groupTitle": "5._Rule",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/rules"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request, require a Bearer Authentication or revision is incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Response",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Bad Request\",\n  \"id\": \"\",\n  \"code\": 400\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/rules/:rule_id",
    "title": "Delete a Rule",
    "name": "Delete_a_Rule",
    "group": "5._Rule",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "rule_id",
            "description": "<p>Rule Id to be deleted</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/rules.js",
    "groupTitle": "5._Rule",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/rules/:rule_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/rules/:rule_id",
    "title": "Edit a Rule",
    "name": "Edit_a_Rule",
    "group": "5._Rule",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "rule_id",
            "description": "<p>Rule Id</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "name",
        "defaultValue": "unamed",
        "description": "<p>Rule Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "rule",
        "description": "<p>Rule</p>"
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": true,
        "field": "active",
        "description": "<p>Status of the rule</p>"
      },
      {
        "group": "meta",
        "type": "Integer",
        "optional": true,
        "field": "meta.revision",
        "description": "<p>If set to the current revision of the resource (before PUTing), the value is checked against the current revision in database.</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/rules.js",
    "groupTitle": "5._Rule",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/rules/:rule_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request, require a Bearer Authentication or revision is incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409",
            "description": "<p>Conflict</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Response",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Bad Request\",\n  \"id\": \"\",\n  \"code\": 400\n}",
          "type": "json"
        },
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "409 Response",
          "content": "HTTP/1.1 409 conflict\n{\n  \"message\": \"conflict\",\n  \"id\": \"\",\n  \"code\": 409\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/rules/:rule_id",
    "title": "Get Rules",
    "name": "Get_Rules",
    "group": "5._Rule",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "rule_id",
            "description": "<p>Rule Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Rule name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rule",
            "description": "<p>Stringified Rule</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/rules.js",
    "groupTitle": "5._Rule",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/rules/:rule_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/ota/:source_id/deploy/:object_id",
    "title": "Deploy Source to a Objects",
    "name": "Deploy_Source_to_a_Objects",
    "description": "<p>Deploy Source to a all linked Objects. This require the source to be build before. The transmission to the Object is made using OTA protocol.</p>",
    "group": "6._Source_and_Over_The_Air_OTA",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "source_id",
            "description": "<p>Source Id to deploy</p>"
          },
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "object_id",
            "description": "<p>Object Id</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/ota.js",
    "groupTitle": "6._Source_and_Over_The_Air_OTA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/ota/:source_id/deploy/:object_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/ota/:source_id",
    "title": "Get Objects linked to source",
    "name": "Get_Objects_linked_to_source",
    "group": "6._Source_and_Over_The_Air_OTA",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "source_id",
            "description": "<p>Source Id</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/ota.js",
    "groupTitle": "6._Source_and_Over_The_Air_OTA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/ota/:source_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/ota/lib-list",
    "title": "List all installed libraries",
    "name": "List_all_installed_libraries",
    "group": "6._Source_and_Over_The_Air_OTA",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/ota.js",
    "groupTitle": "6._Source_and_Over_The_Air_OTA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/ota/lib-list"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/ota/board-listall",
    "title": "List boards and FQBN",
    "name": "List_boards_and_FQBN",
    "group": "6._Source_and_Over_The_Air_OTA",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/ota.js",
    "groupTitle": "6._Source_and_Over_The_Air_OTA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/ota/board-listall"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/ota/core-list",
    "title": "List installed core platforms",
    "name": "List_installed_core_platforms",
    "group": "6._Source_and_Over_The_Air_OTA",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/ota.js",
    "groupTitle": "6._Source_and_Over_The_Air_OTA",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/ota/core-list"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/mqtts/:mqtt_id",
    "title": "Get Mqtts",
    "name": "Get_Mqtts",
    "group": "7._Mqtt",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "mqtt_id",
            "description": "<p>Mqtt Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>Size of the resultset</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Page offset</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "name",
        "description": ""
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/mqtts.js",
    "groupTitle": "7._Mqtt",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/mqtts/:mqtt_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/datatypes",
    "title": "Add DataType",
    "name": "Add_DataType",
    "group": "8._Administration",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "name",
        "defaultValue": "unamed",
        "description": "<p>DataType Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"categorical\"",
          "\"numerical\"",
          "\"object\""
        ],
        "optional": false,
        "field": "type",
        "description": "<p>Type of the datatype</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"discrete\"",
          "\"continuous\"",
          "\"ordinal\"",
          "\"nominal\""
        ],
        "optional": false,
        "field": "classification",
        "description": "<p>Classification of the datatype</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/datatypes.js",
    "groupTitle": "8._Administration",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/datatypes"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/units",
    "title": "Add a Unit",
    "name": "Add_a_Unit",
    "group": "8._Administration",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "name",
        "defaultValue": "unamed",
        "description": "<p>Unit Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "format",
        "description": "<p>Unit Format</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"Work\"",
          "\"Energy (E)\"",
          "\"Power\"",
          "\"Radiant Flux (P)\"",
          "\"Electric Charge (Q)\"",
          "\"Voltage, Electrical (U)\"",
          "\"Electrical Conductance (S)\"",
          "\"Electrical Capacitance (F)\"",
          "\"Magnetic Flux (Wb)\"",
          "\"Electrical Inductance (H)\"",
          "\"Illuminance (E)\"",
          "\"Torque (M)\"",
          "\"Time (t)\"",
          "\"Current (I)\"",
          "\"Area\"",
          "\"Length\"",
          "\"Power (P)\"",
          "\"Luminance (L)\"",
          "\"Luminous Intensity (l)\"",
          "\"Température\"",
          "\"Temperature (T)\"",
          "\"Volume\"",
          "\"Volume (V)\"",
          "\"Other\"",
          "\"Sound\"",
          "\"Frequency (f)\"",
          "\"Pressure, Stress\"",
          "\"Force, Weight (F)\""
        ],
        "optional": true,
        "field": "type",
        "description": "<p>Unit Type</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "system",
        "description": "<p>System</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "size": "1024",
        "optional": true,
        "field": "description",
        "description": "<p>Description</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/units.js",
    "groupTitle": "8._Administration",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/units"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/datatypes/:datatype_id",
    "title": "Delete a DataType",
    "name": "Delete_a_DataType",
    "group": "8._Administration",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "datatype_id",
            "description": "<p>DataType Id to be deleted</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/datatypes.js",
    "groupTitle": "8._Administration",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/datatypes/:datatype_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/units/:unit_id",
    "title": "Delete a Unit",
    "name": "Delete_a_Unit",
    "group": "8._Administration",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "unit_id",
            "description": "<p>Unit Id to be deleted</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/units.js",
    "groupTitle": "8._Administration",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/units/:unit_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/tokens/all",
    "title": "Delete all expired users tokens",
    "name": "Delete_all_expired_users_tokens",
    "group": "8._Administration",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/index.js",
    "groupTitle": "8._Administration",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/tokens/all"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/datatypes/:datatype_id",
    "title": "Edit a DataType",
    "name": "Edit_a_DataType",
    "group": "8._Administration",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "datatype_id",
            "description": "<p>DataType Id</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "name",
        "description": "<p>Name of datatype</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"categorical\"",
          "\"numerical\"",
          "\"object\""
        ],
        "optional": false,
        "field": "type",
        "description": "<p>Type of the datatype</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"discrete\"",
          "\"continuous\"",
          "\"ordinal\"",
          "\"nominal\""
        ],
        "optional": false,
        "field": "classification",
        "description": "<p>Classification of the datatype</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/datatypes.js",
    "groupTitle": "8._Administration",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/datatypes/:datatype_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/units/:unit_id",
    "title": "Edit a Unit",
    "name": "Edit_a_Unit",
    "group": "8._Administration",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "unit_id",
            "description": "<p>Unit ID</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "name",
        "description": "<p>Unit Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"Work\"",
          "\"Energy (E)\"",
          "\"Power\"",
          "\"Radiant Flux (P)\"",
          "\"Electric Charge (Q)\"",
          "\"Voltage, Electrical (U)\"",
          "\"Electrical Conductance (S)\"",
          "\"Electrical Capacitance (F)\"",
          "\"Magnetic Flux (Wb)\"",
          "\"Electrical Inductance (H)\"",
          "\"Illuminance (E)\"",
          "\"Torque (M)\"",
          "\"Time (t)\"",
          "\"Current (I)\"",
          "\"Area\"",
          "\"Length\"",
          "\"Power (P)\"",
          "\"Luminance (L)\"",
          "\"Luminous Intensity (l)\"",
          "\"Température\"",
          "\"Temperature (T)\"",
          "\"Volume\"",
          "\"Volume (V)\"",
          "\"Other\"",
          "\"Sound\"",
          "\"Frequency (f)\"",
          "\"Pressure, Stress\"",
          "\"Force, Weight (F)\""
        ],
        "optional": true,
        "field": "type",
        "description": "<p>Unit Type</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "format",
        "description": "<p>Unit Format</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "system",
        "description": "<p>System</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "size": "1024",
        "optional": true,
        "field": "description",
        "description": "<p>Description</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/units.js",
    "groupTitle": "8._Administration",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/units/:unit_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/list",
    "title": "Get Users list",
    "name": "Get_Users_list",
    "group": "8._Administration",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>Size of the resultset</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Page offset</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "8._Administration",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/list"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/newcomers",
    "title": "Get latest user Account",
    "name": "Get_latest_user_Account",
    "description": "<p>Get the list of latest user Account created</p>",
    "group": "8._Administration",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>Size of the resultset</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Page offset</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "8._Administration",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/newcomers"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/notifications/mail/newsletter/count",
    "title": "Count Newsletter subscribers",
    "name": "Count_Newsletter_subscribers",
    "group": "9._Notifications",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/notifications.js",
    "groupTitle": "9._Notifications",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/notifications/mail/newsletter/count"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "202",
            "description": "<p>Server successfully understood the request, it will be done asynchroneously</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "202 Accepted",
          "content": "HTTP/1.1 202 Accepted\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/notifications/push/count",
    "title": "Count Push subscribers",
    "name": "Count_Push_subscribers",
    "group": "9._Notifications",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/notifications.js",
    "groupTitle": "9._Notifications",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/notifications/push/count"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "202",
            "description": "<p>Server successfully understood the request, it will be done asynchroneously</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "202 Accepted",
          "content": "HTTP/1.1 202 Accepted\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/notifications/mail/newsletter/subscribers",
    "title": "Get Newsletter subscribers",
    "name": "Get_Newsletter_subscribers",
    "group": "9._Notifications",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/notifications.js",
    "groupTitle": "9._Notifications",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/notifications/mail/newsletter/subscribers"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "202",
            "description": "<p>Server successfully understood the request, it will be done asynchroneously</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "202 Accepted",
          "content": "HTTP/1.1 202 Accepted\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/notifications/list/unsubscribed",
    "title": "List unsubscribed notifications",
    "name": "List_unsubscribed_notifications",
    "group": "9._Notifications",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/notifications.js",
    "groupTitle": "9._Notifications",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/notifications/list/unsubscribed"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/notifications/mail/newsletter/preview/",
    "title": "Preview html of a Newsletter",
    "name": "Preview_html_of_a_Newsletter",
    "group": "9._Notifications",
    "version": "2.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "description": "<p>text/html</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/notifications.js",
    "groupTitle": "9._Notifications",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/notifications/mail/newsletter/preview/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/notifications/mail/newsletter/plan",
    "title": "Schedule a newsletter",
    "name": "Schedule_a_newsletter",
    "group": "9._Notifications",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/notifications.js",
    "groupTitle": "9._Notifications",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/notifications/mail/newsletter/plan"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "202",
            "description": "<p>Server successfully understood the request, it will be done asynchroneously</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "202 Accepted",
          "content": "HTTP/1.1 202 Accepted\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/notifications/push/plan",
    "title": "Schedule a push",
    "name": "Schedule_a_push",
    "group": "9._Notifications",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "title",
        "defaultValue": "📰 t6 updates",
        "description": "<p>Notification title</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "icon",
        "description": "<p>Notification icon</p>"
      },
      {
        "group": "Body",
        "type": "Array",
        "optional": true,
        "field": "vibrate",
        "description": "<p>Notification array of vibration</p>"
      },
      {
        "group": "Body",
        "type": "Array",
        "optional": true,
        "field": "actions",
        "description": "<p>Notification array of actions</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "badge",
        "description": "<p>Notification badge</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/notifications.js",
    "groupTitle": "9._Notifications",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/notifications/push/plan"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "202",
            "description": "<p>Server successfully understood the request, it will be done asynchroneously</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "202 Accepted",
          "content": "HTTP/1.1 202 Accepted\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/notifications/mail/changePassword",
    "title": "Send Password Expiration Email",
    "name": "Send_Password_Expiration_Email",
    "group": "9._Notifications",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/notifications.js",
    "groupTitle": "9._Notifications",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/notifications/mail/changePassword"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "202",
            "description": "<p>Server successfully understood the request, it will be done asynchroneously</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "202 Accepted",
          "content": "HTTP/1.1 202 Accepted\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/notifications/mail/newsletter/send",
    "title": "Send a scheduled newsletter",
    "name": "Send_a_scheduled_newsletter",
    "group": "9._Notifications",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/notifications.js",
    "groupTitle": "9._Notifications",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/notifications/mail/newsletter/send"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "202",
            "description": "<p>Server successfully understood the request, it will be done asynchroneously</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "202 Accepted",
          "content": "HTTP/1.1 202 Accepted\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/notifications/push/send",
    "title": "Send a scheduled push",
    "name": "Send_a_scheduled_push",
    "group": "9._Notifications",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "body": [
      {
        "group": "Body",
        "type": "Integer",
        "optional": true,
        "field": "limit",
        "description": ""
      },
      {
        "group": "Body",
        "type": "boolean",
        "optional": true,
        "field": "dryrun",
        "description": ""
      },
      {
        "group": "Body",
        "type": "Integer",
        "optional": true,
        "field": "recurring",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "recurring",
        "description": ""
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/notifications.js",
    "groupTitle": "9._Notifications",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/notifications/push/send"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "202",
            "description": "<p>Server successfully understood the request, it will be done asynchroneously</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "202 Accepted",
          "content": "HTTP/1.1 202 Accepted\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/notifications/mail/reminder",
    "title": "Send reminder Email to Users",
    "name": "Send_reminder_Email_to_Users",
    "group": "9._Notifications",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/notifications.js",
    "groupTitle": "9._Notifications",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/notifications/mail/reminder"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "202",
            "description": "<p>Server successfully understood the request, it will be done asynchroneously</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "202 Accepted",
          "content": "HTTP/1.1 202 Accepted\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/notifications/mail/newsletter/stop",
    "title": "Stop a newsletter sending",
    "name": "Stop_a_newsletter_sending",
    "group": "9._Notifications",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/notifications.js",
    "groupTitle": "9._Notifications",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/notifications/mail/newsletter/stop"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "202",
            "description": "<p>Server successfully understood the request, it will be done asynchroneously</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "202 Accepted",
          "content": "HTTP/1.1 202 Accepted\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/status",
    "title": "Get API Status",
    "name": "Get_API_Status",
    "group": "General",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/index.js",
    "groupTitle": "General",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/status"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/datatypes/:datatype_id",
    "title": "Get DataTypes",
    "name": "Get_DataTypes",
    "description": "<p>t6 implement a immutable datatypes list as referential. A Full documentation is available on the <a href=\"https://github.com/mathcoll/t6/wiki/Data-Types\">Wiki</a></p>",
    "group": "General",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "datatype_id",
            "description": "<p>DataType ID</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/datatypes.js",
    "groupTitle": "General",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/datatypes/:datatype_id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/index",
    "title": "Get Index Cards",
    "name": "Get_Index_Cards",
    "group": "General",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/index.js",
    "groupTitle": "General",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/index"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/terms",
    "title": "Get Terms and Privacy",
    "name": "Get_Terms_and_Privacy",
    "group": "General",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/index.js",
    "groupTitle": "General",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/terms"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/units/:unit_id",
    "title": "Get Units",
    "name": "Get_Units",
    "description": "<p>t6 implement a immutable unit list as referential.</p>",
    "group": "General",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": true,
            "field": "unit_id",
            "description": "<p>Unit ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Work\"",
              "\"Energy (E)\"",
              "\"Power\"",
              "\"Radiant Flux (P)\"",
              "\"Electric Charge (Q)\"",
              "\"Voltage, Electrical (U)\"",
              "\"Electrical Conductance (S)\"",
              "\"Electrical Capacitance (F)\"",
              "\"Magnetic Flux (Wb)\"",
              "\"Electrical Inductance (H)\"",
              "\"Illuminance (E)\"",
              "\"Torque (M)\"",
              "\"Time (t)\"",
              "\"Current (I)\"",
              "\"Area\"",
              "\"Length\"",
              "\"Power (P)\"",
              "\"Luminance (L)\"",
              "\"Luminous Intensity (l)\"",
              "\"Température\"",
              "\"Temperature (T)\"",
              "\"Volume\"",
              "\"Volume (V)\"",
              "\"Other\"",
              "\"Sound\"",
              "\"Frequency (f)\"",
              "\"Pressure, Stress\"",
              "\"Force, Weight (F)\""
            ],
            "optional": true,
            "field": "type",
            "description": "<p>Unit Type</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/units.js",
    "groupTitle": "General",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/units/:unit_id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/compatible-devices",
    "title": "Get compatible devices",
    "name": "Get_compatible_devices",
    "group": "General",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/index.js",
    "groupTitle": "General",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/compatible-devices"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/open-source-licenses",
    "title": "Get open-source-licenses",
    "name": "Get_open-source-licenses",
    "group": "General",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/index.js",
    "groupTitle": "General",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/open-source-licenses"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/authenticate",
    "title": "Authenticate - JWT Token",
    "name": "Authenticate_-_JWT_Token",
    "description": "<p>The authenticate endpoint provide an access token which is multiple use but expiring within 5 minutes. Once it has expired an access_token can be refreshed to extend duration or you can generate a new one from this authenticate endpoint. Several Authentification process are handled: using your personnal credentials, using a Key+Secret Access long life Token (which can be revoked)</p>",
    "group": "User",
    "version": "2.0.1",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"password\"",
          "\"refresh_token\"",
          "\"access_token\""
        ],
        "optional": false,
        "field": "grant_type",
        "defaultValue": "password",
        "description": "<p>Grant type is the method to authenticate using your own credentials, using a pair of Key/Secret or refreshing a Bearer token before it expires.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "username",
        "description": "<p>Your own username, required only when grant_type=&quot;password&quot;</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "password",
        "description": "<p>Your own password, required only when grant_type=&quot;password&quot;</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "key",
        "defaultValue": "undefined",
        "description": "<p>Client Api Key, required only when grant_type=&quot;access_token&quot;</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "secret",
        "defaultValue": "undefined",
        "description": "<p>Client Api Secret, required only when grant_type=&quot;access_token&quot;</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "refresh_token",
        "defaultValue": "undefined",
        "description": "<p>The refresh_token you want to use in order to get a new token</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Authentication</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT Token</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamp",
            "optional": false,
            "field": "tokenExp",
            "description": "<p>Expiration timestamp of the JWT Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>Token that can be used to refresh the Token</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamp",
            "optional": false,
            "field": "refreshTokenExp",
            "description": "<p>Expiration timestamp of the Refresh Token</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/authenticate"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request, require a Bearer Authentication or revision is incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Response",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Bad Request\",\n  \"id\": \"\",\n  \"code\": 400\n}",
          "type": "json"
        },
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create new User",
    "name": "Create_new_User",
    "group": "User",
    "version": "2.0.1",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "firstName",
        "description": "<p>The User First Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "lastName",
        "description": "<p>The User Last Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "email",
        "description": "<p>The User Email address</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412",
            "description": "<p>Precondition Failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "412 Response",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n  \"message\": \"Precondition Failed\",\n  \"id\": \"\",\n  \"code\": 412\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/:user_id",
    "title": "Delete a User",
    "name": "Delete_a_User",
    "group": "User",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "user_id",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/:user_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users/:user_id",
    "title": "Edit a User",
    "name": "Edit_a_User",
    "group": "User",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "user_id",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "firstName",
        "description": "<p>The new User First Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "lastName",
        "description": "<p>The new User Last Name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "email",
        "description": "<p>The new User Email address</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/:user_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412",
            "description": "<p>Precondition Failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "412 Response",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n  \"message\": \"Precondition Failed\",\n  \"id\": \"\",\n  \"code\": 412\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/accessTokens",
    "title": "Generate Access Tokens",
    "name": "Generate_Access_Tokens",
    "group": "User",
    "version": "2.0.1",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "size": "128",
        "optional": true,
        "field": "memo",
        "description": "<p>Free memo string</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/accessTokens"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412",
            "description": "<p>Precondition Failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "412 Response",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n  \"message\": \"Precondition Failed\",\n  \"id\": \"\",\n  \"code\": 412\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/:user_id",
    "title": "Get User",
    "name": "Get_User",
    "group": "User",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "user_id",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/:user_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/:user_id/token",
    "title": "Get User Token",
    "name": "Get_User_Token",
    "group": "User",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid-v4",
            "optional": false,
            "field": "user_id",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/:user_id/token"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/me/sessions",
    "title": "Get User active sessions",
    "name": "Get_User_active_sessions",
    "group": "User",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/me/sessions"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/me/token",
    "title": "Get User from JWT claim",
    "name": "Get_User_from_JWT_claim",
    "group": "User",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/me/token"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Require a Bearer Authentication</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method Not Allowed ; API endpoint does not accept the method used</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Response",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 401\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "405 Response",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"message\": \"Not Authorized\",\n  \"id\": \"\",\n  \"code\": 405\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/accessTokens",
    "title": "Get accessTokens",
    "name": "Get_accessTokens_list_from_the_user_account",
    "group": "User",
    "version": "2.0.1",
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/accessTokens"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412",
            "description": "<p>Precondition Failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "412 Response",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n  \"message\": \"Precondition Failed\",\n  \"id\": \"\",\n  \"code\": 412\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/refresh",
    "title": "Refresh a JWT Token",
    "name": "Refresh_a_JWT_Token",
    "description": "<p>This endpoint allows you to extend access_token expiration date. The extension is the same (5 minutes) as the authenticate endpoint.</p>",
    "group": "User",
    "version": "2.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/refresh"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/token/:token",
    "title": "Reset a User password",
    "name": "Reset_a_User_password",
    "description": "<p>The user account corresponding to the token passed throught path parameter is upadated with the new password</p>",
    "group": "User",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token to identify the user</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "password",
        "description": "<p>The new password</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/token/:token"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412",
            "description": "<p>Precondition Failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "412 Response",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n  \"message\": \"Precondition Failed\",\n  \"id\": \"\",\n  \"code\": 412\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/instruction",
    "title": "Reset a password instruction",
    "name": "Reset_a_password_instruction",
    "description": "<p>This Api will send the recovery email to user passed in the email body attribute.</p>",
    "group": "User",
    "version": "2.0.1",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "email",
        "description": "<p>to identify the user account</p>"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/instruction"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412",
            "description": "<p>Precondition Failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        },
        {
          "title": "412 Response",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n  \"message\": \"Precondition Failed\",\n  \"id\": \"\",\n  \"code\": 412\n}",
          "type": "json"
        },
        {
          "title": "500 Response",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal Error\",\n  \"id\": \"\",\n  \"code\": 500\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/resetAllUsersTokens",
    "title": "Reset all unsubscription tokens",
    "name": "Reset_all_unsubscription_tokens",
    "group": "User",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/resetAllUsersTokens"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/accessTokens/:key",
    "title": "Revoke an Access Token",
    "name": "Revoke_an_Access_Token",
    "group": "User",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>Access Token Key to revoke</p>"
          }
        ]
      }
    },
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/accessTokens/:key"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>Creation of a new resource was successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Created\",\n  \"id\": \"\",\n  \"code\": 201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412",
            "description": "<p>Precondition Failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "429",
            "description": "<p>Too Many Requests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "412 Response",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n  \"message\": \"Precondition Failed\",\n  \"id\": \"\",\n  \"code\": 412\n}",
          "type": "json"
        },
        {
          "title": "429 Response",
          "content": "HTTP/1.1 429 Too Many Requests\n{\n  \"message\": \"Too Many Requests\",\n  \"id\": \"\",\n  \"code\": 429\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/sendFCM",
    "title": "Send FCM message to user",
    "name": "Send_FCM_message_to_user",
    "group": "User",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/sendFCM"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/sendPush",
    "title": "Send Push notification to user",
    "name": "Send_Push_notification_to_user",
    "group": "User",
    "version": "2.0.1",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "filename": "/home/mathieu/Projets/2019/internetcollaboratif.info/t6/routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://api.internetcollaboratif.info/v2.0.1/users/sendPush"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer:eyJh...sw5c",
            "description": "<p>Bearer &lt;Token&gt;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Server successfully understood the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 Success",
          "content": "HTTP/1.1 200 Response\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Token used in transaction is not valid - check your token and/or permission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found We couldn't find the resource you are trying to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"Forbidden\",\n  \"id\": \"\",\n  \"code\": 403\n}",
          "type": "json"
        },
        {
          "title": "404 Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\",\n  \"id\": \"\",\n  \"code\": 404\n}",
          "type": "json"
        }
      ]
    }
  }
] });
