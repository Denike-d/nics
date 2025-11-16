"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, Paperclip, X, MinusCircle, Smile } from "lucide-react";
import {
  getChatMessages,
  saveChatMessages,
  getComplaintById,
  type ChatMessage,
} from "@/utils/support-storage";

export default function SupportChat() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") || "Support";
  const complaintId = searchParams.get("complaintId");

  // Initial welcome message
  const welcomeMessage: ChatMessage = {
    id: "welcome-1",
    text: "Hi! Welcome to our support chat. How can we help you today?",
    sender: "support",
    senderName: "Support Agent",
    timestamp: new Date(Date.now() - 60000),
  };

  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [inputValue, setInputValue] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Load messages when complaintId changes or on mount
  useEffect(() => {
    if (complaintId) {
      const savedMessages = getChatMessages(complaintId);
      if (savedMessages.length > 0) {
        setMessages(savedMessages);
      } else {
        setMessages([welcomeMessage]);
      }
    } else {
      // If no complaintId, use welcome message
      setMessages([welcomeMessage]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [complaintId]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const handleSend = () => {
    if (!inputValue.trim() && !attachment) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      senderName: "You",
      timestamp: new Date(),
      attachment: attachment
        ? {
            name: attachment.name,
            size: formatFileSize(attachment.size),
          }
        : undefined,
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInputValue("");
    setAttachment(null);

    // Save messages immediately
    if (complaintId) {
      saveChatMessages(complaintId, updatedMessages);
    }

    // Simulate support response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const supportMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for reaching out! Our team is reviewing your message and will respond shortly.",
        sender: "support",
        senderName: "Support Agent",
        timestamp: new Date(),
      };
      const finalMessages = [...updatedMessages, supportMessage];
      setMessages(finalMessages);

      // Save with support response
      if (complaintId) {
        saveChatMessages(complaintId, finalMessages);
      }
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachment(file);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Support Chat
            </h1>
            <p className="text-lg font-medium text-green-600 mt-2 mb-2">
              {decodeURIComponent(topic)}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              We typically reply within a few minutes
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Online
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {/* Date Display */}
        <div className="flex justify-center mb-4">
          <div className="px-4 py-2 bg-gray-100 rounded-full">
            <p className="text-sm font-medium text-gray-600">
              {formatDate(new Date())}
            </p>
          </div>
        </div>

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col ${
              message.sender === "user" ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`max-w-xl ${
                message.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              {/* Sender Name */}
              <p
                className={`text-xs font-medium mb-1 ${
                  message.sender === "user" ? "text-gray-600" : "text-gray-600"
                }`}
              >
                {message.senderName}
              </p>
              <div
                className={`rounded-2xl px-4 py-3 ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                {message.attachment && (
                  <div
                    className={`flex items-center gap-2 mb-2 pb-2 border-b ${
                      message.sender === "user"
                        ? "border-blue-400"
                        : "border-gray-200"
                    }`}
                  >
                    <Paperclip className="w-4 h-4" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {message.attachment.name}
                      </p>
                      <p
                        className={`text-xs ${
                          message.sender === "user"
                            ? "text-blue-200"
                            : "text-gray-500"
                        }`}
                      >
                        {message.attachment.size}
                      </p>
                    </div>
                  </div>
                )}
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              </div>
              <p
                className={`text-xs text-gray-500 mt-1 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 px-6 py-4">
        {attachment && (
          <div className="mb-3 flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
            <Paperclip className="w-4 h-4 text-gray-600" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {attachment.name}
              </p>
              <p className="text-xs text-gray-500">
                {formatFileSize(attachment.size)}
              </p>
            </div>
            <button
              onClick={() => setAttachment(null)}
              className="p-1 hover:bg-gray-200 rounded transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        )}

        <div className="flex items-end gap-3">
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileSelect}
            className="hidden"
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
            title="Attach file"
          >
            <Paperclip className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex-1 relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              rows={1}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              style={{ minHeight: "48px", maxHeight: "120px" }}
            />
          </div>

          <button
            onClick={handleSend}
            disabled={!inputValue.trim() && !attachment}
            className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Press Enter to send, Shift + Enter for new line
        </p>
      </div>
    </div>
  );
}
