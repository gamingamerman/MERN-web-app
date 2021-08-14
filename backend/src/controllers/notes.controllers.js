const notesCtrl = {};

const Note = require("../models/note")

notesCtrl.getNotes = async (req, res) => {
    notes = await Note.find();
    res.json(notes)
};

notesCtrl.createNotes = async (req, res) => {
    const { title, content, date, author } = req.body
    const newNote = new Note({
        title,
        content,
        date,
        author
    })
    await newNote.save()
    res.json({message: "Note Saved"})
    
}

notesCtrl.updateNote = async(req, res ) => {
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        author,
        content
    });
    res.json({message: "Note Updated"})
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: "Note Deleted"})
}

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id)
    res.json(note)
}

module.exports = notesCtrl;