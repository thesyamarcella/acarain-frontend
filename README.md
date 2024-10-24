# Acarain - Event Management Platform

Acarain is a user-friendly event management platform that allows users to create, manage, and discover events. Built with modern technologies, Acarain focuses on providing a seamless experience for both event organizers and attendees.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies](#technologies)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Acarain allows users to:
- Create and customize events.
- Manage ticket sales and registrations.
- Discover events through a searchable database.
- Connect with other users in a community setting.

## Technologies

- **Frontend:** Next.js 13+ (with `src/` directory and SWR)
- **Backend:** Java Spring Boot
- **Database:** MySQL
- **Authentication:** JWT/OAuth2
- **API:** REST

## Key Features

### A. Event Creation and Management
- **Create Event:** Users can create new events with details like name, date, time, location, and ticket info.
- **Event Customization:** Custom themes, logos, and color schemes for events.
- **Ticket Management:** Different ticket types (e.g., VIP) with pricing options.

### B. Event Discovery and Attendance
- **Event Search:** Find events by keywords, categories, and more.
- **Event Recommendations:** Personalized event suggestions based on user interests.
- **Event Calendar:** View upcoming events in a calendar format.

### C. Community and Social Features
- **User Profiles:** Showcase interests and past events.
- **Messaging:** Direct messaging for event-related communication.
- **Reviews and Ratings:** Rate and review events and organizers.

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- Java JDK (v11 or higher)
- MySQL
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/acarain.git
   cd acarain

2. **Set up the Frontend:**

   ```bash
Copy code
cd frontend
npm install
npm run dev
```

3. **Set up the Backend:**

```bash
Copy code
cd backend
./mvnw spring-boot:run
```

4. **Create the MySQL database:**

Use the provided SQL scripts to set up your database schema.

5. **Environment Configuration:**

Configure your environment variables for both frontend and backend, including database credentials and JWT secrets.

Folder Structure for Frontend (Next.js)
```bash
    /frontend
    ├── /public                # Static files
    ├── /src
    │   ├── /components        # Reusable UI components
    │   ├── /hooks             # Custom hooks
    │   ├── /pages             # Next.js pages
    │   ├── /services          # API calls and services
    │   ├── /styles            # Global styles
    │   └── /utils             # Utility functions
    └── package.json
```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.

- Fork the repository.
- Create your feature branch: `git checkout -b feature/AmazingFeature`
- Commit your changes: `git commit -m 'Add some AmazingFeature'`
- Push to the branch: `git push origin feature/AmazingFeature`
- Open a pull request.

### License

This project is licensed under the MIT License - see the LICENSE file for details.
Feel free to modify any sections to better fit your project specifics. 