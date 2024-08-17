describe("Pruebas con LocalStorage", () => {
    it("Crear una tarea" , () => {
        cy.visit("https://todo-cypress-iota.vercel.app/")
        cy.get("#title").type("Titulo de prueba")
        cy.get("#description").type("Descripcion de pruebas")
        cy.contains("Create").click()

        cy.contains("Titulo de prueba")

        cy.reload()

        // Validar que el item existe en localStorage
        cy.window().then((window) => {
            expect(window.localStorage.getItem("Titulo de prueba")).to.not.be.null;
        });

        cy.contains("Remove").click()
        
        // Validar que el item ya no existe en localStorage
        cy.window().then((window) => {
            expect(window.localStorage.getItem("Titulo de prueba")).to.be.null;
        });
    })
})