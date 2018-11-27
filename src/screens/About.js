import React from 'react';
import {
    Container,
    Header,
    List
} from 'semantic-ui-react';

function About(props) {
    return (
        <div style={{marginBottom: 40}}>
            <Container>
                <Header as="h1">About PTDC</Header>
                <Header as="h2">Background</Header>
                <p>
                Pakistan Tourism Development Corporation (PTDC) was incorporated on March 30, 1970 under the repealed Companies Act 1913 (Now the Companies Ordinance, 1984) as a Public Corporation Limited by shares. PTDC is owned by Government of Pakistan (99.75% share). The Principal objective of the corporation is to promote and develop tourism in Pakistan.
                </p>
                <Header as="h2">Management</Header>
                <p>
                    PTDC is governed by its Board of Directors. A maximum of 22 Directors can be on the Board. The Minister Incharge is the Ex-Officio Chairman and the Secretary Incharge is the Vice Chairman of the Board. Managing Director is the Chief Executive and also Principal Reporting Officer to the Board.
                </p>

                <Header as="h2">Vision</Header>
                <p>
                    The Vision is to develop the tourism sector as a national priority in a sustainable and acceptable manner, taking full advantage of regional and international trends and developments so that it can significantly contribute to the improvement of quality of life in Pakistan whilst promoting the country’s cultural and natural heritage.
                </p>
                <Header as="h2">Mission</Header>
                <p>
                To create an enabling environment for Pakistan’s tourism industry by providing world-class facilities that commensurate with our rich cultural heritage, rare archaeological treasures and exquisite environmental beauty in close partnership and coordination between the public and the private sector while preserving and protecting our cultural and moral values and projecting tourist friendly image of the country. 
                </p>
                <Header as="h2">Objectives</Header>
                <List as='ol'>
                    <List.Item as='li'>Projection of Pakistan as a tourist friendly destination.</List.Item>
                    <List.Item as='li'>Marketing of Pakistan’s tourist products in tourist generating markets (at home & abroad)</List.Item>
                    <List.Item as='li'>To act as a catalyst in encouraging the private sector to play active role in tourism promotion & development.</List.Item>
                    <List.Item as='li'>Development of tourist infrastructure and services within the country</List.Item>
                    <List.Item as='li'>Promotion of Domestic tourism.</List.Item>
                </List>
                <Header as="h2">Functions:</Header>
                <p>PTDC functions through its following departments and subsidiaries;</p>
                <Header as="h3">Departments</Header>
                <Header as="h3">Tourist Information Centres</Header>
                <p>PTDC is providing tourist information, facilitation and  publications to tourists through its 18 Tourist Information Centres located within the country.</p>
                <Header as="h3">Marketing / Publicity & Promotion</Header>
                
                <List as='ul'>
                    <List.Item as='li'>Production of tourist literature</List.Item>
                    <List.Item as='li'>MDistribution of tourist literature through TICs, PIA offices, travel agents, tour  operators, hoteliers, Pakistan missions abroad etc.</List.Item>
                    <List.Item as='li'>Familiarization trips for foreign & local travel writers/tour operators.</List.Item>
                    <List.Item as='li'>Advertising in domestic and foreign media.</List.Item>
                    <List.Item as='li'>Participation in international conventions, fairs, exhibitions, workshops etc. independently or in conjunction with tour operators, airlines and hoteliers</List.Item>
                </List>
            </Container>
        </div>
    )
}

export default About

