import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  descriptionIten: {
    backgroundColor: '#fff',

    borderRadius: '20px',
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.1)',

    display: 'flex',
    alignItems: 'center',

    padding: '20px 50px',

    color: '#505050',
  },

  textSide: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  imageSide: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

    '& img': {
      width: '20%',
    },
  },
}));
export default useStyles;
