import React from 'react'
// @babel/plugin-proposal-private-property-in-object
import styled from 'styled-components'

function Headder() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" alt=""/>
        <NavMenu>
            <div>
                <img src="/images/home-icon.svg" alt=""/>
                <span>
                    HOME
                </span>
            </div>
            <div>
                <img src="/images/search-icon.svg" alt=""/>
                <span>
                    SEARCH
                </span>
            </div>
            <div>
                <img src="/images/watchlist-icon.svg" alt=""/>
                <span>
                    WATCHLIST
                </span>
            </div>
            <div>
                <img src="/images/original-icon.svg" alt=""/>
                <span>
                    ORIGINALS
                </span>
            </div>
            <div>
                <img src="/images/movie-icon.svg" alt=""/>
                <span>
                    MOVIES
                </span>
            </div>
            <div>
                <img src="/images/series-icon.svg" alt=""/>
                <span>
                    SERIES
                </span>
            </div>
        </NavMenu>
        <UserImg src="/images/acc.jpg" alt=""/>
    </Nav>
  )
}

export default Headder
const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: centre;
    padding: 0 36px;
    overflow-x: hidden;
`
const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left:25px;
    align-items:centre;
    div{
        display: flex;
        align-items: centre;
        padding: 25px 12px;
        img{
            height:20px;
        }
        span{
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;
            cursor:pointer;

            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                bottom:0;
                left:0;
                right:0;
                opacity:0;
                transform-origin:left-corner;
                transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform:scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:0.8;
            }
        }
    }
`
const UserImg = styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    cursor:pointer;
    padding:10px;
`