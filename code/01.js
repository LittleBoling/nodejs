//argv测试
//var argv = process.argv;
//console.log(argv);

//var argvs = process.argv.slice(2);
//console.log(argvs.toString());

/* switch(argvs[0])
{
    case'init':
        console.log('你需要INIT');
    break;
    case 'install':
        var installPackageName = argvs[1];
        console.log('你在安装'+installPackageName);
    break;
    case 'uninstall':
        console.log('uninstall');
    break;
} */


/* //模板字符串
var message = 'hello'

process.stdout.write(`${message} world`); */


//动画&擦除重绘

var frames = [];
frames[frames.length] = `

    O ^ ~ ^ O 

`;

frames[frames.length] = `

     [>\/<]
    
`;

frames[frames.length] = `

    （°ο°）~ @
    
`;


var fps = 10;

//当前帧
var index = 0;

var render = () => {
    //清空当前控制台&保存新的内容
    // var height = process.stdout.getWindowSize()[1];
    // for(var i=0;i<height;i++){
    //     process.stdout.write('\n');
    // }
    
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');

    if(index === frames.length){index = 0;}
    process.stdout.write(frames[index++]);
}

setInterval(render,1000/fps);
