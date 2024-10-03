function checkTaskStatus(taskName, isCompleted){
    //console.log("checkStatus function called")
if(isCompleted){
    console.log(`'Task ${taskName} is completed'`);
}
else {
    console.log(`'Task ${taskName} is not completed yet'`);
}
//console.log(checkTaskStatus)
};
let taskLogger = checkTaskStatus;


taskLogger("Finish Homework", true)
taskLogger("Clean Room", false);
taskLogger("Go for a Run", true);
taskLogger("Read Book", false);