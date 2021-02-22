import React, { useState, useEffect } from "react";
import { Menu, Icon, Modal, Form, Input, Button } from "semantic-ui-react";
import firebase from "../../firebase";

const CHANNEL_REF = firebase.database().ref("channels");

const Channels = (props) => {
  const { currentUser } = props;

  const [channels, setChannels] = useState([]);
  const [modal, setModal] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [channelDetails, setChannelDetails] = useState("");

  useEffect(() => {
    addListeners();
  }, []);

  console.log(channels);

  const addListeners = () => {
    let loadedChannels = [];
    CHANNEL_REF.on("child_added", (snap) => {
      loadedChannels.push(snap.val());

      setChannels(loadedChannels);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      addChannel();
    }
  };

  const isFormValid = () => {
    return channelName && channelDetails;
  };

  const addChannel = () => {
    const key = CHANNEL_REF.push().key;

    let newChannel = {
      id: key,
      name: channelName,
      details: channelDetails,
      createdBy: {
        name: currentUser.displayName,
        avatar: currentUser.email,
      },
    };

    CHANNEL_REF.child(key)
      .update(newChannel)
      .then(() => {
        setChannelName("");
        setChannelDetails("");
        setModal(false);
      })
      .catch((err) => {});
  };

  return (
    <>
      <Menu.Menu>
        <Menu.Item>
          <span>
            <Icon name="exchange" /> CHANNELS
          </span>{" "}
          ({channels.length}) <Icon name="add" onClick={() => setModal(true)} />
        </Menu.Item>
        {channels.map((channel) => {
          return (
            <Menu.Item
              key={channel.id}
              onClick={() => console.log(channel)}
              name={channel.name}
              style={{ opacity: 0.7 }}
            >
              #{channel.name}
            </Menu.Item>
          );
        })}
      </Menu.Menu>

      <Modal basic open={modal}>
        <Modal.Header>Add a Channel</Modal.Header>
        <Modal.Content>
          <Form style={{ paddingBottom: "2em" }} onSubmit={handleSubmit}>
            <Form.Field>
              <Input
                fluid
                label="Name of Channel"
                name="channelName"
                onChange={(e) => setChannelName(e.target.value)}
                style={{ marginBottom: "2rem" }}
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
          <Button color="green" inverted onClick={handleSubmit}>
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
