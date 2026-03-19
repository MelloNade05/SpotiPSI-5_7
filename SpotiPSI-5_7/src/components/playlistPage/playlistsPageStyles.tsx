import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    playlists: {
        height: '100%',
        width: '100%',
        marign: '0',
    },
    top: {
        width: '83%',
        height: '100px',
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid red',
    },
    header: {
        color: 'white',
        marginRight: '2%'
    },
    btn: {
        color: '#825193',
        borderColor: '#825193',
        borderRadius: '50px',
        padding: '6px 20px',
        '&:hover': {
            backgroundColor: 'rgba(130,81,147,0.1)',
            borderColor: '#825193',
        }
    }
}));

export default useStyles
