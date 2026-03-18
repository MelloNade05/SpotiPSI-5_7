import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    sidebar: {
        height: '825px',
        width: '15%',
        float: 'right',
        marign: '0',
        borderLeft: '1px solid #313131',
        '& ul': {
            margin: 0,
            padding: 0,
            listStyle: 'none'
        }
    }
}));

export default useStyles
