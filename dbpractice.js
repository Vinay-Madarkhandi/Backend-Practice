const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwtPassword = "123456";

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://vinaym:Maderchod123$@cluster0.bxsfayt.mongodb.net/userData",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Could not connect to MongoDB:", error);
    process.exit(1);
  }
}
main();

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      return res.status(400).json({ msg: "Username already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ msg: "Sign up Successful" });
  } catch (error) {
    console.error("Error during sign up:", error);
    res.status(500).json({
      msg: "Something went wrong during sign up!",
    });
  }
});

async function userExists(username, password) {
  try {
    const user = await User.findOne({ username: username });

    if (!user) {
      return false;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    return isMatch;
  } catch (error) {
    console.error("Error during user existence check:", error);
    return false;
  }
}

app.post("/signin", async function (req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ msg: "Username and password are required" });
  }

  const exists = await userExists(username, password);
  if (!exists) {
    return res.status(403).json({
      msg: "Invalid username or password",
    });
  }

  const token = jwt.sign({ username: username }, jwtPassword, {
    expiresIn: "1h",
  });

  return res.json({
    token,
    msg: "Signin Successful",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
