const contentful = require('contentful')

export const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_SPACE_KEY,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN
});