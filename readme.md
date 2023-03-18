# Practical Test Protergo

## Preview MP4

Google Drive : https://drive.google.com/file/d/18i2Oe2hlDA9lO1VlqIBqmwMJ5YKjU3fL/view?usp=sharing

## Deploy Client

- Client : https://practical-test-protergo.web.app

You can continue with account below this :

_Role Admin_

- email : admin@mail.com
- password : password

_Role User_

- email : user@mail.com
- password : password

## Description

Practical Test Protergo create CRUD app with access role User and Admin:

- Login Page
- Logout Page
- Home User Page
- Detail Item User Page
- Dashboard Admin Page
- Inventory Admin Page
- Registration Admin & User Page

Style : Tailwind CSS / Flowbite React

# Using the app in your local Computer

## Requirements

- Software for create local database like DBeaver and others
- NodeJS Package installed on your computer

## Installation

- Clone this repo to your local folder
- Open your local folder and open it on your favorite code editor like VSCode or another
- Open Terminal and type `npm install`
- Create your local database, type `npx sequelize-cli db:create`
- Then create migration for the database, type `npx sequelize-cli db:migrate`
- Finally seed some data to the database, type `npx sequelize-cli db:seed:all`

## Run server and client

- For running server on your local folder, open cloned repo from your local folder
- Cd to folder server-side, open terminal and type `npx nodemon app.js`
- Then, in your local folder you must open folder admin-side, and type `npm run dev`
- Finally you can use the app. Enjoy
