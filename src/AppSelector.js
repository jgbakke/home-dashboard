import React from 'react';
import './AppSelector.css';
import './proxima-nova.css'

class AppSelector extends React.Component {
  render() {
    return <button class="app-selector tk-proxima-nova "><b>{this.props.name}</b></button>;
  }
}

export default AppSelector;