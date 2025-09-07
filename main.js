document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-click");
  const img = document.getElementById("img");
  const retry_btn = document.getElementById("retry-btn");
  //modal
  const modal = document.getElementById("js-modal");
  const close_btn = modal.querySelector(".js-close-btn");
  const modal_img = modal.querySelector(".js-img");
  const modal_text = modal.querySelector(".js-text");
  const modal_desc  = modal.querySelector(".js-result-desc");
  // ラッキー表示
  const lucky_lang = modal.querySelector(".js-lucky-lang");
  const lucky_db = modal.querySelector(".js-lucky-db");
  const lucky_edit = modal.querySelector(".js-lucky-editor");
  //random pick
  const result=[
    {text:"大吉",img:"/img/omikuji_daikichi.png",lang:"リリースしたソフトウェアにバグが見つかりますが、再現性が低いためユーザーも上司も誰ひとり気付かないでしょう。見なかったことにするのが吉。"},
    {text:"中吉",img:"/img/omikuji_chuukichi.png",lang:"リリースしたソフトウェアに深刻なバグが見つかりますが、口八丁な営業のお陰で事無きを得るでしょう。ただし、後日それを理由に無茶振りされるおそれがあるので油断は禁物です。"},
    {text:"小吉",img:"/img/omikuji_syoukichi.png",lang:"リリース前のソフトウェアにバグが見つかります。貴方のお勤め先が上流の企業ならばそれほど大きな問題にはなりませんが、三次請けよりも下流の場合はご愁傷様でございます。"},
    {text:"吉",img:"/img/omikuji_kichi.png",lang:"開発の要件定義が綿飴のようにふわっふわです。手遅れにならないうちに手を打っておくのが吉。"},
    {text:"凶",img:"/img/omikuji_kyou.png",lang:"前任者から引き継いだコードがスパゲティ状態です。残念ながらあなたの力ではどうにもならないので、せめて自分はこんなコードを書かないように今後の糧にしましょう。"},
    {text:"末吉",img:"/img/omikuji_suekichi.png",lang:"リリース直前に致命的なバグが見つかるでしょう。お泊まりの準備をして出社するのが吉。"}
  ];

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  // ラッキー表示の内容
  const langs   = ["C#", "C++", "JavaScript", "Python", "TypeScript", "Rust", "Kotlin","Java","Ruby", "PHP"];
  const dbs     = ["SQL Server", "MySQL", "Oracle Database"];
  const edits = ["Visual Studio Code", "Emacs", "nano", "Vim", "Atom"];

  //btnをクリックして、開いたとき
  function open_modal(open){
    modal_img.src = open.img;
    modal_img.alt = `おみくじ：${open.text}`;
    modal_text.textContent = open.text;
    modal_desc.textContent = open.lang;              // ← 説明文セット

    // ラッキー3種をランダムで
    lucky_lang.textContent   = pick(langs);
    lucky_db.textContent     = pick(dbs);
    lucky_edit.textContent = pick(edits);
    modal.classList.add("css-open");
    const modalWindow = modal.querySelector(".window");
    if(modalWindow){
      modalWindow.scrollTop = 0;
    }
  }
  //btnをクリックして、閉じた時
  function close_modal(){
    modal.classList.remove("css-open");
  }
  btn.addEventListener("click", () => {
    img.classList.add("shaking");

    setTimeout(() => {
      img.classList.remove("shaking");
      const random_pick = result[Math.floor(Math.random() * result.length)];
      open_modal(random_pick);

    }, 1000);
  });
  // ×ボタンで閉じる
  if (close_btn) {
    close_btn.addEventListener("click", close_modal);
  }
  //retry-btn
  if(retry_btn){
    retry_btn.addEventListener("click", close_modal);
  }
});
  