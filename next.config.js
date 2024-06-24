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
    {
        protocol: "https",
        hostname: "img1.ak.crunchyroll.com",
        pathname: '/**'
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
