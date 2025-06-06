import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, User, X, Send } from 'lucide-react';
const initialMessages = [
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
    const [messages, setMessages] = useState(initialMessages);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    const handleSendMessage = async () => {
        if (!inputValue.trim())
            return;
        const userMessage = {
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
            const aiResponse = {
                id: (Date.now() + 1).toString(),
                sender: 'lya',
                content: 'I understand your question. Let me analyze the current market data and provide you with insights based on the Collaborative AI Brain.',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };
    return (_jsxs("div", { className: "fixed bottom-6 right-6 z-50", children: [_jsx(AnimatePresence, { children: !isExpanded && (_jsx(motion.div, { initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0, opacity: 0 }, transition: { duration: 0.3 }, children: _jsxs(Button, { onClick: () => setIsExpanded(true), className: "w-16 h-16 rounded-full shadow-lg animate-float bg-primary hover:bg-primary/90 relative", size: "lg", children: [_jsx(Bot, { className: "w-6 h-6" }), _jsx("div", { className: "absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse-soft" })] }) })) }), _jsx(AnimatePresence, { children: isExpanded && (_jsx(motion.div, { initial: { x: '100%', opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: '100%', opacity: 0 }, transition: { duration: 0.3, ease: 'easeInOut' }, className: "w-96 h-96", children: _jsxs(Card, { className: "glassmorphism shadow-2xl h-full flex flex-col", children: [_jsx(CardHeader, { className: "border-b border-border p-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "w-8 h-8 bg-primary rounded-full flex items-center justify-center", children: _jsx(Bot, { className: "w-4 h-4 text-primary-foreground" }) }), _jsxs("div", { children: [_jsx("div", { className: "font-medium text-sm", children: "Lya" }), _jsx("div", { className: "text-xs text-green-400", children: "Online \u2022 Collaborative AI Brain" })] })] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setIsExpanded(false), className: "text-muted-foreground hover:text-foreground", children: _jsx(X, { className: "w-4 h-4" }) })] }) }), _jsx(CardContent, { className: "flex-1 p-0", children: _jsx(ScrollArea, { className: "h-64 p-4", children: _jsxs("div", { className: "space-y-3", children: [messages.map((message) => (_jsxs("div", { className: `flex items-start space-x-2 ${message.sender === 'user' ? 'justify-end' : ''}`, children: [message.sender === 'lya' && (_jsx("div", { className: "w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs flex-shrink-0", children: _jsx(Bot, { className: "w-3 h-3 text-primary-foreground" }) })), _jsx("div", { className: `rounded-lg p-3 max-w-xs text-sm ${message.sender === 'user'
                                                            ? 'bg-primary text-primary-foreground'
                                                            : 'bg-muted text-foreground'}`, children: message.content }), message.sender === 'user' && (_jsx("div", { className: "w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs flex-shrink-0", children: _jsx(User, { className: "w-3 h-3" }) }))] }, message.id))), isTyping && (_jsxs("div", { className: "flex items-start space-x-2", children: [_jsx("div", { className: "w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs", children: _jsx(Bot, { className: "w-3 h-3 text-primary-foreground" }) }), _jsx("div", { className: "bg-muted rounded-lg p-3 max-w-xs", children: _jsxs("div", { className: "flex space-x-1", children: [_jsx("div", { className: "w-2 h-2 bg-primary rounded-full animate-bounce" }), _jsx("div", { className: "w-2 h-2 bg-primary rounded-full animate-bounce", style: { animationDelay: '0.1s' } }), _jsx("div", { className: "w-2 h-2 bg-primary rounded-full animate-bounce", style: { animationDelay: '0.2s' } })] }) })] })), _jsx("div", { ref: messagesEndRef })] }) }) }), _jsx("div", { className: "p-4 border-t border-border", children: _jsxs("div", { className: "flex space-x-2", children: [_jsx(Input, { placeholder: "Ask Lya anything...", value: inputValue, onChange: (e) => setInputValue(e.target.value), onKeyPress: handleKeyPress, className: "flex-1 text-sm", disabled: isTyping }), _jsx(Button, { onClick: handleSendMessage, disabled: !inputValue.trim() || isTyping, size: "sm", className: "px-3", children: _jsx(Send, { className: "w-4 h-4" }) })] }) })] }) })) })] }));
}
