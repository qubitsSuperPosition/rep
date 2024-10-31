// assets/js/menu.js

async function loadMenu() {
  try {
    const response = await fetch("../data/menu.xml");
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");

    const setGridColumns = (container, itemCount) => {
      const columns = Math.min(itemCount, 4);
      container.style.display = "grid";
      container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    };

    // Meals
    const mealsContainer = document.getElementById("meals");
    const meals = xmlDoc.getElementsByTagName("meal");
    mealsContainer.innerHTML = "";

    for (let meal of meals) {
      const name = meal.getElementsByTagName("name")[0].textContent;
      const price = meal.getElementsByTagName("price")[0].textContent;
      const description =
        meal.getElementsByTagName("description")[0].textContent;
      const image = meal.getElementsByTagName("image")[0].textContent;

      const mealDiv = document.createElement("div");
      mealDiv.classList.add("meal");

      const mealImage = document.createElement("img");
      mealImage.src = image;
      mealImage.alt = name;
      mealImage.classList.add("meal-image");

      const mealName = document.createElement("h3");
      mealName.textContent = name;
      mealName.classList.add("meal-name");

      const mealPrice = document.createElement("p");
      mealPrice.textContent = price;
      mealPrice.classList.add("meal-price");

      const mealDescription = document.createElement("p");
      mealDescription.textContent = description;
      mealDescription.classList.add("meal-description");

      mealDiv.appendChild(mealImage);
      mealDiv.appendChild(mealName);
      mealDiv.appendChild(mealPrice);
      mealDiv.appendChild(mealDescription);

      mealsContainer.appendChild(mealDiv);
    }
    setGridColumns(mealsContainer, meals.length);

    // Hot Beverages
    const hotBeveragesContainer = document.getElementById("hot-beverages");
    const hotBeverages = xmlDoc
      .getElementsByTagName("hotBeverages")[0]
      .getElementsByTagName("beverage");
    hotBeveragesContainer.innerHTML = "";

    for (let beverage of hotBeverages) {
      const size = beverage.getElementsByTagName("size")[0]?.textContent || "";
      const price = beverage.getElementsByTagName("price")[0].textContent;
      const description =
        beverage.getElementsByTagName("description")[0].textContent;

      const beverageDiv = document.createElement("div");
      beverageDiv.classList.add("beverage");

      const beverageSize = document.createElement("h3");
      beverageSize.textContent = size;
      beverageSize.classList.add("beverage-size");

      const beveragePrice = document.createElement("p");
      beveragePrice.textContent = price;
      beveragePrice.classList.add("beverage-price");

      const beverageDescription = document.createElement("p");
      beverageDescription.textContent = description;
      beverageDescription.classList.add("beverage-description");

      beverageDiv.appendChild(beverageSize);
      beverageDiv.appendChild(beveragePrice);
      beverageDiv.appendChild(beverageDescription);

      hotBeveragesContainer.appendChild(beverageDiv);
    }
    setGridColumns(hotBeveragesContainer, hotBeverages.length);

    // Other Beverages
    const otherBeveragesContainer = document.getElementById("other-beverages");
    const otherBeverages = xmlDoc
      .getElementsByTagName("otherBeverages")[0]
      .getElementsByTagName("beverage");
    otherBeveragesContainer.innerHTML = "";

    for (let beverage of otherBeverages) {
      const name = beverage.getElementsByTagName("name")[0].textContent;
      const price = beverage.getElementsByTagName("price")[0].textContent;

      const beverageDiv = document.createElement("div");
      beverageDiv.classList.add("beverage");

      const beverageName = document.createElement("h3");
      beverageName.textContent = name;
      beverageName.classList.add("beverage-name");

      const beveragePrice = document.createElement("p");
      beveragePrice.textContent = price;
      beveragePrice.classList.add("beverage-price");

      beverageDiv.appendChild(beverageName);
      beverageDiv.appendChild(beveragePrice);

      otherBeveragesContainer.appendChild(beverageDiv);
    }
    setGridColumns(otherBeveragesContainer, otherBeverages.length);
  } catch (error) {
    console.error("Error loading menu:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadMenu);
