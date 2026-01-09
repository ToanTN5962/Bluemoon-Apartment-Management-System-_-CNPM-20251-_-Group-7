const prisma = require("../prisma/client");

exports.getAll = async (_, res) => {
  res.json(await prisma.user.findMany());
};

exports.getById = async (req, res) => {
  res.json(await prisma.user.findUnique({
    where: { id: Number(req.params.id) }
  }));
};

exports.getAllUpdateRequests = async (_, res) => {
  res.json(await prisma.updateInfo.findMany());
}

// POST api/users/request-update
exports.requestUpdateInfo = async (req, res) => {
  const {userId, fullName, email, phoneNum, identificationNumber /*, householdId, roomNumber */, dateOfBirth} = req.body;

  const missingFields = [];
  if (!fullName) missingFields.push("fullName");
  if (!email) missingFields.push("email");
  if (!identificationNumber) missingFields.push("identificationNumber");
  // if (!roomNumber) missingFields.push("roomNumber");
  if (!dateOfBirth) missingFields.push("dateOfBirth");

  if (missingFields.length > 0) {
    return res.status(400).json({
      message: `Please provide ${missingFields.join(", ")}`
    });
  }

  const birthDateObj = new Date(dateOfBirth);
  if (isNaN(birthDateObj.getTime())) {
    return res.status(400).json({
      message: "Invalid dateOfBirth format. Please use a valid date."
    });
  }

  try {
    const newRequest = await prisma.updateInfo.create({
      data: { 
        user: {
          connect: { id: parseInt(userId) }
        },
        fullName: fullName,
        email: email,
        phoneNum: phoneNum || "",
        identificationNumber: identificationNumber,
        // householdId: parseInt(householdId),
        // roomNumber: roomNumber,
        dateOfBirth: birthDateObj,
        requestStatus: "PENDING"
      }
    });
    res.status(201).json({
      message: "Request submitted successfully. Please wait for admin approval.",
      data: newRequest
    });

  } catch (err) {
    console.error("Error creating update request:", err);
    if (err.code === 'P2003') { // Foreign key constraint failed
      return res.status(404).json({
        message: "User or household not found."
      });
    }
    
    if (err.code === 'P2025') {
       return res.status(404).json({
        message: "User account not found to link request."
      });
    }
    res.status(500).json({
      message: "Internal server error."
    });
  }
};

// GET /api/users/search?q=
exports.search = async (req, res) => {
  try {
    const q = req.query.q;

    if (!q) {
      return res.status(400).json({ message: "Missing query" });
    }

    const users = await prisma.user.findMany({
      where: {
        OR: [
          { email: { contains: q } },
          { phoneNum: { contains: q } },
          { fullName: { contains: q } }
        ]
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        phoneNum: true
      }
    });

    res.json(users);
  } catch (err) {
    console.error("PRISMA SEARCH ERROR:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
