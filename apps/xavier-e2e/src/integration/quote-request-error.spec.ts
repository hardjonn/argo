import {
  getQuoteForm,
  getFieldOwnerName,
  getFieldJetModel,
  getFieldJetModelSelect,
  getFieldSeatCapacity,
  getFieldManufacturedDate,
  getFieldPurchasePrice,
  getFieldBrokerEmail,
  getSubmitButton,
  getProgressBar,
  getQuoteError,
  getQuoteSuccess,
} from '../support/quote.po';

describe('quote request - error', () => {
  beforeEach(() => cy.visit('/quote'));

  it('should make failed request', () => {
    cy.fixture('quote-invalid-request').then(r => {
      // fill all the fields
      getFieldOwnerName()
        .clear()
        .type(r.ownerName);

      getFieldJetModelSelect().click();
      cy.get(`li[data-value="${r.jetModel}"]`).click();

      getFieldSeatCapacity()
        .clear()
        .type(r.seatCapacity);

      getFieldManufacturedDate()
        .clear()
        .type(r.manufacturedDate);

      getFieldPurchasePrice()
        .clear()
        .type(r.purchasePrice);

      getFieldBrokerEmail()
        .clear()
        .type(r.brokerEmail);

      // perform request
      getSubmitButton().click();

      // check the result
      getProgressBar().should('exist');

      getQuoteError()
        .should('exist')
        .should('contain', 'Not Eligible for Coverage');

      getQuoteSuccess().should('not.exist');

      getProgressBar().should('not.exist');
    });
  });
});
