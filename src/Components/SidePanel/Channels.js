import React, { useState } from "react";
import { Menu, Icon, Modal, Form, Input, Button } from "semantic-ui-react";

const Channels = () => {
  const [channels, setChannel] = useState([]);
  const [modal, setModal] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [channelDetails, setChannelDetails] = useState("");

  return (
    <>
      <Menu.Menu style={{ paddingBottom: "2em" }}>
        <Menu.Item>
          <span>
            <Icon name="exchange" /> CHANNELS
          </span>{" "}
          ({channels.length}) <Icon name="add" onClick={() => setModal(true)} />
        </Menu.Item>
        {/* Channels  */}
      </Menu.Menu>

      <Modal basic open={modal}>
        <Modal.Header>Add a Channel</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <Input
                fluid
                label="Name of Channel"
                name="channelName"
                onChange={(e) => setChannelName(e.target.value)}
              ></Input>
              <Input
                fluid
                label="Details of Channel"
                name="channelDetails"
                onChange={(e) => setChannelDetails(e.target.value)}
              ></Input>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" inverted>
            <Icon name="checkmark" /> Add
          </Button>
          <Button color="red" inverted onClick={() => setModal(false)}>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default Channels;
