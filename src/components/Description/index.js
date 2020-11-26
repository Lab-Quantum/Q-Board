import React from 'react';

import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import useStyles from './styles';

export default function Description(props) {
  const classes = useStyles();

  const { text } = props;

  return (
    <article>
      <Grid container justify="center">
        <Grid item xs={11} className={classes.descriptionIten}>
          <Grid container>
            <Grid item xs={10} className={classes.textSide}>
              {text}
            </Grid>
            <Grid item xs={2} className={classes.imageSide}>
              <img
                src="https://avatars0.githubusercontent.com/u/58088658?s=200&v=4"
                alt="logo "
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </article>
  );
}

Description.propTypes = {
  text: PropTypes.string.isRequired,
};
