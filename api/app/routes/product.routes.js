module.exports = app => {
  const products = require("../controller/product.controller.js");

  // Create a new Product
  app.post("/products", products.create);

  // Retrieve all Products
  app.get("/allProducts", products.findAll);

  // Update a product with productId
  app.put("/updateProduct/:productId", products.update);

  // Delete a product with productId
  app.delete("/deleteProduct/:productId", products.delete);

  
};