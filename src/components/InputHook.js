import { useInput } from '../hooks/useInput';

export function InputHook()
{
  const { ref, value, setValue, clear, enable, disable } = useInput();

  return (
    <div className="mt4">
      Uncontrolled Input Hook
      <input ref={ref} className="db mv3"/>
      <button className="mr3" onClick={() => alert(value)}>Show Value</button>
      <button className="mr3" onClick={() => setValue('hello')}>Set Value (to "hello")</button>
      <button className="mr3" onClick={clear}>Clear</button>
      <button className="mr3" onClick={disable}>Disable</button>
      <button onClick={enable}>Enable</button>
    </div>
  );
}
