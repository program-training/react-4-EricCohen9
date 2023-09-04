import React, { useContext } from 'react';
import { UserContext } from '../contextProvider/contextProvider'; 
import {GrandChildComponent} from '../Father/Father';

export const ChildComponent: React.FC = () => {
const context = useContext(UserContext);
if (!context) return null;
let { user } = context
let name = user

return (
<div >
<h4>Child</h4>
<div>  {name} </div>
<GrandChildComponent />
</div>
);
};
