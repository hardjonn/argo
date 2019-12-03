import React from 'react';
import { render } from '@testing-library/react';

import FeatureContactInfo from './feature-contact-info';

describe(' FeatureContactInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureContactInfo />);
    expect(baseElement).toBeTruthy();
  });
});
