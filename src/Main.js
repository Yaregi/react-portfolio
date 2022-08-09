import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Main.css';




const Main = () => {

    useEffect(() => {
        AOS.init();
    })

    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX)
        setCursorY(e.pageY)
    })


    return (

        <div id='pcWallpaper'>
            <div id='intro'>
                <h1 className='tit'>
                    WELCOME MY PORTFOLIO
                </h1>
            </div>



            <div className='title'>
                <p>안녕하세요</p>
                <p>저의 포트폴리오에 오신걸 환영합니다! 하나하나 배우며 끊임없이 성장해가는</p>
                <p>우주 같은 웹 퍼블리셔 최현용입니다. 포트폴리오를 보시고 필요한 점이 있으시면</p>
                <p>언제든지 연락주시기 바랍니다. 감사합니다!</p>
            </div>
            <div className='util'>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">PORTFOLIO</a></li>
                    <li><a href="#">FURNITURE</a></li>
                    <li><a href="#">EPILOGUE</a></li>
                </ul>
            </div>


            <video autoPlay loop muted>
                <source src='./video.mp4' type='video/mp4'></source>
            </video>
            <div className='title-box'>
                <h1>2022 PORTFOLIO BY CHOI HYEON YOUNG</h1>
            </div>
            <div className='text-box'>
                <h1>PORTFOLIO</h1>

            </div>
            <div className='cursor'
                style={{
                    left: cursorX + 'px',
                    top: cursorY + 'px'
                }}

            >
            </div>
            <div className='scrolldown'>
                <span></span>
                <span></span>
            </div>

            <div className='page2'>
                <div className='bg'></div>
            </div>

            <div className='page3'>
                <div className='bg'></div>
            </div>


        </div>


    )
}

export default Main;



