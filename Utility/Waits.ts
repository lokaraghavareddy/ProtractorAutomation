import { browser, ExpectedConditions,ElementFinder } from 'protractor'

export class Waits {

    public static implicitlyWait(timeInMilliSeconds: number) {
        browser.manage().timeouts().implicitlyWait(timeInMilliSeconds)
    }
    public static sleep(timeInMilliSeconds: number) {
        browser.sleep(timeInMilliSeconds)
    }
    public static setPageLoadTimeout(timeInMilliSeconds: number) {
        browser.manage().timeouts().pageLoadTimeout(timeInMilliSeconds)
    }
    public static setScriptLoadTimeOut(timeInMilliSeconds: number) {
        browser.manage().timeouts().setScriptTimeout(timeInMilliSeconds)
    }
    public static waitAlertIsPresent(timeInMilliSeconds: number){
        browser.wait(ExpectedConditions.alertIsPresent(),timeInMilliSeconds)
    }
    public static waitElementToBeClickable(elementFinder: ElementFinder, timeInMilliSeconds: number){
        browser.wait(ExpectedConditions.elementToBeClickable(elementFinder),timeInMilliSeconds)
    }
    public static waitTextToBePresentInElement(elementFinder: ElementFinder, text:string, timeInMilliSeconds: number){
        browser.wait(ExpectedConditions.textToBePresentInElement(elementFinder,text),timeInMilliSeconds)
    }
    public static waitTextToBePresentInElementValue(elementFinder: ElementFinder, textSubString:string, timeInMilliSeconds: number){
        browser.wait(ExpectedConditions.textToBePresentInElementValue(elementFinder,textSubString),timeInMilliSeconds)
    }
    public static waitElementToBeSelected(elementFinder: ElementFinder, timeInMilliSeconds: number){
        browser.wait(ExpectedConditions.elementToBeSelected(elementFinder),timeInMilliSeconds)
    }
    public static waitUrlIs(url:string, timeInMilliSeconds: number){
        browser.wait(ExpectedConditions.urlIs(url),timeInMilliSeconds)
    }
    public static waitUrlContains(urlSubString:string,timeInMilliSeconds: number ){
        browser.wait(ExpectedConditions.urlContains(urlSubString),timeInMilliSeconds)
    }
   public static waitTitleIs(title:string,timeInMilliSeconds: number){
       browser.wait(ExpectedConditions.titleIs(title),timeInMilliSeconds)
   }
   public static waitTitleContains(titleSubString:string,timeInMilliSeconds: number){
        browser.wait(ExpectedConditions.titleContains(titleSubString),timeInMilliSeconds)

   }
   public static waitPresenceOfElement(elementFinder: ElementFinder, timeInMilliSeconds: number){
       browser.wait(ExpectedConditions.presenceOf(elementFinder),timeInMilliSeconds)

   }
   public static waitElementToBeVisible(elementFinder: ElementFinder, timeInMilliSeconds: number){
       browser.wait(ExpectedConditions.visibilityOf(elementFinder),timeInMilliSeconds)
   }

   public static waitElementToBerefreshed(elementFinder: ElementFinder, timeInMilliSeconds: number){
        browser.wait(ExpectedConditions.stalenessOf(elementFinder),timeInMilliSeconds)
   }

}    