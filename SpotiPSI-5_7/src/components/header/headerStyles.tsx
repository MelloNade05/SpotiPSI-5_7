import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    header: {
        width: '100%',
        height: '100px',
        backgroundColor: '#313131',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right'
    },
    title: {
        color: '#825193',
        marginRight: '2%'
    }
}));

export default useStyles