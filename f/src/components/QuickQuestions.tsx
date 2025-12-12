'use client';

import { MessageCircle, Send, Bot, User, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const QuickQuestions = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI pregnancy assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(Date.now() - 60000),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const commonQuestions = [
    'Is it normal to feel tired?',
    'What foods should I avoid?',
    'When should I call the doctor?',
    'How much weight should I gain?',
    'Can I exercise during pregnancy?',
  ];

  const aiResponses = [
    "That's completely normal! Fatigue is very common in pregnancy, especially during the first and third trimesters. Your body is working hard to grow your baby.",
    "Avoid raw or undercooked meat, fish with high mercury, unpasteurized dairy, and raw eggs. Stick to well-cooked foods and pasteurized products.",
    "Call your doctor immediately for severe abdominal pain, heavy bleeding, severe headaches with vision changes, or decreased fetal movement.",
    "The recommended weight gain depends on your pre-pregnancy BMI. Generally, 11-16 kg (25-35 lbs) for women with normal BMI is recommended.",
    "Yes! Moderate exercise is great. Aim for 30 minutes most days. Walking, swimming, and prenatal yoga are excellent choices. Avoid contact sports and activities with high fall risk.",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <MessageCircle className="w-8 h-8 text-purple-600" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Quick Questions</h2>
          <p className="text-gray-600">Get instant answers from our AI assistant</p>
        </div>
        <div className="ml-auto flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1 rounded-full">
          <Bot className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-purple-700">AI Online</span>
        </div>
      </div>

      {/* Chat Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chat Window */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-200 h-[400px] flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-900 rounded-bl-none'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {message.sender === 'bot' && (
                        <div className="p-1 bg-purple-100 rounded-lg flex-shrink-0">
                          <Bot className="w-4 h-4 text-purple-600" />
                        </div>
                      )}
                      <div>
                        <p className="text-sm">{message.text}</p>
                        <div
                          className={`text-xs mt-2 ${
                            message.sender === 'user' ? 'text-purple-200' : 'text-gray-500'
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                      </div>
                      {message.sender === 'user' && (
                        <div className="p-1 bg-white/20 rounded-lg flex-shrink-0">
                          <User className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-bl-none p-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-purple-100 rounded-lg">
                        <Bot className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: '0.2s' }}
                        />
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: '0.4s' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question here..."
                  className="flex-1 px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Feedback */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="text-sm text-gray-600">
              AI responses are for informational purposes only. Always consult your doctor.
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-600">
                <ThumbsUp className="w-4 h-4" />
                Helpful
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600">
                <ThumbsDown className="w-4 h-4" />
                Not helpful
              </button>
            </div>
          </div>
        </div>

        {/* Quick Questions Panel */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Common Questions</h3>
            <div className="space-y-3">
              {commonQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="w-full text-left p-3 bg-white/80 rounded-lg border border-purple-200 hover:border-purple-300 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-purple-700">?</span>
                    </div>
                    <span className="text-sm text-gray-700">{question}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Topics to Ask About</h3>
            <div className="space-y-3">
              {[
                'Nutrition & Diet',
                'Exercise & Activity',
                'Symptoms & Concerns',
                'Medical Appointments',
                'Mental Health',
                'Labor & Delivery',
              ].map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/80 rounded-lg"
                >
                  <div className={`w-2 h-2 rounded-full ${
                    index === 0 ? 'bg-red-500' :
                    index === 1 ? 'bg-green-500' :
                    index === 2 ? 'bg-yellow-500' :
                    index === 3 ? 'bg-blue-500' :
                    index === 4 ? 'bg-purple-500' :
                    'bg-pink-500'
                  }`} />
                  <span className="text-sm text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">Remember</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">AI provides general guidance only</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Always consult your healthcare provider</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Trust your instincts</span>
              </li>
            </ul>
            <button className="w-full mt-6 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
              Connect with Doctor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickQuestions;