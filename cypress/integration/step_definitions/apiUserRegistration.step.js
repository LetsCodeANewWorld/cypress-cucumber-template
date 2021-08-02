import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { createNewUser } from '../pageobjects/';


Given('User details are provided', ()=>{
    Cypress.log({'api_check':'api test started..'})
})

When('User is successfully registered througn api calls', ()=>{
    createNewUser.userLookup();
    createNewUser.registerUser();

})

Then('Login with user datails on web page', ()=>{

})

And('Validate User is logged in successfully', ()=>{

})
