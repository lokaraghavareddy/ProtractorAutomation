"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const fs_1 = require("fs");
class Screenshots {
    static takeScreenshot(screenShotName) {
        protractor_1.browser.takeScreenshot().then(function (png) {
            var stream = fs_1.createWriteStream('./Screenshots/' + screenShotName + '.png');
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
    }
}
exports.Screenshots = Screenshots;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuc2hvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1V0aWxpdHkvU2NyZWVuc2hvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFxQztBQUNyQywyQkFBdUM7QUFFdkMsTUFBYSxXQUFXO0lBQ2IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFxQjtRQUM5QyxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEdBQUc7WUFDdEMsSUFBSSxNQUFNLEdBQUUsc0JBQWlCLENBQUMsZ0JBQWdCLEdBQUMsY0FBYyxHQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3JFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0o7QUFSRCxrQ0FRQyJ9