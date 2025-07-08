
document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", function () {
    document.querySelectorAll(".box").forEach((b) => {
      if (b !== box) b.classList.remove("active");
    });
    box.classList.toggle("active");
  });

  box.querySelectorAll(".color, .size").forEach(button => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const selection = {
        box: box.getAttribute("data-box"),
        choice: button.textContent,
        type: button.className
      };

      fetch("http://localhost:3000/selection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(selection)
      }).then(res => console.log("Logged:", selection));
    });
  });
});
