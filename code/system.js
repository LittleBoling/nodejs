///////////////////////////////////////////////////////////////////////事件驱动简介

/* setInterval(function(){
    console.log(1);
},1000);

var exiting = false;
process.on('SIGINT',()=>{

    if(exiting){
        console.log('Exit');
        process.exit();
    }
    else
    {
        console.log('Press Ctrl+C again to exit')
        exiting = true;

        setTimeout(()=>{exiting = false},5000);
    }
}) */

//////////////////////////////////////////////////////////////////Input from keyboard

/* var question = 'Please input the user name: ';
var users = {
    'admin':'123',
    'user' :'321'
}

var username = '';
process.stdout.write(question);

//用户输入是没有确定状态的，所以不能直接等待输入

process.stdin.on('data',(input)=>{

    //The last input key is Enter
    input = input.toString().trim();
    //获取键值集合中所有的键
    if(!username){
        if(Object.keys(users).indexOf(input) === -1)
        {
            process.stdout.write('用户名不存在'+'\n');
            process.stdout.write(question+'\n');
            username = '';
        } 
        else
        {
            process.stdout.write('Please input password:\n');
            username = input;
        }
    }
    else 
    {
        if(input === users[username])
        {
            console.log('Sign up success!');
        }
        else 
        {
            process.stdout.write('Please input the password:\n');
        }
    }
}); */

console.time('main');

setTimeout(()=>{
    for(var i = 0;i<100000000;i++){}
    console.log('Circling');
},0);

console.timeEnd('main');
console.log('Program end');
