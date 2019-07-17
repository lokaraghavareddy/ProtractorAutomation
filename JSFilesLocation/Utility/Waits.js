"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Waits {
    static implicitlyWait(timeInMilliSeconds) {
        protractor_1.browser.manage().timeouts().implicitlyWait(timeInMilliSeconds);
    }
    static sleep(timeInMilliSeconds) {
        protractor_1.browser.sleep(timeInMilliSeconds);
    }
    static setPageLoadTimeout(timeInMilliSeconds) {
        protractor_1.browser.manage().timeouts().pageLoadTimeout(timeInMilliSeconds);
    }
    static setScriptLoadTimeOut(timeInMilliSeconds) {
        protractor_1.browser.manage().timeouts().setScriptTimeout(timeInMilliSeconds);
    }
    static waitAlertIsPresent(timeInMilliSeconds) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.alertIsPresent(), timeInMilliSeconds);
    }
    static waitElementToBeClickable(elementFinder, timeInMilliSeconds) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(elementFinder), timeInMilliSeconds);
    }
    static waitTextToBePresentInElement(elementFinder, text, timeInMilliSeconds) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.textToBePresentInElement(elementFinder, text), timeInMilliSeconds);
    }
    static waitTextToBePresentInElementValue(elementFinder, textSubString, timeInMilliSeconds) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.textToBePresentInElementValue(elementFinder, textSubString), timeInMilliSeconds);
    }
    static waitElementToBeSelected(elementFinder, timeInMilliSeconds) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeSelected(elementFinder), timeInMilliSeconds);
    }
    static waitUrlIs(url, timeInMilliSeconds) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.urlIs(url), timeInMilliSeconds);
    }
    static waitUrlContains(urlSubString, timeInMilliSeconds) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.urlContains(urlSubString), timeInMilliSeconds);
    }
    static waitTitleIs(title, timeInMilliSeconds) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.titleIs(title), timeInMilliSeconds);
    }
    static waitTitleContains(titleSubString, timeInMilliSeconds) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.titleContains(titleSubString), timeInMilliSeconds);
    }
    static waitPresenceOfElement(elementFinder, timeInMilliSeconds) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(elementFinder), timeInMilliSeconds);
    }
    static waitElementToBeVisible(elementFinder, timeInMilliSeconds) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(elementFinder), timeInMilliSeconds);
    }
    static waitElementToBerefreshed(elementFinder, timeInMilliSeconds) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.stalenessOf(elementFinder), timeInMilliSeconds);
    }
}
exports.Waits = Waits;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FpdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9VdGlsaXR5L1dhaXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNFO0FBRXRFLE1BQWEsS0FBSztJQUVQLE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQTBCO1FBQ25ELG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDbEUsQ0FBQztJQUNNLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQTBCO1FBQzFDLG9CQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDckMsQ0FBQztJQUNNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBMEI7UUFDdkQsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUNuRSxDQUFDO0lBQ00sTUFBTSxDQUFDLG9CQUFvQixDQUFDLGtCQUEwQjtRQUN6RCxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDcEUsQ0FBQztJQUNNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBMEI7UUFDdkQsb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsY0FBYyxFQUFFLEVBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUN4RSxDQUFDO0lBQ00sTUFBTSxDQUFDLHdCQUF3QixDQUFDLGFBQTRCLEVBQUUsa0JBQTBCO1FBQzNGLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxFQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDM0YsQ0FBQztJQUNNLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxhQUE0QixFQUFFLElBQVcsRUFBRSxrQkFBMEI7UUFDNUcsb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsd0JBQXdCLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxFQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDcEcsQ0FBQztJQUNNLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxhQUE0QixFQUFFLGFBQW9CLEVBQUUsa0JBQTBCO1FBQzFILG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLDZCQUE2QixDQUFDLGFBQWEsRUFBQyxhQUFhLENBQUMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ2xILENBQUM7SUFDTSxNQUFNLENBQUMsdUJBQXVCLENBQUMsYUFBNEIsRUFBRSxrQkFBMEI7UUFDMUYsb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLEVBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUMxRixDQUFDO0lBQ00sTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFVLEVBQUUsa0JBQTBCO1FBQzFELG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFDTSxNQUFNLENBQUMsZUFBZSxDQUFDLFlBQW1CLEVBQUMsa0JBQTBCO1FBQ3hFLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ2pGLENBQUM7SUFDSyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQVksRUFBQyxrQkFBMEI7UUFDN0Qsb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUNNLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFxQixFQUFDLGtCQUEwQjtRQUMzRSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUV0RixDQUFDO0lBQ00sTUFBTSxDQUFDLHFCQUFxQixDQUFDLGFBQTRCLEVBQUUsa0JBQTBCO1FBQ3hGLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBRWpGLENBQUM7SUFDTSxNQUFNLENBQUMsc0JBQXNCLENBQUMsYUFBNEIsRUFBRSxrQkFBMEI7UUFDekYsb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDbkYsQ0FBQztJQUVNLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxhQUE0QixFQUFFLGtCQUEwQjtRQUMxRixvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUNuRixDQUFDO0NBRUg7QUF0REQsc0JBc0RDIn0=