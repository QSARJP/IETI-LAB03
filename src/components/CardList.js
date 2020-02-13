import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from './Card';

  

export class CardList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const cardList = this.props.map((task, i) => {
            return (
                <Card
                    key={'task_' + i}
                    description={task.description}
                    name={task.responsible.name}
                    email={task.responsible.email}
                    status={task.status}
                    dueDate={task.dueDate} />
            );
        })
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
                <div>
                    <ul>
                        {cardList}
                    </ul>
                </div>
             </Container>
        );


    }

}
