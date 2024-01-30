import { useRef } from 'react';
import style from './AssistantInput.module.scss';

type Props = {
  onInput: (message: string) => void;
};

const AssistantInput = ({ onInput }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className={style.form}
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current === null) return;

        onInput(inputRef.current.value);

        inputRef.current.value = '';
      }}
    >
      <input
        ref={inputRef}
        className={style.input}
        type="text"
        placeholder="Message the assistant..."
      />
    </form>
  );
};

export default AssistantInput;
