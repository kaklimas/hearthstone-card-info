import Card from './Card'
import styled from "styled-components";

const CardFlexBox = styled.div`
  width: 90%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
`


const CardBox = () => {
    return (
        <CardFlexBox>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </CardFlexBox>
    )
}

export default CardBox