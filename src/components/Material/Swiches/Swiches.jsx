import React from 'react'
import './../style.css'
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default ({groupState, setGroupState}) => {
    return (
        <div>
            <Card className='cardBlock'>
                <Switch
                    checked={groupState.groupNone}
                    onChange={() => setGroupState((prev) => ({...prev, groupNone: !prev.groupNone}))}
                    color="primary"
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <label>None</label>
                <Switch
                    checked={groupState.groupMath}
                    onChange={() => setGroupState((prev) => ({...prev, groupMath: !prev.groupMath}))}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <label>Math</label>
                <Switch
                    checked={groupState.groupHistory}
                    onChange={() => setGroupState((prev) => ({...prev, groupHistory: !prev.groupHistory}))}
                    name="checkedC"
                    color="primary"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
                <label>History</label> 
             </Card>
    
        </div>
    )
}