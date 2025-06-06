import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, User, X, Send } from 'lucide-react';
import { ChatMessage } from '@/types/trading';

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    sender: 'lya',
    content: "Hello Alex! I've analyzed today's market conditions. Would you like me to explain the current EUR/USD momentum pattern?",
    timestamp: new Date(Date.now() - 5 * 60 * 1000)
  },
  {
    id: '2',
    sender: 'user',
    content: 'Yes, show me the key levels',
    timestamp: new Date(Date.now() - 3 * 60 * 1000)
  },
  {
    id: '3',
    sender: 'lya',
    content: 'Based on the Ghost Trading analysis, key resistance is at 1.0875, with support at 1.0820. The algorithm suggests a bullish continuation pattern.',
    timestamp: new Date(Date.now() - 2 * 60 * 1000)
  }
];

export function LyaAssistant() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'lya',
        content: 'I understand your question. Let me analyze the current market data and provide you with insights based on the Collaborative AI Brain.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={() => setIsExpanded(true)}
              className="w-16 h-16 rounded-full shadow-lg animate-float bg-primary hover:bg-primary/90 relative"
              size="lg"
            >
              <Bot className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse-soft"></div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-96 h-96"
          >
            <Card className="glassmorphism shadow-2xl h-full flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b border-border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Lya</div>
                      <div className="text-xs text-green-400">Online • Collaborative AI Brain</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              {/* Chat Messages */}
              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-64 p-4">
                  <div className="space-y-3">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex items-start space-x-2 ${
                          message.sender === 'user' ? 'justify-end' : ''
                        }`}
                      >
                        {message.sender === 'lya' && (
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs flex-shrink-0">
                            <Bot className="w-3 h-3 text-primary-foreground" />
                          </div>
                        )}
                        
                        <div
                          className={`rounded-lg p-3 max-w-xs text-sm ${
                            message.sender === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-foreground'
                          }`}
                        >
                          {message.content}
                        </div>
                        
                        {message.sender === 'user' && (
                          <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs flex-shrink-0">
                            <User className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs">
                          <Bot className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <div className="bg-muted rounded-lg p-3 max-w-xs">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </CardContent>

              {/* Chat Input */}
              <div className="p-4 border-t border-border">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask Lya anything..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 text-sm"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    size="sm"
                    className="px-3"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
