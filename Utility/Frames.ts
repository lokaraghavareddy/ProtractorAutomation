import { browser, ElementFinder } from 'protractor'
export class Frames {
    public static switchToFrameByWebElement(elementFinder: ElementFinder) {
        browser.switchTo().frame(elementFinder.getWebElement())
    }
    public static switchToFrameByIndex(index: number) {
        browser.switchTo().frame(index)
    }
    public static switchToDefaultContent() {
        browser.switchTo().defaultContent();
    }
    public static switchToParentFrame() {
        browser.switchToParentFrame()
    }
    
}