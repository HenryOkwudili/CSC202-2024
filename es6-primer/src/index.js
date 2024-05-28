import logger, {appName, dummyFunction, genericFunction} from './tools.js';
logger(`Welcome! The application name is "${appName}". There is a function that returns "${dummyFunction()}".`);

logger(genericFunction());


