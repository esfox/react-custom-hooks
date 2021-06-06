import { useEffect, useRef, useState } from 'react';

export function useInput()
{
  /** @type {import('react').Ref<HTMLInputElement} */
  const ref = useRef();

  const [ value, setValueState ] = useState('');

  const setValue = value =>
  {
    ref.current.value = value;
    setValueState(value);
  };

  const clear = () =>
  {
    ref.current.value = '';
    setValueState();
  };

  const disable = () => ref.current.disabled = true;
  const enable = () => ref.current.disabled = false;

  useEffect(() =>
  {
    if(! ref.current)
      return;

    ref.current.oninput = ({ currentTarget }) => setValueState(currentTarget.value);
  }, []);

  return { ref, value, setValue, clear, disable, enable };
}
