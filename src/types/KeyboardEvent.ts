import { KeyboardEvent } from 'react';

interface ICustomKeyboardEvent extends KeyboardEvent {
  keyIdentifier: number;
  keycode: number;
}

export default ICustomKeyboardEvent;
