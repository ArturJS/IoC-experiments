import 'reflect-metadata';
import { Container } from 'inversify';
import { helpers } from 'inversify-vanillajs-helpers';
import { FilesBLL, FilesDAL } from '../modules/files';
import { NotesBLL, NotesDAL } from '../modules/notes';

export const TYPES = {
    FilesDAL: Symbol('FilesDAL'),
    FilesBLL: Symbol('FilesBLL'),
    NotesDAL: Symbol('NotesDAL'),
    NotesBLL: Symbol('NotesBLL')
};

// 'useClass' taken from
// https://angular.io/guide/dependency-injection-providers#the-provider-object-literal
const connectToContainer = ({ container, providers }) => {
    providers.forEach(({ type, useClass, dependencies }) => {
        helpers.annotate(useClass, dependencies);
        container.bind(type).to(useClass);
    });
};

export const createContainer = () => {
    const container = new Container({
        defaultScope: 'Singleton'
    });

    connectToContainer({
        container,
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

    return container;
};
