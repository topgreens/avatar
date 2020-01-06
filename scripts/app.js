function myFunction() {
  var genders = document.getElementsByName("genero");
  if (genders[0].checked == true) {

    document.getElementById("images").src = "/imgs/male.png";
    return false;
  } else if (genders[1].checked == true) {

    document.getElementById("images").src = "/imgs/avatar1.png";
    return false;
  } else {
    var msg = "<span class='warning'>You must select your gender!</span>";
    document.getElementById('msg').innerHTML = msg;
    return false;
  }

  return true;
  
}

// Reference the color shape that was drawn over the image
const overlay = document.getElementsByClassName("fondo-avatar");

// Click on a color

var el = document.getElementsByClassName("color");
for (var i = 0; i < el.length; i++) {
  el[i].onclick = changeColor;
}

function changeColor(e) {
  // get the hex color
  let hex = e.target.getAttribute("data-hex");
  // set the hex color
  overlay.style.fill = hex;
}



//   function setCookie(name, value, expiredays)
//   { 
//       var expire = new Date();

//       expire.setTime(expire.getTime() + (expiredays * 24 * 3600 * 1000));
//       document.cookie = name + "=" + escape(value) +
//           ((expiredays == null) ? "" : ";expires=" + expire.toGMTString()) + ";path=/";
//   }

