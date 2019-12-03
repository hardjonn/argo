import React from 'react';
import { render } from '@testing-library/react';

import FeatureNotFoundPage from './feature-not-found-page';

describe(' FeatureNotFoundPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureNotFoundPage />);
    expect(baseElement).toBeTruthy();
  });
});
