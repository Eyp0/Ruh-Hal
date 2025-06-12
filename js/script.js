let secilenemoji = "";
function emojisec(emoji){
     secilenemoji=emoji;
}
document.getElementById("gonder").addEventListener("click",function(){
let notText = document.getElementById("notalani").value;
document.getElementById("notalani").value="" ;
if (secilenemoji == "") {
  alert("Lütfen bir emoji seç!");
  return;
}

document.getElementById("sonuc").innerHTML =
  "Bugünkü ruh halin: " + secilenemoji + "<br>" +
  "Yorumun: " + (notText || "Yorum yok.");
});  



document.getElementById("gonder").addEventListener("click", function() {
  let mesaj = "";

  if (secilenemoji == "😊") {
    mesaj = "Harika hissediyorsun, böyle devam et!";
  } else if (secilenemoji == "😢") {
    mesaj = "Üzgün olman normal, geçecek.";
  } else if (secilenemoji == "😡") {    
    mesaj = "Sinirin haklı, ama nefes almayı unutma.";
  } else if (secilenemoji == "😴") {
    mesaj = "Yorgunsan biraz dinlenmeyi hak ettin.";
  }

  document.getElementById("gerimesaj").textContent = mesaj;
});