export class FilesBLL {
    constructor(filesDAL) {
        this._filesDAL = filesDAL;
    }

    getByNoteId(noteId) {
        return this._filesDAL.getByNoteId(noteId);
    }

    setByNoteId({ files, noteId }) {
        return this._filesDAL.setByNoteId({ files, noteId });
    }

    getAll() {
        return this._filesDAL.getAll();
    }
}
