import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grid from './Grid';
import Card from './Card';
import Column from './Column';

const renderCard = task => {
  return (<Column className="m">
    <Card id={task.id}>{task.title}</Card>
  </Column>)
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{
        title: 'asd',
        id: '2736966f-b14a-4b23-b8ce-574e274dacbe'
      }, {
        title: 'asd',
        id: '9b141442-cbd5-4c6d-b373-86e0cdc8945b'
      }, {
        title: 'asd',
        id: '0a9d7548-ba70-4412-9c0a-8729b1ec2415'
      }],
    };
  }

  render() {
    return (
      <div className="App">
        <Grid>
          {this.state.tasks.map(task => renderCard(task))}
        </Grid>
      </div>
    );
  }
}

class Tasks extends React.Component {
  render() {
    return <Board />;
  }
}

// ========================================

ReactDOM.render(
  <Tasks />,
  document.getElementById('root')
);
