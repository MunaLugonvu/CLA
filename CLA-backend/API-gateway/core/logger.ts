import { createLogger, transports, format } from 'winston';
import * as Transport from 'winston-transport';
import fs from 'fs';
import path from 'path';
// import DailyRotateFile from 'winston-daily-rotate-file';

let dir = __dirname + '/resources/logs';
if (!dir) dir = path.resolve('logs');

if (!fs.existsSync(dir)) {
    /*Create the directory if it does not exist*/
    fs.mkdirSync(dir);
}

/**
 * {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
}
 * **/

const logLevel = 'info'; /*defines the max log level for the environment*/

const formatter = format.combine(
    format.errors({ stack: true }),
    format.colorize(),
    format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
    format.splat(),
    format.printf((info) => {
        const { timestamp, level, message, ...meta } = info;

        return `${timestamp} [${level}]: ${message} ${
            Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
            }`;
    }),
);

const options = {
    file: {
        level: logLevel,
        filename: dir + '/exceptions-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        timestamp: true,
        handleExceptions: true,
        humanReadableUnhandledException: true,
        prettyPrint: true,
        json: true,
        maxSize: '20m',
        colorize: true,
        maxFiles: '14d',
    },
    errorFile: {
        level: 'error',
        filename: `${dir}/app-error.log`
    }
};

const storeConfigs: Transport[] = [
    new transports.File(options.errorFile),
];

// if (appConfig.environment === 'development') {
//     /*if dev mode, add a console log*/
//     storeConfigs.push(
//         new transports.Console({
//             level: logLevel,
//             format: formatter,
//         })
//     );
// }

createLogger({
    transports: [
        new transports.Console({
            level: logLevel,
            format: formatter,
            handleExceptions: true
        })
    ],
    //exceptionHandlers: [new DailyRotateFile(options.file)],
    exitOnError: false, /*do not exit on unhandled exceptions*/
});

module.exports = createLogger;