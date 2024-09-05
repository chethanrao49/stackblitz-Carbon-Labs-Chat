'use client';

import React from 'react';
import { createComponent } from '@lit/react';

import CLABSMessages from '@carbon-labs/ai-chat/es/components/messages/messages.js';

export default createComponent({
  tagName: 'clabs-chat-messages',
  elementClass: CLABSMessages,
  react: React,
  events: {},
});
