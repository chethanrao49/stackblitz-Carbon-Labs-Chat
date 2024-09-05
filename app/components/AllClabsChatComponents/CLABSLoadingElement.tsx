'use client';

import React from 'react';
import { createComponent } from '@lit/react';

import CLABSLoadingElement from '@carbon-labs/ai-chat/es/components/loadingElement/loadingElement.js';

export default createComponent({
  tagName: 'clabs-chat-loading',
  elementClass: CLABSLoadingElement,
  react: React,
  events: {},
});
