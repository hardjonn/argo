import {
  getAppHeader,
  getContactHeader,
  getHeaderJetImage,
} from '../support/app.po';

describe('xavier home page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Xavier', () => {
    getAppHeader().contains('Xavier');
  });

  it('should display Contact Info', () => {
    getContactHeader().contains('Xavier Group');
  });

  it('should display Header Jet Image', () => {
    getHeaderJetImage()
      .should('have.attr', 'src')
      .should('include', 'jet');
  });
});
