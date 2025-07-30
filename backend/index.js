
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { OrderModel } = require('./model/OrderModel');
const cors = require("cors");

// Validate environment variables
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
if (!url) {
  console.error("MONGO_URL is not set in environment variables.");
  process.exit(1);
}


const app = express();
app.use(express.json());
app.use(cors());


// Health check route
app.get("/", (req, res) => {
  res.send("Hello, Traders");
});

// Add sample holdings (for demo/testing)
app.get("/addholding", async (req, res) => {
  try {
    await HoldingModel.deleteMany({});
    const tempHoldings = [
      { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%", isLoss: false },
      { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%", isLoss: false },
      { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%", isLoss: false },
      { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
      { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%", isLoss: false },
      { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%", isLoss: false },
      { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
      { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%", isLoss: false },
      { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: true },
      { name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%", isLoss: false },
      { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
      { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
      { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%", isLoss: false },
    ];
    await HoldingModel.insertMany(tempHoldings);
    res.send("Holdings added successfully");
  } catch (err) {
    console.error("Error adding holdings:", err);
    res.status(500).send("Error adding holdings: " + err.message);
  }
});

// Add sample positions (for demo/testing)
app.get("/addposition", async (req, res) => {
  try {
    await PositionModel.deleteMany({});
    const tempPosition = [
      { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
      { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
    ];
    await PositionModel.insertMany(tempPosition);
    res.send("Position added successfully");
  } catch (err) {
    console.error("Error adding positions:", err);
    res.status(500).send("Error adding positions: " + err.message);
  }
});

// Get all holdings
app.get('/allholding', async (req, res) => {
  try {
    const allHolding = await HoldingModel.find({});
    res.json(allHolding);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).send("Error fetching holdings: " + err.message);
  }
});

// Create a new order
app.post('/neworder', async (req, res) => {
  try {
    const { name, qty, price, currPrice, mode } = req.body;
    if (!name || !qty || !price || !mode) {
      return res.status(400).send("All fields (name, qty, price, mode) are required.");
    }
    const quantity = Number(qty);
    const orderPrice = Number(price);

    if (mode === 'SELL') {
      const existingHolding = await HoldingModel.findOne({ name });

      if (!existingHolding || existingHolding.qty < quantity) {
        return res.status(400).send("Not enough quantity to sell.");
      }

      existingHolding.qty -= quantity;

      if (existingHolding.qty === 0) {
        await HoldingModel.deleteOne({ _id: existingHolding._id });
      } else {
        await existingHolding.save();
      }
    } else if (mode === "BUY") {
      const existingHolding = await HoldingModel.findOne({ name });

      if (existingHolding) {
        const totalQty = existingHolding.qty + quantity;
        const avgPrice = (existingHolding.price * existingHolding.qty + orderPrice * quantity) / totalQty;

        existingHolding.qty = totalQty;
        existingHolding.price = avgPrice;
        existingHolding.currPrice = currPrice;
        await existingHolding.save();
      } else {
        const newHolding = new HoldingModel({
          name,
          qty: quantity,
          avg: orderPrice,
          price: currPrice,
          net: `${((currPrice - orderPrice) / currPrice) * 100}`,
          day: '0.00',
          isLoss: false
        });
        await newHolding.save();
      }
    }

    const newOrder = new OrderModel({ name, qty: quantity, price:orderPrice, mode });
    await newOrder.save();
    res.status(201).send("Order created successfully");
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get all orders
app.get('/allorder', async (req, res) => {
  try {
    const allOrder = await OrderModel.find({});
    res.json(allOrder);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).send("Error fetching orders: " + err.message);
  }
});

// Start server and connect to MongoDB
const startServer = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`App started at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  }
};

startServer();