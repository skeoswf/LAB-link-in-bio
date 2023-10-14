

const githubBox = document.querySelector("#github");
const instagramBox = document.querySelector("#instagram");
const soundcloudBox = document.querySelector("#soundcloud");

const githubBlurb = document.querySelector("#github2");
const instagramBlurb = document.querySelector("#instagram2");
const soundcloudBlurb = document.querySelector("#soundcloud2");

githubBox.addEventListener("mouseover", function() {
   githubBlurb.style.opacity = "1.0";
});

githubBox.addEventListener("mouseout", function() {
  githubBlurb.style.opacity = "0" 
});

instagramBox.addEventListener("mouseover", function() {
  instagramBlurb.style.opacity = "1.0" 
});

instagramBox.addEventListener("mouseout", function() {
  instagramBlurb.style.opacity = "0" 
});

soundcloudBox.addEventListener("mouseover", function() {
  soundcloudBlurb.style.opacity = "1.0" 
});

soundcloudBox.addEventListener("mouseout", function() {
  soundcloudBlurb.style.opacity = "0" 
});

githubBox.addEventListener("click", function() {
  window.open("https://github.com/skeoswf")
});

instagramBox.addEventListener("click", function() {
  window.open("https://www.instagram.com/strawberrycult_/")
});

soundcloudBox.addEventListener("click", function() {
  window.open("https://soundcloud.com/tapleswf/likes");
});
