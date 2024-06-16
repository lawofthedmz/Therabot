import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChatBox.css';
const backendUrl = 'https://therapy-chatbot-murphy-24161ebc687d.herokuapp.com/'
/**
 * Represents a chat box component.
 *
 * @component
 * @example
 * return (
 *   <ChatBox />
 * )
 */
const ChatBox = () => {
  /**
   * State and setter for input field
   * @type {[string, function]} input - State for input field
   */
  const [input, setInput] = useState('');

   /**
   * State and setter for messages
   * @type {[Array, function]} messages - State for chat messages
   */
  const [messages, setMessages] = useState([]);

  /**
 * State and setter for voice recognition
 * @type {[boolean, function]} isVoiceEnabled - State for voice recognition
 */
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  
  /**
   * Fetch initial message from server when component mounts
   */
  useEffect(() => {
    const fetchInitialMessage = async () => {
      try {
        const response = await axios.get('https://therapy-chatbot-murphy-24161ebc687d.herokuapp.com/start_chat');
        const botMessage = { text: response.data.reply, sender: 'bot' };
        setMessages([botMessage]);
        if (isVoiceEnabled) {
          speak(botMessage.text);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchInitialMessage();
  }, [isVoiceEnabled]);

  /**
   * Handle refresh button click
   */
  const handleRefresh = () => {
    setMessages([]);
  };

  /**
   * Handle send button click or form submission
   * @param {Event} e - Event
   */
  const handleSend = async (e) => {
    e.preventDefault(); // Prevent the form from submitting
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);
      setInput('');

      try {
        const response = await axios.post('https://therapy-chatbot-murphy-24161ebc687d.herokuapp.com/chat', { message: input });
        const botMessage = { text: response.data.reply, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
        if (isVoiceEnabled) {
          speak(botMessage.text);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  /**
   * Speak the given text
   * @param {string} text - Text to speak
   * @returns {Promise<void>}
   */
  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      handleSend({ preventDefault: () => {} });
    };
  };

  /**
   * Speak the given text
   * @param {string} text - Text to speak
   * @returns {void}
    */
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  /**
   * Toggle voice recognition
   */
  const toggleVoice = () => {
    setIsVoiceEnabled(!isVoiceEnabled);
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-white h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div
          className="absolute inset-0 bg-gradient-to-tr from-[#615f60] to-[#170cb8] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div
          className="absolute inset-0 bg-gradient-to-tr from-[#615f60] to-[#170cb8] opacity-100"
          style={{
            clipPath:
              'polygon(64.1% 44.1%, 90% 61.6%, 87.5% 26.9%, 75.5% 0.1%, 70.7% 2%, 62.5% 32.5%, 50.2% 62.4%, 42.4% 68.1%, 37.5% 58.3%, 35.2% 34.5%, 17.5% 76.7%, -10.1% 64.9%, 7.9% 100%, 17.6% 76.8%, 66.1% 97.7%, 64.1% 44.1%)',
          }}
        />
      </div>
      <div className="flex justify-center items-center h-full flex-col">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4 text-center">
          Therabot
        </h1>
        <div className="w-full md:w-3/4 lg:w-1/2 rounded shadow-md p-4 custom-bg">            <div className="overflow-auto h-96 mb-4">
              {messages.map((message, index) => (
                <p key={index} className={`message ${message.sender}`}>
                  <strong>{message.sender === 'user' ? 'You: ' : 'Therabot: '}</strong>
                  {message.text}
                </p>
              ))}
            </div>
          <div className="flex">
            <form onSubmit={handleSend} className="flex w-full">
              <input
                className="flex-grow rounded-l-md p-2 outline-none"
                placeholder="Type your message here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="bg-blue-600 text-white rounded-r-md px-4">Send</button>
            </form>
            <button className="bg-green-600 text-white rounded-md px-4 ml-2" onClick={handleRefresh}>Refresh</button>
            <button className="bg-yellow-600 text-white rounded-md px-4 ml-2" onClick={handleVoiceInput}>🎤</button>
            <button className={`bg-${isVoiceEnabled ? 'red' : 'blue'}-600 text-white rounded-md px-4 ml-2`} onClick={toggleVoice}>
              {isVoiceEnabled ? 'Disable Voice' : 'Enable Voice'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
