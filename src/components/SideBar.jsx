import styled from 'styled-components';
import {HiSearch,HiHome,} from "react-icons/hi";
import {HiMiniMusicalNote} from "react-icons/hi2"

import SideBarOptions from './SideBarOptions';
import { useData } from '../dataLayer/dataLayer';


const SideBarWrap = styled.div`
height:100vh;
min-width:230px;
flex:0.2;
padding-left: 10px;
padding-right:10px;
background: #040404;
color:white;

`

const PlayListTitle = styled.div`
color:white;
align-items:center;
width:80%;
`
const SideBarImage = styled.img`
padding-top: 20px;
object-fit:contain;
height:70px;
margin-right:auto;
`

const PlayListHeader =styled.h6`
color: white;
margin-left: 20px;

`
const SideBar = () => {
  const [{playlist}] = useData();
  return (
    <SideBarWrap>
      <SideBarImage src="https://img.freepik.com/premium-photo/music-mind-music-abstract-art-created-with-generative-ai-technology_545448-15311.jpg" alt="" />
      <SideBarOptions Icon={HiHome} title="Home"/>
      <SideBarOptions Icon={HiSearch} title="Search"/>
      <SideBarOptions  Icon={HiMiniMusicalNote} title="Your Library"/>
      <br />
      <PlayListTitle>
    <PlayListHeader>PLAYLIST</PlayListHeader>
      <hr />
      </PlayListTitle>
      {playlist?.items?.map((playlist)=><SideBarOptions key={playlist}  title={playlist.name}/>)}
    </SideBarWrap>
  )
}

export default SideBar