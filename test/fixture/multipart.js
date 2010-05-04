var puts = require('sys').puts;
var p = require('sys').p;

exports['rfc1867'] =
  { boundary: 'AaB03x'
  , raw:
      '--AaB03x\r\n'+
      'content-disposition: form-data; name="field1"\r\n'+
      '\r\n'+
      'Joe Blow\r\n'+
      '--AaB03x\r\n'+
      'content-disposition: form-data; name="pics"; filename="file1.txt"\r\n'+
      'Content-Type: text/plain\r\n'+
      '\r\n'+
      '... contents of file1.txt ...\r\n'+
      '--AaB03x--\r\n'
  , parts:
    [ { headers:
        { 'content-disposition': 'form-data; name="field1"'
        }
      , data: 'Joe Blow'
      }
    , { headers:
        { 'content-disposition': 'form-data; name="pics"; filename="file1.txt"'
        , 'Content-Type': 'text/plain'
        }
      , data: '... contents of file1.txt ...'
      }
    ]
  };