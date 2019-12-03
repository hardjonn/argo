import React from 'react';
import { render } from '@testing-library/react';

import FeatureQuotePage from './feature-quote-page';

describe(' FeatureQuotePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureQuotePage />);
    expect(baseElement).toBeTruthy();
  });
});
