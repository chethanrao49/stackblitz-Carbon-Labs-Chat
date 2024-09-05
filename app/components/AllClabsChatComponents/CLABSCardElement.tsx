import React from 'react';
import { createComponent } from '@lit/react';
import CLABSCardElement from '@carbon-labs/ai-chat/es/components/cardElement/cardElement.js';

export default createComponent({
  tagName: 'clabs-chat-card',
  elementClass: CLABSCardElement,
  react: React,
  events: {},
});
