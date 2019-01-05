let maxId = 0;
const generateId = () => ++maxId;

export class NotesDAL {
    constructor() {
        this._notesMap = new Map();
    }

    create({ title }) {
        const id = generateId();
        const note = {
            id,
            title
        };

        this._notesMap.set(id, note);

        return note;
    }

    getById(id) {
        return this._notesMap.get(id);
    }

    getAll() {
        return [...this._notesMap.values()];
    }
}
