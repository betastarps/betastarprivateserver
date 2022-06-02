$(document).ready(function() {
    $.get('/lib/api/config', function(data) {
        if (data === 'ERROR') {
            window.location = '/503';
        } else if (data === '403') {
            window.location = '/access/';
        }
    });
});

document.addEventListener('keydown', function(event) {
    if (event.which == 115) {
        if (typeof userData === 'undefined') {
            return;
        }
        if (userData.element === '') {
            debugElement = 'none';
        } else {
            debugElement = userData.element;
        }
        $("body").append(`<style>.debugModal {position: absolute;width: 100vw;height: 100vh;top: 0;overflow: hidden;background-color: rgba(0,0,0,.6);}.debugPopup {position: absolute;width: 85vw;height: 85vh;border-radius: 1vw;background-color: white;left: 7vw;top: 7vh;box-shadow: 0px 0px 15px white;animation: zoomInDebugPopup 1s 0s ease forwards;}@keyframes zoomInDebugPopup {0% {transform: scale(0%);}50% {transform: scale(110%);}100% {transform: scale(100%);}}.debugTitle {font-size: 8vw;color: white;text-align: center;text-shadow: 0px 0px 15px black;font-family: jua;display: block;}.debugText {font-size: 2.4vw;color: white;text-align: center;text-shadow: 0px 0px 15px black;font-family: jua;display: block;}.debugOkayButton {border-radius: 0.85vw;border:0vw solid #ffffff;width: 11vw;height: 4.3vw;color: #3a3a3a;font-size: 2.3vw;text-align: center;text-shadow: 0px 0px 20px black;font-family: jua;position: absolute;left: 37vw;top: 74.5vh;cursor: pointer;filter: drop-shadow(0px 0px 15px black);transition: 0.2s;}.debugOkayButton:hover{transform:scale(90%);}</style>`);
        var buttonID = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
        var modalID = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
        $(`<div id="${modalID}" class="debugModal"><div class="debugPopup"><text class="debugTitle">User Info</text><text class="debugText">name > ${userData.name}<br>color > ${userData.color}<br>element > ${debugElement}<br>linked > ${userData.linked}<br>perm > ${userData.perm}<br>requests > ${userData.requests}<br>role > ${userData.role}</text><button id="${buttonID}" class="debugOkayButton">Okay</button></div></div>`).appendTo("body");
        document.getElementById(buttonID).addEventListener("click", function() {
            document.getElementById(modalID).remove();
        });
        document.getElementById(buttonID).focus();
    }
});
