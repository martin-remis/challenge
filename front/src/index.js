import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import FullCard from './FullCard';
import Grid from './Grid';
import Card from './Card';
import Column from './Column';
import RequestCards from './RequestCards';

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
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      tasks: [],
      show: false,
      modalId: '',
      modalTitle: '',
      newTasksQuantity: 3,
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
    if (event.key === 'Escape' || event.key === 'Esc') {
      this.hideModal();
    }
  }

  addTasks = (newTasks) => {
    this.setState({
      tasks: [...this.state.tasks, ...newTasks]
    })
  }

  handleSubmit = async () => {
    const quantity = this.state.newTasksQuantity || 3;
    axios
      .post(`http://localhost:8080/tasks?quantity=${quantity}`)
      .then(response => {
        if (response.status === 200) {
          this.addTasks(response.data);
        } else {
          throw Error(`There was an error fetching new tasks: ${response.status} - ${response.statusText}`)
        }
      })
      .catch(error => {
        console.log(`There was an error fetching new tasks: ${error}`);
      });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }

  handleChange(event) {
    this.setState({ newTasksQuantity: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <RequestCards 
            handleSubmit={this.handleSubmit}
            quantity={this.state.newTasksQuantity}
            handleChange={this.handleChange}
          />
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
