import {createLogger, format, transports} from 'winston'
const { combine, timestamp, label,prettyPrint,printf } = format;
export class CustomLogger{
    public static myFormat = printf(info => {
        return `${info.timestamp} ${info.level}: ${info.message}`;
      });
    static logger = createLogger({
        level: 'info',
        format: combine(
            label({ label: 'right meow!' }),
            timestamp(),
            CustomLogger.myFormat
          ),
        transports: [
        // - Write to all logs with level `info` and above to `combined.log`
        new transports.File({ filename: './Logs/combined.log'}),
				// - Write all logs error (and above) to Console/terminal
        new transports.Console()
        ]
    });
}