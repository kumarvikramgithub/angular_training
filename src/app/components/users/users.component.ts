import { Component, ViewEncapsulation } from "@angular/core";
@Component({
    selector : "app-users",
    templateUrl : `./users.component.html`,
    styleUrls :[`./users.component.css`],
    encapsulation :ViewEncapsulation.ShadowDom,
})
export class UsersComponent{
    user = {
        firstName: "bill",
        lastName:"gates",
        bio:"Bill was a founder of microsoft",
        isWorking : true,
        income : 50000,
        imagePath : "./assets/images/bill.jpeg",
        votes : 130
    }
 }