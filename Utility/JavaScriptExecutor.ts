import { browser, ElementFinder } from 'protractor'
export class JavaScriptExecutor {

    public static clickWebElement(elementFinder: ElementFinder) {
        browser.executeScript("arguments[0].click();", elementFinder.getWebElement())

    }
    public static setTextWebElement(elementFinder: ElementFinder, text: string) {
        browser.executeScript("arguments[0].value=" + text + ";", elementFinder.getWebElement())
    }
    public static getTitle() {
        return browser.executeScript("return document.title")
    }
    public static getCurrentUrl() {
        return browser.executeScript("return document.URL")
    }

    public static highlightWebElement(elementFinder: ElementFinder) {
        return browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);", elementFinder.getWebElement(), "color: Red; border: 2px solid red;")

    }


}