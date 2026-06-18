function playCakeAnimation(recipe, done) {
  const circle = document.getElementById("alchemyCircle");
  const dropText = document.getElementById("dropText");

  circle.classList.add("glow");
  dropText.textContent = "錬成中...";

  setTimeout(() => {
    dropText.textContent = "材料を再構成中...";
  }, 700);

  setTimeout(() => {
    dropText.textContent = "完成";
  }, 1400);

  setTimeout(() => {
    circle.classList.remove("glow");
    dropText.textContent = "ここに置く";

    done(recipe);
  }, 2200);
}
