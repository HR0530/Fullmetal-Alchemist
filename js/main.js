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

/* --------------------
アイテム生成
-------------------- */

function renderItems() {
ITEMS.forEach(item => {

```
const el = document.createElement("div");

el.className = "item";
el.dataset.id = item.id;

el.innerHTML = `
  <div class="emoji">${item.emoji}</div>
  <span>${item.name}</span>
`;

el.addEventListener("click", () => {
  absorbItem(item.id, el);
});

itemLayer.appendChild(el);
```

});
}

/* --------------------
アイテム投入
-------------------- */

function absorbItem(id, element) {

if (selected.includes(id)) {

```
const item = ITEMS.find(item => item.id === id);

showToast(`${item.name}はすでに入っています`);

return;
```

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

```
selected.push(id);

updateSelected();

element.classList.remove("absorbing");
element.classList.add("used");

showToast(`${item.name}が入りました`);
```

}, 650);
}

/* --------------------
投入済み表示
-------------------- */

function updateSelected() {

selectedList.innerHTML = "";

selected.forEach(id => {

```
const item = ITEMS.find(item => item.id === id);

const chip = document.createElement("span");

chip.className = "chip";
chip.textContent = item.name;

chip.addEventListener("click", () => {

  selected =
    selected.filter(
      selectedId => selectedId !== id
    );

  const target =
    document.querySelector(
      `.item[data-id="${id}"]`
    );

  if (target) {
    target.classList.remove("used");
  }

  updateSelected();

  showToast(
    `${item.name}を取り出しました`
  );

});

selectedList.appendChild(chip);
```

});

}

/* --------------------
レシピ判定
-------------------- */

function normalize(list) {
return [...list].sort().join(",");
}

function findRecipe() {

const currentItems =
normalize(selected);

return RECIPES.find(recipe => {

```
return (
  normalize(recipe.required)
  === currentItems
);
```

});
}

/* --------------------
錬成
-------------------- */

function alchemy() {

if (selected.length === 0) {

```
showResult({
  title: "材料がありません",
  visual: "？",
  text: "錬成陣にアイテムを入れてください。",
  type: "fail"
});

return;
```

}

const recipe = findRecipe();

if (!recipe) {

```
playTransmutationEffect(() => {

  showResult({
    title: "錬成失敗",
    visual: "💨",
    text: "材料の組み合わせが違うようです。",
    type: "fail"
  });

});

return;
```

}

if (recipe.type === "cake") {

```
if (
  typeof playCakeAnimation ===
  "function"
) {

  playCakeAnimation(
    recipe,
    showResult
  );

} else {

  showResult(recipe);

}
```

} else {

```
playTransmutationEffect(() => {

  showResult(recipe);

});
```

}

}

/* --------------------
雷エフェクト
-------------------- */

function playTransmutationEffect(callback) {

const effectLayer =
document.getElementById(
"effectLayer"
);

const circle =
document.getElementById(
"alchemyCircle"
);

effectLayer.classList.remove(
"hidden"
);

circle.classList.add("glow");

setTimeout(() => {

```
effectLayer.classList.add(
  "hidden"
);

circle.classList.remove(
  "glow"
);

callback();
```

}, 1300);
}

/* --------------------
結果表示
-------------------- */

function showResult(recipe) {

resultTitle.textContent =
recipe.title;

resultText.textContent =
recipe.text;

resultVisual.className =
"result-visual";

resultVisual.innerHTML = "";

if (recipe.image) {

```
resultVisual.innerHTML = `
  <img
    src="${recipe.image}"
    class="result-image"
  >
`;
```

} else {

```
resultVisual.textContent =
  recipe.visual;
```

}

if (recipe.type === "fail") {

```
resultVisual.classList.add(
  "shake"
);
```

}

if (recipe.type === "cake") {

```
resultVisual.classList.add(
  "glow"
);
```

}

if (recipe.type === "cake") {

```
letterBtn.classList.remove(
  "hidden"
);
```

} else {

```
letterBtn.classList.add(
  "hidden"
);
```

}

resultModal.classList.remove(
"hidden"
);
}

/* --------------------
リセット
-------------------- */

function resetSelected() {

selected = [];

document
.querySelectorAll(".item")
.forEach(el => {

```
  el.classList.remove("used");
  el.classList.remove(
    "absorbing"
  );

});
```

updateSelected();

showToast(
"リセットしました"
);
}

/* --------------------
トースト
-------------------- */

function showToast(message) {

let toast =
document.getElementById(
"toast"
);

if (!toast) {

```
toast =
  document.createElement(
    "div"
  );

toast.id = "toast";
toast.className = "toast";

document.body.appendChild(
  toast
);
```

}

toast.textContent = message;

toast.classList.add("show");

setTimeout(() => {

```
toast.classList.remove(
  "show"
);
```

}, 1200);
}

/* --------------------
ボタン
-------------------- */

alchemyBtn.addEventListener(
"click",
alchemy
);

resetBtn.addEventListener(
"click",
resetSelected
);

closeModal.addEventListener(
"click",
() => {

```
resultModal.classList.add(
  "hidden"
);
```

}
);

letterBtn.addEventListener(
"click",
() => {

```
resultTitle.textContent =
  "Happy Birthday";

resultVisual.innerHTML = "✉️";

resultText.innerHTML = `
  誕生日おめでとう。<br>
  （ここに手紙本文）
`;

letterBtn.classList.add(
  "hidden"
);
```

}
);

/* --------------------
初期化
-------------------- */

renderItems();
