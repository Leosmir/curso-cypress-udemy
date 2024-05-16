import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val',username)
        //se usa invoke en lugar de Type para asegurarnos de que se inserte el texto completo
    }

    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val',password)
        //se usa invoke en lugar de Type para asegurarnos de que se inserte el texto completo
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }


    static login(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
}

