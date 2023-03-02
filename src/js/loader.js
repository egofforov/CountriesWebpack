const loaderEl = document.querySelector(".loader");

const loderToggle = (info) => {
  if (info) {
    loaderEl.classList.remove("hidden");
  } else {
    loaderEl.classList.add("hidden");
  }
};

export default loderToggle;
