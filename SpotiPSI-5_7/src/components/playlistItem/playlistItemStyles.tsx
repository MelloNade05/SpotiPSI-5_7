import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  container: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    cursor: 'pointer',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end', // RTL alignment

    transition: 'background-color 0.2s ease',

    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.05)',
    },
  },

  selected: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },

  name: {
    color: '#fff',
    fontWeight: 500,
    fontSize: '16px',
  },

  songs: {
    color: '#aaa',
    fontSize: '13px',
    marginTop: '4px',
  },
}));

export default useStyles;