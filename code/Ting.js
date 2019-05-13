// 2019-05-13

const fs = require('fs');

console.time('timer');
fs.stat('./list.md',(err,stats)=>{
    if(err) 
    {
        console.log('File is not exist');

        fs.writeFile('./list.md',new Date(),(err)=>{
            if(err) {console.error(err);return false}
            console.log('File create success');
        });
        return false;
    }
    fs.unlink('./list.md',(err)=>{
        if(err) {console.error(err);return false}

        fs.writeFile('./list.md',new Date(),(err) => {
            if(err) {console.error(err);return false}
            console.log('File has deleted');
        });
    });
});
console.timeEnd('timer');