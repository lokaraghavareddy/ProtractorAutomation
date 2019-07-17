"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class JavaScriptExecutor {
    static clickWebElement(elementFinder) {
        protractor_1.browser.executeScript("arguments[0].click();", elementFinder.getWebElement());
    }
    static setTextWebElement(elementFinder, text) {
        protractor_1.browser.executeScript("arguments[0].value=" + text + ";", elementFinder.getWebElement());
    }
    static getTitle() {
        return protractor_1.browser.executeScript("return document.title");
    }
    static getCurrentUrl() {
        return protractor_1.browser.executeScript("return document.URL");
    }
    static highlightWebElement(elementFinder) {
        return protractor_1.browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);", elementFinder.getWebElement(), "color: Red; border: 2px solid red;");
    }
}
exports.JavaScriptExecutor = JavaScriptExecutor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSmF2YVNjcmlwdEV4ZWN1dG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbGl0eS9KYXZhU2NyaXB0RXhlY3V0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBbUQ7QUFDbkQsTUFBYSxrQkFBa0I7SUFFcEIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxhQUE0QjtRQUN0RCxvQkFBTyxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRSxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQTtJQUVqRixDQUFDO0lBQ00sTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQTRCLEVBQUUsSUFBWTtRQUN0RSxvQkFBTyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO0lBQzVGLENBQUM7SUFDTSxNQUFNLENBQUMsUUFBUTtRQUNsQixPQUFPLG9CQUFPLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUE7SUFDekQsQ0FBQztJQUNNLE1BQU0sQ0FBQyxhQUFhO1FBQ3ZCLE9BQU8sb0JBQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUN2RCxDQUFDO0lBRU0sTUFBTSxDQUFDLG1CQUFtQixDQUFDLGFBQTRCO1FBQzFELE9BQU8sb0JBQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLG1EQUFtRCxFQUFFLGFBQWEsQ0FBQyxhQUFhLEVBQUUsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFBO0lBRWpLLENBQUM7Q0FHSjtBQXRCRCxnREFzQkMifQ==