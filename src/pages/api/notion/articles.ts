import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import type { NextApiRequest, NextApiResponse } from 'next'
import { notionApi } from 'utils/notion'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    notionApi.databases
        .query({
            database_id: '4f322802a0744af1a139ce1b7b827233',
            filter: {
                property: 'onEdit',
                checkbox: {
                    equals: false,
                },
            },
        })
        .then((res) => res.results)
        .then(res.status(200).json)
}
