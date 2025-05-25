import restImage from "./rest.avif";
export function loadHomepage() {
  const contentDiv = document.getElementById("content");

  // Clear previous content
  contentDiv.innerHTML = "";

  // Create a div for the homepage content
  const homepageDiv = document.createElement("div");
  homepageDiv.classList.add("homepage");

  // Create and append a headline
  const headline = document.createElement("h2");
  headline.innerText = "Welcome to The Delicious Restaurant!";
  homepageDiv.appendChild(headline);

  // Create and append an image
  const img = document.createElement("img");
  img.src =
    "https://unsplash.com/photos/a-restaurant-filled-with-lots-of-tables-and-chairs-I8Rf3tItuHEs";
  img.alt = "Restaurant Image";
  homepageDiv.appendChild(img);

  // Create and append a paragraph of text
  const description = document.createElement("p");
  description.innerText =
    "At The Delicious Restaurant, we offer a delightful dining experience with a variety of amazing dishes that will make your taste buds dance! Our talented chefs use only the freshest ingredients to craft delicious meals for you and your loved ones.";
  homepageDiv.appendChild(description);

  // Append the homepage content to the #content div
  contentDiv.appendChild(homepageDiv);
}
