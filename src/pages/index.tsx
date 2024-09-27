import { useMemo } from 'react'
import styled from 'styled-components'
import IconChess from '/assets/icons/chess.svg'
import IconCode from '/assets/icons/code.svg'
import IconGame from '/assets/icons/game.svg'
import IconHoop from '/assets/icons/hoop.svg'
import IconRead from '/assets/icons/read.svg'
import ArticleList from 'components/ArticleList'

type MenuItem = {
    id: string
    label: string
    Icon: any
}

export default function HomePage() {
    const menuItems = useMemo<MenuItem[]>(
        () => [
            { id: 'code', label: 'Code', Icon: IconCode },
            { id: 'hoop', label: 'Hoop', Icon: IconHoop },
            { id: 'game', label: 'Game', Icon: IconGame },
            { id: 'chess', label: 'Chess', Icon: IconChess },
            { id: 'read', label: 'Read', Icon: IconRead },
        ],
        []
    )

    return (
        <Layout>
            <Header>
                <Title>het</Title>
            </Header>
            <Main>
                <MenuUl>
                    {menuItems.map((menuItem) => (
                        <MenuLi key={menuItem.id}>
                            <Button value={menuItem.id}>
                                <menuItem.Icon />
                            </Button>
                        </MenuLi>
                    ))}
                </MenuUl>
                <ArticleList />
            </Main>
        </Layout>
    )
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    min-width: 360px;
    min-height: 720px;
    background: radial-gradient(
        circle,
        rgba(255, 255, 255, 1) 50%,
        rgba(238, 238, 238, 1) 100%
    );

    & > * {
        width: 720px;
        min-width: 360px;
        max-width: 100vw;
    }
`

const Header = styled.header`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    margin: 0;
    padding: 0 20px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 1px solid black;
    user-select: none;

    @media only screen and (max-width: 720px) {
        font-size: 18px;
    }
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    overflow: hidden;
`

const MenuUl = styled.ul`
    margin: 0;
    margin-bottom: 20%;
    padding: 0;
    height: 100px;
    display: flex;
    align-items: end;

    @media only screen and (max-width: 720px) {
        height: 60px;
    }
`

const MenuLi = styled.li`
    list-style: none;
`

const Button = styled.button`
    padding: 10px;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    box-sizing: content-box;
    border: none;
    cursor: pointer;
    transition: padding 0.2s;

    & > svg {
        width: 100%;
        height: 100%;
        transition: transform 0.2s;
    }

    &:hover {
        padding: 20px;

        & > svg {
            transform: scale(1.2);
        }
    }

    @media only screen and (max-width: 720px) {
        padding: 5px;
        width: 50px;
        height: 50px;

        &:hover {
            padding: 10px;
        }
    }
`
