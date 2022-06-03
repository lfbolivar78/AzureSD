//Rutas
const { Router } = require ('express');
const router = Router();


var http = require('follow-redirects').http;
var fs = require('fs');

var qs = require('querystring');






router.get ('/', (req, res) => {
    var options = {
        'method': 'POST',
        'hostname': 'helpdesk.farmaexpress.com',
        'path': '/api/v3/requests',
        'headers': {
          'authtoken': '9E9F3F24-F2BA-48D0-BC6A-955B3BF074AD',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cookie': 'SDPSESSIONID=E7023EEE00EC475D2355FD1D1C05B8B9; _zcsr_tmp=7a8f8a95-07de-4ae4-8e56-1c14fe33f70b; sdpcsrfcookie=7a8f8a95-07de-4ae4-8e56-1c14fe33f70b'
        },
        'maxRedirects': 20
      };
      
      var req = http.request(options, function (res) {
        var chunks = [];
      
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
      
        res.on("end", function (chunk) {
          var body = Buffer.concat(chunks);
          console.log(body.toString());
        });
      
        res.on("error", function (error) {
          console.error(error);
        });
      });
      
      var postData = qs.stringify({
        'input_data': '{\n"request": {\n        "subject": "PruebaAX1",\n        "description": "Prueba Descripcion",\n        "template": {\n            "id": "302",\n        },\n       "request_type": {\n            "name": "Asociado",\n        },\n        "requester": {\n            "email_id": "dd.lopez@coopidrogas.com.co",\n        },\n        "mode": {\n            "name": "Llamada",\n        },\n        "category": {\n            "name": "2. QUEJA ASOCIADO",\n        },\n        "subcategory": {\n            "name": "2.1- RAPPI"\n        },\n        "item": {\n            "name": "2.1.0- RAPITENDERO GROSERO"\n        },\n        "status": {\n            "name": "Asignado"\n        },\n        "technician": {\n            "email_id": "m.morales@coopidrogas.com.co",\n        },\n    }\n};'
      });
      
      req.write(postData);
      req.end();
    
    
    res.json (postData);
});

router.get ('/insertar', (req, res) => {
    const data = {
        "dato": "Ingreso",
        "Api": "AXEDE"
    }
    res.json (data);
});

module.exports = router;