'use client';

import React from 'react';
import { createComponent } from '@lit/react';

import CLABSTextElement from '@carbon-labs/ai-chat/es/components/textElement/textElement.js';

export default createComponent({
  tagName: 'clabs-chat-text',
  elementClass: CLABSTextElement,
  react: React,
  events: {},
});
