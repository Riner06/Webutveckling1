function expandProjectsList(element) {
  let target = document.getElementById("popdown");
  target.classList.remove("popdown-hide");

  element.innerHTML = "Stäng";
  element.setAttribute("onclick", "retractProjectsList(this)");
}

function retractProjectsList(element) {
  let target = document.getElementById("popdown");
  target.classList.add("popdown-hide");

  element.innerHTML = "Visa mer";
  element.setAttribute("onclick", "expandProjectsList(this)");
}
