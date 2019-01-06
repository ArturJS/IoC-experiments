import 'reflect-metadata';
import { Container } from 'inversify';
import { helpers } from 'inversify-vanillajs-helpers';

// 'useClass' taken from
// https://angular.io/guide/dependency-injection-providers#the-provider-object-literal
const connectToContainer = ({ container, providers }) => {
    providers.forEach(({ type, useClass, dependencies }) => {
        helpers.annotate(useClass, dependencies);
        container.bind(type).to(useClass);
    });
};

export const createDIContainer = ({ providers }) => {
    const container = new Container({
        defaultScope: 'Singleton'
    });

    connectToContainer({
        container,
        providers
    });

    return container;
};
