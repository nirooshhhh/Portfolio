// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Typing effect
const text = ["Frontend Developer", "React Developer", "UI Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
  if(count === text.length){
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if(letter.length === currentText.length){
    count++;
    index = 0;
  }
  setTimeout(type, 100);
})();
