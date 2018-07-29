import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { initialState, addCard, removeCard } from './state';
import { DictionaryManagement } from './Components/Management';
import TocTacToi from "./Components/Toc-Tac-Toe";


class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  addCard = (card) => {
    this.setState(addCard(this.state, card));
  };

  removeCard = (i) => {
    this.setState(removeCard(this.state, i));
  };
  render() {
    return (
        <div>
            <div className="App">
                <div className="contend">
                    <DictionaryManagement cards={this.state.cards} addItem={this.addCard} onRemoveCard={this.removeCard} />
                </div>
                <div className="App-text">
                    <h1>
                        Title h1
                    </h1>
                    <h2>
                        Subtitle h2
                    </h2>
                    <div>
                        Po co jest div element
                    </div>
                </div>
                <footer className="footer">
                    & 2018.07.07 Kraków
                </footer>
            </div>
            <div className="parent-kwadrat">
                <div className="paragraph1 kwadraty">Paragraf 2 actions toward achieving</div>
                <div className="span1 kwadraty">Span 1superordinate goal are seen</div>
                <div className="span2 kwadraty">Span 2 spam....</div>
            </div>
          <TocTacToi />
        </div>
    );
  }
}


export default App;
