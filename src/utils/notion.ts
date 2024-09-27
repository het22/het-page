import { Client } from '@notionhq/client'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export const notionApi = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_KEY,
})

