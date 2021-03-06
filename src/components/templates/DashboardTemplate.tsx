import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import GenericToolbar from 'components/atoms/GenericToolbar';

const Container = styled(IonContent)`
    padding-left: 20px;
`;

const Section = styled.div`
    margin: 20px 0 0;
`;

const LastSection = styled.div`
    margin: 20px 0 40px;
`;

const SectionInformationContainer = styled.div`
    margin-left: 15px;
    margin-bottom: 10px;
`;

interface IProps {
    toolbar: React.ReactNode;

    booksTitle: React.ReactNode;
    bookList: React.ReactNode;

    categoriesTitle: React.ReactNode;
    categoryList: React.ReactNode;

    discoverTitle: React.ReactNode;
    collectionList: React.ReactNode;

    library?: boolean;
}

const DashboardTemplate: React.FC<IProps> = ({ toolbar, booksTitle, bookList, categoriesTitle, categoryList,  discoverTitle, collectionList, library }) => {

    return (
        <IonPage> 
            <GenericToolbar>
                {toolbar}
            </GenericToolbar>
            <Container fullscreen>
                <Section>
                    <SectionInformationContainer>
                        {booksTitle}
                    </SectionInformationContainer>
                    {bookList}
                </Section>

                <Section>
                    <SectionInformationContainer>
                        {library ? discoverTitle : categoriesTitle}
                    </SectionInformationContainer>
                    {library ? collectionList : categoryList}
                </Section>

                <LastSection>
                    <SectionInformationContainer>
                        {library ? categoriesTitle : discoverTitle}
                    </SectionInformationContainer>
                    {library ? categoryList : collectionList}
                </LastSection>
            </Container>
        </IonPage>
    );
};

DashboardTemplate.defaultProps = {
    library: false
}

export default DashboardTemplate;