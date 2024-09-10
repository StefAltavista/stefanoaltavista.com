/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
        serverActions: {
            allowedOrigins: ["localhost:3030"],
            // allowedForwardedHosts: ["localhost:3000"],
            // ^ You might have to use this property depending on your exact version.
        },
    },
};

export default nextConfig;
