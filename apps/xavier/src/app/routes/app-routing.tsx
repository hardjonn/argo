import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FeatureHomePage from '@argo/feature-home-page';
import FeatureQuotePage from '@argo/feature-quote-page';
import FeatureContactInfo from '@argo/feature-contact-info';
import FeatureNotFoundPage from '@argo/feature-not-found-page';

export const AppRouting: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={FeatureHomePage} />
      <Route path="/quote" exact component={FeatureQuotePage} />
      <Route path="/contact" exact component={FeatureContactInfo} />
      <Route path="/" component={FeatureNotFoundPage} />
    </Switch>
  );
};

export default AppRouting;
