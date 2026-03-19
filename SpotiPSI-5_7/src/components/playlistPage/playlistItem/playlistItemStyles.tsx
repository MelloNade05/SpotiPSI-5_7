import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  container: {
    width: '110%',
    marginLeft: '1%',
    padding: '12px 16px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    borderBottom: '1px solid #313131',
    '&:hover': {
      backgroundColor: '#ffffff0d',
    },
  },

  selected: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },

  name: {
    color: '#fff',
    fontSize: '16px',
  },

  songs: {
    color: '#aaa',
    fontSize: '13px',
    marginTop: '4px',
  },
}));

export default useStyles;