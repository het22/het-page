import { Client } from '@notionhq/client'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export const notionApi = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_KEY,
})

export type NotionPage = PageObjectResponse

export function getPageName(page: NotionPage) {
    if (page.properties.Name.type !== 'title') {
        return null
    }

    return page.properties.Name.title.map((title) => title.plain_text).join('')
}

export function getPageCover(page: NotionPage) {
    if (!page.cover) {
        return null
    }

    return page.cover.type === 'file' ? page.cover.file : page.cover.external
}
