export class CartElements{
    static get buttons(){
        return{
            get placeOrder(){
                return cy.get('button[data-toggle="modal"]');
            },
        };
    }

//  Para poder hacer clic en el botón delete de un producto en particular, se busca el nombre del producto,
// luego el ancestro y desde el ancestro que contiene todo, se busca en link del delete ('a' es un link)  
// XPATH: //td[text()="Nexus 6"]/ancestor::tr//a
    static get links(){
        return{
            delete(productName){
                return cy.contains('td', productName).closest('tr').find('a');
            },
        };
    }
}