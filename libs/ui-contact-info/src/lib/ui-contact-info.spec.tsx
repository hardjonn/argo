import React from 'react';
import { render } from '@testing-library/react';

import UiContactInfo from './ui-contact-info';

describe(' UiContactInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiContactInfo />);
    expect(baseElement).toBeTruthy();
  });
});
