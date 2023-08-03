import React, {useState} from 'react'
import { connect } from 'react-redux'

import TestDragItem from '../components/TestDragItem'
import TestDropContain from '../components/TestDropContain'
import { getUsers } from '../actions/user/userActions'


function Test({ state }) {
  const [droppedItems, setDroppedItems] = useState([]);

  console.log(state)

  const handleDrop = (itemName) => {
    setDroppedItems([...droppedItems, itemName]);
  };

  return (
    <div>
      <h1>Drag and Drop Example</h1>
      <div style={{ display: 'flex', gap: '16px' }}>
        <TestDragItem name="Item 1" />
        <TestDragItem name="Item 2" />
        <TestDragItem name="Item 3" />
      </div>
      <TestDropContain onDrop={handleDrop} />
      <div>
        <h3>Dropped Items:</h3>
        <ul>
          {droppedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps, { getUsers })(
  Test
)