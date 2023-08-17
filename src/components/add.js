import { useState, useEffect } from 'react';
import { v4 as uniqueId } from 'uuid';
import Styles from '../styles/add.module.css';

const getItems = () => JSON.parse(localStorage.getItem('items')) || [];

const Add = () => {
  const [items, setItems] = useState(getItems);
  const [stored, setStored] = useState(false);
  const [value, setValue] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length > 0) {
      const items = getItems();
      setItems([...items, { id: uniqueId(), text: value, done: false }]);
      setStored((previous) => !previous);
      setValue('');
      setTimeout(() => { setStored((previous) => !previous); }, 1000);
    }
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  if (stored) {
    return <h2>Added Successfully</h2>;
  }
  return (
    <form onSubmit={handleSubmit} className={Styles.form}>
      <h2>Add New Task</h2>
      <input type="text" placeholder="Type task name" className={Styles.input} onChange={(event) => setValue(event.target.value)} value={value} required />
      <button type="submit" className={Styles.button}>Add Task</button>
    </form>
  );
};

export default Add;
