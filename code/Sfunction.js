//自定义function函数

'use strict';

function $require(id){

    
    const fs = require('fs');
    const path = require('path');

    const filename = path.join(__dirname,id);
    const dirname  = path.dirname(filename);

    let code = fs.readFileSync(filename,'utf8');

    let module = {id:filename,exports:{}};
    let exports = module.exports;

    code = `(function($require,module,exports,filename,dirname){
        ${code}
    })($require,module,exports,filename,dirname);`;

    eval(code);

    return module.exports;
}


var m4 = $require('./module/outsay.js');

m4.say('Hello World');

