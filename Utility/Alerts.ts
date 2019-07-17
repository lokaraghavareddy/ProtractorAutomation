import { browser } from 'protractor';

export class Alerts{

    public static acceptAlert(){
        browser.switchTo().alert().accept()
    }
    public static dismissAlert(){
        browser.switchTo().alert().dismiss()
    }
    public static getAlertText(){
        return browser.switchTo().alert().getText()
    }
    public static verifyAlertText(alertText:string){
        browser.switchTo().alert().getText().then(function(text){
            expect(text).toBe(alertText);
        })
    }
}