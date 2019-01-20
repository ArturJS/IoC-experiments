import { createBaseDIContainer } from './di';
import { TYPES } from './modules/di.types';

const container = createBaseDIContainer();
const notesBLL = container.get(TYPES.NotesBLL);
const filesBLL = container.get(TYPES.FilesBLL);
const note = notesBLL.create({ title: 'Note1', files: ['file1', 'file2'] });

console.log(note);
console.log(container);
console.log(filesBLL.getAll());

debugger;
