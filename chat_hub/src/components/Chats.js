import React, { useState } from 'react'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

const DirectChatPage = () => {
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

	return (
        <ChatEngine
        height='100vh'
        userName='Mac_intosh'
        userSecret='Pizza2000'
        projectID='ae1edc9d-c72d-49b9-afbe-a820fa080ec7'
    />
	)
}

export default DirectChatPage;