import { AccessTime, Check, FlashOn, Lock, Public, Recommend } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
padding:25px;
font-family:sans-serif;
justify-content:space-between;
`
const BigTitle = styled.div`
text-align:center;

font-size:42px;
color:white;
border-top:3px solid #393E46;
border-bottom:3px solid #393E46;
`

const Image = styled.div`
color:#393E46;
display:flex;
flex-directiction:column;
justify-content:center;
align-items:center;
`
const Info = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Title = styled.div`
color:white;
margin-bottom:10px;
`
const Description = styled.div`
flex:1;
text-align:center;
color:white;
`

const Section = styled.div`
flex:1;
margin:10px 30px 0px 25px;
height:20vh;
`

const AllItems = styled.div`
background-color:black;
`

const Introducing = () => {
    return (
        <AllItems >
            <BigTitle>Awesome <b>Features</b></BigTitle>
            <Container>
                <Section>
                    <Info>
                        <Image><Public /></Image>
                        <Title>Access anywhere</Title>
                        <Description >Being online allows you and your respondents to access, administer and take your quizzes from anywhere at anytime.</Description>
                    </Info>
                </Section>
                <Section>
                    <Info>
                        <Image><Lock /></Image>
                        <Title>Secured with SSL</Title>
                        <Description>With SSL encryption and utilising our advanced cloud infrastructure you can be sure your tests will always be secure.</Description>
                    </Info>
                </Section>
                <Section>
                    <Info>
                        <Image><Check /></Image>
                        <Title>Auto-grading</Title>
                        <Description>PPWQ can automatically grade your assessments, saving you the time.</Description>
                    </Info>
                </Section>
            </Container>
            <Container>
                <Section>
                    <Info>
                        <Image><AccessTime /></Image>
                        <Title>Timed tests</Title>
                        <Description>With PPWQ it is easy to set a time limit.</Description>
                    </Info>
                </Section>
                <Section>
                    <Info>
                        <Image><FlashOn /></Image>
                        <Title>Custom Tests</Title>
                        <Description>With PPWQ you can customize your tests easily</Description>
                    </Info>
                </Section>
                <Section>
                    <Info>
                        <Image><Recommend /></Image>
                        <Title>7/24 live support</Title>
                        <Description>Being online allows you and your respondents to access, administer and take your quizzes from anywhere at anytime.</Description>
                    </Info>
                </Section>
            </Container>
        </AllItems>

    )
}

export default Introducing