import ComputerIcon from '@/assets/icons/computer.svg'
import BasketballIcon from '@/assets/icons/basketball.svg'
import ChessIcon from '@/assets/icons/chess.svg'
import GameIcon from '@/assets/icons/game.svg'
import { useMemo } from 'react'

export default function HomePage() {
    const menuItems = useMemo(
        () => [
            { key: 'computer', Icon: ComputerIcon },
            { key: 'basketball', Icon: BasketballIcon },
            { key: 'chess', Icon: ChessIcon },
            { key: 'game', Icon: GameIcon },
        ],
        []
    )

    return (
        <div className="min-h-screen bg-white">
            <header className="text-gray-900 border-b border-black/20">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-4xl">het</h1>
                        <nav>
                            <ul className="flex space-x-4">
                                {menuItems.map(({ key, Icon }) => (
                                    <li key={key}>
                                        <a
                                            href="#"
                                            className="flex items-center"
                                        >
                                            <Icon className="size-7 [&>path]:fill-gray-900" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}
