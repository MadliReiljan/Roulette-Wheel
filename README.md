# Picker Wheel

The Roulette Wheel is a web-based application designed to simulate a traditional roulette game. 
Built with the Model-View-Controller (MVC) architecture and enhanced by Object-Relational Mapping (ORM), the project delivers an engaging user experience while maintaining efficient database interactions. 
It is implemented in JavaScript and also uses React for the visual side.

## Features
* Input Customization: Users can add, edit, or remove names or options to be included in the wheel.
* Randomized Selection: Spins the wheel to select a random output from the provided options.
* Database Connection: Data is saved to a MongoDB database.

### Cloning the Repository

```bash
git clone https://github.com/MadliReiljan/Roulette-Wheel
```
### Installation

Install the project dependencies in the root folder and in the roulette-wheel folder:

```bash
npm install
```

## Creating a database connection

To create a database connection you need to add a .env file which has a MONGODB_URI property. 
To get the URI you need to create your own database in MongoDB (or you can use a local database).

## Starting the app

When you want to start the app in the root directory you need to use: 

```bash
node app.js
```

Then you need to move to the roulette-wheel folder and use:

```bash
npm start
```
### Picture of the made project

![picker-wheel](https://github.com/user-attachments/assets/861d78a5-bf8c-40c5-a85b-0c8c18957d65)
