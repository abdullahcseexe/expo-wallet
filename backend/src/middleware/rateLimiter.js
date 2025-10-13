import ratelimit from "../config/upstash.js";

const rateLimiter =  async(req,res,next) => {
    try{

        const{success} = await ratelimit.limit("my-rate-limit") 
        
        /**  Meaning of success

            success: true → Request is within the limit (safe to continue → call next()).
            success: false → Request exceeded the limit (stop and return 429 Too Many Requests). 
        */  
        
        if (!success){
            return res.status(429).json({
                message: "Too many requests, try again letter."
            })
        }
        next(); // request is approved

    }catch(error){
        console.log("Rate Limiter Error", error)
        next(error)
    }
}

export default rateLimiter;