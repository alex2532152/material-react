import React, {useRef, useState} from 'react'
import Modal from '@material-ui/core/Modal';
import './../style.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormGroup } from '@material-ui/core';
import uuid from 'react-uuid'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default ({open, setOpen, materialState, setMaterialState}) => {
    // const titleRef = useRef(null)
    // console.dir(titleRef.current)
    const [group, setGroup] = useState('None')
    const submitForm = (event) => {
        event.preventDefault()
        const newItem = {
            id: uuid(), 
            title: event.currentTarget[0].value, 
            description: event.currentTarget[2].value, 
            group: group
        }
        setMaterialState([...materialState, newItem])
        setOpen(false)
    }
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
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={group}
                        onChange={(event) => setGroup(event.target.value)}
                    >
                        <MenuItem value={'None'}>None</MenuItem>
                        <MenuItem value={'Math'}>Math</MenuItem>
                        <MenuItem value={'History'}>History</MenuItem>
                    </Select>
                    <form component={FormGroup} onSubmit={submitForm} >
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
                            type='submit'
                        >
                            Add new material
                        </Button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}