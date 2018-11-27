import React, { Component } from 'react';
import {
  Container,
  Menu,
  Segment,
  Header,
  Grid,
  List
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

import Routes from './routes'

import './App.css';

class App extends Component {
  state = {
    activeItem: "home-link"
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu>
          <Container>
            <Menu.Item 
              as={NavLink}
              onClick={this.handleItemClick}
              to="/"
              exact
              active={activeItem === "home-link"}
              name="home-link">Home</Menu.Item>
            <Menu.Item
              as={NavLink}
              onClick={this.handleItemClick}
              to="about"
              exact
              active={activeItem === "about-link"}
              name="about-link">About</Menu.Item>
            <Menu.Item
              as={NavLink}
              onClick={this.handleItemClick}
              to="discover"
              exact
              active={activeItem === "discover-link"}
              name="discover-link">Discover</Menu.Item>
          </Container>
        </Menu>

        <Routes />

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Header inverted as='h4' content='Services' />
                    <List link inverted>
                      <List.Item as='a'>Banana Pre-Order</List.Item>
                      <List.Item as='a'>DNA FAQ</List.Item>
                      <List.Item as='a'>How To Access</List.Item>
                      <List.Item as='a'>Favorite X-Men</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header as='h4' inverted>
                      Footer Header
                  </Header>
                  <p>
                    Extra space for a call to action inside the footer that could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;
