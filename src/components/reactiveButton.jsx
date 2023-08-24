import { useState } from 'react';
import ReactiveButton from 'reactive-button';
import { useNavigate } from 'react-router-dom';

function reactiveButton() {
  const [state, setState] = useState('idle');
  const navigate = useNavigate();
  
  const onClickHandler = () => {
    setState('loading');

    setTimeout(() => {
      setState('success');
      navigate('/about');
    }, 2000);
  };

  return (
    <div 
      id="text"
      style={{
        margin: "40 40 40 auto",
      }}
    >
      <ReactiveButton 
        rounded 
        buttonState={state}
        idleText="Enter"
        loadingText="Loading"
        successText="Done"
        size="large"
        shadow
        outline
        color='blue'
        width='240px'
        onClick={onClickHandler}
      />
    </div>
  );
}

export default reactiveButton;