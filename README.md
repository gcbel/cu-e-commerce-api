# Company Database App

## Description

This project is the back-end for an online shopping platform, including fully functional ways of creating, tracking, updating and deleting products, categories, and product tags. This project is created using Node.js, Express.js, Sequelize, and PostgreSQL.

[Here]() is a video demonstrating the functionality of the application.

## Installation

This application can be run locally. Once the repository has been cloned, ensure Node.js and PostgresSQL are installed on your system. To check if you have previously installed Node.js, run `node --version`. If installed, this command will display the version number. If no version number appears, you can download the Node.js from the official website [here](https://nodejs.org/en/download/package-manager). To check if you have previously installed Postgres, run `psql --version`. If installed, this command will display the version number. If not, you can download PostgresSQL from the official website [here](https://www.postgresql.org/download/).

To download the package dependencies ([express](https://expressjs.com/), [sequelize](https://sequelize.org/), [pg](https://www.npmjs.com/package/pg), and [dotenv](https://www.npmjs.com/package/dotenv)), run `npm install`.

## Usage

First, add a `.env` file that matches the `.env.EXAMPLE` file, updated with your Postgres credentials.

To use the database, connect to Postgres using `psql -U postgres`, and once connected to Postgres, run `\i db/schema.sql`. In a separate terminal, the database can be seeded with `npm run seed`, and the server can be started with `npm run start`.

The RESTful API supports the following routes:
- `GET /api/categories`: Retrieve all categories and their associated products.
- `GET /api/categories/:id`: Retrieve a category by its ID and its associated products.
- `POST /api/categories`: Create a new category.
- `PUT /api/categories/:id`: Update a category by its ID.
- `DELETE /api/categories/:id`: Delete a category by its ID.
- `GET /api/products`: Retrieve all products and their associated categories and tags.
- `GET /api/products/:id`: Retrieve a product by its ID and its associated categories and tags.
- `POST /api/products`: Create a new product.
- `PUT /api/products/:id`: Update a product by its ID.
- `DELETE /api/products/:id`: Delete a product by its ID.
- `GET /api/tags`: Retrieve all tags and their associated products.
- `GET /api/tags/:id`: Retrieve a tag by its ID and its associated products.
- `POST /api/tags`: Create a new tag.
- `PUT /api/tags/:id`: Update a tag by its ID.
- `DELETE /api/tags/:id`: Delete a tag by its ID.

## Credits

Starter code provided by Columbia University Full-Stack Bootcamp: https://github.com/coding-boot-camp/bookish-sniffle <br>
Reference for Sequelize models: https://sequelize.org/docs/v6/core-concepts/model-basics/ <br>
Reference for Sequelize validation: https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/ <br>
Reference for Sequelize associations: https://sequelize.org/docs/v6/core-concepts/assocs/


## License

[MIT License](https://opensource.org/license/mit)