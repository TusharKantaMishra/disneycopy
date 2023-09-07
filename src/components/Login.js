import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
            <SignUp>
                GET ALL THERE
            </SignUp>
            <Description>
                The Premium plan provides access to all the content on the platform, including all the latest movies, TV shows, Hotstar specials and live sports. All the content is ad-free. Enjoy It
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    min-height: calc(100vh - 70px);
    position: relative;
    display: flex;
    align-items: top;
    justify-content: center;


    &:before{
        background-position: cover;
        background: url("/images/login-background.jpg") center center / cover no-repeat fixed;
        content:"";
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index: -1;
        opacity: 0.7;
    }
`
const CTA = styled.div`
    max-width: 650px;
    width: 50%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CTALogoOne = styled.img``
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0px;\
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background: #0483ee;

    }
`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
const CTALogoTwo = styled.img`
    width: 90%;
`