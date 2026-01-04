const prisma = require("../prisma/client");

/**
 * POST /api/auth/signup
 */
const signup = async (req, res) => {
  try {
    const { fullName, email, password, phoneNum } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Missing email or password"
      });
    }

    const existedUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existedUser) {
      return res.status(409).json({
        message: "Email already exists"
      });
    }

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password, // TODO: hash password
        phoneNum
      }
    });

    return res.status(201).json({
      message: "Signup success",
      user
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

/**
 * POST /api/auth/login
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Missing email or password"
      });
    }

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || user.password !== password) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    return res.json({
      message: "Login success",
      user
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

module.exports = {
  signup,
  login
};
