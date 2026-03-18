import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()(() => ({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    direction: 'rtl',
    padding: '12px',
  },
  header: {
    color: 'white',
    marginRight: '2%'
  },
}));

export default useStyles;
