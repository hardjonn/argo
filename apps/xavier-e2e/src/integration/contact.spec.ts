import { getContactHeader } from '../support/app.po';

describe('xavier contact page', () => {
  beforeEach(() => cy.visit('/contact'));

  it('should display Contact Info', () => {
    getContactHeader().contains('Xavier Group');
  });
});
