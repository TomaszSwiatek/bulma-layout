document.addEventListener("DOMContentLoaded", () => {
  const deleteButton = document.querySelector("#btn-delete-note");
  const notification = document.querySelector("#notification");

  deleteButton.addEventListener("click", () => {
    // notification.classList.add("hidden"); //klasa nie chciala dzialac przez nadpisane style w bulmie mimo ze sie dodawala

    notification.style.display = "none";
  });
}); //domContentLoaded end
