let allGames = document.getElementsByClassName("game");
let filter = document.getElementsByClassName("filter");

window.scrollTo(0, 0);

setInterval(function () {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    document.getElementsByTagName("main")[0].style.opacity = 1;
}, 1500);

for (let i = 0; i < filter.length; i++){
    filter[i].checked = true;
}

//Action filter
let actionFilters = document.getElementById("checkbox-action");
actionFilters.onchange = function (){
    if (actionFilters.checked === true) {
        for (let i = 0; i < allGames.length; i++){
            if (allGames[i].dataset.category === "action") {
                allGames[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allGames.length; i++){
            if (allGames[i].dataset.category === "action"){
                allGames[i].style.display = "none";
            }
        }
    }
}

//Story filter
let storyFilters = document.getElementById("checkbox-story");
storyFilters.onchange = function (){
    if (storyFilters.checked === true) {
        for (let i = 0; i < allGames.length; i++){
            if (allGames[i].dataset.category === "story") {
                allGames[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allGames.length; i++){
            if (allGames[i].dataset.category === "story"){
                allGames[i].style.display = "none";
            }
        }
    }
}

//multiplayer filter
let multifilters = document.getElementById("checkbox-multiplayer");
multifilters.onchange = function (){
    if (multifilters.checked === true) {
        for (let i = 0; i < allGames.length; i++){
            if (allGames[i].dataset.category === "Multiplayer") {
                allGames[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allGames.length; i++){
            if (allGames[i].dataset.category === "Multiplayer"){
                allGames[i].style.display = "none";
            }
        }
    }
}