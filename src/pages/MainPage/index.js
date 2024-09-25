import React, { useState } from 'react'
import { Container, Logo, Title, Form, Input, Button } from './styles'
import githubLogo from '../../assets/images/github-logo.svg'
import { MdSearch } from 'react-icons/md'

const MainPage = () => {
    const [login, setLogin] = useState('');

    return(
        <Container>
            <Logo src={githubLogo} alt='Logo Github' />
            <Title>API Github</Title>
            <Form>
                <Input placeholder='user' value={login} onChange={(event) => setLogin(event.target.value)} />
                <Button to={`/${login}/repositories`}>
                    <MdSearch size={42} />
                </Button>
            </Form>
        </Container>
    );
}

export default MainPage;