"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('smoketestssanity', function () {
    protractor_1.browser.ignoreSynchronization = true;
    it('title verificadggtion', function () {
        protractor_1.browser.get("https://www.facebook.com");
        protractor_1.browser.getCurrentUrl().then(function (title) {
            console.log(title);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1NwZWNzL3NhbXBsZTIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBa0M7QUFDbEMsUUFBUSxDQUFDLGtCQUFrQixFQUFDO0lBQ3hCLG9CQUFPLENBQUMscUJBQXFCLEdBQUUsSUFBSSxDQUFBO0lBQ25DLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRTtRQUN4QixvQkFBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO1FBQ3ZDLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9