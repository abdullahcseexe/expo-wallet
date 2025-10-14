// import cron from "cron";
// import https from "https";

// const job = new cron.CronJob("*/14 * * * *", function () {
//   https
//     .get(process.env.API_URL, (res) => {
//       if (res.statusCode === 200) console.log("GET request sent successfully");
//       else console.log("GET request failed", res.statusCode);
//     })
//     .on("error", (e) => console.error("Error while sending request", e));
// });

// export default job;

// CRON JOB EXPLANATION:
// Cron jobs are scheduled tasks that run periodically at fixed intervals
// we want to send 1 GET request for every 14 minutes

// How to define a "Schedule"?
// You define a schedule using a cron expression, which consists of 5 fields representing:

//! MINUTE, HOUR, DAY OF THE MONTH, MONTH, DAY OF THE WEEK

//? EXAMPLES && EXPLANATION:
//* 14 * * * * - Every 14 minutes
//* 0 0 * * 0 - At midnight on every Sunday
//* 30 3 15 * * - At 3:30 AM, on the 15th of every month
//* 0 0 1 1 * - At midnight, on January 1st
//* 0 * * * * - Every hour





import cron from "cron";
import https from "https";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const job = new cron.CronJob("*/14 * * * *", async function () {
  // 1️⃣ Send GET request to API
  https
    .get(process.env.API_URL, (res) => {
      if (res.statusCode === 200) console.log("GET request sent successfully");
      else console.log("GET request failed", res.statusCode);
    })
    .on("error", (e) => console.error("Error while sending request", e));

  // 2️⃣ Ping Upstash database to keep it active
  try {
    await redis.set("keepalive", Date.now());
    console.log("Upstash DB pinged successfully");
  } catch (err) {
    console.error("Failed to ping Upstash DB", err);
  }
});

export default job;
