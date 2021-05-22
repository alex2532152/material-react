import React from 'react'
import AddNewMaterial from './AddNewMaterial/AddNewMaterial'
import MaterialsBlock from './MaterialsBlock/MaterialsBlock'
import Swiches from './Swiches/Swiches'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './style.css'

export default ({materialState, setMaterialState}) => {
    const [open, setOpen] = React.useState(false)
    const [groupState, setGroupState] = React.useState({
        groupNone: true,
        groupMath: true, 
        groupHistory: true, 
    })
    console.log(materialState);
    // const Materials = [
    //     {id: 1, title: 'First material', description: 'Its information about first material', group: 'best'},
    //     {id: 2, title: 'Second material', description: 'Its information about second material', group: 'main'},
    //     {id: 3, title: 'Third material', description: 'Its information about third material', group: 'main'},
    // ]
    // const [material, setMaterial] = React.useState(Materials)
    return (
        <div>
            {/* <MaterialsBlock material={material} setMaterial={setMaterial} /> */}
            <Button
                onClick={()=> setOpen(true)}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddIcon />}
            >
                Add new material
            </Button>
            <Swiches groupState={groupState} setGroupState={setGroupState} />
            <AddNewMaterial open={open} setOpen={setOpen} materialState={materialState} setMaterialState={setMaterialState} />

            <div>
                {materialState.filter(item => {
                    if (item.group === 'None' && groupState.groupNone) {
                        return true
                    } else if (item.group === 'Math' && groupState.groupMath) {
                        return true
                    } else if (item.group === 'History' && groupState.groupHistory) {
                        return true
                    }
                    return false
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
    )
}