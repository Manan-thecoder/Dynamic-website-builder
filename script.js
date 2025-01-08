let title= prompt("Enter title of Video")
let channel= prompt("Enter the name of your channel")
let views= prompt("Enter the views got")
let date= prompt("Enter the time ago from which the video was posted")
let duration= prompt("Enter duration of the video")
let img= prompt("Enter the url of thumbnail")

document.querySelector("#views").innerHTML=views;
document.querySelector("#date").innerHTML=date;
document.querySelector("#chanel").innerHTML=channel;
document.querySelector("#title").innerHTML=title;
document.querySelector("#duration").innerHTML=duration;
document.getElementsByClassName("img").style.backgroundimage= url("img");