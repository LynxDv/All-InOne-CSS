const cards = document.querySelectorAll(".card");

const handleMouseMove = (e) => {
  const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - left - width / 2) / 10; // Normalize and reduce rotation intensity
  const y = (e.clientY - top - height / 2) / 10;

  e.currentTarget.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)";
};

cards.forEach((card) => {
  card.addEventListener("mousemove", handleMouseMove);
  card.addEventListener("mouseleave", handleMouseLeave);
});

function goToInstall() {
  window.location.href = "./docs/docs.html";
}
