const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
}
)