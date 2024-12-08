import React from 'react'
import ConversationElement from './ConversationElement'

function Conversation() {
  return (
    <div className='flex flex-col overflow-auto py-2'>
        <ConversationElement/>
        <ConversationElement/>
        <ConversationElement/>
        <ConversationElement/>
        <ConversationElement/>
        <ConversationElement/>
        <ConversationElement/>
    </div>
  )
}

export default Conversation


/*function Conversation() {
  return (
    <div className='flex flex-col overflow-auto py-2'>
        <ConversationElement/>
        <ConversationElement/>
        <ConversationElement/>
        <ConversationElement/>
        <ConversationElement/>
        <ConversationElement/>
        <ConversationElement/>
    </div>
  )
}

export default Conversation*/