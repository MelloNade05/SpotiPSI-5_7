import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  songContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'end',
    direction:'ltr',
    height:'100%',
    width:'97%',
    padding: '12px',
    margin:'5px',
    border: '4px solid #1b1b1b',
    borderRadius:'16px',
    backgroundColor: '#0f0f0f',
  },
  songInfoLine: {
    display: 'flex',
    justifyContent: 'start',
    alignContent:'center',
    alignItems:'center',
    flexDirection:'row',
    direction:'ltr',
    height:'0.2rem',
    width:'100%',
    
    marginBottom: '8px',
  },
  text: {
    color: 'white',
    fontSize: '16px',
    fontFamily: 'system-ui',
    padding:'5px',
    margin: 0,
  },
  iconButton: {
    color: 'purple',
  },
  songFuncs: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'flex-end',
  },
}));

export default useStyles;