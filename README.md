# Event-Management-API-s
Event Management API with GraphQL , Sequelize and PostgreSQL

This repository contains a set of APIs for Event Management built with GraphQL, Sequelize (an ORM for Node.js), and PostgreSQL. It provides functionalities for user management, event creation, and event management. The APIs include endpoints for user registration, login, password management (reset, update, change), event creation, and retrieving event details, as well as retrieving a list of invited users for an event.

Steps to clone the repository:
1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command to clone the repository:
    git clone https://github.com/priyayadav13/Event-Management-API-s/
4. Once the cloning is complete, navigate to the cloned directory:
    cd Event-Management-API-s
5. Make sure you have Node.js and npm (Node Package Manager) installed on your machine.
6. Install the project dependencies by running the following command:
    npm install
7. Create a PostgreSQL database for the project and update the database configuration in the config/config.json file.
8. Run the database migrations to set up the required tables by executing the following command:
    npx sequelize-cli db:migrate
9. Start the server by running the following command:
    npm start
10. The APIs should now be accessible at http://localhost:3000 (assuming the server starts successfully).


