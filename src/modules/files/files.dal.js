export class FilesDAL {
    constructor() {
        this._filesMap = new Map();
    }

    getByNoteId(noteId) {
        return this._filesMap.get(noteId);
    }

    setByNoteId({ files, noteId }) {
        return this._filesMap.set(noteId, files);
    }

    getAll() {
        return Array.from(this._filesMap.values()).reduce(
            (collectedFiles, filesFromNote) => [
                ...collectedFiles,
                ...filesFromNote
            ],
            []
        );
    }
}
