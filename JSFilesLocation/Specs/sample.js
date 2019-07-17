"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const JavaScriptExecutor_1 = require("../Utility/JavaScriptExecutor");
describe('smoketests', function () {
    protractor_1.browser.ignoreSynchronization = true;
    it('alert verification', function () {
        protractor_1.browser.get('');
        var elementf = protractor_1.element(protractor_1.by.id('email'));
        JavaScriptExecutor_1.JavaScriptExecutor.setTextWebElement(elementf, "9739644411");
        JavaScriptExecutor_1.JavaScriptExecutor.getTitle().then(function (title) {
            console.log(title);
        });
        JavaScriptExecutor_1.JavaScriptExecutor.getCurrentUrl().then(function (url) {
            console.log(url);
        });
        JavaScriptExecutor_1.JavaScriptExecutor.highlightWebElement(elementf);
        protractor_1.browser.sleep(3000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3BlY3Mvc2FtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXFGO0FBT3JGLHNFQUFtRTtBQUVuRSxRQUFRLENBQUMsWUFBWSxFQUFFO0lBQ25CLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFBO0lBQ3BDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRTtRQUNyQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNmLElBQUksUUFBUSxHQUFlLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBQ2xELHVDQUFrQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBQyxZQUFZLENBQUMsQ0FBQTtRQUMzRCx1Q0FBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUE7UUFDRix1Q0FBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxHQUFHO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFDRix1Q0FBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUV2QixDQUFDLENBQUMsQ0FBQTtBQUlOLENBQUMsQ0FBQyxDQUFBIn0=