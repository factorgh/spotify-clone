import styled from "styled-components"
import  SearchIcon  from '@mui/icons-material/Search';
import { Avatar } from "@mui/material";
import { useData } from "../dataLayer/dataLayer";




const Header = () => {
    const [{user},dispatch] = useData();
  return (
    <HeaderNav>
        <HeaderNavLeft>
            <SearchIcon color="success"/>
            <input type="text" placeholder="Search for artist,songs" />
        </HeaderNavLeft>
        <HeaderNavRight>
        <Avatar />
        <h3>{user?.display_name}</h3>
        </HeaderNavRight>
    </HeaderNav>
  )
}

const HeaderNav = styled.div`
display:flex;
justify-content:space-between;
padding:10px;
height: 60px;
color:white;
 input{
    border:none;
    width:100%;
}
`
const HeaderNavLeft = styled.div`
flex :0.5;
display:flex;
align-items:center;
min-width:80px;
background:white;
border-radius:15px;
padding:10px;
`
const HeaderNavRight = styled.div`
flex:0.5;
display:flex;
align-items:center;
justify-content:flex-end;
padding:8px;
h3{
    margin-left:10px;
    font-size:15px;
}
`

export default Header