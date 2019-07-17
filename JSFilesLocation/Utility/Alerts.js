"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Alerts {
    static acceptAlert() {
        protractor_1.browser.switchTo().alert().accept();
    }
    static dismissAlert() {
        protractor_1.browser.switchTo().alert().dismiss();
    }
    static getAlertText() {
        return protractor_1.browser.switchTo().alert().getText();
    }
    static verifyAlertText(alertText) {
        protractor_1.browser.switchTo().alert().getText().then(function (text) {
            expect(text).toBe(alertText);
        });
    }
}
exports.Alerts = Alerts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxlcnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbGl0eS9BbGVydHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBcUM7QUFFckMsTUFBYSxNQUFNO0lBRVIsTUFBTSxDQUFDLFdBQVc7UUFDckIsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUN2QyxDQUFDO0lBQ00sTUFBTSxDQUFDLFlBQVk7UUFDdEIsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUN4QyxDQUFDO0lBQ00sTUFBTSxDQUFDLFlBQVk7UUFDdEIsT0FBTyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQy9DLENBQUM7SUFDTSxNQUFNLENBQUMsZUFBZSxDQUFDLFNBQWdCO1FBQzFDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNKO0FBaEJELHdCQWdCQyJ9