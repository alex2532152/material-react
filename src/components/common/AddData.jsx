import React, {useState } from 'react';
import uuid from 'react-uuid'
import { FormGroup } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import '../Material/style.css'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({open , setOpen, state, setState, type, selectGroup = []}) => {
  const [group, setGroup] = useState(selectGroup[0])
  const [feild1, setField1] = useState('Title')
  const [feild2, setField2] = useState('')
  const [textArea, setTextArea] = useState('Default value')
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
    } else if (type === 'homework') {
      newItem = {id: uuid(),
        title: feild1,
        description: textArea,
        deadline: `Срок сдачи: ${selectedDate.getDate()}/${selectedDate.getMonth()+1}/${selectedDate.getFullYear()}`,
        group
      }
    } else {
      //HomeWork
      newItem = {id: uuid(),
        name: feild1,
        deadline: feild2,
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
          component={FormGroup} onSubmit={submitForm}
        >
          <TextField required id="standard-required"
          label="Add title"
          variant="outlined"
          onChange={(event) => setField1(event.target.value)}
          defaultValue="Title" />

          {(type !== 'material') && (type !== 'homework') && <TextField required id="standard-required"
          label="Add email"
          variant="outlined"
          onChange={(event) => setField2(event.target.value)}
          defaultValue="Email" />}

          {((type === 'material') || (type === 'homework')) && <TextField
            id="outlined-multiline-static"
            label="Add description"
            multiline
            rows={7}
            defaultValue="Default Value"
            variant="outlined"
            onChange={(event) => setTextArea(event.target.value)}
          />}
          {(type === 'homework') && 
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          }
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