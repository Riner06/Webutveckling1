
window.onload = function() {
    let menu = document.getElementById("menu");
     // menu.style.display = "block";
    if (window.matchMedia("(max-width: 993px)").matches) {
        // If the screen size is 599px or less, hide the menu
        menu.style.display = "none";
    } else {
        // Otherwise, show the menu
        menu.style.display = "block";
    }
}


function expandProjectsList() {
    let menu = document.getElementById("menu");
    if (menu.style.display === "none" ) {
        
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
    
}
