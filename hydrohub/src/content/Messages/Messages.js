import React from "react";
import { ChatList } from "react-chat-elements";
import UIShell from "../../components/UIShell"
import { FormGroup, TextInput } from 'carbon-components-react'

const Messages = () => {
  return (
    <div>
      <UIShell />
      <ChatList
        className="chat-list"
        dataSource={[
          {
            avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
            alt: "Reactjs",
            title: "Facebook",
            subtitle: "What are you doing?",
            date: new Date(),
            unread: 0,
          },
          {
            avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
            alt: "Reactjs",
            title: "Facebook",
            subtitle: "What are you doing?",
            date: new Date(),
            unread: 0,
          },
          {
            avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
            alt: "Reactjs",
            title: "Facebook",
            subtitle: "What are you doing?",
            date: new Date(),
            unread: 0,
          },
          {
            avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
            alt: "Reactjs",
            title: "Facebook",
            subtitle: "What are you doing?",
            date: new Date(),
            unread: 0,
          },
          {
            avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
            alt: "Reactjs",
            title: "Facebook",
            subtitle: "What are you doing?",
            date: new Date(),
            unread: 0,
          },
        ]}
      />
      <FormGroup>
      <TextInput
        helperText="Optional helper text."
        id="test2"
        invalidText="A valid value is required"
        labelText="Text Input label"
        placeholder="Placeholder text"
      />
    </FormGroup>
    </div>
  );
};


export default Messages;
