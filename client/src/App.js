import './index.css'
import CardBox from './components/CardBox'
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 700px;
  background-color: gray;
  display: flex;
  justify-content: center;
`

function App() {
    return (
        <Container>
            <CardBox></CardBox>
        </Container>
        // <div style={{display: 'flex', justifyContent:'center'}}>
        //     <CardBox></CardBox>
        // </div>
    );
}

export default App;
