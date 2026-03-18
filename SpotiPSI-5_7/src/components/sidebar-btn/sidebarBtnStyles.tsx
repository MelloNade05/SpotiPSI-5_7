import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    btn: {
        width: '100%',
        height: '60px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'right',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#2C2032'
        }
    },
    selected: {
        backgroundColor: '#2C2032',
    },
    title: {
        color: 'white',
        marginRight: '25%'
    },
    icon: {
        color: 'darkgray',
        marginRight: '10%'
    }
}));

export default useStyles;
