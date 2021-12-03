import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FullCard from './FullCard';
import Grid from './Grid';
import Card from './Card';
import Column from './Column';

const renderCard = (task, showModal) => {
  return (<Column className="m">
    <Card onClick={showModal} task={task}>{task.title}</Card>
  </Column>)
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.escFunction = this.escFunction.bind(this);
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
      show: false,
      modalId: '', 
      modalTitle: '', 
    };
  }

  showModal = (task) => {
    console.log('show modalllll');
    this.setState({ 
      show: true,
      modalId: task?.id || '', 
      modalTitle: task?.title || '', 
    });
  };

  hideModal = () => {
    this.setState({ 
      show: false,
      modalId: '', 
      modalTitle: '', 
    });
  };

  escFunction = (event) => {
    if(event.key === 'Escape' || event.key === 'Esc') {
      this.hideModal();
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

  render() {
    return (
      <div className="App">
        <Grid>
          {this.state.tasks.map(task => renderCard(task, this.showModal))}
        </Grid>
        <FullCard show={this.state.show} handleClose={this.hideModal}>
          <h1> {this.state.modalTitle} </h1>
          <p>{this.state.modalId}</p>
        </FullCard>        
      </div>
    );
  }
}

class Tasks extends React.Component {
  render() {
    return <Board />;
  }
}

ReactDOM.render(
  <Tasks />,
  document.getElementById('root')
);
