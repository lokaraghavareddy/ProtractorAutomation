import { browser, ElementFinder, element, by } from "protractor";
import { ILocation } from "selenium-webdriver";

export class ReusableMethods {

    public static getApplicationUrl(url: string) {
        browser.get(url)
    }
    public static navigateToUrl(url: string) {
        browser.navigate().to(url)
    }
    public static refreshUrl() {
        browser.navigate().refresh();
    }

    public static naviagteForward() {
        browser.navigate().forward();
    }
    public static navigateBack() {
        browser.navigate().back();
    }
    public static verifyTitle(title: string) {
        browser.getTitle().then(function (pageTitle) {
            expect(pageTitle).toBe(title)
        })

    }
    public static getTitle() {
        return browser.getTitle()
    }

    public static verifyCurrentUrl(url: string) {
        browser.getCurrentUrl().then(function (currentUrl) {
            expect(currentUrl).toBe(url)

        })
    }
    public static getCurrentUrl() {
        return browser.getCurrentUrl()
    }

    public static maximizeBrowser() {
        browser.manage().window().maximize();
    }
    public static setBrowserSize(width: number, height: number) {
        browser.manage().window().setSize(width, height)
    }
    public static getBrowserSize() {
        return browser.manage().window().getSize()
    }
    public static verifyBrowserSize(width: number, height: number) {
        browser.manage().window().getSize().then(function (browserSize) {
            expect(browserSize.width).toBe(width)
            expect(browserSize.height).toBe(height)
        })
    }
    public static getWindowPosition() {
        return browser.manage().window().getPosition()
    }
    public static setWindowPosition(x: number, y: number) {
        browser.manage().window().setPosition(x, y);
    }
    public static clickWebElement(elementFinder: ElementFinder) {
        elementFinder.click();

    }
    public static setTextWebElement(elementFinder: ElementFinder, text: string) {
        elementFinder.sendKeys(text)
    }
    public static clearWebElementText(elementFinder: ElementFinder) {
        elementFinder.clear()
    }
    public static submit(elementFinder: ElementFinder) {
        elementFinder.submit()
    }
    public static getWebElementText(elementFinder: ElementFinder) {
        return elementFinder.getText();
    }
    public static verifyWebElementText(elementFinder: ElementFinder, text: string) {
        return elementFinder.getText().then(function (webElementText) {
            expect(webElementText).toBe(text)
        })
    }
    public static getWebElementAttribute(elementFinder: ElementFinder, attribute: string) {
        return elementFinder.getAttribute(attribute)

    }
    public static verifyWebElementAttribute(elementFinder: ElementFinder, attribute: string, attributeValue: string) {
        elementFinder.getAttribute(attribute).then(function (value) {
            expect(value).toBe(attributeValue)
        })
    }
    public static getWebElementCssValue(elementFinder: ElementFinder, cssStyleProperty: string) {
        elementFinder.getCssValue(cssStyleProperty)
    }
    public static verifyWebElementCssValue(elementFinder: ElementFinder, cssStyleProperty: string, cssValue: string) {
        elementFinder.getCssValue(cssStyleProperty).then(function (value) {
            expect(value).toBe(cssValue)
        })
    }
    public static getToolTip(elementFinder: ElementFinder) {
        return elementFinder.getAttribute('title')
    }
    public static verifyToolTip(elementFinder: ElementFinder, tooltip: string) {
        elementFinder.getAttribute('title').then(function (titlevalue) {
            expect(titlevalue).toBe(tooltip)
        })
    }
    public static getWebElemntSize(elementFinder: ElementFinder) {
        return elementFinder.getSize();

    }
    public static verifyWebElementSize(elementFinder: ElementFinder, width: number, height: number) {
        elementFinder.getSize().then(function (size) {
            expect(size.width).toBe(width)
            expect(size.height).toBe(height)
        })
    }
    public static getWebElementLocation(elementFinder: ElementFinder) {
        return elementFinder.getLocation()
    }
    public static verifyWebElementLocation(elementFinder: ElementFinder, x: number, y: number) {
        elementFinder.getLocation().then(function (location) {
            expect(location.x).toBe(x)
            expect(location.y).toBe(y)
        })
    }
    public static isWebElementDisplayed(elementFinder: ElementFinder) {
        return elementFinder.isDisplayed()
    }
    public static isWebElementSelected(elementFinder: ElementFinder) {
        return elementFinder.isSelected()
    }
    public static isWebElementEnabled(elementFinder: ElementFinder) {
        return elementFinder.isEnabled()
    }
    public static mouseMoveOnWebElement(elementFinder: ElementFinder) {
        browser.actions().mouseMove(elementFinder).perform()
    }
    public static mouseMoveWebElementOffset(x: ILocation, y: ILocation) {
        browser.actions().mouseMove(x, y).perform()
    }
    public static dragAndDropWebElements(drag: ElementFinder, drop: ElementFinder) {
        browser.actions().dragAndDrop(drag, drop).perform()
    }
    public static dragAndDropWebElementOffset(drag: ElementFinder, xoffset: number, yoffset: number) {
        browser.actions().dragAndDrop(drag, { x: xoffset, y: yoffset }).perform();
    }
    public static actionClick(elementFinder: ElementFinder) {
        browser.actions().click(elementFinder).perform()
    }

    public static doubleClick(elementFinder: ElementFinder) {
        browser.actions().doubleClick(elementFinder).perform()
        
    }

}