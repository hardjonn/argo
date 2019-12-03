import {
  getFieldOwnerName,
  getFieldJetModelSelect,
  getFieldSeatCapacity,
  getFieldManufacturedDate,
  getFieldPurchasePrice,
  getFieldBrokerEmail,
  getSubmitButton,
  getProgressBar,
  getQuoteSuccess,
  getQuoteError,
} from '../support/quote.po';

import * as moment from 'moment';

describe('quote request - success', () => {
  beforeEach(() => cy.visit('/quote'));

  it('should make successful request', () => {
    cy.fixture('quote-valid-request').then(r => {
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

      getQuoteSuccess()
        .should('exist')
        .should('contain', 'Annual Premium');

      getQuoteError().should('not.exist');

      getProgressBar().should('not.exist');
    });
  });
});
