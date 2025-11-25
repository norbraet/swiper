const swiper = document.getElementById("swipe");
swiper.addEventListener("scroll", onScroll);

function onScroll(e) {
  const scrollDiv = e.currentTarget;
  const scrollCenter = scrollDiv.scrollWidth / 2;
  const viewportCenter = scrollDiv.clientWidth / 2;
  const current = scrollDiv.scrollLeft + viewportCenter;
  const deltaX = current - scrollCenter;

  console.log(deltaX);
}

// Initialize scroll position to center
const holds = document.querySelectorAll(".hold");
holds.forEach((holdParent) => {
  const hold = holdParent.children[1];
  requestAnimationFrame(() => {
    holdParent.scrollLeft = hold.offsetLeft;
    holdParent.classList.add("ready");
  });
});
