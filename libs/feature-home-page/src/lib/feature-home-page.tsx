import React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import { Paper, Typography, Grid, Divider } from '@material-ui/core';

import UiContactInfo from '@argo/ui-contact-info';
import UiImage from '@argo/ui-image';

import './feature-home-page.scss';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    position: 'relative',
    marginBottom: theme.spacing(4),
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  title: {
    position: 'absolute',
    left: 0,
    top: 0,
    color: 'white',
  },
  titleContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  sidebarContactBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  content: {
    padding: theme.spacing(0, 3, 0, 0),
  },
}));

/* eslint-disable-next-line */
export interface FeatureHomePageProps {}

export const FeatureHomePage = (props: FeatureHomePageProps) => {
  const classes = useStyles({});

  return (
    <>
      <Paper className={classes.header} elevation={0}>
        <UiImage
          className={classes.image}
          id="header__jet-image"
          src="./assets/jet-1280x410.jpg"
          srcList={[
            { width: 320, src: './assets/jet-320x103.jpg' },
            { width: 640, src: './assets/jet-640x205.jpg' },
            { width: 800, src: './assets/jet-800x256.jpg' },
            { width: 1000, src: './assets/jet-1000x320.jpg' },
            { width: 1280, src: './assets/jet-1280x410.jpg' },
          ]}
        />

        <Grid container className={classes.title}>
          <Grid item md={6}>
            <div className={classes.titleContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                Xavier
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>

      <Grid container>
        <Grid item xs={12} md={8} className={classes.content}>
          <Typography variant="h6" gutterBottom>
            Xavier Aircraft Insurance Solution
          </Typography>
          <Divider />
          <Typography paragraph>
            We can competitively insure virtually any aircraft / pilot
            combination from light sport aircraft to the largest airline fleet.
            We are able to offer significant savings because of our broad
            aviation insurance experience and large volume of business.
          </Typography>
          <Typography paragraph gutterBottom>
            Over the past six decades we have developed and maintained preferred
            relationships with all of the premier aviation insurance companies
            in the industry. We also specialize in finding the best Life
            Insurance rates for Pilots. If you are a pilot struggling with the
            high cost of life insurance, Xavier may be able to help.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Commercial Aviation Insurance
          </Typography>
          <Typography paragraph>
            Commercial aviation as a whole has many different avenues. Aircraft
            manufacturers, flight training centers, agricultural aviators, air
            cargo and charter aircraft on demand air service are just a few
            examples of operations that encompass the commercial aircraft
            industry.
          </Typography>
          <Typography paragraph>
            Each operation requires specific expertise not only in their flight
            operation, but also within their insurance policy. At Xavier we know
            that the commercial aviation Industry is often held to a higher
            standard and we feel that their insurance should be as well.
          </Typography>
          <Typography paragraph>
            Our policyholders are important to us. We make every request a top
            priority. We handle each request with a can-do attitude providing
            timely responses to even the most unique requests. Xavier risk
            managers are familiar with the exposures faced by commercial
            aircraft operators and can help address any risk issues through a
            detailed audit process.
          </Typography>
          <Typography paragraph>
            Xavier has competitively insured commercial aviation operators for
            decades. Our aviation insurance specialists are experts in placing
            the best commercial coverage for the best possible price. We can
            competitively insure almost any commercial aviation risk from the
            CFI instructing in a single aircraft to the largest airline fleets.
            Commercial aviation insurance requires a specialist to help navigate
            the marketplace and assist with policy placement.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Private Aircraft Insurance
          </Typography>
          <Typography paragraph>
            Aviation insurance is significantly different than personal home or
            auto insurance, but insuring your aircraft can be made simple if an
            aircraft insurance expert is used to properly place your coverage.
          </Typography>
          <Typography paragraph>
            The aviation insurance experts at Xavier work hard to earn and
            retain your private aircraft insurance business. Our customers range
            from the weekend sport pilot to the largest Fortune 500 companies.
            We are able to write coverage on everything from small experimental
            kit aircraft to Very Light Jets to the largest airline fleet.
          </Typography>
          <Typography paragraph>
            Our company was founded by pilots and we make it a priority to be
            experts in all aspects of the aviation industry. It is important to
            remember that we work for you! We will do our best to make sure that
            your aviation insurance needs are met throughout the years. No
            question or request is considered too small.
          </Typography>
          <Typography paragraph>
            Each policy period you will be contacted for your updated pilot
            information. We will then cover the entire insurance market and
            negotiate the best possible terms for your specific risk. We will
            only place your coverage with one of our premier aviation insurance
            companies. At Xavier we promise to make every policy a priority!
          </Typography>
          <Typography variant="h6" gutterBottom>
            Corporate Aircraft Insurance
          </Typography>
          <Typography paragraph>
            Corporate aircraft insurance is unique and therefore requires an
            aircraft insurance specialist. Aircraft insurance policies are
            different than other standard lines of insurance and, therefore,
            require a specialist.
          </Typography>
          <Typography paragraph>
            Aircraft insurance policies are written using language unique to the
            industry: FAA language differs from policy language, requiring an
            aviation specialist to assist with placing the coverage. Trusting a
            multimillion-dollar hull coupled with liability limits into the
            hundreds of millions to a broker who is not a specialist can be a
            costly mistake.
          </Typography>
          <Typography paragraph>
            In the aviation insurance industry, a professionally flown corporate
            jet aircraft will usually fall into the category of “Industrial
            Aid.” A professional crew flying well-maintained aircraft on
            business missions for executive and employee transportation has
            historically proven to be one of the safest risks in the industry.
          </Typography>
          <Typography paragraph>
            Industrial Aid policies will generally contain the broadest coverage
            for the lowest rates. As an aviation insurance expert, Xavier can
            help coordinate the proper hull insurance coverage and offer expert
            advice on liability coverage into the hundreds of millions through
            one or several of our preferred aviation insurance companies.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={0} className={classes.sidebarContactBox}>
            <UiContactInfo
              title="Contact Info"
              header="Xavier Group"
              phone="(951) 785-0303"
              fax="(951) 785-0305"
              email="contact@xavier.com"
              address1="45 Wonder Road"
              address2="Brooklyn, NY 11234"
            ></UiContactInfo>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default FeatureHomePage;
