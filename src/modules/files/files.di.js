import { createDIModule } from '../../di/create-di-module';
import { FilesDAL } from './files.dal';
import { FilesBLL } from './files.bll';

const TYPES = {
    FilesDAL: Symbol('FilesDAL'),
    FilesBLL: Symbol('FilesBLL')
};

export const FILES_DI_TYPES = TYPES;

export const FilesDI = createDIModule({
    providers: [
        {
            type: TYPES.FilesDAL,
            useClass: FilesDAL
        },
        {
            type: TYPES.FilesBLL,
            useClass: FilesBLL,
            dependencies: [TYPES.FilesDAL]
        }
    ]
});
