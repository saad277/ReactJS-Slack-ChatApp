import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

import "./App.css";

import { ColorPanel } from "./ColorPanel";
import { Messages } from "./Messages";
import { MetaPanel } from "./MetaPanel";
import { SidePanel } from "./SidePanel";

const App = (props) => {
  const { currentUser } = props;

  return (
    <Grid columns="equal" className="app">
      <ColorPanel />
      <SidePanel currentUser={currentUser} />
      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages />
      </Grid.Column>

      <Grid.Column>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    currentUser: auth.currentUser,
  };
};

export default connect(mapStateToProps)(App);
