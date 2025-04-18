# Shop Seva CRM
A CRM for shop management with features like bill generation, product notifications, top-selling product charts, and weekly/monthly reports.

## Tech Stack
- Frontend: React.js, Chart.js, Axios
- Backend: Node.js, Express, MongoDB/PostgreSQL
- Tools: Git, Vite, Nodemon

## Setup
1. Clone the repo: `git clone https://github.com/Cynor2020/ShopSeva-CRM.git`
2. Setup frontend: `cd frontend && npm install && npm run dev`
3. Setup backend: `cd backend && npm install && npm run dev`

## Folders
- `/frontend`: React.js frontend
- `/backend`: Node.js backend
- `/docs`: API documentation


/frontend
├── /public
│   ├── index.html
│   ├── favicon.ico
│   ├── logo.png        # Shop Seva logo
│   └── manifest.json
├── /src
│   ├── /assets         # Static assets (images, fonts, etc.)
│   │   ├── /images
│   │   │   ├── logo.png
│   │   │   └── product-placeholder.jpg
│   │   └── /fonts
│   ├── /components     # Reusable UI components
│   │   ├── /common    # Generic components
│   │   │   ├── Button.js
│   │   │   ├── Modal.js
│   │   │   └── InputField.js
│   │   ├── /charts    # Chart components for top-selling products
│   │   │   └── TopSellingChart.js
│   │   ├── /notifications  # Notification components
│   │   │   └── EndProductNotification.js
│   │   └── /billing   # Billing-related components
│   │       └── InvoicePreview.js
│   ├── /pages         # Feature-specific pages
│   │   ├── /dashboard
│   │   │   ├── Dashboard.js
│   │   │   └── Dashboard.css
│   │   ├── /billing   # Bill generation page
│   │   │   ├── Billing.js
│   │   │   └── Billing.css
│   │   ├── /reports   # Weekly/Monthly reports page
│   │   │   ├── Reports.js
│   │   │   └── Reports.css
│   │   ├── /products  # Product management page
│   │   │   ├── Products.js
│   │   │   └── Products.css
│   │   └── /auth      # Authentication pages
│   │       ├── Login.js
│   │       └── Register.js
│   ├── /services      # API call logic
│   │   ├── api.js     # Axios/Fetch setup
│   │   ├── billingService.js  # Billing API calls
│   │   ├── reportService.js   # Report API calls
│   │   ├── productService.js  # Product API calls
│   │   └── notificationService.js # Notification API calls
│   ├── /hooks         # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useChartData.js
│   │   └── useNotifications.js
│   ├── /context       # Global state management
│   │   ├── AuthContext.js
│   │   └── ThemeContext.js
│   ├── /utils         # Utility functions
│   │   ├── formatCurrency.js  # For bill formatting
│   │   ├── formatDate.js
│   │   └── calculateMetrics.js  # For report calculations
│   ├── /styles        # Global styles and themes
│   │   ├── global.css
│   │   ├── variables.css  # CSS variables for Shop Seva branding
│   │   └── theme.js      # Theme configuration
│   ├── App.js         # Main App component
│   ├── index.js       # Entry point
│   ├── routes.js      # React Router setup
│   └── setupTests.js  # Jest testing setup
├── package.json
├── .env               # Environment variables (e.g., REACT_APP_API_URL)
├── .eslintrc.json     # ESLint config for code quality
├── README.md          # Frontend-specific instructions
└── vite.config.js     # Vite config (if using Vite instead of CRA)






/backend
├── /src
│   ├── /config             # Configuration
│   │   ├── database.js     # DB connection (MongoDB/PostgreSQL)
│   │   ├── env.js          # Environment variable setup
│   │   └── logger.js       # Logging setup (e.g., Winston)
│   ├── /controllers        # Request handlers
│   │   ├── billingController.js   # Bill generation logic
│   │   ├── reportController.js    # Report generation logic
│   │   ├── productController.js   # Product management logic
│   │   ├── notificationController.js # Notification logic
│   │   └── authController.js      # Authentication logic
│   ├── /models             # Database schemas
│   │   ├── User.js
│   │   ├── Bill.js         # Bill schema
│   │   ├── Product.js      # Product schema
│   │   ├── Report.js       # Report schema
│   │   └── Notification.js # Notification schema
│   ├── /routes             # API routes
│   │   ├── /billing
│   │   │   └── index.js
│   │   ├── /reports
│   │   │   └── index.js
│   │   ├── /products
│   │   │   └── index.js
│   │   ├── /notifications
│   │   │   └── index.js
│   │   └── /auth
│   │       └── index.js
│   ├── /services           # Business logic
│   │   ├── billingService.js      # Bill generation logic
│   │   ├── reportService.js       # Report generation logic
│   │   ├── productService.js      # Product analytics logic
│   │   ├── notificationService.js # Notification sending logic
│   │   └── authService.js         # Authentication logic
│   ├── /middleware         # Custom middleware
│   │   ├── auth.js         # JWT authentication
│   │   ├── error.js        # Error handling
│   │   └── validate.js     # Input validation (e.g., Joi)
│   ├── /utils              # Utility functions
│   │   ├── pdfGenerator.js # For generating bill PDFs
│   │   ├── chartData.js    # For top-selling product data
│   │   └── sendEmail.js    # For email notifications
│   ├── /jobs               # Background jobs
│   │   ├── sendEndProductNotification.js # For end product notifications
│   │   └── generateWeeklyReport.js      # For scheduled reports
│   ├── app.js              # Express app setup
│   └── server.js           # Entry point
├── /tests                  # Unit and integration tests
│   ├── /controllers
│   │   └── billingController.test.js
│   ├── /services
│   │   └── billingService.test.js
│   └── /utils
│       └── pdfGenerator.test.js
├── package.json
├── .env                    # Environment variables (DB_URI, JWT_SECRET, etc.)
├── .eslintrc.json          # ESLint config
├── README.md               # Backend-specific instructions
└── nodemon.json            # Nodemon config for development
