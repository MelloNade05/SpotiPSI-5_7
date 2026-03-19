import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    top: {
        marginTop: '10px',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    header: {
        color: 'white',
        marginRight: '1%'
    },
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        direction: 'rtl',
        padding: '12px',
    }
}));

export default useStyles;
