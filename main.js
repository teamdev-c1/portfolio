document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-click");
  const img = document.getElementById("img");
  //modal
  const modal = document.getElementById("js-modal");
  const close_btn = modal.querySelector("js-close-btn");
  const modal_img = modal.querySelector(".js-img");
  const modal_text = modal.querySelector(".js-text");
  const modal_lang = modal.querySelector(".js-lucky-lang");
  //random preview
  const result=[
    {text:"",img:"",lang:""},
    {text:"",img:"",lang:""},
    {text:"",img:"",lang:""},
    {text:"",img:"",lang:""},
    {text:"",img:"",lang:""}
  ];
  //btnをクリックして、開いたとき
  function open_modal(open){
    modal_img.src = open.img;
    modal.alt = `おみくじ：${open.text}`;
    modal_text.textContent = open.text;
    modal_lang = open.lang;
    modal.classList.add("css-open");
  }
  //btnをクリックして、閉じた時
  function close_modal(){
    modal.classList.remove("css-open");
  }
  btn.addEventListener("click", () => {
    img.classList.add("shaking");

    setTimeout(() => {
      img.classList.remove("shaking");

    }, 1000);
  });
});
