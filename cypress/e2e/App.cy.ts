describe('template spec', () => {

  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('should calculate the sum', () => {
    cy.get('input').eq(0).type('5');
    cy.get('input').eq(1).type('10');

    cy.contains('sum').click();
    cy.contains('Calculate').click();
    cy.contains('5+10');
    cy.contains('15');
  });

  it('should calculate the sum', () => {
    cy.get('input').eq(0).type('10');
    cy.get('input').eq(1).type('2');

    cy.contains('divide').click();
    cy.contains('Calculate').click();
    cy.contains('10/2');
    cy.contains('5');
  });

  it('should calculate the reminder', () => {
    cy.get('input').eq(0).type('5');
    cy.get('input').eq(1).type('2');

    cy.contains('reminder').click();
    cy.contains('Calculate').click();
    cy.contains('5%2');
    cy.contains('1');
  });

  it('should find the highest prime', () => {
    cy.get('input').eq(0).type('30');
    cy.get('input').eq(1).type('100');

    cy.contains('reminder').click();
    cy.contains('Calculate').click();
    cy.contains('Highest prime between 30 and 100');
    cy.contains('97');
  });

})