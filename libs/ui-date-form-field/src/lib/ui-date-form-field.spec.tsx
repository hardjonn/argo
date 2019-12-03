import React from 'react';
import { render } from '@testing-library/react';

import UiDateFormField from './ui-date-form-field';

describe(' UiDateFormField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiDateFormField />);
    expect(baseElement).toBeTruthy();
  });
});
