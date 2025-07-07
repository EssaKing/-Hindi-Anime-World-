
function showLink(button) {
  const card = button.parentElement;
  const linkBox = card.querySelector(".download-box");
  
  if (linkBox) {
    linkBox.style.display = "block";
    
    // Add click event to download link to show telegram link later
    const downloadLink = linkBox.querySelector("a");
    if (downloadLink) {
      downloadLink.addEventListener("click", function() {
        setTimeout(() => {
          const telegramLink = card.querySelector(".telegram-link");
          if (telegramLink) {
            telegramLink.style.display = "block";
          }
        }, 1000); // Show telegram link after 1 second delay
      });
    }
  }
}

function filterAnime() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".anime-card");
  
  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}
