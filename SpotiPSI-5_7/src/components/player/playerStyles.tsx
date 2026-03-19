import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    player: {
        width: '100%',
        height: '100px',
        backgroundColor: '#313131',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        marginRight: '2%'
    }
}));

export default useStyles
