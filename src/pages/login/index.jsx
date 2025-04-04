import React from 'react'

import { useNavigate } from 'react-router-dom'

import { MdEmail, MdLock } from 'react-icons/md'
import { Header } from '../../components/header'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './style'

const Login = () => {

    const navigate = useNavigate();
    
        const handleClickSignIn = () => {
            navigate('/feed')
        }

    return (<>
        <Header />
        <Container>

            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e
                    entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu login</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>

                    <form action="">
                        <Input placeholder="E-mail" leftIcon={<MdEmail/>} />
                        <Input placeholder="senha" type="password" leftIcon={<MdLock/>}  />
                        <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button" />
                    </form>

                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>

                </Wrapper>
            </Column>
        </Container>


    </>
    )
}

export default Login;