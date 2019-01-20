import 'reflect-metadata';
import { FilesDI } from '../modules/files';
import { NotesDI } from '../modules/notes';
import { createDIContainer } from './utils';

export const createBaseDIContainer = () =>
    createDIContainer({
        modules: [FilesDI, NotesDI]
    });
