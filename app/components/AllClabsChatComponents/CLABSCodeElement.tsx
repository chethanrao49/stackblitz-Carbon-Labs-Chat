'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import CLABSCodeElement from '@carbon-labs/ai-chat/es/components/codeElement/codeElement.js';

export default createComponent({
  tagName: 'clabs-chat-code',
  elementClass: CLABSCodeElement,
  react: React,
  events: {},
});
