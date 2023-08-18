import { useEffect, useState } from 'react';
import Styles from '../styles/list.module.css';
import Item from './item';

const getItems = () => JSON.parse(localStorage.getItem('items')) || [];
const deleteItems = (items, itemId) => items.filter((item) => item.id !== itemId);
const checkItems = (items, itemId) => items.map((item) => {
  if (item.id === itemId) {
    return { ...item, done: !item.done };
  }
  return item;
});
const editItems = (items, itemId, value) => items.map((item) => {
  if (item.id === itemId) {
    return { ...item, text: value };
  }
  return item;
});

const List = () => {
  const [items, setItems] = useState(getItems);
  const handleDelete = (itemId) => setItems((previous) => deleteItems(previous, itemId));
  const handleCheck = (itemId) => setItems((previous) => checkItems(previous, itemId));
  const handleEdit = (itemId, value) => setItems((previous) => editItems(previous, itemId, value));
  const handlers = [handleEdit, handleCheck, handleDelete];

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <h2>Tasks List</h2>
      <ul className={Styles.list}>
        {(items.length === 0 ? <li className={Styles.empty}><i>No tasks available!</i></li>
          : items.map((item) => <Item key={item.id} task={item} handlers={handlers} />))}
      </ul>
    </>
  );
};

export default List;
