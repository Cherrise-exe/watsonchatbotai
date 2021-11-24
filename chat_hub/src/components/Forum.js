import React from 'react'

import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'

const HomePage = () => {
    return (
        <ChatEngineWrapper>
            <ChatSocket 
                projectID='ae1edc9d-c72d-49b9-afbe-a820fa080ec7'
                chatID='72788'
                chatAccessKey='ca-9ceb94c4-d1b2-40b1-8209-17a423b6456b'
                senderUsername='Mac_intosh'
            />

            <ChatFeed activeChat='72788' /> 
        </ChatEngineWrapper>
    )
}

export default HomePage