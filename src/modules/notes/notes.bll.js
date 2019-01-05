export class NotesBLL {
    constructor(notesDAL, filesBLL) {
        this._notesDAL = notesDAL;
        this._filesBLL = filesBLL;
    }

    create({ title, files }) {
        const note = this._notesDAL.create({ title });

        this._filesBLL.setByNoteId({
            files,
            noteId: note.id
        });

        return {
            ...note,
            files
        };
    }

    getById(id) {
        const note = this._notesDAL.getById(id);
        const files = this._filesBLL.setByNoteId(note.id);

        return {
            ...note,
            files
        };
    }

    getAll() {
        const notes = this._notesDAL.getAll();

        return notes.map(note => ({
            ...note,
            files: this._filesBLL.getByNoteId(note.id)
        }));
    }
}
