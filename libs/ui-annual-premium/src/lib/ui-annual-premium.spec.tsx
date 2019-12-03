import React from 'react';
import { render } from '@testing-library/react';

import UiAnnualPremium from './ui-annual-premium';

describe(' UiAnnualPremium', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiAnnualPremium />);
    expect(baseElement).toBeTruthy();
  });
});
