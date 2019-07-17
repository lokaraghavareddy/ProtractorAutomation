"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, label, prettyPrint, printf } = winston_1.format;
class CustomLogger {
}
CustomLogger.myFormat = printf(info => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
});
CustomLogger.logger = winston_1.createLogger({
    level: 'info',
    format: combine(label({ label: 'right meow!' }), timestamp(), CustomLogger.myFormat),
    transports: [
        // - Write to all logs with level `info` and above to `combined.log`
        new winston_1.transports.File({ filename: './Logs/combined.log' }),
        // - Write all logs error (and above) to Console/terminal
        new winston_1.transports.Console()
    ]
});
exports.CustomLogger = CustomLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbGl0eS9DdXN0b21Mb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBd0Q7QUFDeEQsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUUsR0FBRyxnQkFBTSxDQUFDO0FBQ2hFLE1BQWEsWUFBWTs7QUFDUCxxQkFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNuQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM1RCxDQUFDLENBQUMsQ0FBQztBQUNFLG1CQUFNLEdBQUcsc0JBQVksQ0FBQztJQUN6QixLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxPQUFPLENBQ1gsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQy9CLFNBQVMsRUFBRSxFQUNYLFlBQVksQ0FBQyxRQUFRLENBQ3RCO0lBQ0gsVUFBVSxFQUFFO1FBQ1osb0VBQW9FO1FBQ3BFLElBQUksb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUMsQ0FBQztRQUMzRCx5REFBeUQ7UUFDckQsSUFBSSxvQkFBVSxDQUFDLE9BQU8sRUFBRTtLQUN2QjtDQUNKLENBQUMsQ0FBQztBQWpCUCxvQ0FrQkMifQ==