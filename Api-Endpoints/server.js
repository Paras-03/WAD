const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Student = require("./models/Student");

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(cors());

const uri = "mongodb+srv://22123078:9wWf0iricpM7DaA4@cluster0.o3fhbe3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

app.post('/students', async(req, res) => {
    try{
        const student = new Student(req.body);
        await student.save();

        res.status(201).json(student);
    } catch (err) {
        console.log(err);
        res.status(400).json({error: err.message});
    }
});

app.get('/students', async(req, res) => {
    const students = await Student.find();
    res.json(students);
});

app.get("/students/:id", async(req,res) => {
    try {
        const student = await Student.findById(req.params.id);

        if(!student) return res.status(404).send('Student not found...');
        res.json(student);
    } catch (err) {
        console.log(err);
        res.status(400).json({error: err.message});
    }
});

app.put("/students/:id", async(req, res) => {
    try {
        const updated = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updated) return res.status(404).send("Student not updated...");
        res.json(updated);
    } catch (err) {
        console.log(err);
        res.status(400).json({error: err.message});
    }
})

app.delete("/students/:id", async(req, res) => {
    try {
        const deleted = await Student.findByIdAndDelete(req.params.id);

        if(!deleted) return res.status(404).send('Student not found...');
        res.json({message: "Student deleted successfully"});
    } catch (err) {
        res.status(400).json({error: err.message});
    }
})

app.listen(PORT, () => {
    console.log(`Port running on localhost:${PORT}.`);
});
