import React from 'react';
import { render } from '@testing-library/react';

import UiTextFormField from './ui-text-form-field';

describe(' UiTextFormField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiTextFormField />);
    expect(baseElement).toBeTruthy();
  });
});
