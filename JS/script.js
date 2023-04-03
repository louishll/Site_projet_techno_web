function wronganswer(){
    alert("Mauvaise réponse! \nEssayer encore ");
}
function goodanswer(){
    alert("bravo!")
}
function initstyle(){
    let theme = document.getElementById("theme");
    theme.href = "../../Styles/style.css" ;
}

function switchtheme(){
    let theme = document.getElementById("theme");
    let toggle = document.getElementById("switch");
    if (toggle.value == "false"){
        theme.href = "../../Styles/stylebis.css" ;
        toggle.value= "true";
    }
    else {
        theme.href = "../../Styles/style.css" ;
        toggle.value = "false";
    }
}

