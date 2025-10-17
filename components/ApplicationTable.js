//This component displays a table of tenant applications.
// used props:
// - applications: array of application objects
// - onStatusChange: function to update the application's status (approve/decline)

export default function ApplicationTable({ applications, onStatusChange }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Tenant</th>        
          <th>Property</th>      
          <th>Status</th>         
          <th>Action</th>       
        </tr>
      </thead>
      <tbody>
        {applications.map((app) => (
          <tr key={app.id}> {/* Each row represents an application */}
            <td>{app.tenant_name}</td>         {/* Show tenant's name */}
            <td>{app.property_title}</td>      {/* Show property title */}
            <td>{app.status}</td>              {/* Show current status (pending, approved, declined) */}
            <td>
              {/* Approve button - triggers status update to 'approved' */}
              <button onClick={() => onStatusChange(app.id, 'approved')}>Approve</button>

              {/* Decline button - triggers status update to 'declined' */}
              <button onClick={() => onStatusChange(app.id, 'declined')}>Decline</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
