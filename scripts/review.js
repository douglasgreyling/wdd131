const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productList = document.getElementById("products");

const pluralize = (count, singular, plural) => count === 1 ? singular : plural;

products.forEach(product => {
  const li = document.createElement("li");

  const reviewCount = parseInt(localStorage.getItem(product.id));

  li.innerHTML = `${product.name} (${product.averagerating} rating over ${reviewCount || 0} ${pluralize(reviewCount, "review", "reviews")})`;

  productList.appendChild(li);
});