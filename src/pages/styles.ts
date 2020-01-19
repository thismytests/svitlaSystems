import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    '&:hover': {
      color: 'gray',
      cursor: 'pointer'
    }
  },
}));
