/* eslint-disable react/prop-types */
import styled from "styled-components"
import Header from "./Header"
import { HiPlay ,HiDotsHorizontal,HiHeart} from "react-icons/hi";


import PlayListRow from "./PlayListRow";
import { useData } from "../dataLayer/dataLayer";

const BodyWrap = styled.div`
overflow:scroll;
flex:0.8;
height:100vh;
background: linear-gradient(rgb(91,87,115),rgba(0,0,0,1));

`
const BannerImage = styled.img`
width:150px;
height: 150px;
border:1px solid transparent;
border-radius: 8px;
`
const Banner = styled.div`
padding:10px;
margin:20px 0px;

background:grey;
opacity:0.5;
width:100%;
display:flex;
align-items:center;
`

const BannerContent = styled.div`
height:100%;
padding:20px;
width:100%;
color:white;
margin-left: 20px;
h3{
  font-size:30px;
}
p{
  padding: 5px;
  color:black;
  font-weight:bold;
}
`

const IconStore  = styled.div`
display:flex;
align-items:center;
margin-left:10px;
margin-bottom:20px;
padding:10px;
`

const Body = () => {
    const [{discover_weekly}] = useData();
    console.log(discover_weekly);
  return (
    <BodyWrap>
      <Header/>
      <Banner>
        <BannerImage  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
        <BannerContent >
        <h3>Discover </h3>
        <p>Weekly</p>
        <p>burchells 290</p>
        </BannerContent>
      </Banner>
      <IconStore >
        <HiPlay sx={{fontSize: 70}} color="success" />
        <FaveIcon />
        <MoreIcon/>
      </IconStore>
      <Breaker/>
    {discover_weekly?.tracks?.items?.map((item)=> <PlayListRow key={item.track} track={item.track}/>)}
    </BodyWrap>
  )
}
const Breaker = styled.div`

border:1px solid grey;
opacity:0.8;
width:90%;
margin:auto;
`

const MoreIcon = styled(HiDotsHorizontal)`
color:white;
margin-left: 10px;
`

const FaveIcon = styled(HiHeart)`
color:green;
margin-left:10px;
`
export default Body