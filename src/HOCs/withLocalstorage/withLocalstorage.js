import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (storageKey, arr) => WrappedComponent => {
  return class extends Component {
    state = {
      savedData: arr
    };

    componentDidMount = () => {
      this.setState({
        savedData: load(storageKey)
      });
    };

    // eslint-disable-next-line max-statements
    saveData = data => {
      const { savedData } = this.state;
      let dataArr;

      const isOldRecord = record => record.id === data.id;

      if (!savedData) {
        dataArr = [data];
      } else if (savedData.findIndex(isOldRecord) !== -1) {
        dataArr = savedData.map(item => (isOldRecord(item) ? data : item));
      } else {
        dataArr = [...savedData, data];
      }

      save(storageKey, dataArr);
      this.setState({
        savedData: load(storageKey)
      });
    };

    render() {
      const { savedData } = this.state;
      return (
        <WrappedComponent
          savedData={savedData}
          saveData={this.saveData}
          {...this.props}
        />
      );
    }
  };
};

export default withLocalstorage;
