import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    playlists: {
        minHeight: '100%',
        boxSizing: 'border-box'
    },
    top: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    header: {
        color: 'white',
        marginRight: '1%',
        marginTop: '10px'
    },
    btn: {
        marginTop: '10px',
        height: '5%',
        color: '#825193',
        borderColor: '#825193',
        borderRadius: '50px',
        padding: '6px 20px',
        '&:hover': {
            backgroundColor: 'rgba(130,81,147,0.1)',
            borderColor: '#825193',
        }
    },
    playlist: {

    }
}));

export default useStyles
