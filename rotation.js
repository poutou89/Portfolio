
  document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".list-3d li");
    const imageItems = document.querySelectorAll(".projet ul li");

    let currentIndex = 0;

    function showImage(index) {
      imageItems.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
      });
      currentIndex = index;
    }

    showImage(currentIndex);

    listItems.forEach((item, index) => {
      item.addEventListener("mouseenter", () => {
        showImage(index);
      });
    });
  });
