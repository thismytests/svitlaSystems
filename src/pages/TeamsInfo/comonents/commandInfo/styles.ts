import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    marginTop:  '20px',
    padding:  '20px',
    '&:hover': {
      background: '#80808017',
      cursor: 'pointer'
    }
  },
});
