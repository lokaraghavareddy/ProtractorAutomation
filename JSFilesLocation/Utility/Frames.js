"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Frames {
    static switchToFrameByWebElement(elementFinder) {
        protractor_1.browser.switchTo().frame(elementFinder.getWebElement());
    }
    static switchToFrameByIndex(index) {
        protractor_1.browser.switchTo().frame(index);
    }
    static switchToDefaultContent() {
        protractor_1.browser.switchTo().defaultContent();
    }
    static switchToParentFrame() {
        protractor_1.browser.switchToParentFrame();
    }
}
exports.Frames = Frames;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJhbWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbGl0eS9GcmFtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBbUQ7QUFDbkQsTUFBYSxNQUFNO0lBQ1IsTUFBTSxDQUFDLHlCQUF5QixDQUFDLGFBQTRCO1FBQ2hFLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFDTSxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBYTtRQUM1QyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBQ00sTUFBTSxDQUFDLHNCQUFzQjtRQUNoQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFDTSxNQUFNLENBQUMsbUJBQW1CO1FBQzdCLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtJQUNqQyxDQUFDO0NBRUo7QUFkRCx3QkFjQyJ9