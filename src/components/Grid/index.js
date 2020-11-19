import React from 'react';

import useStyles from './styles';

export default function Grid() {
  const classes = useStyles();

  return (
    <article>
      <div className={classes.gridContainer} />
    </article>
  );
}
