import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { apiGetAllRooms } from '../../api';

class MainPage extends Component {
  state = {
    rooms: [],
    dataIsFetched: false,
    slidesAreLoaded: false,
  };

  componentDidMount() {
    this.getRoomsData();
  }

  getRoomsData = async () => {
    try {
      const response = await apiGetAllRooms();
      this.setState({ rooms: response.data.items });
    } catch (e) {
      console.error(`Somethint went wrong fetching API calls: ${e}`);
    }

    this.setState({ dataIsFetched: True});
  };
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
