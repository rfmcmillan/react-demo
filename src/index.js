import React from 'react';
import ReactDOM from 'react-dom';
const app = document.querySelector('#app');

const Item = ({ item, removeItem, index }) => {
  return (
    <li>
      {item}
      <button onClick={() => removeItem(index)}>X</button>
    </li>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items,
      message: '',
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem() {
    this.setState({ items: [...this.state.items, Math.random()] });
  }

  removeItem(index) {
    const items = this.state.items.filter(
      (itemFilt, indexFilt) => indexFilt !== index
    );
    this.setState({ items });
  }

  render() {
    const { items, message } = this.state;
    const { addItem, removeItem } = this;
    return (
      <div>
        <h2>Count is {items.length}</h2>
        <h3>{message}</h3>
        <button onClick={addItem}>Add An Item</button>
        <ul>
          {items.map((item, index) => (
            <Item
              index={index}
              removeItem={removeItem}
              key={index}
              item={item}
            />
          ))}
        </ul>
      </div>
    );
  }
}
const items = [1, 2];
ReactDOM.render(React.createElement(App), app);
