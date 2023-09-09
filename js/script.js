function placeToggle(n) {
  let targetButton = document.querySelector(`#btn-${n}`);
  if (n > 0) {
    targetButton.classList.toggle("active");
  } else {
    let i = 1;
    while (i < 13) {
      document.querySelector(`#btn-${i}`).classList.remove("active");
      i++
    }
  }
}
