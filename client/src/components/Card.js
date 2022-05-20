import styled from 'styled-components'

const StyledCard = styled.div`
  width: 150px;
  height: 150px;
  background-color: darkred;
  border-radius: 50%;
`

const Card = () => {
    return (
        <div>
            <StyledCard></StyledCard>
        </div>
    )
}

export default Card