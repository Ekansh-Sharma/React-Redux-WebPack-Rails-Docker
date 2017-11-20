import React from 'react';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from '../../reducers';
import IndexComponent from '../../containers/post-container'
const store = createStore(allReducers);

class AppComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Provider store={store}>
        <IndexComponent />
      </Provider>
    )
  }
}

export default AppComponent;