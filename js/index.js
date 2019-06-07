var mapTrigger = document.querySelector(".contacts-map-link");
var mapCloseTrigger = document.querySelector(".close-map-button");

function showMap(e) {
    e.preventDefault();
    var mapDialog = document.querySelector(".popup-map");
    mapDialog.setAttribute("open", "open");
}

function hideMap() {
    var mapDialog = document.querySelector(".popup-map");
    mapDialog.removeAttribute("open");
}
mapTrigger.addEventListener("click", showMap);
mapCloseTrigger.addEventListener("click", hideMap);

var writeUsTrigger = document.querySelector(".write-us-dialog-trigger");
var mapCloseTrigger = document.querySelector(".close-write-us-button");

function showWriteUs(e) {
    e.preventDefault();
    var writeDialog = document.querySelector(".write-us-dialog");
    writeDialog.setAttribute("open", "open");
}

function hideWriteUs() {
    var writeDialog = document.querySelector(".write-us-dialog");
    writeDialog.removeAttribute("open");
}
writeUsTrigger.addEventListener("click", showWriteUs);
mapCloseTrigger.addEventListener("click", hideWriteUs);



function featuredSlidesInit() {
    while (document.querySelector("[class^=slide-].no-js")) {
        document.querySelector("[class^=slide-].no-js").classList.remove("no-js");
    }
    while (document.querySelector(".featured-goods-anchor.no-js")) {
        document.querySelector(".featured-goods-anchor.no-js").classList.remove("no-js");
    }
    switchSlide(1);

    var controlList = document.querySelectorAll(".featured-goods-anchor");
    for (var i = 0; i < controlList.length; i++) {
        controlList[i].addEventListener("click", handleSlideControlClick);
    }
}

function switchSlide(number) {
    while (document.querySelector("[class^=slide-].current")) {
        document.querySelector("[class^=slide-].current").classList.remove("current")
    }
    while (document.querySelector(".featured-goods-anchor.current")) {
        document.querySelector(".featured-goods-anchor.current").classList.remove("current")
    }

    while (document.querySelector(".slide-" + number + ":not(.current)")) {
        document.querySelector(".slide-" + number + ":not(.current)").classList.add("current")
    }
    while (document.querySelector(".featured-goods-anchor.link-" + number + ":not(.current)")) {
        document.querySelector(".featured-goods-anchor.link-" + number + ":not(.current)").classList.add("current")
    }
}

function handleSlideControlClick(e) {
    e.preventDefault();
    var number = Number(e.currentTarget.getAttribute("data-slide")) || 1;
    switchSlide(number);
}
featuredSlidesInit()


function initServices() {
    while (document.querySelector(".service-section.no-js")) {
        document.querySelector(".service-section.no-js").classList.remove("no-js")
    }
    while (document.querySelector(".service-anchor-link.no-js")) {
        document.querySelector(".service-anchor-link.no-js").classList.remove("no-js")
    }
    switchService("delivery");

    var controlList = document.querySelectorAll(".service-anchor-link,.service-link");
    for (var i = 0; i < controlList.length; i++) {
        controlList[i].addEventListener("click", handleServiceControlClick);
    }
}

function switchService(service) {
    while (document.querySelector(".service-section.current")) {
        document.querySelector(".service-section.current").classList.remove("current")
    }
    while (document.querySelector(".service-anchor-link.current")) {
        document.querySelector(".service-anchor-link.current").classList.remove("current")
    }

    while (document.querySelector(".service-section." + service + ":not(.current)")) {
        document.querySelector(".service-section." + service + ":not(.current)").classList.add("current");
    }
    while (document.querySelector(".service-anchor-link." + service + ":not(.current)")) {
        document.querySelector(".service-anchor-link." + service + ":not(.current)").classList.add("current")
    }
}

function handleServiceControlClick(e) {
    if (!e.currentTarget.classList.contains("service-link")) {
        e.preventDefault();
    }
    var service = e.currentTarget.getAttribute("data-service");
    switchService(service);
}
initServices()
if (window.location.hash.toLowerCase() === "#delivery") {
    switchService("delivery");
}
if (window.location.hash.toLowerCase() === "#warranty") {
    switchService("warranty");
}