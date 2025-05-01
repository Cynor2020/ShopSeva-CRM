# Shop Seva CRM

Shop Seva CRM is a comprehensive customer relationship management system designed for shop management. It includes advanced features like bill generation, end product notifications, top-selling product charts, and weekly/monthly reports to streamline business operations.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack
- **Frontend**: React.js, Chart.js (for charts), Axios (API calls), React-Toastify (notifications), Tailwind CSS (styling)
- **Backend**: Node.js, Express.js, MongoDB/PostgreSQL (database), pdfkit (PDF generation), Nodemailer (email notifications)
- **Tools**: Git, Vite (frontend build), Nodemon (backend dev), ESLint/Prettier (code quality), Jest (testing)

## Folder Structure
The project is organized into separate `frontend` and `backend` folders for modularity and scalability. Below is the folder structure:

```
/ShopSeva-CRM
├── /frontend               # React.js frontend code
│   ├── /public            # Static public assets
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── logo.png
│   ├── /src
│   │   ├── /assets        # Images, fonts, etc.
│   │   ├── /components    # Reusable UI components
│   │   │   ├── /common    # Generic components (Button, Modal)
│   │   │   ├── /charts    # Chart components (TopSellingChart)
│   │   │   ├── /notifications  # Notification components
│   │   │   └── /billing   # Billing-related components
│   │   ├── /pages         # Feature-specific pages
│   │   │   ├── /dashboard
│   │   │   ├── /billing
│   │   │   ├── /reports
│   │   │   ├── /products
│   │   │   └── /auth
│   │   ├── /services      # API call logic
│   │   ├── /hooks         # Custom React hooks
│   │   ├── /context       # Global state management
│   │   ├── /utils         # Utility functions
│   │   ├── /styles        # Global styles and themes
│   │   ├── App.js
│   │   ├── index.js
│   │   └── routes.js
│   ├── package.json
│   ├── .env
│   ├── .eslintrc.json
│   └── README.md





├── /backend                # Node.js backend code
│   ├── /src
│   │   ├── /config        # Configuration (DB, env)
│   │   ├── /controllers   # Request handlers
│   │   ├── /models        # Database schemas
│   │   ├── /routes        # API routes
│   │   │   ├── /billing
│   │   │   ├── /reports
│   │   │   ├── /products
│   │   │   ├── /notifications
│   │   │   └── /auth
│   │   ├── /services      # Business logic
│   │   ├── /middleware    # Authentication, error handling
│   │   ├── /utils         # Utility functions (PDF, email)
│   │   ├── /jobs          # Background jobs (notifications, reports)
│   │   ├── app.js
│   │   └── server.js
│   ├── /tests             # Unit and integration tests
│   ├── package.json
│   ├── .env
│   ├── .eslintrc.json
│   ├── README.md
│   └── nodemon.json
├── /docs                   # API specs, setup guides
├── /scripts                # Deployment/utility scripts
├── README.md               # This file
├── .gitignore
└── package.json           # Optional: For monorepo
```

### Folder Descriptions
- **/frontend**: Contains the React.js frontend code, including UI components, pages, and API services for features like bill generation, reports, and charts.
- **/backend**: Contains the Node.js backend code, including RESTful APIs, database models, and business logic for features like PDF generation and notifications.
- **/docs**: Stores API documentation (e.g., Swagger) and project guides.
- **/scripts**: Includes deployment scripts or utility tools.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Cynor2020/ShopSeva-CRM.git
   cd ShopSeva-CRM
   ```

2. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   ```
   Create a `.env` file in `/frontend` with:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

3. **Backend Setup**:
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in `/backend` with:
   ```
   PORT=5000
   DB_URI=<your_database_uri>
   JWT_SECRET=<your_jwt_secret>
   EMAIL_USER=<your_email_service_user>
   EMAIL_PASS=<your_email_service_pass>
   ```

4. **Install Dependencies**:
   - Frontend: React, Chart.js, Axios, React-Toastify, Tailwind CSS
   - Backend: Express, Mongoose/Sequelize, pdfkit, Nodemailer, Bull

## Running the Project
1. **Run Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` (default for Vite).

2. **Run Backend**:
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`.

3. **Access the App**:
   Open `http://localhost:5173` in your browser to use Shop Seva CRM.

## Contributing
1. Create a new branch for each feature:
   ```bash
   git checkout -b feature/<feature-name>
   ```
2. Commit changes and push to the branch:
   ```bash
   git commit -m "Add <feature-name>"
   git push origin feature/<feature-name>
   ```
3. Create a pull request on GitHub.

## License
This project is licensed under the MIT License.




require how to run 

 npm install tailwindcss @tailwindcss/vite
