export const getQuoteForm = () => cy.get('form#quote-form');
export const getFieldOwnerName = () => cy.get('input[name="ownerName"]');
export const getFieldJetModel = () => cy.get('input[name="jetModel"]');
export const getFieldJetModelSelect = () => cy.get('#jet-model-select');
export const getFieldSeatCapacity = () => cy.get('input[name="seatCapacity"]');
export const getFieldManufacturedDate = () => cy.get('input#manufactured-date');
export const getFieldPurchasePrice = () =>
  cy.get('input[name="purchasePrice"]');
export const getFieldBrokerEmail = () => cy.get('input[name="brokerEmail"]');
export const getSubmitButton = () => cy.get('button[type="submit"]');
export const getProgressBar = () => cy.get('#progress-bar');
export const getQuoteSuccess = () => cy.get('#quote-success');
export const getQuoteError = () => cy.get('#quote-error');
