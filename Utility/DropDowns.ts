import { ElementFinder, by } from 'protractor';

export class Select{

    dropDown:ElementFinder
    public constructor(dropdownElement:ElementFinder){
        this.dropDown = dropdownElement
        dropdownElement.click()

    }
    public selectByVisibleText(text:string){
        this.dropDown.element(by.xpath("//option[text()='"+text+"']")).click()
    }
    public selectByIndex(index:number){
        index = index +1
        this.dropDown.element(by.css("option:nth-child("+index+")")).click()

    }
    public selectByValue(value:string){
        this.dropDown.element(by.css("option[value='"+value+"']")).click()

    }
    public getOptions(){
        return this.dropDown.all(by.css("option"))
    }
}