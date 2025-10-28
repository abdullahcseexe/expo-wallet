DEMO VIDEO: https://www.youtube.com/shorts/hzczcQ4tW0s?feature=share

Project Requirements:
For better processing of backend, install nodemon 
1. express@4.21.0
2. dotenv@16.5.0
3. cors@2.8.5
4. @neondatabase/serverless@1.0.0
5. @upstash/redis@1.34.9
6. @upstash/ratelimit@2.0.5


Installations History:
Backend---->
1. npm install express@4.21.0 dotenv@16.5.0 cors@2.8.5 @neondatabase/serverless@1.0.0
2. npm i @upstash/redis@1.34.9 @upstash/ratelimit@2.0.5
3. npm i cron

Frontend---->
1. npx create-expo-app@latest
2. npm install @clerk/clerk-expo
3. npx expo install expo-auth-session
4. npm install expo-secure-store
5. npm install @expo/vector-icons
6. npm i react-native-keyboard-aware-scrollview

Progress:
Backend---->
1. Setup a backend using Node.js and Neon which is serverless database
2. Performed crud operations and checked the server requests through postman
3. Integrated a rate limiting algorithm using upstash and redis so that a user can make certain number of requests 
   only for a certain amount of time
4. Earlier, wrote all codes that is the transaction routes in one file now to oragnise the backend, 
   all the transactions will be written in backend/routes/transactionRoute.js


   Earlier code in server.js: app.post("/api/transactions", async(req,res)=>{ ... });
   New code in transactionRoute.js:  router.post("/api/transactions", async(req,res)=>{ ... });

   app is replaced by router

   Also the route "/api/transactions" is common so use app.use in server.js
5.  Configured the routes and separated the Crud operations in controllers folder and organized backend in src folder

# 💰 Wallet App

A full-stack wallet application with an Expo (React Native) frontend and Express.js backend.

## .env Setup
**Backend (/backend)**
PORT=5001
NODE_ENV=development

CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>

DATABASE_URL=<your_neon_postgres_connection_url>

REDIS_URL=<your_redis_connection_url>

**Backend (/backend)**
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_key>

## 📱 Frontend
Built using Expo React Native.

### Run locally:

cd frontend
npm install
npx expo start

## 📱 Backend
cd backend
npm install
npm run dev
