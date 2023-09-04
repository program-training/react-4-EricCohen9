import React, { useContext,useState } from 'react';
import { UserContext } from '../contextProvider/contextProvider'; 

export const GrandChildComponent: React.FC = () => {
const context = useContext(UserContext);
if (!context) return null;
const { setUser } = context
const [inputValue, setInputValue] = useState('');

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
  setInputValue(e.target.value);
};

const handleUserChange = () => {
  
  setUser(`Goodbye, ${inputValue}`);
};
return (
<div >
<h4>GrandChild</h4>
{/* <button onClick={() => setUser( 'good bye ')}>Change User</button> */}
<button onClick={handleUserChange}>Change User</button>
<input placeholder='update' onChange={handleInputChange} value={inputValue}></input>
</div >
);
};
