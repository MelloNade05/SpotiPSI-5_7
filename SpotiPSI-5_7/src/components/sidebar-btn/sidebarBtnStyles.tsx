import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    btn: {
        width: '100%',
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#2C2032'
        }
    },
    title: {
        color: 'white',
        marginRight: '2%'
    },
    icon: {
        color: 'darkgray'
    }
}));

export default useStyles