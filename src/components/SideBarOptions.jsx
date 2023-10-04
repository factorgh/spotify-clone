/* eslint-disable react/prop-types */
import styled from "styled-components"


const SideBarOptionsMenu = styled.div`
color: grey;
display:flex;
align-items:center;
font-size:15px;
padding-top:20px;
padding-left:10px;
transition: 200ms color ease-in;
&:hover{
  color:white;
  cursor:pointer;
}

`
const IconWrap = styled.div`
padding-right: 10px;`


const SideBarOptions = ({title,Icon}) => {
  return (
    <SideBarOptionsMenu>
     {Icon && <IconWrap>{<Icon/>}</IconWrap>} 
     {Icon ? <p>{title}</p>: <h5>{title}</h5>} 
      </SideBarOptionsMenu>
  )
}

export default SideBarOptions