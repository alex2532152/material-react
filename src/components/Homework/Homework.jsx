import React, {useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddNewHomework from './../common/AddData';

const HomeWork = ({homeworkState, setHomeworkState}) => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Button
                onClick={() => setOpen(true)}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddIcon />}>
                   Add homework
            </Button>
            <AddNewHomework 
            state={homeworkState}
            setState={setHomeworkState}
            open={open}
            setOpen={setOpen}
            type={'homework'}
            selectGroup={['None', 'Language', 'Programming']}
             />
            {homeworkState.map(item => (
            <Card className="card-block">
                <CardContent>
                    <Typography variant="h2" component="h2">
                        {item.title}
                    </Typography>
                    <Typography variant="h6" component="h4">
                        {item.description}
                    </Typography>
                    <Typography variant="h6" component="h4" color="textSecondary">
                        {item.group}
                    </Typography>
                    <Typography variant="h6" component="h4">
                        {String(item.deadline)}
                    </Typography>

                </CardContent>
            </Card>
            ))}
        </div>
    )
}

export default HomeWork