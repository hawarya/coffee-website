const express = require("express");
const router = express.Router();
const ProductModel = require("../model/productModel");
router.post("/add", async (req, res) => {
  const { name, description, price, image, category } = req.body;
  const newProduct = new ProductModel({
    name,
    description,
    price,
    image,
    category,
  });
  await newProduct.save();
  res.status(200).json({
    message: "Product Added successfully",
    data: newProduct,
  });
});

router.get("/", async (req, res) => {
  try {
    const Product = await ProductModel.find();
    res.send(Product);
  } catch (error) {
    res.send(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/coffee/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/coffee/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProduct = await ProductModel.findByIdAndDelete(id);
    if (!deleteProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      data: deleteProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
