import React from 'react';
import Digits from './Digits/Digits';
import Button from '../../UI/Button/Button';
import styles from './Controls.module.scss';

const Controls = ({
  activeVal,
  availableDigits,
  remainingDigits,
  digitClickedHandler,
  isNoting,
  deselectHandler,
  toggleIsNotingHandler,
  eraseValueHandler,
  autoNoteHandler,
  autoPlaceHandler,
}) => {
  return (
    <div className={styles.Controls}>
      <div className={styles.Panel}>
        <Button onClick={deselectHandler}>Deselect</Button>
        <Button type={isNoting ? 'On' : 'Off'} onClick={toggleIsNotingHandler}>
          Note
        </Button>
        <Button onClick={eraseValueHandler}>Erase</Button>
      </div>
      <Digits
        isNoting={isNoting}
        activeVal={activeVal}
        availableDigits={availableDigits}
        remainingDigits={remainingDigits}
        digitClickedHandler={digitClickedHandler}
      />
      <div className={styles.Tools}>
        <Button className={autoNoteHandler}>Auto Note</Button>
        <Button className={autoPlaceHandler}>Auto Place</Button>
      </div>
    </div>
  );
};

export default Controls;
