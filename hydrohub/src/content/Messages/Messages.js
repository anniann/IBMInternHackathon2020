import React from "react";
import { MessageList, MessageBox, ChatList } from "react-chat-elements";
import UIShell from "../../components/UIShell"
import { FormGroup, TextInput } from 'carbon-components-react'
import "./messages.scss";
import 'react-chat-elements/dist/main.css';


const Messages = () => {
  return (
    <div>
      <UIShell />
      {/* <ChatList
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
      /> */}
      <MessageList
        className='message-list'
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={[
            {
              avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
              title: 'John',
              position: 'left',
              type: 'text',
              text: 'Hey there! I would like to donate to your organization.',
              date: new Date(1594800000000),
            },
            {
              // avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
              position: 'right',
              type: 'text',
              text: 'Hi, thank you so much for contacting me. We are short of many essential goods',
              date: new Date(1594800000000),
            },
            {
              // avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
              position: 'right',
              type: 'text',
              text: 'Do you think you could help?',
              date: new Date(1594800000000),
            },
            {
              avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
              title: 'John',
              position: 'left',
              type: 'text',
              text: 'Yes of course, what do you need?',
              date: new Date(1594800000000),
            },
            {
              // avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
              position: 'right',
              type: 'text',
              text: 'Water and food are pressing concerns right now.',
              date: new Date(1594800000000),
            },
            {
              avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
              title: 'John',
              position: 'left',
              type: 'text',
              text: 'Alright! Expect a shipment by Wednesday!',
              date: new Date(1594800000000),
            
            },

      ]}
        />
      <FormGroup>
      <TextInput
        className="chat-bar"
        //helperText="Optional helper text."
        id="test2"
        invalidText="A valid value is required"
        //labelText="Text Input label"
        placeholder="Type to Chat"
      />
    </FormGroup>
    </div>
  );
};


export default Messages;
