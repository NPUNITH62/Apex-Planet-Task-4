/* ===== To-Do App ===== */
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskList = document.getElementById("taskList");

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task;
    let btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = () => { deleteTask(index); };
    li.appendChild(btn);
    taskList.appendChild(li);
  });
}
function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim()) {
    tasks.push(input.value.trim());
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    renderTasks();
  }
}
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}
renderTasks();

/* ===== Product Listing ===== */
const products = [
  { name: "Laptop", price: 800, category: "electronics" },
  { name: "Headphones", price: 50, category: "electronics" },
  { name: "Shirt", price: 20, category: "clothing" },
  { name: "Jacket", price: 60, category: "clothing" }
];
const productList = document.getElementById("productList");

function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach(p => {
    let div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `<h4>${p.name}</h4><p>Price: $${p.price}</p><p>${p.category}</p>`;
    productList.appendChild(div);
  });
}
function filterProducts() {
  const filter = document.getElementById("categoryFilter").value;
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);
  renderProducts(filtered);
}
function sortProducts() {
  const option = document.getElementById("sortOption").value;
  let sorted = [...products];
  if (option === "priceLow") sorted.sort((a,b) => a.price - b.price);
  if (option === "priceHigh") sorted.sort((a,b) => b.price - a.price);
  renderProducts(sorted);
}
renderProducts(products);

/* ===== Contact Form ===== */
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully!");
});
