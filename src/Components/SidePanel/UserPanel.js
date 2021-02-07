import React from "react";
import { Dropdown, Grid, Header, Icon, Image } from "semantic-ui-react";


import firebase from "../../firebase";

const UserPanel = (props) => {
  const { currentUser } = props;

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {});
  };

  const dropDownOptions = () => {
    return [
      {
        key: "user",
        text: (
          <span>
            Signed in as
            <strong> {currentUser.displayName}</strong>
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
        text: <span onClick={handleSignOut}>Sign Out</span>,
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

          <Header inverted as="h4" style={{ padding: "0.25em" }}>
            <Dropdown
              trigger={
                <span>
                  <Image src={currentUser.photoURL} spaced="right" avatar />
                  {currentUser.displayName}
                </span>
              }
              options={dropDownOptions()}
            />
          </Header>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  );
};

export default UserPanel;
