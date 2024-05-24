# EventsRegistrationApp

How to run the application:

1. close the repository from the github
   $git clone https://github.com/InnaTheDeveloper/EventsRegistrationApp.git
2. once in the root directory, open the terminal and run:
   $npm install
3. to perform operations with the database, you need .env file
   create it in the root directory and enter this text without quotation marks
   "MONGO_URI = mongodb+srv://inna:102938@cluster0.kgwuyxm.mongodb.net/eventRegistration?retryWrites=true&w=majority&appName=Cluster0"
4. launch app.js file with Node.js
   $node app.js
   if you're successful, you should see the following the console:
   "app started
   server is listening on port 3000
   database connected"
5. open your browser and type:
   http://localhost:3000/
   you should see the page with the events.

Notes:

- database uses a free tier so sometimes connection time can be long, make sure you see 'database connected' part in the console.
- for 'View', use the first event, because I didn't create many registrations


I've sent this link within the allotted deadline time on Telegram, but I just want to make sure it is readily available in this document as well:
https://eventsregistrationapp-1-9yhp.onrender.com 

PS. this is also a free hosting so it may take around 50 seconds to load
