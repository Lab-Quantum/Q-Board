import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  menuIten: {
    width: '100%',
    height: '80px',

    marginBottom: '10px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuItenPapper: {
    width: '80%',
    height: '80%',

    borderRadius: '20px',

    backgroundColor: '#f5f5f5',

    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.2)',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: '#11a4ff',

    cursor: 'pointer',
  },
}));
export default useStyles;
