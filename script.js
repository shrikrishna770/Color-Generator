document.getElementById("colorBtn").addEventListener("click", function() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let color = `RGB(${r},${g},${b})`;

  document.querySelector("h1").innerText = color;
  document.getElementById("colorBox").innerText = "";
  document.getElementById("colorBox").style.backgroundColor = color;
});