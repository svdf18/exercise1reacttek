import { BaseProps } from "../types";
import { Profile } from "../components/Profile.tsx"
import { useState } from "react";


export default function PropsDemo({ title }: BaseProps) {
  const [showHorizontal, setShowHorizontal] = useState(false);
  return (
    <>
      <h2>{title}</h2>
      Direction: <input type="checkbox" checked={showHorizontal} onChange={()=>setShowHorizontal(!showHorizontal)}/>
      <Profile name="Max Power" email="mp@email.com" isActive={true} singleLine={showHorizontal} />
      <Profile name="John Doe" email="john@example.com" isActive={false} singleLine={showHorizontal} />
      <Profile name="Jane Smith" email="jane@example.com" isActive={true} singleLine={showHorizontal} />
    </>
  );
}
