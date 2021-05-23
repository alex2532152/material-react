import React from 'react'
import AddNewMaterial from './AddNewMaterial/AddNewMaterial'
import MaterialsBlock from './MaterialsBlock/MaterialsBlock'
import Swiches from './Swiches/Swiches'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './style.css'

export default ({materialState, setMaterialState}) => {
    const [open, setOpen] = React.useState(false)
    const [groupState, setGroupState] = React.useState({
        groupNone: true,
        groupMath: true, 
        groupHistory: true, 
    })
    localStorage.setItem('materials', JSON.stringify(materialState))

    return (
        <div>
            <Button
                onClick={()=> setOpen(true)}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddIcon />}
            >
                Add new material
            </Button>
            <div className='main-material'>
                <Swiches groupState={groupState} setGroupState={setGroupState} />
                <div>
                    <AddNewMaterial open={open} setOpen={setOpen} materialState={materialState} setMaterialState={setMaterialState} />

                    <div>
                        {JSON.parse(localStorage.getItem('materials')).filter(item => {
                            switch (item.group) {
                                case 'None':
                                    if (groupState.groupNone) return true
                                    break;
                                case 'Math':
                                    if (groupState.groupMath) return true
                                    break;
                                case 'History':
                                    if (groupState.groupHistory) return true
                                    break;
                                default:
                                    return false
                            }
                        }).map(item => (
                            <>
                            <Card className='cardBlock'>
                                <CardContent>
                                    <Typography variant="h2" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="p" component="p">
                                        {item.description}
                                    </Typography>
                                    <Typography variant="p" component="p" color="textSecondary">
                                        {item.group}
                                    </Typography>
                                </CardContent>
                            </Card>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}