Feature: To perform the visual regression test

              As a user, i want to perform the visual regression test and valdiate the ui changes

        Scenario: Open google home page and perform sample visual regression check for a keyword

            Given User visit the Google home page
            When Screen resolution is set to width 984 and height 788
            Then google search home page should match the baseline image


