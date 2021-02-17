function logoSize() {
  size = window.screen.width;
  logo = document.getElementById("logo");
  if (size <= 600) {
    logo.src = "../img/aoe_logo_mobile.png";
  } else {
    logo.src = "../img/aoe_logo_complete.png";
  }
}

setInterval("logoSize()", 100);