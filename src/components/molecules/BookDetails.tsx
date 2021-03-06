import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Book from 'domain/books/entities/Book';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ImageContainer = styled.div`
    flex: 1;
    margin: 0 5px;
`;

const DetailsContainer = styled.div`
    flex: 1;
    margin: 0 5px;
`;


const Section = styled.div`
    padding: 20px 0;

    &.small {
        padding: 10px 0;
    }

    &.underline {
        border-bottom: 0.5px solid #707070;
    }
`;

const TextDate = styled.div`
    margin-bottom: 5px;
`;

interface IProps {
    actionButton?: React.ReactNode;
    book: Book;
}

const BookDetails: React.FC<IProps> = ({ actionButton, book }) => {
    return (
        <Container>
            <ImageContainer>
                <Image src={book.image} height={170} width={135} />
            </ImageContainer>
           
            <DetailsContainer>
                <Section className={`underline ${actionButton ? "small" : ''}`} >
                    <Text size={18} color="secondary" weight={500} whiteSpace="break-spaces">
                        Por
                        <br />
                        {book.authors.map((author) => author.name)}
                    </Text>
                </Section>
                

                <Section className={actionButton ? "small" : '' }>
                    <TextDate>
                        <Text size={12} color="secondary"  weight={500} whiteSpace="none">{book.formatDate()}</Text>
                    </TextDate>
                    <Text size={12} color="secondary"  weight={500} whiteSpace="none">{book.publisher}</Text>
                </Section>

                {actionButton && actionButton}
            </DetailsContainer>
        </Container>
    );
};

export default BookDetails;