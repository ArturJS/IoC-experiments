import { baseDIContainer } from './di/base-di-container';
import { TYPES } from './modules/di.types';

const notesBLL = baseDIContainer.get(TYPES.NotesBLL);
const filesBLL = baseDIContainer.get(TYPES.FilesBLL);
const note = notesBLL.create({ title: 'Note1', files: ['file1', 'file2'] });

console.log(note);
console.log(baseDIContainer);
console.log(filesBLL.getAll());

debugger;
