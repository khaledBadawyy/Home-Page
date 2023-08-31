// function to format time with zero
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
// step 1:- check if the time is between 8AM : 8PM
    var now = new Date()
    var isSystemOpen = now.getHours() >= 8 && now.getHours() <=20 ;
 // Display the message in the popup 
    var popupMessage = document.getElementById("popup-message");
if(isSystemOpen){

    popupMessage.textContent = "Hello Back";
    document.getElementById("popup").style.display = "block";
    setTimeout(function() {
    document.getElementById("popup").style.display = "none";
    startClock();
} , 1000);
}
else{
    popupMessage.textContent= "System not up now";
    document.getElementById("popup").style.display = "block"
    startClock(); 
}
//display current time in changed seconds 
function startClock(){
        var now = new Date()
    var hours = formatTime(now.getHours());
    var minutes = formatTime(now.getMinutes());
    var seconds = formatTime(now.getSeconds());
    document.getElementById("time").innerHTML=  "The current time is :- "+ hours +":"+ minutes +":"+ seconds;
    setInterval(function(){
        var now = new Date();
    var hours = formatTime(now.getHours());
    var minutes = formatTime(now.getMinutes());
    var seconds = formatTime(now.getSeconds());
    document.getElementById("time").innerHTML=  "The current time is :- "+ hours +":"+ minutes +":"+ seconds ;
} , 1000)
}
