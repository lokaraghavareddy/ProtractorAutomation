import { browser } from 'protractor';
import { createWriteStream } from 'fs';

export class Screenshots{
    public static takeScreenshot(screenShotName:string){
        browser.takeScreenshot().then(function(png){
            var stream =createWriteStream('./Screenshots/'+screenShotName+'.png')
            stream.write(new Buffer(png, 'base64'));
	        stream.end();
        })
    }
}