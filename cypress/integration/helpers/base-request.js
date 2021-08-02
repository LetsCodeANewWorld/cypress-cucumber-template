class BaseRequest {
     // Performs GET request
     GET(endpoint) {
        // Returns response from GET request
        return cy.api({
            method: "GET",
            url: `${Cypress.env('api_base_url')}/${endpoint}`,
            headers: {
                accept: "application/json"
            },
            failOnStatusCode: false
        })
    }
    // Performs POST request
    POST(endpoint, params, header = {}) {
        // Returns response from POST request
        return cy.api({
            method:'POST',
            headers: header,
            url: `${Cypress.env('api_base_url')}/${endpoint}`,
            body: params
        })
    }

    // Performs PATCH request
    PATCH(endpoint, params, headers = {}) {
        // Returns response from PATCH request
        return cy.api({
            method: "PATCH",
            url: "https://chercher.tech/sample/api/product/update",
            body: {
                id: "3787",
                description: "PATCHmethod",
            },
        })
    }


    // Performs PUT request
    PUT(endpoint, params, headers = {}) {
        // Returns response from PUT request
        return cy.request({
            method: "PUT",
            url: `${Cypress.env('api_base_url')}/${endpoint}`,
            headers: {
                accept: "application/json",
                Authorization: auth
            },
            failOnStatusCode: false,
            body: payloadAlterarProduto
        })
    }


    // Performs DELETE request
    DELETE(endpoint, auth = {}) {
        // Returns response from DELETE request
        return cy.request({
            method: "DELETE",
            url: `${Cypress.env('api_base_url')}/${endpoint}`,
            headers: {
                accept: "application/json",
                Authorization: auth
            },
            failOnStatusCode: false
        })
    }
}


export const baseRequest = new BaseRequest();
