//Open projects in a modal
function openInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}

const portfolioContainer = document.querySelector(".portfolio-items");

portfolioContainer.addEventListener("click", e => {
  //console.log(e)
  e.preventDefault();

  const modalWeblink = e.target.closest(".portfolio-weblink");
  console.log(modalWeblink);

  const modalToggle = e.target.closest(".portfolio-link");
  //console.log(modalToggle)
  if (!modalToggle) return;

  const modal = modalToggle.parentNode.nextElementSibling;
  const closeButton = modal.querySelector(".modal-close");

  const modalOpen = _ => {
    modal.classList.add("is-open");
    modal.style.animation = "modalIn 500ms forwards";
  };

  const modalClose = _ => {
    modal.classList.remove("is-open");
    modal.removeEventListener("animationend", modalClose);
  };

  closeButton.addEventListener("click", _ => {
    modal.style.animation = "modalOut 500ms forwards";
    modal.addEventListener("animationend", modalClose);
  });

  document.addEventListener("keydown", e => {
    if (e.keyCode === 27) {
      modal.style.animation = "modalOut 500ms forwards";
      modal.addEventListener("animationend", modalClose);
      document.body.style.overflowY = "scroll";
    }
  });

  modalOpen();
});
