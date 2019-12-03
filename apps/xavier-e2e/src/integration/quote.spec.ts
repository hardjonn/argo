import {
  getQuoteForm,
  getFieldOwnerName,
  getFieldJetModel,
  getFieldSeatCapacity,
  getFieldManufacturedDate,
  getFieldPurchasePrice,
  getFieldBrokerEmail,
  getSubmitButton,
  getProgressBar,
  getQuoteError,
  getQuoteSuccess,
} from '../support/quote.po';

import * as moment from 'moment';

describe('xavier quote page', () => {
  beforeEach(() => cy.visit('/quote'));

  it('should display Request Quote form', () => {
    getQuoteForm().should('exist');
  });

  it('all input fields should exist and have default values', () => {
    // ownerName field
    getFieldOwnerName()
      .should('exist')
      .should($field => {
        expect($field)
          .to.have.attr('type')
          .equal('text');
        expect($field).to.have.value('');
      });

    // jetModel field
    getFieldJetModel()
      .should('exist')
      .should($field => {
        expect($field)
          .to.have.attr('type')
          .equal('hidden');
        expect($field).to.have.value('');
      });

    // seatCapacity field
    getFieldSeatCapacity()
      .should('exist')
      .should($field => {
        expect($field)
          .to.have.attr('type')
          .equal('number');
        expect($field).to.have.value('');
      });

    // manufacturedDate
    const currentDate = moment().format('MM/DD/Y');
    getFieldManufacturedDate()
      .should('exist')
      .should($field => {
        expect($field)
          .to.have.attr('type')
          .equal('text');
        expect($field).to.have.value(currentDate);
      });

    // purchasePrice field
    getFieldPurchasePrice()
      .should('exist')
      .should($field => {
        expect($field)
          .to.have.attr('type')
          .equal('number');
        expect($field).to.have.value('');
      });

    // brokerEmail field
    getFieldBrokerEmail()
      .should('exist')
      .should($field => {
        expect($field)
          .to.have.attr('type')
          .equal('email');
        expect($field).to.have.value('');
      });
  });

  it('submit button should be disabled', () => {
    getSubmitButton()
      .should('exist')
      .should($button => {
        expect($button)
          .to.have.attr('type')
          .equal('submit');
        expect($button).to.have.attr('disabled');
      });
  });

  it('should not display progress bar', () => {
    getProgressBar().should('not.exist');
  });

  it('should not display success quote block', () => {
    getQuoteSuccess().should('not.exist');
  });

  it('should not display error quote block', () => {
    getQuoteError().should('not.exist');
  });
});
