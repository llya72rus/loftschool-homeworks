import React, { Component } from 'react';

import './Show.css';

import { getShowInfo } from '../../api';

export default class Show extends Component {
  state = {
    showId: null,
    data: null
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.showId !== prevState.showId) {
      return { showId: nextProps.showId, data: null };
    }
    return null;
  }

  componentDidUpdate() {
    const { data, showId } = this.state;
    if (data == null && showId !== '') {
      getShowInfo(showId).then(data => {
        this.setState({ data });
      });
    }
  }

  render() {
    const { data } = this.state;

    return data ? (
      <div className="show">
        <img
          className="show-image"
          src={`${data.image.original}`}
          alt={`${data.name}`}
        />
        <h2 className="show-label t-show-name">{data.name}</h2>
        <p className="show-text t-show-genre">
          <b>Жанр: </b>
          {data.genres.join(', ')}
        </p>
        <p
          className="show-text t-show-summary"
          dangerouslySetInnerHTML={{ __html: data.summary }}
        />
      </div>
    ) : (
      <p className="show-information t-show-info">Шоу не выбрано</p>
    );
  }
}
