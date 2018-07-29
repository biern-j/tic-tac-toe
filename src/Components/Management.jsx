import React from 'react';

import { AddCardForm } from './AddCardForm';


export const DictionaryManagement = ({ cards, addItem, onRemoveCard }) => {

  const listElements = cards.map(
    (item, i) => (
      <li key={i}>
        {item.front}: {item.back}
        <button onClick={() => onRemoveCard(i)}>Delete </button>
      </li>
    ));

  return (
    <div>
      <h2>Dictionarys management</h2>
      <AddCardForm onItemAdded={addItem} number={1} />
      <AddCardForm onItemAdded={addItem} number={2} />
      <AddCardForm onItemAdded={addItem} number={3} />
      <ul>
      {listElements}
      </ul>
    </div>
  );
}


