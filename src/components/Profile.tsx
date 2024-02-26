export type ProfileProps = {
  name: string;
  email: string;
  isActive: boolean;
  singleLine?: boolean;
}

export function Profile({ name, email, isActive, singleLine }: ProfileProps) {
  if (singleLine) {
    return (
      <p>
        {name}, {email}, {isActive ? "Active" : "Inactive"}
      </p>
    );
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
    </div>
  );
}