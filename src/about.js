export function loadAbout() {
  const contentDiv = document.getElementById("content");

  // Clear previous content
  contentDiv.innerHTML = "";

  // Create and append the about content
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about");

  const aboutTitle = document.createElement("h2");
  aboutTitle.innerText = "About Us";
  aboutDiv.appendChild(aboutTitle);

  const aboutDescription = document.createElement("p");
  aboutDescription.innerText =
    "At The Delicious Restaurant, we pride ourselves on serving delicious, fresh food with exceptional customer service. Come and experience a taste of perfection!";
  aboutDiv.appendChild(aboutDescription);

  contentDiv.appendChild(aboutDiv);
}
