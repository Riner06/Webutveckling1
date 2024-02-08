// function expandProjectsList(element) {
//     let target = document.getElementById("myimage");
//     target.classList.remove("myimage");
  
//     element.setAttribute("onclick", "retractProjectsList(this)");
//   }
  
//   function retractProjectsList(element) {
//     let target = document.getElementById("popdown");
//     target.classList.add("myimage");
  
//     element.innerHTML = "Visa mer";
//     element.setAttribute("onclick", "expandProjectsList(this)");
//   }
  
//   function expandProjectsList(element) {
//     let menu = document.getElementById("menu");
//     menu.style.display = "flex"; // Show the menu
  
//     element.setAttribute("onclick", "retractProjectsList(this)");
// }
  
// function retractProjectsList(element) {
//     let menu = document.getElementById("menu");
//     menu.style.display = "none"; // Hide the menu
  
//     element.setAttribute("onclick", "expandProjectsList(this)");
// }

// function expandProjectsList(element) {
//     let menu = document.getElementById("menu");
//     if (menu.style.display === "none") {
//         menu.style.display = "block";
//     } else {
//         menu.style.display = "none";
//     }
// }

window.onload = function() {
    let menu = document.getElementById("menu");
    menu.style.display = "none";
}


function expandProjectsList(element) {
    let menu = document.getElementById("menu");
    if (menu.style.display === "none") {
        
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
