import styled from 'styled-components';
import Home from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
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
      <SideBarOptions Icon={Home} title="Home"/>
      <SideBarOptions Icon={SearchIcon} title="Search"/>
      <SideBarOptions  Icon={MusicNoteIcon} title="Your Library"/>
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