import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import styled from 'styled-components'

const ErrorTemplate = ({ title, content, name }) => {

    const WrapperTitle = styled.div`
        border-bottom: .01rem solid #ccc;
    `
    const Title = styled.h2`
        padding: 1.5rem 2rem;
        font-weight: bold;
        font-size: 2.5rem;
    `
    const ContentError = styled.p`
        padding: 2rem;
        line-height: 2;
    `

    const ErrorContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    `

    const ErrorCard = styled.div`
        width: 30%;
        border-radius: 2rem;
    `

    const WrapperBtn = styled.div`
        padding: 0 2rem 2rem;
    `

    return (
        <ErrorContainer>
            <ErrorCard className="shadow-lg m-0">
                <WrapperTitle>
                    <Title>{title}</Title>
                </WrapperTitle>
                <ContentError>
                    Hello {name},
                    <p>{content}</p>
                </ContentError>
                <WrapperBtn>
                    <Link to='/login'>
                        <Button color="primary">Go Back</Button>
                    </Link>
                </WrapperBtn>
            </ErrorCard>
        </ErrorContainer>
    )
}

export default ErrorTemplate
