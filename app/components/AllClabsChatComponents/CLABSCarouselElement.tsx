'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import CLABSCarouselElement from '@carbon-labs/ai-chat/es/components/carouselElement/carouselElement.js';

export default createComponent({
  tagName: 'clabs-chat-carousel',
  elementClass: CLABSCarouselElement,
  react: React,
  events: {},
});
