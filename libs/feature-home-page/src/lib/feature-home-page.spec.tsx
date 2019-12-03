import React from 'react';
import { render } from '@testing-library/react';

import FeatureHomePage from './feature-home-page';

describe(' FeatureHomePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureHomePage />);
    expect(baseElement).toBeTruthy();
  });
});
