const dialogElem = document.getElementById("dialog");
const dialogImageElem = document.getElementById("dialog-image");
const showBtns = document.querySelectorAll(".show");
const closeBtn = document.querySelector(".close");

[...showBtns].forEach((showBtn) => {
  showBtn.addEventListener("click", (event) => {
    // Assumes the image is the previous sibling
    const imgSrc =
      event.currentTarget.previousElementSibling.getAttribute("src");
    dialogImageElem.setAttribute("src", imgSrc);
    dialogImageElem.addEventListener("load", () => {
      dialogElem.showModal();
    });
  });
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
