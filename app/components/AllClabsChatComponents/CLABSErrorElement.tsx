'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import CLABSErrorElement from '@carbon-labs/ai-chat/es/components/errorElement/errorElement.js';

export default createComponent({
  tagName: 'clabs-chat-error',
  elementClass: CLABSErrorElement,
  react: React,
  events: {},
});
