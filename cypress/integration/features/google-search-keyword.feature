Feature: To test a sample scenario for google search using Cypress cucumber
              As a user
              I want to search for a keyword on google and validate the result


        Scenario Outline: Search for a google keyword and verify result

            Given that User start a new google search journey
            When he provide the search keyword <keyword>
            Then the search result should have <searchResult>



        Examples:
          | keyword | searchResult                            |
          | Cypress | JavaScript End to End Testing Framework |
