import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()(() => ({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    direction:'rtl',
    padding: '12px',
    margin:'5px',
    backgroundColor: '#0a0a0a',
  },
  header: {
    color:'white'
  },
}));

export default useStyles;