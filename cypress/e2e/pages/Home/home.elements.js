export class HomeElements{
    static get categoriesMenu(){
        return{
            get phones(){
                return cy.contains('a', 'Phones');
            },
            get laptops(){
                return cy.contains('a', 'Laptops');
            },
            get monitors(){
                return cy.contains('a', 'Monitors');
            },
        }
    }

    //el siguiente método estático no lleva get porque se le agregarán parámetros
    //Los getters no llevan parámetros
    static product(productName){
        return cy.contains('a', productName);
    }    
}

//TODO LO QUE ES ('a', 'Monitors') LA PROFE LO PUSO CON COMILLAS DOBLES