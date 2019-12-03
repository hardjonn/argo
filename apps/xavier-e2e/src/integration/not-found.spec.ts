import { getNotFoundHeader } from '../support/not-found.po';

describe('xavier 404 page', () => {
  beforeEach(() => cy.visit('/gibberish_page'));

  it('should display 404 not found', () => {
    getNotFoundHeader().contains('404');
  });
});
