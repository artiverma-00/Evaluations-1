function mySet(callback, delay){
    let timerID;
    let (isCleared)=false
    function run(){
        if(isCleared)
            return;
        callback()
        timerID=setTimeout(run, delay)
    }
    timerID= setTimeout(run, delay)
    return function clear(){
        isCleared=true
        clearTimeout(timerID)
    }
}