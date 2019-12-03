import {
  getFieldOwnerName,
  getFieldJetModelSelect,
  getFieldSeatCapacity,
  getFieldManufacturedDate,
  getFieldPurchasePrice,
  getFieldBrokerEmail,
} from '../support/quote.po';

import {
  getOwnerNameBox,
  getSeatCapacityBox,
  getJetModelBox,
  getManDateBox,
  getPurchasePriceBox,
  getBrokerEmailBox,
} from '../support/quote-validation.po';

import * as moment from 'moment';

describe('quote form validation', () => {
  beforeEach(() => cy.visit('/quote'));

  it('should display errors after touching fields', () => {
    // ownerName block
    getFieldOwnerName().should($field => {
      $field.focus().blur();
      expect($field)
        .to.have.attr('aria-invalid')
        .equals('true');
    });

    getOwnerNameBox().should('contain', 'required');

    // jetModel block
    getFieldJetModelSelect()
      .focus()
      .blur();
    getJetModelBox().should('contain', 'required');

    // seatCapacity block
    getFieldSeatCapacity().should($field => {
      $field.focus().blur();
      expect($field)
        .to.have.attr('aria-invalid')
        .equals('true');
    });
    getSeatCapacityBox().should('contain', 'required');

    getFieldSeatCapacity()
      .clear()
      .type('0')
      .should('have.attr', 'aria-invalid', 'true');
    getSeatCapacityBox().should('contain', 'Must be greater than zero');

    // manufacturedDate block
    const futureDate = moment()
      .add(1, 'day')
      .format('MM/DD/Y');
    getFieldManufacturedDate().clear();
    getManDateBox().should('contain', 'required');
    getFieldManufacturedDate().type('00000000');
    getManDateBox().should('contain', 'Invalid Date');
    getFieldManufacturedDate()
      .clear()
      .type(futureDate);
    getManDateBox().should('contain', 'Date cannot be in the future');

    // purchasePrice block
    getFieldPurchasePrice().should($field => {
      $field.focus().blur();
      expect($field)
        .to.have.attr('aria-invalid')
        .equals('true');
    });
    getPurchasePriceBox().should('contain', 'required');

    getFieldPurchasePrice()
      .clear()
      .type('0')
      .should('have.attr', 'aria-invalid', 'true');
    getPurchasePriceBox().should('contain', 'Must be greater than zero');

    // brokerEmail block
    getFieldBrokerEmail().should($field => {
      $field.focus().blur();
      expect($field)
        .to.have.attr('aria-invalid')
        .equals('true');
    });
    getBrokerEmailBox().should('contain', 'required');
  });
});
