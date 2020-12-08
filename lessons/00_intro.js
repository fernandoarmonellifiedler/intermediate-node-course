/* 
Set up node project
Hey there, fellow programmer!

Welcome to the Intermediate Node.js course! If you are taking this course, I am assuming you know the basics of Node.js and Express.js. If not, a good place to start is the intro to node and express course, here on GitHub Learning Lab.

In this tutorial, you will learn how to connect your server to a NoSQL database called MongoDB. You will also learn how to refactor repetitive code, to make it easier to maintain. By the end of this you have a Rest API that can Create, Read, Update, and Delete (CRUD) documents in MongoDB.

This is an interactive tutorial. At the end of each section, you will be prompted to do something to continue. If you don't get a response right away, try refreshing your browser.

Leave a comment about something you would like to Create, Read, Update, and Delete to continue

------------------------------

Great let's get this project started!

First, by signing up for this class, a starter repository was copied to your GitHub account. Start by cloning this project and installing dependencies:

***
git clone https://github.com/fernandoarmonellifiedler/intermediate-node-course
cd intermediate-node-course
npm install
***

You will also need to install the free community edition of MongoDB for Windows, Mac, or Linux. Follow the installation directions for your OS.
https://www.mongodb.com/download-center/community

If you followed the instructions above, you should have set the path to the MongoDB bin to your environment variables. You will need to close and reopen your console before the new environment variables are registered. Test if it is installed and configured with this command: mongod --version. If you see a version printed, then start up the database server by entering: mongod.

We are going to be testing our API using Postman. You can install it for free here

There are some express routes already setup in the server.js file. Also, we are using the "nodemon" package in this so our server restarts automatically. Open a new console and start the server by running this command:npm run start. You should see the message from our app.listen method and some statements about nodemon watching for changes.

Here's a handy checklist of what you'll need to get started on this project:

 MongoDB installed and configured
 Node.js and Git installed and configured
 Project cloned and dependencies installed
 Postman installed
 A console running the local mongoDB server (with the "mongod" command)
 A console with "nodemon" watching your server.js file.
Once you've completed the list, close this issue for the next steps.*/