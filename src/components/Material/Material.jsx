import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddNewMaterial from './AddNewMaterial/AddNewMaterial'
import MaterialsBlock from './MaterialsBlock/MaterialsBlock'

export default () => {
    const [open, setOpen] = React.useState(false)
    const Materials = [
        {id: 1, title: 'First material', description: 'Its information about first material', group: 'best'},
        {id: 2, title: 'Second material', description: 'Its information about second material', group: 'main'},
        {id: 3, title: 'Third material', description: 'Its information about third material', group: 'main'},
    ]
    const [material, setMaterial] = React.useState(Materials)
    return (
        <div>
            <MaterialsBlock material={material} setMaterial={setMaterial} />
            <Button
                onClick={()=> setOpen(true)}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddIcon />}
            >
                Add new material
            </Button>
            <AddNewMaterial open={open} setOpen={setOpen} material={material} setMaterial={setMaterial} />
        </div>
    )
}