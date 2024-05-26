const remotePatterns = [
    {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
        pathname: '/images/**'
    },
    {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
        pathname: '/img/**'
    },
]
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/animes',
                permanent: true,
            },
        ]
    },
}
module.exports = nextConfig
