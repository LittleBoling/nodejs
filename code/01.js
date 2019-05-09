//argv测试
//var argv = process.argv;
//console.log(argv);

var argvs = process.argv.slice(2);
//console.log(argvs.toString());

switch(argvs[0])
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
}
