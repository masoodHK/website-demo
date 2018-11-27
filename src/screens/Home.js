import React from 'react';
import {
    Container,
    Button,
    GridRow,
    Grid,
    Header,
    Placeholder
} from 'semantic-ui-react';

function Home(props) {
    return (
        <div style={{marginBottom: 40}}>
             <GridRow>
                <div className="column padding-reset">
                    <div className="ui huge message page grid">
                        <Container>
                            <h1 className="ui huge header">Hello, world!</h1>
                            <p>This is a snippet for any type of website. It includes a call-to-action button and looks kind of like the jumbotron from Bootstrap. It does not require any additional CSS rules.</p>
                            <Button color="green">Learn more »</Button>
                        </Container>
                    </div>
                </div>
            </GridRow>
            <Container style={{textAlign: "center", marginTop: 20, marginBottom: 20}}>
                <Header as="h1">Discover</Header>
                <Grid style={{textAlign: "center", marginTop: 20, marginBottom: 20}}>
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
                <Button color="green">Discover More</Button>
            </Container>
            <GridRow style={{textAlign: "center", marginTop: 20, marginBottom: 20}}>
                <div className="column padding-reset">
                    <div className="ui huge message page grid">
                        <Container>
                        </Container>
                    </div>
                </div>
            </GridRow>
        </div>
    )
}

export default Home

