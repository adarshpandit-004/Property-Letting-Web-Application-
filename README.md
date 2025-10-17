# 🏠 Property Letting Web Application

## 👨‍💻 Author
**Adarsh Pandit**  
BSc Computing (Honours), Year 2  
Student ID: 3134329  



## 📖 Overview
This full-stack **Property Letting Web Application** was developed as part of my *Server-Side Web Development (Assignment 3)* coursework.  
It demonstrates my ability to build a complete CRUD-based web solution using **Next.js**, **Node.js**, and **MySQL**, with secure authentication, database integration, and role-based access control for multiple user types.

The project allows landlords to manage property listings, tenants to apply for rentals, and admins to oversee all users and applications in a secure, efficient, and user-friendly environment.



## ⚙️ Key Features

### 👥 Multi-User Roles
- **Admin:** Manage users and applications; approve or decline rental requests.  
- **Landlord:** Add, edit, view, and delete property listings; manage tenant applications.  
- **Tenant:** Browse available properties, apply for rentals, and track application status.

### 🔐 Authentication & Security
- Secure login and registration for all roles.  
- Passwords hashed using **bcrypt** for enhanced security.  
- Session and cookie handling for secure authentication.

### 🗄️ Database Integration (MySQL)
- **Users Table:** Stores landlords, tenants, and admins with roles.  
- **Properties Table:** Contains property listings linked to landlords.  
- **Applications Table:** Tracks tenant applications and approval statuses.  
- Implements **foreign key relationships** with `ON DELETE CASCADE` for relational integrity.

### 🧱 Core Functionality
- Full **CRUD** operations for property and user management.  
- Dynamic **Apply Now** and **My Applications** sections for tenants.  
- Instant application status updates across all roles.  
- Cookie-based confirmation prompts before deletion.  
- Role-based dashboards with clear, intuitive navigation.

### 🎨 Frontend & UI
- Clean, responsive layout using **Next.js** and **CSS3**.  
- Hover effects for property images with clickable property previews.  
- Navigation bar with links to Home, Browse Properties, Register, and Login.  
- Visual consistency across all pages for better user experience.



## 🧩 Technical Stack
- **Frontend:** Next.js (React), HTML5, CSS3  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **Security:** bcrypt password hashing, cookies, sessions  
- **Tools & Environment:** VS Code, XAMPP, MySQL Workbench, GitHub  



## 🚀 What I Learned
- Building and structuring **role-based authentication systems** in Node.js  
- Implementing **secure CRUD operations** connected to a MySQL database  
- Developing **server-side validation and session management** in Next.js  
- Applying **relational database design** principles  
- Managing and deploying code using **Git and GitHub**



## 💡 Future Enhancements
- Integrate property image upload functionality  
- Add advanced property search and filtering  
- Enhance dashboards with real-time updates  
- Deploy application on cloud platforms (e.g., Vercel, Render, or AWS)  



## 📄 Visual Overview
**File:** `Website Visuals.pdf`  
This PDF includes screenshots of the application, displaying user interfaces and workflows such as:
- Homepage with navigation bar  
- Browse Properties with hover effects  
- User Registration & Login  
- Tenant property application system  
- Landlord property management (CRUD)  
- Admin dashboard for user and application management  



## 🧠 Summary
This project highlights my ability to design and implement **full-stack web applications** with secure, scalable, and user-oriented functionality.  
It showcases both **technical proficiency** and **practical understanding** of database-driven web development — essential skills for modern software development roles.



⭐ **Feel free to explore this repository and view the live demonstration screenshots in `Website Visuals.pdf`.**
