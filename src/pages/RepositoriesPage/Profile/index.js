import React from 'react'
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles'

const Profile = () => {
  return (
    <Container>
        <Header>
            <Avatar src='https://avatars.githubusercontent.com/u/53915799?v=4' />
            <Login>ssmendes</Login>
            <Name>Stella</Name>
        </Header>
        <Inner>
            <Data>
                <MdGroup size={20} />
                15&nbsp;<i> seguidores</i> &nbsp;&middot; 15 <i>&nbsp;seguindo</i>
            </Data>
            <Data>
                <MdWork size={20} />
                Eitree
            </Data>
            <Data>
                <MdLocationCity size={20} />
                Passa Quatro
            </Data>
            <Data>
                <MdLink size={20} />
                <a href='https://www.linkedin.com/in/stellasiqueira/'>LinkedIn</a>
            </Data>
        </Inner>
    </Container>
  )
}

export default Profile
