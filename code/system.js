//事件驱动简介

setInterval(function(){
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
})