import React from 'react'

const Header = () => {
  return (
    <header id='header' role='banner'>
        <h1 className='header__logo'>
            <a href="/">
                <em aria-hidden="true"></em>
                <span>webs<br/>youtube</span>
            </a>
        </h1>

        <nav className='header__menu'>
            <ul className='menu'>
                <li className='active'>
                    <a href="/">
                        <CiBaseball />웹스토리보이
                    </a>
                </li>
                <li>
                    <a href="/today">
                        <CiMoneyBill />추천영상
                    </a>
                </li>
                <li>
                    <a href="/developer">
                        <CiMoneyBill />추천 개발자
                    </a>
                </li>
                <li>
                    <a href="/webd">
                        <CiMoneyBill />웹디자인기능사
                    </a>
                </li>
                <li>
                    <a href="/website">
                        <CiMoneyBill />웹표준 사이트
                    </a>
                </li>
                <li>
                    <a href="/gsap">
                        <CiMoneyBill />GSAP Parallax
                    </a>
                </li>
                <li>
                    <a href="/port">
                        <CiMoneyBill />포트폴리오 사이트
                    </a>
                </li>
                <li>
                    <a href="/youtube">
                        <CiMoneyBill />유튜브 클론 사이트
                    </a>
                </li>
            </ul>
            <ul className='keyword'>
                <li>
                    <a href="/search/webstoryboy">webstoryboy</a>
                </li>
                <li>
                    <a href="/search/html">HTML</a>
                </li>
                <li>
                    <a href="/search/css">CSS</a>
                </li>
                <li>
                    <a href="/search/javascript">JavaScript</a>
                </li>
                <li>
                    <a href="/search/react.js">React.js</a>
                </li>
                <li>
                    <a href="/search/Next.js">Next.js</a>
                </li>
                <li>
                    <a href="/search/Node.js">node.js</a>
                </li>
                <li>
                    <a href="/search/sql">SQL</a>
                </li>
                <li>
                    <a href="/search/React Portfolio">portfolio</a>
                </li>
                <li>
                    <a href="/search/Music">music</a>
                </li>
            </ul>
        </nav>
        <div className='header__sns'>
            <ul>
                <li>
                    <a href="https://github.com"></a>
                </li>
            </ul>
        </div>
    </header >
  )
}

export default Header