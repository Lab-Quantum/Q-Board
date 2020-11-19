import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  menu: {
    width: '80px',
    minHeight: '100vh',
    backgroundColor: '#fff',
  },

  menuLogo: {
    position: 'sticky',
    top: '0',
    backgroundColor: '#fff',

    width: '100%',
    height: '90px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& img': {
      width: '60%',
      cursor: 'pointer',
    },
  },

  menuItensContainer: {
    width: '100%',
  },
}));
export default useStyles;
