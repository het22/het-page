import { useMemo } from 'react'
import styled from 'styled-components'
import IconChess from '/assets/icons/chess.svg'
import IconCode from '/assets/icons/code.svg'
import IconGame from '/assets/icons/game.svg'
import IconHoop from '/assets/icons/hoop.svg'
import IconRead from '/assets/icons/read.svg'

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
        </Main>
    )
}

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    overflow: hidden;
`

const MenuUl = styled.ul`
    margin: 0;
    padding: 0;
    height: 80px;
    display: flex;
    align-items: end;
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
        width: 80px;
        height: 80px;
        transition: transform 0.2s;
    }

    &:hover {
        padding: 20px;

        & > svg {
            transform: scale(1.2);
        }
    }
`
