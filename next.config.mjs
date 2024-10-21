/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"**"
            },
        ], // allow images from all domains 
    }
};

export default nextConfig;


// allow images from all domains 