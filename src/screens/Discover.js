import React from 'react';
import {
    Container,
    Header,
    Grid,
    Placeholder
} from 'semantic-ui-react';

function Discover(props) {
    return (
        <div style={{marginBottom: 40}}>
            <Container style={{textAlign: "center", marginTop: 20}}>
                <Header as="h1">Discover</Header>
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Placeholder style={{width: "100%", height: 150}}>
                                <Placeholder.Image />
                            </Placeholder>
                        </Grid.Column>
                        <Grid.Column>
                            <Placeholder style={{width: "100%", height: 150}}>
                                <Placeholder.Image />
                            </Placeholder>
                        </Grid.Column>
                        <Grid.Column>
                            <Placeholder style={{width: "100%", height: 150}}>
                                <Placeholder.Image />
                            </Placeholder>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Placeholder style={{width: "100%", height: 150}}>
                                <Placeholder.Image />
                            </Placeholder>
                        </Grid.Column>
                        <Grid.Column>
                            <Placeholder style={{width: "100%", height: 150}}>
                                <Placeholder.Image />
                            </Placeholder>
                        </Grid.Column>
                        <Grid.Column>
                            <Placeholder style={{width: "100%", height: 150}}>
                                <Placeholder.Image />
                            </Placeholder>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}

export default Discover

