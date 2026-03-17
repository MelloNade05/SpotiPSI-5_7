import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  songContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '12px',
    margin: '8px',
    borderRadius: '8px',
    backgroundColor: '#1e1e1e',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.3)',
  },
  songInfoLine: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  text: {
    color: 'white',
    fontSize: '16px',
    fontFamily: 'system-ui',
    margin: 0,
  },
  iconButton: {
    color: 'purple',
  },
  songFuncs: {
    display: 'flex',
    lexDirection:'row',
    justifyContent: 'flex-end',
  },
}));

export default useStyles;