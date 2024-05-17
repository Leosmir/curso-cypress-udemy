export class SignupElements{
    static get textboxes(){
        return{
            get username(){
                return cy.get('#sign-username')
                // la profe usa 'input#sign-username'
            },
            get password(){
                return cy.get('#sign-password')
                // la profe usa 'input#sign-password'
            }
        }
    }

    static get buttons(){
        return{
            get close(){
                return cy.contains("button", "Close").eq(1);
            },
            get signup (){
                return cy.contains("button", "Sign up");
            }
        }
    }
}