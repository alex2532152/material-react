import React from 'react'
import Modal from '@material-ui/core/Modal';
import './../style.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export default ({open, setOpen}) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className='modal'>
                    <h2>Напишите что-то</h2>
                    <TextField 
                        title 
                        variant="outlined"
                        id="standard-required" 
                        label="Required" 
                        defaultValue="что-то" 
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={6}
                        defaultValue="что-то"
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<AddIcon />}
                    >
                        Add new material
                    </Button>
                </div>
            </Modal>
        </div>
    )
}