import 'reflect-metadata';
import { FilesDI } from '../modules/files';
import { NotesDI } from '../modules/notes';
import { createDIContainer } from './create-di-container';

export const baseDIContainer = createDIContainer({
    modules: [FilesDI, NotesDI]
});
