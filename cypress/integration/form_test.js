describe("Pizza app", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/pizza");
  });

  const nameInput = () => cy.get(":nth-child(3) > input");

  it("Start tests", () => {
    expect(2).to.equal(2);
  });

  it("Check if name input works", () => {
    nameInput()
      .should("have.value", "")
      .type("Trevor")
      .should("have.value", "Trevor");
  });

  it("Check if checkboxes work", () => {
    cy.get(":nth-child(12) > input")
      .should("not.be.checked")
      .click()
      .should("be.checked");
    cy.get(":nth-child(13) > input")
      .should("not.be.checked")
      .click()
      .should("be.checked");
    cy.get(":nth-child(14) > input")
      .should("not.be.checked")
      .click()
      .should("be.checked");
    cy.get(":nth-child(15) > input")
      .should("not.be.checked")
      .click()
      .should("be.checked");
  });
});
