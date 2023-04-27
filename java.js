var btn = document.getElementById("descargar-btn");
btn.addEventListener("click", function() {
  var enlace = document.createElement("a");
  enlace.href = "D:\cuphead.rar";
  enlace.download = true;
  enlace.click();
});

var btn = document.getElementById("descargar-btn1");
btn.addEventListener("click", function() {
  var enlace = document.createElement("a");
  enlace.href = "D:\Minecraft.rar/";
  enlace.download = true;
  enlace.click();
});