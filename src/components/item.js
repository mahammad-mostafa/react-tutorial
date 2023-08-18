import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FaPenFancy,
  FaTrash,
  FaCheck,
  FaTimes,
} from 'react-icons/fa';
import Styles from '../styles/item.module.css';

const Item = ({ task: { id, text, done }, handlers }) => {
  const [value, setValue] = useState(text);
  const [editing, setEditing] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length > 0) {
      handlers[0](id, value);
    }
    setEditing(false);
  };

  if (editing) {
    return (
      <li className={Styles.item}>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <input type="text" name="name" autoComplete="on" className={Styles.input} value={value} onChange={(event) => setValue(event.target.value)} required />
          <button type="submit" className={Styles.button}>
            <FaCheck />
          </button>
          <button type="button" className={Styles.button} onClick={() => { setEditing(false); setValue(text); }}>
            <FaTimes />
          </button>
        </form>
      </li>
    );
  }
  return (
    <li className={Styles.item}>
      <input type="checkbox" name="done" className={Styles.check} onChange={() => handlers[1](id)} checked={done} />
      <p className={done ? Styles.done : Styles.text}>{text}</p>
      <button type="button" className={Styles.button} onClick={() => setEditing(true)}>
        <FaPenFancy />
      </button>
      <button type="button" className={Styles.button} onClick={() => handlers[2](id)}>
        <FaTrash />
      </button>
    </li>
  );
};

Item.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  handlers: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
};

export default Item;
