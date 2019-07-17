
const fs = require('fs')
export class PropertyFileOperations {

    public static getProperty(key: string) {
        var rawContent = fs.readFileSync('./PropertyFile/data.properties')
        var fullContent = rawContent.toString()
        var propertyMap = {}
        var allPairs = fullContent.split("\n")
        for (var i = 0; i < allPairs.length; i++) {
            var keyValue = allPairs[i].split("=")
            propertyMap[keyValue[0]] = keyValue[1]
        }
        return propertyMap[key]

    }
}