# TodoList-Application-Api
This is a **Side Hustle Bootcamp** Group Task for the backend track (NodeJs).

 A CRUD Todo app api with authorization, authentication and validation, and also sends email to users after creating an account.
 
#Link to postman documentation: 
https://documenter.getpostman.com/view/20417456/2s7YfHhcGe

### How to run
- Clone the repo and open the folder using vscode or any other ide of choice
- Run npm install in your terminal to install packages in package.json
- Create a config.env file and fill in values for the following variables:
MONGO_URI,
NODE_ENV,
PORT,
JWT_SECRET,
JWT_EXPIRES_IN,
MAIL_USERNAME,
MAIL_PASSWORD,
-Finally run npm start in your terminal

### Endpoints
The following endpoints are available on this server:
- `/api/v1/users/sigup`: registers a new user.
- `/api/v1/users/login`: logs in a user.
- `/api/v1/users/logout`: logs out a user(protected route).
- `/api/v1/users/forgotPassword`: to get reset password url.
- `/api/v1/users/resetPassword/:token`: to reset password.
- `/api/v1/users/confirmEmail/:token`: to confirm email after signup.
- `/api/v1/tasks/`: to get all tasks or create a new task
- `/api/v1/tasks/:id`: to get a single task, delete a single task or update a single task

### Resources
- For Nodemailer, use https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/ or https://youtu.be/thAP7Fvrql4 to set up 
- For mongoDb url use https://cloud.mongodb.com/v2/62decd80ebe1584627659bea#clusters to set up

