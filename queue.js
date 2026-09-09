function loadQueue(){

    let current =
        JSON.parse(
            localStorage.getItem("currentCall")
        );

    if(!current){
        return;
    }

    document.getElementById("number").innerText =
        current.number;

    document.getElementById("counter").innerText =
        "Counter " + current.counter;
}


loadQueue();

setInterval(function(){

    loadQueue();

},1000);
