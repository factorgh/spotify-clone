/* eslint-disable react/prop-types */
import styled from "styled-components"
import SideBar from "./SideBar"
import Body from "./Body"
import Footer from "./Footer"

const Player = () => {
  return (
    <PlayerMain>
    <PlayerWrap>
      <SideBar/>
      <Body/>
    </PlayerWrap>
     <Footer/>
    </PlayerMain>
    
  )
}
const PlayerMain = styled.div`
position:relative;
`

const  PlayerWrap = styled.div`
display:flex;
`
export default Player