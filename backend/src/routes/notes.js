const { Router } = require("express");
const router = Router()
const { getNotes, createNotes, updateNote, deleteNote, getNote } = require("../controllers/notes.controllers");

router.route("/")
    .get(getNotes)
    .post(createNotes)

router.route("/:id")
    .delete(deleteNote)
    .put(updateNote)
    .get(getNote)

module.exports = router