import { ThankYouForYourPurchaseElements } from "./thank-you-for-your-purchase.elements";

export class ThankYouForYourPurchaseMethods{
    static clickOnOKButton(){
        ThankYouForYourPurchaseElements.buttons.ok.click();
    }

    
    static verifyGreenCheckMarkDisplay(){
        ThankYouForYourPurchaseElements.icons.greenCheckMark.should("exist");
    }
}