const coloursBtn = document.querySelectorAll(".colours__btn");
const contentItem = document.querySelectorAll(".content-item");

coloursBtn.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(evt) {
  const target = evt.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);

  coloursBtn.forEach(function (item) {
    item.classList.remove("colours__btn--active");
  });
  target.classList.add("colours__btn--active");

  contentItem.forEach(function (item) {
    item.classList.remove("content-item--active");
  });

  contentActive.forEach(function (item) {
    item.classList.add("content-item--active");
  });
}
