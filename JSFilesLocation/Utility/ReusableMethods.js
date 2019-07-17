"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ReusableMethods {
    static getApplicationUrl(url) {
        protractor_1.browser.get(url);
    }
    static navigateToUrl(url) {
        protractor_1.browser.navigate().to(url);
    }
    static refreshUrl() {
        protractor_1.browser.navigate().refresh();
    }
    static naviagteForward() {
        protractor_1.browser.navigate().forward();
    }
    static navigateBack() {
        protractor_1.browser.navigate().back();
    }
    static verifyTitle(title) {
        protractor_1.browser.getTitle().then(function (pageTitle) {
            expect(pageTitle).toBe(title);
        });
    }
    static getTitle() {
        return protractor_1.browser.getTitle();
    }
    static verifyCurrentUrl(url) {
        protractor_1.browser.getCurrentUrl().then(function (currentUrl) {
            expect(currentUrl).toBe(url);
        });
    }
    static getCurrentUrl() {
        return protractor_1.browser.getCurrentUrl();
    }
    static maximizeBrowser() {
        protractor_1.browser.manage().window().maximize();
    }
    static setBrowserSize(width, height) {
        protractor_1.browser.manage().window().setSize(width, height);
    }
    static getBrowserSize() {
        return protractor_1.browser.manage().window().getSize();
    }
    static verifyBrowserSize(width, height) {
        protractor_1.browser.manage().window().getSize().then(function (browserSize) {
            expect(browserSize.width).toBe(width);
            expect(browserSize.height).toBe(height);
        });
    }
    static getWindowPosition() {
        return protractor_1.browser.manage().window().getPosition();
    }
    static setWindowPosition(x, y) {
        protractor_1.browser.manage().window().setPosition(x, y);
    }
    static clickWebElement(elementFinder) {
        elementFinder.click();
    }
    static setTextWebElement(elementFinder, text) {
        elementFinder.sendKeys(text);
    }
    static clearWebElementText(elementFinder) {
        elementFinder.clear();
    }
    static submit(elementFinder) {
        elementFinder.submit();
    }
    static getWebElementText(elementFinder) {
        return elementFinder.getText();
    }
    static verifyWebElementText(elementFinder, text) {
        return elementFinder.getText().then(function (webElementText) {
            expect(webElementText).toBe(text);
        });
    }
    static getWebElementAttribute(elementFinder, attribute) {
        return elementFinder.getAttribute(attribute);
    }
    static verifyWebElementAttribute(elementFinder, attribute, attributeValue) {
        elementFinder.getAttribute(attribute).then(function (value) {
            expect(value).toBe(attributeValue);
        });
    }
    static getWebElementCssValue(elementFinder, cssStyleProperty) {
        elementFinder.getCssValue(cssStyleProperty);
    }
    static verifyWebElementCssValue(elementFinder, cssStyleProperty, cssValue) {
        elementFinder.getCssValue(cssStyleProperty).then(function (value) {
            expect(value).toBe(cssValue);
        });
    }
    static getToolTip(elementFinder) {
        return elementFinder.getAttribute('title');
    }
    static verifyToolTip(elementFinder, tooltip) {
        elementFinder.getAttribute('title').then(function (titlevalue) {
            expect(titlevalue).toBe(tooltip);
        });
    }
    static getWebElemntSize(elementFinder) {
        return elementFinder.getSize();
    }
    static verifyWebElementSize(elementFinder, width, height) {
        elementFinder.getSize().then(function (size) {
            expect(size.width).toBe(width);
            expect(size.height).toBe(height);
        });
    }
    static getWebElementLocation(elementFinder) {
        return elementFinder.getLocation();
    }
    static verifyWebElementLocation(elementFinder, x, y) {
        elementFinder.getLocation().then(function (location) {
            expect(location.x).toBe(x);
            expect(location.y).toBe(y);
        });
    }
    static isWebElementDisplayed(elementFinder) {
        return elementFinder.isDisplayed();
    }
    static isWebElementSelected(elementFinder) {
        return elementFinder.isSelected();
    }
    static isWebElementEnabled(elementFinder) {
        return elementFinder.isEnabled();
    }
    static mouseMoveOnWebElement(elementFinder) {
        protractor_1.browser.actions().mouseMove(elementFinder).perform();
    }
    static mouseMoveWebElementOffset(x, y) {
        protractor_1.browser.actions().mouseMove(x, y).perform();
    }
    static dragAndDropWebElements(drag, drop) {
        protractor_1.browser.actions().dragAndDrop(drag, drop).perform();
    }
    static dragAndDropWebElementOffset(drag, xoffset, yoffset) {
        protractor_1.browser.actions().dragAndDrop(drag, { x: xoffset, y: yoffset }).perform();
    }
    static actionClick(elementFinder) {
        protractor_1.browser.actions().click(elementFinder).perform();
    }
    static doubleClick(elementFinder) {
        protractor_1.browser.actions().doubleClick(elementFinder).perform();
    }
}
exports.ReusableMethods = ReusableMethods;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmV1c2FibGVNZXRob2RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbGl0eS9SZXVzYWJsZU1ldGhvZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBaUU7QUFHakUsTUFBYSxlQUFlO0lBRWpCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFXO1FBQ3ZDLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3BCLENBQUM7SUFDTSxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQVc7UUFDbkMsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUNNLE1BQU0sQ0FBQyxVQUFVO1FBQ3BCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxlQUFlO1FBQ3pCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNNLE1BQU0sQ0FBQyxZQUFZO1FBQ3RCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNNLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBYTtRQUNuQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLFNBQVM7WUFDdkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFDTSxNQUFNLENBQUMsUUFBUTtRQUNsQixPQUFPLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDN0IsQ0FBQztJQUVNLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFXO1FBQ3RDLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsVUFBVTtZQUM3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