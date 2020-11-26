import React from 'react';

import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

import Description from '../Description';

export default function GridPage() {
  const classes = useStyles();

  return (
    <article>
      <Grid className={classes.gridContainer} container>
        <Grid item xs={12}>
          <Description
            text="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices lorem quis metus fermentum luctus. Duis nec nulla id ligula tincidunt egestas id tincidunt justo. Morbi sit amet mi quam. Nullam sit amet fermentum dui, sit amet euismod purus."
          />
        </Grid>
      </Grid>
    </article>
  );
}
