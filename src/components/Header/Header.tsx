import react, { useState, useContext } from "react";
import { UserList } from "../UserContext/UserContext";
export function Header() {
  const context = useContext(UserList);
  if (!context) return null;
  const { user, setUser } = context;
  const [button, setButton] = useState<boolean>(false);

  return (
    <div>
      <h1>{user?.name}</h1>
      <button
        onClick={() => {
          if (button) {
            setButton(false);
          } else {
            if (!button) {
              setButton(true);
            }
          }
        }}
      >
        click here
      </button>
      (
      {button && (
        <ul>
        <li>{user?.id},</li>
        <li>  {user?.username},</li>
        <li>  {user?.email},</li>
        </ul>
        
      )}
      )
    </div>
  );
}
