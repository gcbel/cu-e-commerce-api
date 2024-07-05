# Company Database App

## Description

This project is a command-line application that can be used manage a company's departments, roles, and employees. This project is created using Node.js, Inquirer, and PostgreSQL.

[Here]() is a video demonstrating the functionality of the application.

## Installation

This application can be run locally. Once the repository has been cloned, ensure Node.js and PostgresSQL are installed on your system. To check if you have previously installed Node.js, run `node --version`. If installed, this command will display the version number. If no version number appears, you can download the Node.js from the official website [here](https://nodejs.org/en/download/package-manager). To check if you have previously installed Postgres, run `psql --version`. If installed, this command will display the version number. If not, you can download PostgresSQL from the official website [here](https://www.postgresql.org/download/).

To download the package dependencies ([inquirer](https://www.npmjs.com/package/inquirer) and [pg](https://www.npmjs.com/package/pg)), run `npm install`.

## Usage

First, add a `.env` file that matches the `.env.EXAMPLE` file, and updated with your Postgres credentials.

To use the database, connect to Postgres using `psql -U postgres`, and once connected to Postgres, run `\i db/schema.sql`. In a separate terminal, the project can be run with `node index` or `node index.js`. The terminal will then prompt the user for desired actions.

This application allows a user to add and delete departments, roles, and employees, as well as view all departments, roles, and employees that have been added. The application also supports updating an employee's role or manager. 

## Credits

Starter code provided by Columbia University Full-Stack Bootcamp: https://github.com/coding-boot-camp/bookish-sniffle <br>
Reference for Sequelize models: https://sequelize.org/docs/v6/core-concepts/model-basics/ <br>
Reference for Sequelize validation: https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/ <br>
Reference for Sequelize associations: https://sequelize.org/docs/v6/core-concepts/assocs/


## License

[MIT License](https://opensource.org/license/mit)