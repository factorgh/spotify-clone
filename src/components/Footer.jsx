import styled from "styled-components";

import { HiBackward, HiOutlineForward, HiPlay } from "react-icons/hi2";


const FooteRWrap = styled.div`
position:fixed;
bottom:0;
display:flex;
justify-content:space-between;
height:65px;
width:100%;
background-color:#313E50;
padding:20px;
`

const Footer = () => {
  return (
    <FooteRWrap>
        <FooterFirst>
            <FooterImage 
            src="https://images.unsplash.com/photo-1503300961747-204cbbdaeb51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpc3RlbmluZyUyMHRvJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="" 
            />
            <div>
                <p>J.Cole</p>
                <h6>Yeah</h6>
            </div>
        </FooterFirst>
       <FooterCenter>
        
        <HiBackward/>
        <PlayerIcon/>
        < HiOutlineForward/>
       </FooterCenter>
       <FooterEnd>
        
       </FooterEnd>
    </FooteRWrap>
  )
}

const FooterImage = styled.img`
height:60px;
width: 60px;
padding-right: 5px;
`


const FooterFirst = styled.div`
flex:0.3;
display:flex;
align-items:center;
color: white;

`
const FooterCenter = styled.div`
display:flex;
justify-content:space-between;
max-width: 300px;
align-items:center;
color:white;
`

const PlayerIcon = styled(HiPlay)`
&:hover{
    color:color;
    font-size: 30px;
    transition: transform 0.2s ease-in-out;
    transform:scale(1.2) !important;

}

`
const FooterEnd = styled.div`
flex:0.3;
align-items:center;
color:white;
`

export default Footer