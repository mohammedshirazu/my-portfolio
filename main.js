let slides1 = document.getElementsByClassName("slides1");
let slides2 = document.getElementsByClassName("slides2");
let slides3 = document.getElementsByClassName("slides3");
let slides4 = document.getElementsByClassName("slides4");
let slideIndex = 0;

showSlides();

function showSlides() {
  let i;
  a = slides1;
  b = slides2;
  c = slides3;
  d = slides4;

  for (i = 0; i < a.length; i++) {
    a[i].style.display = "none";
    b[i].style.display = "none";
    c[i].style.display = "none";
    d[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > a.length) {
    slideIndex = 1
  }
  a[slideIndex-1].style.display = "block";
  b[slideIndex-1].style.display = "block";
  c[slideIndex-1].style.display = "block";
  d[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); 
}