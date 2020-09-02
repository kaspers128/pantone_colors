import React, { Component } from 'react';
import Header from './components/header';
import ListItems from './components/listItems';

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      statusId: (localStorage.getItem('statusId')) ? localStorage.getItem('statusId') : 'true',
      statusName: (localStorage.getItem('statusName')) ? localStorage.getItem('statusName') : 'true',
      statusYear: (localStorage.getItem('statusYear')) ? localStorage.getItem('statusYear') : 'true',
      statusColor: (localStorage.getItem('statusColor')) ? localStorage.getItem('statusColor') : 'true',
      statusPantoneValue: (localStorage.getItem('statusPantoneValue')) ? localStorage.getItem('statusPantoneValue') : 'true',
      resetDisabled: (localStorage.getItem('resetDisabled')) ? localStorage.getItem('resetDisabled') : 'true',
      items: [],
    }
  }

  componentDidMount = () => {
    this.fetchItems();
  }

  onChangeValue = value => {
    localStorage.setItem([value], false);
    localStorage.setItem('resetDisabled', false)
    this.setState({
      [value]: localStorage.getItem([value]),
      resetDisabled: localStorage.getItem('resetDisabled'),
    })
    
  }

  onResetTest = () => {
    localStorage.setItem('statusId', true);
    localStorage.setItem('statusName', true);
    localStorage.setItem('statusYear', true);
    localStorage.setItem('statusColor', true);
    localStorage.setItem('statusPantoneValue', true);
    localStorage.setItem('resetDisabled', true);

    this.setState({
      statusId: localStorage.getItem('statusId'),
      statusName: localStorage.getItem('statusName'),
      statusYear: localStorage.getItem('statusYear'),
      statusColor: localStorage.getItem('statusColor'),
      statusPantoneValue: localStorage.getItem('statusPantoneValue'),
      resetDisabled: localStorage.getItem('resetDisabled'),
    })
  }

  fetchItems = () => {
    fetch('https://reqres.in/api/unknown?per_page=12')
      .then(res => res.json())
      .then(result => {
        this.setState({
          items: result.data,
        })
      });
  }

  render(){
    const {items, statusId, statusName, statusYear, statusColor, statusPantoneValue, resetDisabled} = this.state;
    return (
      <>
      <Header
        onResetTest={this.onResetTest}
        resetDisabled={resetDisabled}
      />
      <ListItems 
        data={items}
        statusId={statusId}
        statusName={statusName}
        statusYear={statusYear}
        statusColor={statusColor}
        statusPantoneValue={statusPantoneValue}
        onChangeValue={this.onChangeValue}
      />
      </>
    );
  }
  
}