$(document).ready(function() {
    document.getElementById("#registerButton").addEventListener("click", function() {
        window.location.href = "/register";
    });
    document.getElementById("#loginButton").addEventListener("click", function() {
        window.location.href = "/login";
    });
    document.getElementById("#whereIsBlacketText").addEventListener("click", function() {
        whereIsBlacket();
    });
});

function whereIsBlacket() {
    $("body").append(`<div class="popupModal"><div class="popupPopup"><text class="popupTitle">Where is Blacket?</text><text class="popupText">Ben asked Xotic to take down blacket. <a href="https://discord.gg/FzcCsGPVQ6">Discord</a> server.</text><button id="#okayButton" class="okayButton">Okay</button></div></div>`);
    document.getElementById("#okayButton").addEventListener("click", function() {
        $(".popupModal").remove();
    });
    document.getElementById("#okayButton").focus();
}
