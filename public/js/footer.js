let socialShape = document.querySelectorAll(".social__items");
socialShape.forEach((shape) => {
  let links = shape.querySelector("a");
  let icons = shape.querySelector("img");
  let bgIcon = shape.dataset.bg
  shape.style.setProperty('--bg-icons',bgIcon)
  if (links && icons) {
    links.addEventListener("mouseover", (e) => {
      e.stopPropagation();
      links.classList.add("show_name-social");
      links.style.setProperty("--name-social", `"${icons.alt}"`);
    });
    document.addEventListener("mouseout", () => {
      links.classList.remove("show_name-social");
    });
  }
});
