import useStyles from './popupStyles';
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

type PopupProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (name: string) => void;
};

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, onSubmit }) => {
    const { classes } = useStyles();
    const [name, setName] = useState('');

    const handleSubmit = () => {
        onSubmit(name);
        setName('');
    };

    return (
        <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="xs" slotProps={{
            backdrop: {
                sx: {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                }
            },
            paper: {
                sx: {
                    backgroundColor: '#313131',
                }
            }
        }}>
            <DialogTitle className={classes.turnWhite} sx={{ textAlign: 'right' }}>יצירת פלייליסט חדש</DialogTitle>

            <DialogContent>
                <TextField className={classes.turnWhite} autoFocus fullWidth variant="standard" label="שם הפלייליסט" value={name} onChange={(e) => setName(e.target.value)} inputProps={{ style: { textAlign: 'right' } }} InputLabelProps={{sx: { color: 'white' }}}/>
            </DialogContent>

            <DialogActions sx={{ justifyContent: 'flex-start' }}>
                <Button className={classes.turnWhite} onClick={handleSubmit} disabled={!name}>צור</Button>
                <Button className={classes.turnPurple} onClick={onClose}>ביטול</Button>
            </DialogActions>
        </Dialog>
    );
};

export default Popup;