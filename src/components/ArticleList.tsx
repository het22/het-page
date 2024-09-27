import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getPageCover, getPageName, NotionPage } from 'utils/notion'

export default function ArticleList() {
    const [articles, setArticles] = useState<NotionPage[]>([])

    useEffect(() => {
        fetch('/api/notion/articles')
            .then((res) => res.json())
            .then(setArticles)
    }, [])

    return (
        <ArticleUl>
            {articles.map((article) => {
                const name = getPageName(article)
                const cover = getPageCover(article)

                return (
                    <ArticleLi key={article.id}>
                        <a href={article.public_url!} target="_blank">
                            {cover && (
                                <ArticleCover src={cover?.url} alt="cover" />
                            )}
                            <section>
                                <ArticleName>{name}</ArticleName>
                            </section>
                        </a>
                    </ArticleLi>
                )
            })}
        </ArticleUl>
    )
}

const ArticleUl = styled.ul`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;
`

const ArticleLi = styled.li`
    list-style: none;
    position: relative;
    width: 100%;
    padding-top: 70%;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
    border-radius: 10px;
    overflow: hidden;
    transition: background-color 0.2s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    & > a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: unset;
        text-decoration: unset;
        cursor: pointer;
    }

    & > a > section {
        padding: 5px;
    }
`

const ArticleCover = styled.img`
    display: block;
    width: 100%;
    height: 70%;
    object-fit: cover;
`

const ArticleName = styled.h1`
    margin: 0;
    font-size: 14px;
    font-weight: bold;
`
