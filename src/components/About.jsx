import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const About = () => {
    /* useNavigate
    - 페이지 이동을 도와주는 React Hooks

    (1) import {useNavigate} from 'react-router-dom'
    (2) const 변수 = useNavigate()
    (3) 페이지 이동을 해야할 때, 변수("경로")

    ex) const nav = useNavigate(
        nav("/mypage")
    )
    */

    const nav = useNavigate()
    let auth = false;

  return (
    <div>About
        <hr/>
        {/* 만약, 회원이라면 mypage로 이동
            비회원이라면 main으로 이동
        */}
        <button onClick={()=>{
            auth ? nav('/mypage') : nav('/')
            }}>마이페이지</button>
            <br/>
            <Link to="/product/1?popular='인기'">[1] 아이패드 미니 5세대 팝니다</Link>
            <br/>
            <Link to="/product/2">[2] 아이폰 14 프로 팝니다</Link>
            <br/>
            <Link to="/product/3">[3] 에어팟 프로 2세대 팝니다</Link>

    </div>
  )
}

export default About