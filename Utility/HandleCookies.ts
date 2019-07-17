import {browser} from 'protractor'
export class HandleCookies{
    public static deleteAllCookies(){
        browser.manage().deleteAllCookies();
    }
}