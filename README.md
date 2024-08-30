

## User Management 

### Overview
The User Management System is a web application designed to efficiently manage user accounts and access levels. With a user-friendly interface, it allows users to view, add, edit, and delete user details, including names, email addresses, and departments.

### Features
- **View Users**: Displays a comprehensive list of users with essential details such as ID, name, email, and department.
- **Add User**: Facilitates the addition of new users to the system seamlessly.
- **Edit User**: Enables users to modify the details of existing user profiles with ease.
- **Delete User**: Provides functionality to remove user profiles from the system efficiently.
- **Pagination**: Supports pagination for convenient navigation through large datasets, enhancing user experience.
- **Responsive Design**: Ensures optimal user experience across various devices and screen sizes.

### Technologies Used

#### Frontend:
- **React**: Utilized for building interactive user interfaces.
- **Chakra UI**: Employed for designing consistent and visually appealing components.
- **Axios**: Used for making HTTP requests to the backend API.
- **Yup**: Integrated for robust form validation to ensure data integrity.

#### Backend:
- **JSON Server** (for mock API during development): Provides a lightweight backend for simulating API responses and interactions.

### Setup and Installation

1. **Clone the repository**:
    ```
    git clone https://github.com/Sonali020200/Ajackus.git
    cd user
    ```

2. **Install dependencies**:
    ```
    npm install
    ```

3. **Run the application**:
    ```
    npm run start
    ```

### API Setup

- Ensure the backend server (or JSON Server) is running if the API is not part of this repository.
- Update the `BASE_URL` in your request files to match the backend server URL.

### Component Structure
```
AJACKUS-user/
├── public/
│   └── (Public files such as index.html, favicon, etc.)
├── src/
│   ├── components/
│   │   ├── Display.jsx
│   │   ├── Form.jsx
│   │   ├── Form.module.css
│   │   ├── Overlay.jsx
│   │   └── Pagination.jsx
│   ├── App.css
│   ├── App.js
│   ├── requests.js
│   ├── index.css
│   └── index.js
```

### How to Use

#### Viewing Users
- Upon opening the application, a comprehensive list of users is displayed in a table format, showcasing their ID, name, email, and department.

#### Adding a User
- Click on the **+ Add User** button.
- Fill in the user details in the form that appears.
- Click on the **Add User** button to save the new user.

#### Editing a User
- Click on the edit icon next to the user you want to edit.
- Modify the user details in the form that appears.
- Click on the **Edit User** button to save the changes.

#### Deleting a User
- Click on the delete icon next to the user you want to delete.

#### Pagination
- Utilize the pagination controls at the bottom of the user list to navigate through different pages.
- Adjust the number of rows displayed per page using the dropdown.

### Validation
- Form validation is handled using Yup, ensuring data integrity with the following validations:
    - **Name**: Required field.
    - **Email**: Must be a valid email format and required.
    - **Department**: Required field.
    - 
### Scope for Improvement:
Enhanced User Experience: Given more time, I would focus on further refining the user interface, incorporating more advanced UI/UX principles, and **adding animations and transitions** to enhance user interactions. 

### Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

### Acknowledgements
Special thanks to AJACKUS Company for this assignment and the opportunity to contribute to this project.

### License
This project is licensed under the MIT License.
