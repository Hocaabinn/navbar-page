const body = document.querySelector("body");
const navbar = document.querySelector(".navbar"); // Tambahkan titik sebelum "navbar"
const menu = document.querySelector(".menu-list"); // Tambahkan titik sebelum "menu-list"
const menuBtn = document.querySelector(".menu-btn"); // Tambahkan titik sebelum "menu-btn"
const cancelBtn = document.querySelector(".cancel-btn"); // Tambahkan titik sebelum "cancel-btn"

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  body.classList.add("disabledScroll");
};

cancelBtn.onclick = () => {
  // Hapus tanda "=" yang tidak perlu
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  body.classList.remove("disabledScroll");
};

window.onscroll = () => {
  // Ganti "=" dengan "=>"
  window.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};
