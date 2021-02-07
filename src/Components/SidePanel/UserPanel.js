import React from "react";
import { Dropdown, Grid, Header, Icon } from "semantic-ui-react";

const UserPanel = () => {
  const dropDownOptions = () => {
    return [
      {
        key: "user",
        text: (
          <span>
            Signed in as <strong>User</strong>{" "}
          </span>
        ),
        disable: true,
      },
      {
        key: "avatar",
        text: <span>Change Avatar</span>,
      },
      {
        key: "signOut",
        text: <span>Sign Out</span>,
      },
    ];
  };

  return (
    <Grid style={{ background: "#4c3c4c" }}>
      <Grid.Column>
        <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
          <Header inverted floated={"left"} as="h2">
            <Icon name="code" />
            <Header.Content>Dev Chat</Header.Content>
          </Header>
        </Grid.Row>

        {/* User Drop Down*/}
        <Header inverted as="h4" style={{ padding: "0.25em" }}>
          <Dropdown trigger={<span>User</span>} options={dropDownOptions()} />
        </Header>
      </Grid.Column>
    </Grid>
  );
};

export default UserPanel;
