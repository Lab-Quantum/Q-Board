import React from 'react';

import TripOriginIcon from '@material-ui/icons/TripOrigin';

import useStyles from './styles';

export default function MenuItem() {
  const classes = useStyles();

  return (
    <div className={classes.menuIten}>
      <div className={classes.menuItenPapper}>
        <TripOriginIcon />
      </div>
    </div>
  );
}
