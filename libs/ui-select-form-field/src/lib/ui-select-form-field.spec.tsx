import React from 'react';
import { render } from '@testing-library/react';

import UiSelectFormField from './ui-select-form-field';

describe(' UiSelectFormField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiSelectFormField />);
    expect(baseElement).toBeTruthy();
  });
});
