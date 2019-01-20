import { createDIModule } from '../../di/utils/create-di-module';
import { FILES_DI_TYPES } from '../files';
import { NotesDAL } from './notes.dal';
import { NotesBLL } from './notes.bll';

const TYPES = {
    NotesDAL: Symbol('NotesDAL'),
    NotesBLL: Symbol('NotesBLL')
};

export const NOTES_DI_TYPES = TYPES;

export const NotesDI = createDIModule({
    providers: [
        {
            type: TYPES.NotesDAL,
            useClass: NotesDAL
        },
        {
            type: TYPES.NotesBLL,
            useClass: NotesBLL,
            dependencies: [TYPES.NotesDAL, FILES_DI_TYPES.FilesBLL]
        }
    ]
});
