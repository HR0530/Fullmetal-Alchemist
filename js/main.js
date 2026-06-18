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
let holdingItemId = null;

function renderItems() {
  ITEMS.forEach(item => {
    const el = document.createElement("div");

    el.className = "item";
    el.dataset.id = item.id;

    el.style.left = item.x + "%";
    el.style.top = item.y + "%";

    el.innerHTML = `
      <div class="emoji">${item.emoji}</div>
      <span>${item.name}</span>
    `;

    el.addEventListener("click", () => {
      holdItem(item.id);
    });

    itemLayer.appendChild(el);
  });
}

function holdItem(id) {
  holdingItemId = id;

  document.querySelectorAll(".item").forEach(el => {
    el.classList.remove("holding");
  });

  const target = document.querySelector(`.item[data-id="${id}"]`);
  if (target) {
    target.classList.add("holding");
  }

  const item = ITEMS.find(item => item.id === id);
  showToast(`${item.name}を持ちました`);
}

dropZone.addEventListener("click", () => {
  if (!holdingItemId) {
    showToast("先にアイテムを選んでください");
    return;
  }

  addItemToCircle(holdingItemId);
});

function addItemToCircle(id) {
  if (selected.includes(id)) {
    const item = ITEMS.find(item => item.id === id);
    showToast(`${item.name}はすでに入っています`);
    return;
  }

  const item = ITEMS.find(item => item.id === id);

  if (!item) {
    return;
  }

  selected.push(id);
  updateSelected();

  showToast(`${item.name}が入りました`);

  const target = document.querySelector(`.item[data-id="${id}"]`);
  if (target) {
    target.classList.add("used");
    target.classList.remove("holding");
  }

  holdingItemId = null;
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
      text: "錬成陣の中央にアイテムを入れてください。",
      type: "fail"
    });

    return;
  }

  const recipe = findRecipe();

  if (!recipe) {
    showResult({
      title: "錬成失敗",
      visual: "💨",
      text: "材料の組み合わせが違うようです。",
      type: "fail"
    });

    return;
  }

  if (recipe.type === "cake") {
    playCakeAnimation(recipe, showResult);
  } else {
    showResult(recipe);
  }
}

function showResult(recipe) {
  resultTitle.textContent = recipe.title;
  resultText.textContent = recipe.text;
  resultVisual.textContent = recipe.visual;

  resultVisual.className = "result-visual";

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
  holdingItemId = null;

  document.querySelectorAll(".item").forEach(el => {
    el.classList.remove("used");
    el.classList.remove("holding");
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
  resultVisual.textContent = "✉️";

  resultText.innerHTML = `
    誕生日おめでとう。<br>
    ここに手紙本文を入れる。
  `;

  letterBtn.classList.add("hidden");
});

renderItems();
