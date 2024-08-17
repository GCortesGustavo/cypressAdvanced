describe("Cookies", () => {

    beforeEach(() => {
        cy.session("Cookies", () => {
            cy.setCookie("nombre", "Javier")
        })
    })

    it("Obtener cookies", () => {
        cy.clearAllCookies()
        cy.visit("/")
        cy.getCookies().should("be.empty")
    })

    it("Agregar una cookie", () => {
        cy.setCookie("nombre", "Javier")
        cy.getCookies().should("have.length", 1)
    })
    it("Obtener una cookie específica", () => {
        cy.getCookie("nombre").should("have.a.property", "value", "Javier")
    })
})