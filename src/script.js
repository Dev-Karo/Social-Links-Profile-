const btnAll = document.querySelectorAll(".btn");

btnAll.forEach((btnAlls) => {
  btnAlls.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    btnAlls.classList.add("active");
  });
});
