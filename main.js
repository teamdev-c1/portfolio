document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-click");
  const img = document.getElementById("img");

  btn.addEventListener("click", () => {
    img.classList.add("shaking");

    setTimeout(() => {
      img.classList.remove("shaking");

    }, 1000);
  });
});
