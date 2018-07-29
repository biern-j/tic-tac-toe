import React from 'react';


export class AddCardForm extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded({ front: this.state.front, back: this.state.back });
  };

  render(){
    let number = this.props.number;
    return <form>
      <h3>Add a card</h3>
      <input type="text" onChange={
        (e) => this.setState({ front: `${number}, ${e.target.value}` })
      } />
      <input type="text" onChange={
        (e) => this.setState({ back: e.target.value })
      } />
      <button type="submit" onClick={this.onSubmit}>Add</button>
    </form>
  }
  }
