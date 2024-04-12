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

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();