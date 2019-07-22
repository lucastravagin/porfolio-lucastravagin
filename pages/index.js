import React from 'react'
import Link from 'next/link'

// const Index = () => {
//     return (
//         <h1>I am Index Page</h1>
//     )
// }

class Index extends React.Component {
    
    render() {
        return (
            <div>
                <h1>I am Index Page</h1>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/blogs">
                    <a>Blog</a>
                </Link>
                <Link href="/portfolios">
                    <a>Portfolio</a>
                </Link>
                <Link href="/about">
                    <a>Sobre</a>
                </Link>
                <Link href="/cv">
                    <a>CV</a>
                </Link>

            </div>
        )
    }
}

export default Index;

