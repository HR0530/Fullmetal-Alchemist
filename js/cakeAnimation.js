function playCakeAnimation(recipe, done) {
  const circle = document.getElementById("alchemyCircle");
  const dropText = document.getElementById("dropText");

  circle.classList.add("glow");
  dropText.textContent = "錬成中...";

  setTimeout(() => {
    dropText.textContent = "材料を再構成中...";
  }, 700);

  setTimeout(() => {
    dropText.textContent = "誕生日ケーキを錬成中...";
  }, 1400);

  setTimeout(() => {
    dropText.textContent = "錬成成功";
  }, 2100);

  setTimeout(() => {
    circle.classList.remove("glow");
    done(recipe);
  }, 2800);
}
