import React from 'react';
import { render } from '@testing-library/react';

import UiErrorMessageCard from './ui-error-message-card';

describe(' UiErrorMessageCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiErrorMessageCard />);
    expect(baseElement).toBeTruthy();
  });
});
