import React, { FC } from 'react';

import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import './ui-error-message-card.scss';

/* eslint-disable-next-line */
export interface UiErrorMessageCardProps {
  errorMessage: string;
  reasons: string[];
}

export const UiErrorMessageCard: FC<UiErrorMessageCardProps> = ({
  errorMessage,
  reasons,
}) => {
  return (
    <Card style={{ marginTop: '32px' }} id="quote-error">
      <CardContent>
        <Typography color="textSecondary" variant="h6" gutterBottom>
          {errorMessage}
        </Typography>
        <List component="ul">
          {reasons.map(reason => (
            <ListItem key={reason}>
              <ListItemText primary={reason} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UiErrorMessageCard;
