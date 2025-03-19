import { useEffect, useState } from 'react';

const useTextToSpeech = () => {
  const [selectedText, setSelectedText] = useState('');
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleMouseUp = () => {
      const text = window.getSelection()?.toString();
      if (text) {
        setSelectedText(text);
        const range = window.getSelection()?.getRangeAt(0);
        const rect = range?.getBoundingClientRect();
        if (rect) {
          setButtonPosition({
            top: rect.top + window.scrollY - 30, // Adjust for button height
            left: rect.left + window.scrollX + rect.width / 2 - 25, // Center the button
          });
          setButtonVisible(true);
        }
      } else {
        setButtonVisible(false);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const speak = () => {
    if (selectedText) {
      const utterance = new SpeechSynthesisUtterance(selectedText);
      window.speechSynthesis.speak(utterance);
    }
  };

  return { isButtonVisible, buttonPosition, speak };
};

export default useTextToSpeech;