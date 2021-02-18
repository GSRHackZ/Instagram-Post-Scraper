// ==UserScript==
// @name         Instgram Post Scraper
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  scrape post srcs and put them into an array.
// @author       GSRHackZ
// @match        https://www.instagram.com/*
// @grant        none
// @icon         https://image.flaticon.com/icons/svg/664/664086.svg
// @license                  MIT
// @compatible               chrome
// @compatible               firefox
// @compatible               opera
// @compatible               safari
// ==/UserScript==
let imgArray=[];
setInterval(function(){
    let imgs=document.getElementsByClassName("KL4Bh");
    for(let i=0;imgs.length>i;i++){
        if(imgArray.includes(imgs[i].childNodes[0].src)==false&&imgArray.length<80){
            imgArray.push(imgs[i].childNodes[0].src);
            console.log(imgArray);
    }}
},10)
