import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    const { savedData } = this.props;
    if (!savedData) return 1;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = data => {
    const { saveData } = this.props;
    return () => {
      const record = {
        id: data.id,
        isComplete: !data.isComplete,
        text: data.text
      };
      saveData(record);
    };
  };

  createNewRecord = () => {
    const { saveData } = this.props;
    const { inputValue } = this.state;
    if (!inputValue) return;
    const record = {
      id: this.getId(),
      isComplete: false,
      text: inputValue
    };
    this.setState({ inputValue: '' });
    saveData(record);
  };

  render() {
    const { savedData } = this.props;
    const { inputValue } = this.state;
    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          <div className="todo-item todo-item-new">
            <input
              className="todo-input t-input"
              placeholder="Введите задачу"
              onChange={this.handleChange}
              onKeyPress={this.createNewRecordByEnter}
              value={inputValue}
            />
            <span className="plus t-plus" onClick={this.createNewRecord}>
              +
            </span>
          </div>
          {savedData
            ? savedData.map(record => this.renderRecord(record))
            : this.renderEmptyRecord()}
        </div>
      </Card>
    );
  }

  renderEmptyRecord = () => {
    return <div className="todo-item t-todo">Задач нет</div>;
  };

  renderRecord = record => {
    const flag = record.isComplete ? 'x' : ' ';
    return (
      <div className="todo-item t-todo" key={record.id}>
        <p className="todo-item__text">{record.text}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          data-todo-id={record.id}
          onClick={this.toggleRecordComplete(record)}
        >
          {`[${flag}]`}
        </span>
      </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
