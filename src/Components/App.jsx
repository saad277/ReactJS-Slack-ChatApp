import React from "react";
import { Grid } from "semantic-ui-react";

import "./App.css";

import { ColorPanel } from "./ColorPanel";
import { Messages } from "./Messages";
import { MetaPanel } from "./MetaPanel";
import { SidePanel } from "./SidePanel";

function App() {
  return (
    <Grid columns="equal" className="app">
      <ColorPanel />
      <SidePanel />
      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages />
      </Grid.Column>

      <Grid.Column>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
}

export default App;
