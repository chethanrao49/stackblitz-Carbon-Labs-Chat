'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import CLABSChat from '@carbon-labs/ai-chat/es/components/chat/chat.js';

export default createComponent({
  tagName: 'clabs-chat',
  elementClass: CLABSChat,
  react: React,
  events: {
    onSubmit: 'on-submit',
    onUserMessageUpdateRequest: 'on-user-message-update-request',
    onUserRegenerationRequest: 'on-user-regeneration-request',
    onUserFeedbackRequest: 'on-user-feedback-request',
    onMessageElementSelected: 'on-message-element-selected',
    onChatFullscreenChange: 'on-chat-fullscreen-change',
    onChatDockingChange: 'on-chat-docking-change',
    onChatClosed: 'on-chat-closed',
    onHeaderMenuItemSelected: 'on-header-menu-item-selected',
    onUserStreamInterrupt: 'on-user-stream-interrupt',
    onMessageStreamingDone: 'on-message-streaming-done',
    onMessageElementTagSelected: 'on-message-element-tag-selected',
  },
});
