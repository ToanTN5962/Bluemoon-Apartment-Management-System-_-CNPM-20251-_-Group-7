const e = require("express");
const prisma = require("../prisma/client");
const jwt = require("jsonwebtoken");

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
        name: fullName,
        email,
        password, // TODO: hash password
        phone: phoneNum
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

    const token = jwt.sign({userId: user.id, email: user.email, role: user.role}, process.env.JWT_SECRET, { expiresIn: "1h" });

    return res.json({
      message: "Login success",
      user,
      token
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

const getinfo = async (req, res) => {
  try{
    const user = await prisma.user.findUnique({where: {id: req.userId}});
    const resident = await prisma.resident.findUnique({where: {id: user.residentId}})
    const household = await prisma.household.findUnique({where: {id: resident.householdId}})
    return res.json({
      user,
      resident,
      household
    });
  } catch(err){
    return res.status(500).json({error: err.message});
  };
};

module.exports = {
  signup,
  login,
  getinfo
};
