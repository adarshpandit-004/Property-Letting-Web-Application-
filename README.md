🏠 Property Letting Web Application
📖 Overview
This full-stack Property Letting Web Application was developed as part of my Server-Side Web Development coursework. The project demonstrates my ability to build a complete CRUD-based web solution using Next.js, Node.js, and MySQL, with secure authentication, database integration, and role-based access control for multiple user types.

⚙️ Key Features
   •	Three User Roles
        o	Admin: Manage users and applications; approve or decline property requests.
        o	Landlord: Add, edit, view, and delete their property listings; manage tenant applications.
        o	Tenant: Browse available properties, apply to rent, and track the status of applications
   •	Authentication & Security
        o	Login and registration for all roles with password hashing using bcrypt.
        o	Session and cookie handling for secure sign-in and sign-out operations.
   •	Database Design (MySQL)
        o	users table – stores landlords, tenants, and admins with role identifiers.
        o	properties table – stores property listings linked to landlords.
        o	applications table – manages tenant applications and approval statuses.
        o	Implements foreign key relationships with ON DELETE CASCADE for relational integrity.
   •	Core Functionality
        o	Full CRUD operations for property and user management.
        o	Dynamic Apply Now and My Applications views for tenants.
        o	Instant status updates across all roles (admin, landlord, tenant).
        o	Confirmation prompts before deletion (via cookies).
        o	Role-based dashboards with intuitive navigation.
   •	Frontend & User Experience
        o	Clean, responsive design with hover effects for listed properties.
        o	Navigation bar linking to Home, Browse Properties, Register, and Login pages.
        o	Screenshots display smooth navigation and interactive components.
   •	Data & Hosting
        o	Database created and tested using SQL scripts inside Visual Studio Code.
        o	Images sourced from daft.ie for academic demonstration only.

🧩 Technical Stack
•	Frontend: HTML5, CSS3, Next.js (React framework)
•	Backend: Node.js, Express.js
•	Database: MySQL (Relational database with normalized schema)
•	Security: bcrypt password hashing, cookie-based session management
•	Version Control: Git, GitHub
•	Tools: Visual Studio Code, XAMPP, MySQL Workbench

🚀 What I Learned
•	Building a role-based authentication system in Node.js
•	Implementing secure CRUD operations connected to MySQL
•	Handling server-side validation and form data processing in Next.js
•	Structuring scalable, maintainable server-side web applications
•	Using Git for version control and professional project organization

💡 Future Enhancements
•	Integrate property image upload functionality
•	Add advanced property search and filtering
•	Improve UX with dynamic React components
•	Deploy on a live cloud server (e.g., Vercel or Render)

📄 File in Repository
Website Visuals.pdf — A visual overview of the application showing all pages and user flows (Home, Login, Register, Browse Properties, Manage Applications, Admin Dashboard, etc.)

