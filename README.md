# Full Stack Book Store App<br />
![github-cover](https://github.com/user-attachments/assets/a14adb62-b384-4612-a739-c8a9a31adc29) <br />

## For Demo click below
[Full Stack Book Store App](https://book-store-frontend-azure.vercel.app)<br />

## How to run this project:
### For Frontend
Follow the below steps to run the project:

- Firstly clone or unzip the project folder.
- Go to the frontend directory by using the following command cd frontend.
- create a .env.local file in the backend root directory as the same level where the package.json is located and keep the following environment variables there:

``` bash
>>> Stepup firebase app and configure the environment
note: create your own Api Key

VITE_API_KEY="Api Key.."
VITE_Auth_Domain="book-store-mern-app.firebaseapp.com"
VITE_PROJECT_ID="book-store-mern-app"
VITE_STORAGE_BUCKET="book-store-mern-app.appspot.com"
VITE_MESSAGING_SENDERID= "ID"
VITE_APPID="App ID"
```
Then run **`npm install`** commend to install node dependencies.
Finally, to run the project, use **`npm run`** dev command.
<br />
### For Backend
Follow the below steps to run the project:

- Firstly clone or unzip the project folder.
- Go to the backend directory by using the following command  **`cd backend`**.
- Then run **`npm install`** commend to install node dependencies.
- create a .env file in the backend root directory as the same level where the package.json is located and keep the following environment variables there:
``` bash
DB_URL = "cluster URL"

JWT_SECRET_KEY = 'create a rondom 64 letter secret key...'

Note: Please setup mongodb the MongoDB url and set your jwt secret key above.
```
- Finally, to run the project, use **`npm run start:dev`** command.
