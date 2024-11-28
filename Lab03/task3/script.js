// script.js

document.addEventListener("DOMContentLoaded", () => {
    const API_URL = "https://dummyjson.com/products";
    const filterInput = document.getElementById("filterInput");
    const sortSelect = document.getElementById("sortSelect");
    const dataTable = document.getElementById("dataTable").querySelector("tbody");
  
    let products = [];
    let filteredProducts = [];
  

    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        products = data.products.slice(0, 30);
        filteredProducts = [...products];
        renderTable(filteredProducts);
      })
      .catch(error => console.error("Error fetching data:", error));
  

    function renderTable(data) {
      dataTable.innerHTML = "";
      data.forEach(product => {
        const row = `
          <tr>
            <td><img src="${product.thumbnail}" alt="${product.title}" /></td>
            <td>${product.title}</td>
            <td>${product.description}</td>
          </tr>
        `;
        dataTable.insertAdjacentHTML("beforeend", row);
      });
    }
  

    filterInput.addEventListener("input", () => {
      const query = filterInput.value.toLowerCase();
      filteredProducts = products.filter(
        product =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
      renderTable(filteredProducts);
    });
  

    sortSelect.addEventListener("change", () => {
      const sortOption = sortSelect.value;
      if (sortOption === "asc") {
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortOption === "desc") {
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
      } else {
        filteredProducts = [...products];
      }
      renderTable(filteredProducts);
    });
  });