import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    sidebar: {
        height: '820px',
        width: '15%',
        float: 'right',
        marign: '0',
        borderLeft: '1px solid #313131',
    }
}));

export default useStyles
