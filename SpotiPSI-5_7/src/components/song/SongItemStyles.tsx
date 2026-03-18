import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  songContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'end',
    direction:'ltr',
    height:'100%',
    width:'97%',
    padding: '12px',
    margin:'5px',
    border: '3px solid #1b1b1b',
    borderRadius:'16px',
    backgroundColor: '#0f0f0f',
    '&:hover': {
      backgroundColor: '#1b1b1b'
    }
  },
  songInfoLine: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'left',
  alignItems: 'center',
  height: '50%',
  width: '50%',
  },
  text: {
    color: 'white',
    fontSize: '16px',
    fontFamily: 'system-ui',
    padding:'5px',
    margin: 0,
  },
  playicon: {
    color: '#825193',
  },
  addIcon: {
    color: 'darkgray'
  },
  favoriteIcon: {
    color: "darkgray",
    "&.Mui-checked": {
      color: "#825193"
    },
  },
  songFuncs: {
    display: 'flex',
    flexDirection:'row',
    marginLeft: '50%',
    alignItems: 'center'
  },
}));

export default useStyles;
