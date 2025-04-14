"use client"
//helo
import { useState, useRef, useEffect } from "react";
// import "../styles/Chat.scss";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


function Chat() {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const chatContainerRef = useRef(null);
  const context = `
You are a helpful assistant specialized in Government schemes, subsidies, and financial support provided for farmers by the government. 
Your task is to provide accurate and concise information regarding various schemes, including their objectives, eligibility criteria, benefits, 
application process, deadlines, and required documents. You should categorize schemes into central, state, and special financial assistance programs, 
ensuring that farmers receive relevant information based on their location. Additionally, guide users on how to apply for subsidies and link them 
to official portals whenever possible. Support multi-language responses and ensure accessibility for farmers with different backgrounds.
`;

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, generatingAnswer]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuestion(transcript);
      generateAnswer({ preventDefault: () => {} });
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening]);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;

    setGeneratingAnswer(true);
    const currentQuestion = question;
    setQuestion("");

    setChatHistory(prev => [...prev, { type: 'question', content: currentQuestion }]);

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.REACT_APP_API_KEY}`,
        method: "post",
        data: {
          contents: [
            {
              parts: [{ text: `${context}\nUser: ${currentQuestion}\nAssistant:` }],
            },
          ],
        },
      });

      const aiResponse = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
      setChatHistory(prev => [...prev, { type: 'answer', content: aiResponse }]);
      setAnswer(aiResponse);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }
    setGeneratingAnswer(false);
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-green-50 to-green-100">
      <div className="h-full max-w-4xl mx-auto flex flex-col p-3">
        
        <header className="text-center py-4">
        
            <h1 className="text-4xl font-bold text-green-500 hover:text-green-600 transition-colors">
              AGRO AI 🤖
            </h1>
        
        </header>

        
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto mb-4 rounded-lg bg-white shadow-lg p-4 hide-scrollbar"
        >
          {chatHistory.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="bg-green-50 rounded-xl p-8 max-w-2xl">
                <h2 className="text-2xl font-bold text-green-600 mb-4">Welcome to AGRO AI! 👋</h2>
                <p className="text-gray-600 mb-4">
                  I'm here to help you with anything about Government Schemes you'd like to know. You can ask me about:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-green-500">💡</span> General knowledge
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-green-500">🔧</span> Government Data
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-green-500">📝</span> Crop Information
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-green-500">🤔</span> Financial Support
                  </div>
                </div>
                <p className="text-gray-500 mt-6 text-sm">
                  Just type your question below and press Enter or click Send!
                </p>
              </div>
            </div>
          ) : (
            <>
              {chatHistory.map((chat, index) => (
                <div key={index} className={`mb-4 ${chat.type === 'question' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block max-w-[80%] p-3 rounded-lg overflow-auto hide-scrollbar ${
                    chat.type === 'question' 
                      ? 'bg-green-500 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}>
                    <div className="markdown-content">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{chat.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
          {generatingAnswer && (
            <div className="text-left">
              <div className="inline-block bg-gray-100 p-3 rounded-lg animate-pulse">
                Thinking...
              </div>
            </div>
          )}
        </div>

        {/* Fixed Input Form */}
        <form onSubmit={generateAnswer} className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex gap-2">
            <textarea
              required
              className="flex-1 border border-gray-300 rounded p-3 focus:border-green-400 focus:ring-1 focus:ring-green-400 resize-none relative"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask anything..."
              rows="2"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  generateAnswer(e);
                }
              }}
            >
              <span className="absolute left-3 top-2 text-gray-500">🎤</span>
            </textarea>
            <button
              type="submit"
              className={`px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors ${
                generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={generatingAnswer}
            >
              Send
            </button>
            <button
              type="button"
              onClick={() => setIsListening(prev => !prev)}
              className={`px-6 py-2 ${isListening ? 'bg-red-500' : 'bg-blue-500'} text-white rounded-md hover:bg-opacity-80 transition-colors`}
            >
              {isListening ? 'Stop Listening' : 'Start Listening'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;