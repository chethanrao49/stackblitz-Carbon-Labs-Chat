'use client';

import { useRouter } from 'next/navigation';

import AssistantOne from '../components/AllClabsChatComponents/AssistantOne/AssistantOne';

export default function AssistantOnePage() {
  const router = useRouter();

  const navigateHome = () => {
    router.push('/');
  };

  const initialMessage = [
    {
      origin: 'bot',
      hasError: false,
      time: new Date().toLocaleTimeString(),
      index: 0,
      elements: [
        {
          type: 'text',
          content: 'Welcome Message',
        },
      ],
    },
  ];

  return (
    <div>
      <div>Welcome to Assistant One Page</div>
      <AssistantOne {...initialMessage} />
    </div>
  );
}
