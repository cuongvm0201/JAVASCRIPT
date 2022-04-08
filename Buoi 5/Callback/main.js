function doTask1(name , callback){
    console.log("Bắt đầu công việc");
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function(){
        callback();
    },3000)
}

function doTask2(name, callback){
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function(){
        callback();
    },4000)
}

function doTask3(name, callback){
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function(){
        callback();
    },3000)
}


function finish(){
    console.log("KẾt thúc công việc");
}
   
// doTask1("Làm bài tập", finish);


//Thực hiện nối tiếp
doTask1("Làm bài tập", function(){
    doTask2("Nấu cơm", function(){
        doTask3("Uố ng rượu", finish)
    })
})

//Thực hiện song song
doTask3("Chơi game", finish);








