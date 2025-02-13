document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".title").addEventListener("click", function() {
    document.querySelector(".container").classList.add("open");
  });

  document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".container").classList.remove("open");
  });
});
