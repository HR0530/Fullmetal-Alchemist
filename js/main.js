const itemLayer = document.getElementById("itemLayer");
const dropZone = document.getElementById("dropZone");
const selectedList = document.getElementById("selectedList");
const alchemyBtn = document.getElementById("alchemyBtn");
const resetBtn = document.getElementById("resetBtn");

const resultModal = document.getElementById("resultModal");
const closeModal = document.getElementById("closeModal");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const resultVisual = document.getElementById("resultVisual");
const letterBtn = document.getElementById("letterBtn");

let selected = [];

function renderItems() {
  itemLayer.innerHTML = "";

  ITEMS.forEach(item => {
    const el = document.createElement("div");

    el.className = "item";
    el.dataset.id = item.id;

    el.innerHTML = `
      <img
        src="${item.image}"
        class="item-image"
        alt="${item.name}"
      >
      <span>${item.name}</span>
    `;

    el.addEventListener("click", () => {
      absorbItem(item.id, el);
    });

    itemLayer.appendChild(el);
  });
}

function absorbItem(id, element) {
  if (selected.includes(id)) {
    const item = ITEMS.find(item => item.id === id);
    showToast(`${item.name}はすでに入っています`);
    return;
  }

  const item = ITEMS.find(item => item.id === id);

  const circleRect = dropZone.getBoundingClientRect();
  const itemRect = element.getBoundingClientRect();

  const moveX =
    circleRect.left +
    circleRect.width / 2 -
    (itemRect.left + itemRect.width / 2);

  const moveY =
    circleRect.top +
    circleRect.height / 2 -
    (itemRect.top + itemRect.height / 2);

  element.style.setProperty("--move-x", `${moveX}px`);
  element.style.setProperty("--move-y", `${moveY}px`);

  element.classList.add("absorbing");
  dropZone.classList.add("flash");

  setTimeout(() => {
    dropZone.classList.remove("flash");
  }, 450);

  setTimeout(() => {
    selected.push(id);
    updateSelected();

    element.classList.remove("absorbing");
    element.classList.add("used");

    showToast(`${item.name}が入りました`);
  }, 650);
}

function updateSelected() {
  selectedList.innerHTML = "";

  selected.forEach(id => {
    const item = ITEMS.find(item => item.id === id);

    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = item.name;

    chip.addEventListener("click", () => {
      selected = selected.filter(selectedId => selectedId !== id);

      const target = document.querySelector(`.item[data-id="${id}"]`);

      if (target) {
        target.classList.remove("used");
      }

      updateSelected();
      showToast(`${item.name}を取り出しました`);
    });

    selectedList.appendChild(chip);
  });
}

function normalize(list) {
  return [...list].sort().join(",");
}

function findRecipe() {
  const currentItems = normalize(selected);

  return RECIPES.find(recipe => {
    return normalize(recipe.required) === currentItems;
  });
}

function alchemy() {
  if (selected.length === 0) {
    showResult({
      title: "材料がありません",
      visual: "？",
      text: "錬成陣にアイテムを入れてください。",
      type: "fail"
    });

    return;
  }

  const recipe = findRecipe();

  if (!recipe) {
    playTransmutationEffect(() => {
      showResult({
        title: "錬成失敗",
        visual: "💨",
        text: "材料の組み合わせが違うようです。",
        type: "fail"
      });
    });

    return;
  }

  if (recipe.type === "cake") {
    if (typeof playCakeAnimation === "function") {
      playCakeAnimation(recipe, showResult);
    } else {
      showResult(recipe);
    }
  } else {
    playTransmutationEffect(() => {
      showResult(recipe);
    });
  }
}

function playTransmutationEffect(callback) {
  const effectLayer = document.getElementById("effectLayer");
  const circle = document.getElementById("alchemyCircle");

  effectLayer.classList.remove("hidden");
  circle.classList.add("glow");

  setTimeout(() => {
    effectLayer.classList.add("hidden");
    circle.classList.remove("glow");
    callback();
  }, 1300);
}

function showResult(recipe) {
  resultTitle.textContent = recipe.title;
  resultText.textContent = recipe.text;

  resultVisual.className = "result-visual";
  resultVisual.innerHTML = "";

  if (recipe.image) {
    resultVisual.innerHTML = `
      <img
        src="${recipe.image}"
        class="result-image"
        alt="${recipe.title}"
      >
    `;
  } else {
    resultVisual.textContent = recipe.visual;
  }

  if (recipe.type === "fail") {
    resultVisual.classList.add("shake");
  }

  if (recipe.type === "cake") {
    resultVisual.classList.add("glow");
  }

  if (recipe.type === "cake") {
    letterBtn.classList.remove("hidden");
  } else {
    letterBtn.classList.add("hidden");
  }

  resultModal.classList.remove("hidden");
}

function resetSelected() {
  selected = [];

  document.querySelectorAll(".item").forEach(el => {
    el.classList.remove("used");
    el.classList.remove("absorbing");
  });

  updateSelected();
  showToast("リセットしました");
}

function showToast(message) {
  let toast = document.getElementById("toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1200);
}

alchemyBtn.addEventListener("click", alchemy);
resetBtn.addEventListener("click", resetSelected);

closeModal.addEventListener("click", () => {
  resultModal.classList.add("hidden");
});

letterBtn.addEventListener("click", () => {
  resultTitle.textContent = "Happy Birthday";
  resultVisual.innerHTML = "✉️";

  resultText.innerHTML = `
    <p>まほ、誕生日おめでとう。</p>

    <p>錬成成功。</p>

    <p>
      できあがったのは、賢者の石でも、すごい力を持った何かでもなくて、<br>
      今日のための誕生日ケーキでした。
    </p>

    <p>24歳の誕生日おめでとう。</p>

    <p>
      こうして、誕生日をお祝いできることが本当に嬉しいです。
    </p>

    <p>
      一緒にいる時間の中で、何気ない会話とか、笑っている顔とか、<br>
      そういう一つひとつが、自分にとってすごく大切なものになっています。
    </p>

    <p>
      何か特別なことをしてあげられているかは分からないけど、<br>
      これからも、嬉しいときは一緒に笑って、しんどいときは少しでも支えられる存在でいたいです。
    </p>

    <p>
      24歳の一年が、まほにとって優しくて、楽しくて、<br>
      たくさん笑える一年になりますように。
    </p>

    <p>
      生まれてきてくれてありがとう。<br>
      出会ってくれてありがとう。
    </p>

    <p>
      これからもよろしくね。
    </p>

    <p>誕生日おめでとう。</p>
  `;

  letterBtn.classList.add("hidden");
});
renderItems();
