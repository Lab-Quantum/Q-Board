import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  gridContainer: {
    width: 'calc(100vw - 80px)',
    minHeight: '100vh',

    display: 'flex',

    padding: '30px 0px 10px 0px',
  },
}));
export default useStyles;
