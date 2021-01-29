function repeatEverySecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(repeatEverySecond, 1000);