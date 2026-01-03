const prisma = require("../prisma/client");

// POST /auth/signup
//router.post("/signup", authController.signup);
const signup = async (req, res) => {
  try {
    const { fullName, email, password, phoneNum } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing email or password" });
    }

    const existedUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existedUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password, // tạm thời chưa hash
        phoneNum
      }
    });

    res.status(201).json({
      message: "Signup success",
      user
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// POST /auth/login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login success",
      user
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  signup,
  login
};