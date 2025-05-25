export function loadMenu() {
  const contentDiv = document.getElementById("content");

  // Clear previous content
  contentDiv.innerHTML = "";

  // Create and append the menu content
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const menuTitle = document.createElement("h2");
  menuTitle.innerText = "Our Menu";
  menuDiv.appendChild(menuTitle);

  const menuDescription = document.createElement("p");
  menuDescription.innerText = "Explore our wide variety of delicious dishes!";
  menuDiv.appendChild(menuDescription);

  const menuList = document.createElement("ul");
  menuList.innerHTML = `
    <li>Pizza - $10</li>
    <li>Burger - $8</li>
    <li>Pasta - $12</li>
    <li>Salad - $6</li>
  `;
  menuDiv.appendChild(menuList);

  contentDiv.appendChild(menuDiv);
}
