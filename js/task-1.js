const categList = document.getElementById("categories");
const itemList = categList.querySelectorAll(".item");

console.log(`Number of categories: ${itemList.length}`);

itemList.forEach((item) => {
  const categName = item.querySelector("h2").textContent;
  const categEl = item.querySelectorAll("li");
  console.log(`Category: ${categName}`);
  console.log(`Elements: ${categEl.length}`);
});
