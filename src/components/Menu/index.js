import React from 'react';

import MenuItem from '../MenuIten';

import useStyles from './styles';

export default function Menu() {
  const classes = useStyles();

  return (
    <article>
      <div className={classes.menu}>
        <div className={classes.menuLogo}>
          <img
            src="https://avatars0.githubusercontent.com/u/58088658?s=200&v=4"
            alt="logo "
          />
        </div>
        <div className={classes.menuItensContainer}>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </div>
    </article>
  );
}
