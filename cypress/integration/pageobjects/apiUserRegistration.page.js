import faker from 'faker';
import { sendRequest } from '../helpers';


class CreateNewUser{

    flag = false;
    userID;

    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.dob = faker.date.past(25, new Date(2000, 0, 1))
        this.email = 'success+' + faker.internet.email(this.firstName, this.lastName, 'simulator.amazonses.com');
    }


    identityParams(){
        return {
            "firstName": this.firstName,
            "lastName": this.lastName,
            "dateOfBirth": this.dob,
            "username": this.email
        }
    }

    userLookup() {
        sendRequest.POST('/{dummy-endpoint}/{lookupCall}', this.identityParams())
                    .should((response) => {
                        expect(response.body.status).to.equal('not.found')
                    });
    }

    registerUser(){
        let userID = sendRequest.POST('/{dummy-endpoint}/{CreateUserIfNotFound}', this.identityParams())
                    .should( response => {
                        if(response.status!==201){
                            cy.log('reponse is ', response.status);
                            return true;
                        } else{
                            // extract user id
                            cy.log(response.body)
                            cy.log(response.body.userId)
                            return response.body.userId
                        }
                    })
    }
}

export const createNewUser = new CreateNewUser();
