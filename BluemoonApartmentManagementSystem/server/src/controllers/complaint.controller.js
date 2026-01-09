const prisma = require("../prisma/client");

exports.getAllComplaints = async (req, res) => {
    res.json(await prisma.complaint.findMany());
}

exports.createcomplaint = async (req, res) => {
    try {
        const { description } = req.body;
        const userId = req.userId;

        if(!userId || !description){
            return res.status(400).json({ message: "Missing required fields" });
        }

        const user = await prisma.user.findUnique({ where: { id: userId } });
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }

        const newComplaint = await prisma.complaint.create({
            data: {
                userId: userId,
                content: description.trim(),
                complaintStatus: "UNSOLVED"
            }
        });

        return res.status(201).json(newComplaint);
    } catch (err){
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

exports.deleteComplaint = async (req, res) => {
  const id = parseInt(req.params.id);

  await prisma.complaint.delete({
    where: { id }
  });

  res.json({ message: "Deleted" });
};



// exports.getComplaintById = async (req, res) => {
//     const { id } = req.params;
//     res.json(await prisma.complaint.findUnique({ where: { id: parseInt(id) } }));
// }

// exports.updateComplaintStatus = async (req, res) => {
    
// }