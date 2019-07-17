import { browser, element, by, ElementArrayFinder, ElementFinder } from 'protractor';
import { Workbook } from 'exceljs';
import { ExcelOperations } from '../Utility/ExcelUtility';
import { PropertyFileOperations } from '../Utility/PropertyFileUtility';
import { CSVOperations } from '../Utility/CSVUtility';
import { Screenshots } from '../Utility/Screenshot';
import { CustomLogger } from '../Utility/CustomLogger';
import { JavaScriptExecutor } from '../Utility/JavaScriptExecutor';

describe('smoketests', function () {
    browser.ignoreSynchronization = true
    it('alert verification', function () {
        browser.get('')
        var elementf:ElementFinder=element(by.id('email'))
        JavaScriptExecutor.setTextWebElement(elementf,"9739644411")
        JavaScriptExecutor.getTitle().then(function(title){
            console.log(title)
        })
        JavaScriptExecutor.getCurrentUrl().then(function(url){
            console.log(url)
        })
        JavaScriptExecutor.highlightWebElement(elementf)
        browser.sleep(3000)
     
    })
    
    

})