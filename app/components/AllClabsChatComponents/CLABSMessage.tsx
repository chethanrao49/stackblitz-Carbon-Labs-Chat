import React from 'react';
import { createComponent } from '@lit/react';

import CLABSMessage from '@carbon-labs/ai-chat/es/components/message/message.js';

export default createComponent({
  tagName: 'clabs-chat-message',
  elementClass: CLABSMessage,
  react: React,
  events: {},
});
