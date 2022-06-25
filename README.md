# Introduction

The ToDoList is a simple single page CRUD web app that displays a list of to do items, each containing a title and body. The list appears on top of a form that the user fills out to add more list items. The user fills out the title and body inputs of the form, clicks the submit button, and the data is then sent to a MongoAtlas database containing a collection of todolist items.

Outline of CRUD functionality:
Create - Using the form, user submits a title and body for a to do list item
Read - Once a create or delete method is executed, the webpage refreshes, reading an EJS template file that creates a HTML file to send to the browser
Update - Work In Progress
Delete - A delete icon exists next to each list item, sending a delete request to the database

# Requirements

* [Node.js](https://nodejs.org/en/)

# Instructions

Use command npm install to install necessary modules outlined in package.json

# Future work

* Include update functionality for each to do list item
* create a more intuative UI using React module
