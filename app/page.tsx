// app/page.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const navigateToAssistantOne = () => {
    router.push('/assistant-one');
  };

  const navigateToAssistantTwo = () => {
    router.push('/assistant-two');
  };

  const buttonStyle = {
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    margin: '2rem',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#005bb5',
  };

  return (
    <div>
      <button
        style={buttonStyle}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor =
            buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
        }
        onClick={navigateToAssistantOne}
      >
        Go to Assistant One
      </button>
      <button
        style={buttonStyle}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor =
            buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
        }
        onClick={navigateToAssistantTwo}
      >
        Go to Assistant Two
      </button>
    </div>
  );
}
