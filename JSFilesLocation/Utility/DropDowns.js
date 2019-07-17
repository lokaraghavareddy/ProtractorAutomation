"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Select {
    constructor(dropdownElement) {
        this.dropDown = dropdownElement;
        dropdownElement.click();
    }
    selectByVisibleText(text) {
        this.dropDown.element(protractor_1.by.xpath("//option[text()='" + text + "']")).click();
    }
    selectByIndex(index) {
        index = index + 1;
        this.dropDown.element(protractor_1.by.css("option:nth-child(" + index + ")")).click();
    }
    selectByValue(value) {
        this.dropDown.element(protractor_1.by.css("option[value='" + value + "']")).click();
    }
    getOptions() {
        return this.dropDown.all(protractor_1.by.css("option"));
    }
}
exports.Select = Select;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcERvd25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbGl0eS9Ecm9wRG93bnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBK0M7QUFFL0MsTUFBYSxNQUFNO0lBR2YsWUFBbUIsZUFBNkI7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUE7UUFDL0IsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBRTNCLENBQUM7SUFDTSxtQkFBbUIsQ0FBQyxJQUFXO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDMUUsQ0FBQztJQUNNLGFBQWEsQ0FBQyxLQUFZO1FBQzdCLEtBQUssR0FBRyxLQUFLLEdBQUUsQ0FBQyxDQUFBO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFFeEUsQ0FBQztJQUNNLGFBQWEsQ0FBQyxLQUFZO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFFdEUsQ0FBQztJQUNNLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0NBQ0o7QUF2QkQsd0JBdUJDIn0=