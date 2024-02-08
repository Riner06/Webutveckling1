function expandProjectsList(element) {
    let target = document.getElementById("myimage");
    target.classList.remove("myimage");
  
    element.setAttribute("onclick", "retractProjectsList(this)");
  }
  
  function retractProjectsList(element) {
    let target = document.getElementById("popdown");
    target.classList.add("myimage");
  
    element.innerHTML = "Visa mer";
    element.setAttribute("onclick", "expandProjectsList(this)");
  }
  