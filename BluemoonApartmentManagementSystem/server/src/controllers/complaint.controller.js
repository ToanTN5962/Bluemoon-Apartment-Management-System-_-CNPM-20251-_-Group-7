const prisma = require("../prisma/client");

exports.getAllComplaints = async (req, res) => {
    res.json(await prisma.complaint.findMany());
}

exports.createComplaint = async (req, res) => {
    const { userId, title, description } = req.body;

    const complaint = await prisma.complaint.create({
        data: {
            userId,
            title,
            description
        }
    });

    res.json(complaint);
}

exports.getComplaintById = async (req, res) => {
    const { id } = req.params;
    res.json(await prisma.complaint.findUnique({ where: { id: parseInt(id) } }));
}

exports.updateComplaintStatus = async (req, res) => {
    
}