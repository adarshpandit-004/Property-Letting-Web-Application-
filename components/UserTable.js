// This component renders a table of users (for admin use).
// uses Props:
// - users: array of user objects
// - onDelete: function to delete a user by ID

export default function UserTable({ users, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>     
          <th>Email</th>    
          <th>Role</th>     {/* User role: admin, landlord, or tenant */}
          <th>Delete</th>  
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}> {/* One row per user */}
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.role}</td>
            <td>
              {/* Delete button calls onDelete with the user's ID */}
              <button onClick={() => onDelete(u.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
