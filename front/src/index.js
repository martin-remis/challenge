import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import FullCard from './components/FullCard';
import Grid from './components/Grid';
import Card from './components/Card';
import Column from './components/Column';
import RequestCards from './components/RequestCards';
import Loader from './components/Loader';

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
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleCompleteTasks = this.handleCompleteTasks.bind(this);
    this.state = {
      tasks: [],
      show: false,
      modalId: '',
      modalTitle: '',
      newTasksQuantity: 3,
      loading: false,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }

  showModal = (task) => {
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
    if ((event.key === 'Escape' || event.key === 'Esc') && !this.state.loading) {
      this.hideModal();
    }
  }

  addTasks = (newTasks) => {
    this.setState({
      tasks: [...this.state.tasks, ...newTasks]
    })
  }

  handleNewTasks = async () => {
    const quantity = this.state.newTasksQuantity || 3;
    const successText = 'Tasks created';
    const failureText = 'Cannot create tasks';

    this.changeLoader(true);
    axios
      // TODO: configure this?
      .post(`http://localhost:8080/tasks?quantity=${quantity}`)
      .then(response => {
        if (response.status === 200) {
          this.addTasks(response.data);
          this.notify.success(`${quantity} ${successText}`);
        } else {
          throw Error(`There was an error fetching new tasks: ${response.status} - ${response.statusText}`)
        }
      })
      .catch(error => {
        console.log(`There was an error fetching new tasks: ${error}`);
        this.notify.error(failureText);
      })
      .finally(() => {
        this.changeLoader(false);
      });
  }

  handleCompleteTasks = async () => {
    const successText = 'Task completed';
    const failureText = 'Cannot update task';

    this.changeLoader(true);
    axios
      // TODO: configure this?
      .put(`http://localhost:8080/tasks`, {
        id: this.state.modalId,
        title: this.state.modalTitle
      })
      .then(response => {
        if (response.status === 204) {
          console.log(successText);
          this.notify.success(successText);
        } else {
          throw Error(`There was an error updating tasks: ${response.status} - ${response.statusText}`)
        }
      })
      .catch(error => {
        console.log(`There was an error fetching new tasks: ${error}`);
        this.notify.error(failureText);
      })
      .finally(() => {
        this.changeLoader(false);
      });
  }

  handleQuantityChange = (event) => {
    this.setState({ newTasksQuantity: event.target.value });
  }

  changeLoader = (status) => {
    this.setState({
      loading: status
    })
  }

  notify = toast;

  render() {
    return (
      <div className="App">
        <Grid>
          <RequestCards
            handleSubmit={this.handleNewTasks}
            quantity={this.state.newTasksQuantity}
            handleChange={this.handleQuantityChange}
          />
          {this.state.tasks.map(task => renderCard(task, this.showModal))}
        </Grid>
        <FullCard show={this.state.show} handleClose={this.hideModal} handleComplete={this.handleCompleteTasks}>
          <h1> {this.state.modalTitle} </h1>
          <p>{this.state.modalId}</p>
        </FullCard>
        <Loader loading={this.state.loading} />
        <ToastContainer />
      </div>
    );
  }
}

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);
