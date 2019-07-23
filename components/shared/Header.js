import React from 'react'
import Link from 'next/link'

class Header extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Link href="/">
                    <a> Home </a>
                </Link>
                <Link href="/blogs">
                    <a> Blog </a>
                </Link>
                <Link href="/portfolios">
                    <a> Portfolio </a>
                </Link>
                <Link href="/about">
                    <a> Sobre </a>
                </Link>
                <Link href="/cv">
                    <a> CV </a>
                </Link>
            </React.Fragment>
        )
    }
}

export default Header;