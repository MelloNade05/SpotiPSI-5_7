import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    sidebar: {
        height: '100%',
        width: '15%',
        float: 'right',
        border: '1px solid gray'
    }
}));

export default useStyles