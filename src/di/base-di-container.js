import { FilesBLL, FilesDAL } from '../modules/files';
import { NotesBLL, NotesDAL } from '../modules/notes';
import { createDIContainer } from './utils';

export const TYPES = {
    FilesDAL: Symbol('FilesDAL'),
    FilesBLL: Symbol('FilesBLL'),
    NotesDAL: Symbol('NotesDAL'),
    NotesBLL: Symbol('NotesBLL')
};

export const createBaseDIContainer = () =>
    createDIContainer({
        providers: [
            {
                type: TYPES.FilesDAL,
                useClass: FilesDAL
            },
            {
                type: TYPES.FilesBLL,
                useClass: FilesBLL,
                dependencies: [TYPES.FilesDAL]
            },
            {
                type: TYPES.NotesDAL,
                useClass: NotesDAL
            },
            {
                type: TYPES.NotesBLL,
                useClass: NotesBLL,
                dependencies: [TYPES.NotesDAL, TYPES.FilesBLL]
            }
        ]
    });
