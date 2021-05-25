import React, { useState } from 'react';
import uuid from 'react-uuid'
import { FormGroup } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import '../Material/style.css'


// eslint-disable-next-line import/no-anonymous-default-export
export default ({open , setOpen, state, setState, type, selectGroup = []}) => {
  const [group, setGroup] = useState(selectGroup[0])
  const [feild1, setField1] = useState('Title')
  const [feild2, setField2] = useState('')
  const [textArea, setTextArea] = useState('Default value')
  console.log(textArea)
  const submitForm = (event) => {
    event.preventDefault()
    let newItem;
    if(type === 'material') {
      newItem = {id: uuid(),
        title: feild1,
        description: textArea,
        group
      }
    } else if (type === 'student') {
      newItem = {id: uuid(),
        name: feild1,
        email: feild2,
        group
      }
    } else {
      //HomeWork
      newItem = {id: uuid(),
        name: feild1,
        deadLine: feild2,
        userId: 'feild3' 
      }
    }
    setState([...state, newItem])
    setOpen(false)
  }
    return (
        <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal">
          <h2>Add {type}</h2>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
          value={group}
          onChange={(event) => setGroup(event.target.value)}
        >
          {selectGroup.map(item => <MenuItem value={item}>{item}</MenuItem>)}
        </Select>
          <form 
          className='form-block'
          component={FormGroup} onSubmit={submitForm}>
            
            <TextField required id="standard-required"
            label="Add title"
            variant="outlined"
            onChange={(event) => setField1(event.target.value)}
            defaultValue="Title" />

            {(type !== 'material') && <TextField required id="standard-required"
            label="Add title"
            variant="outlined"
            onChange={(event) => setField2(event.target.value)}
            defaultValue="Email" />}

            {(type === 'material') && <TextField
                id="outlined-multiline-static"
                label="Add description"
                multiline
                rows={7}
                defaultValue="Default Value"
                variant="outlined"
                onChange={(event) => setTextArea(event.target.value)}
                />}
               <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                >
                        Add new {type}
                </Button>
              </form>
        </div>
      </Modal>
    )
}