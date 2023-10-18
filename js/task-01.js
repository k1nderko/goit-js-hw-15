const list = document.querySelector("#categories");
const listItems = list.children;
const numberOfCategories = listItems.length;

console.log(`Number of categories: ${numberOfCategories}`);

Array.from(listItems).forEach((item) => {
  const categoryTitle = item.firstElementChild.textContent;
  const categoryItemsCount = item.lastElementChild.children.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsCount}`);
});