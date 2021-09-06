# Cyprios.IO example

## Executing cypress.io
1. Open cmd/bash/terminal
2. Navigate to the project directory
3. type `npx cypress open` in the root directory of the project

<br>

## Activating IntelliSense:
Add `/// <reference types="Cypress" />` to the top of the '*.js' file

<br> 

## Best practice's for locators in cypress:
|               Selector              | Recommended |                              Notes                              |   |   |
|:-----------------------------------:|:-----------:|:---------------------------------------------------------------:|---|---|
| cy.get('button').click()            |  Never      | Worst - too generic, no context.                                |   |   |
| cy.get('.btn.btn-large').click()    |  Never      | Bad. Coupled to styling. Highly subject to change.              |   |   |
| cy.get('#main').click()             |  Sparingly  | Better. But still coupled to styling or JS event listeners.     |   |   |
| cy.get('[name=submission]').click() |  Sparingly  | Coupled to the name attribute which has HTML semantics.         |   |   |
| cy.contains('Submit').click()       |  Depends    | Much better. But still coupled to text content that may change. |   |   |
| cy.get('[data-cy=submit]').click()  |  Always     | Best. Isolated from all changes.                                |   |   |