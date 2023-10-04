/* eslint-disable react/prop-types */
import styled from "styled-components"
 const AlbumImage = styled.img`
 width: 50px;
 height:50px;
 `

const PlayListRow = ({track}) => {
    console.log(track)
  return (
    <Row>
        <h3>{track.disc_name}</h3>
        <AlbumImage src={track.album.images[0].url} alt="image" />
        <Art>
            <p>{track.name}</p>
            <h6>{track.artists?.map((artist)=>  artist.name)}</h6>
        </Art>
        <DateAdded>
            {track.popularity}
        </DateAdded>
    </Row>
  )
}
const DateAdded = styled.div`
padding:10px;`
const Art = styled.div`
margin-left: 10px;

p{
    font-size:15px;
    font-weight:bold;
    color:white
}
h6{
    padding:5px;
}
;

`
const Row = styled.div`
display:flex;
align-items:center;
color:green;
margin-top:10px;
margin-left:20px;
border:1ps solid green;
width:100%;
height:50px;
opacity:0.3;
h3{color:white;
padding:5px;
}`


export default PlayListRow