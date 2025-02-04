describe("Pokédex Tests", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:5500/index.html");
    });
  
    it("Debería mostrar 12 Pokémon al cargar la página", () => {
      cy.get(".pokemon-card").should("have.length", 12);
    
    });
  
    it("Debería buscar un Pokémon por nombre", () => {
      cy.get(".search-input").clear().type("pikachu");
      cy.get(".search-btn").click();
      cy.get(".pokemon-card").should("contain", "pikachu");
   
    });
  
    it("Debería buscar un Pokémon por número", () => {
      cy.get(".search-input").clear().type("25");
      cy.get(".search-btn").click();
      cy.get(".pokemon-card").should("contain", "pikachu");
    });
  
    it("Debería abrir los detalles de un Pokémon al hacer clic", () => {
      cy.get(".pokemon-card").first().click();
      cy.get(".pokemon-details-container").should("be.visible");
    });

    it("Debería navegar a la página siguiente y volver otros 12 Pokémon", () => {
        cy.get(".pokemon-card").should("have.length", 12);
        cy.get(".next-btn").click();
        cy.get(".pokemon-card").should("have.length", 12);
        cy.get(".pokemon-card").first().should("not.contain", "bulbasaur");
      });
    
    it("Debería navegar a la página anterior y volver a los 12 primeros Pokémon", () => {
        cy.get(".pokemon-card").should("have.length", 12);
        cy.get(".previous-btn").click();
        cy.get(".pokemon-card").should("have.length", 12);
        cy.get(".pokemon-card").first().should("contain", "bulbasaur");
    });
  });
  