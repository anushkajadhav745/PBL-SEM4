const Menu = require("../Model/menu");

exports.addMenuItem = async (req, res) => {
  try {
    const { name, description, price, category, available, preparationTime, rating } = req.body;

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

    const newItem = new Menu({
      name,
      description,
      price,
      category,
      available,
      imageUrl,
      preparationTime,
      rating,
    });

    await newItem.save();
    res.status(201).json({ message: "Menu item added successfully!", menuItem: newItem });
  } catch (err) {
    console.error("Add menu error:", err);
    res.status(500).json({ message: "Failed to add menu item" });
  }
};
