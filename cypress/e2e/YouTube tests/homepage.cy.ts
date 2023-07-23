/// <reference types="cypress" />

describe('Youtube homepage', () => {
    beforeEach(() => {
      cy.viewport(1024, 768)
      cy.visit('https://www.youtube.com/')
      cy.get(':nth-child(1) > :nth-child(2) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click()
    })

    it('Can perform Search from the homepage', () => {
        cy.get('#search-input > #search').type('Cat videos{enter}')
      })
    })