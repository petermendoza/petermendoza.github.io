let nav;
function changeActive(line, text){
    var navLines = document.getElementsByClassName("nav-lines");
    var navTicks = document.getElementsByClassName("nav-tick");
    for (var i = 0; i < navLines.length; i++) {
        navLines[i].style.color = "#949494";
        navTicks[i].style.cssText = "width: 10px; background-color:#949494; border: #949494 solid 1px;"
    }
    document.getElementById("about-content").style.opacity = "0%";
    document.getElementById("projects-content").style.opacity = "0%";
    document.getElementById("experience-content").style.opacity = "0%";
    if(nav != text){
    document.getElementById(text).style.color = "#cdd5f1";
    document.getElementById(line).style.cssText = "width: 35px; border: #cdd5f1 solid 1px; background-color:#cdd5f1";
    document.getElementById(text.replace('nav','content')).style.opacity = "100%";
    nav = text;
    }
    else{
        nav = 0;
    }

}