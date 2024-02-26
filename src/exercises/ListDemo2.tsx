// ListDemo2.tsx
import { BaseProps } from "../types";
import { ProfileProps, Profile } from "../components/Profile";

type ListDemo2Props = BaseProps;

export default function ListDemo2({ title }: ListDemo2Props) {
  const profiles: ProfileProps[] = [
    { name: "Max Power", email: "max.power@email.com", isActive: true },
    { name: "Ella Vator", email: "ella.vator@email.com", isActive: false },
    { name: "Al Beback", email: "al.beback@email.com", isActive: true },

  ];

  return (
    <>
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, index) => (
            <tr key={index}>
              <td>
                <Profile
                  name={profile.name}
                  email={profile.email}
                  isActive={profile.isActive}
                  singleLine
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
