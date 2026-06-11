"use client";

import { useState,useEffect,useRef } from "react";
import Image from "next/image";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I,m Mila. How can I help?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const text = input;

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              data.reply ??
              "Sorry, I'm unable to respond right now. Please try again later.",
          },
        ]);
        setLoading(false);
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I'm unable to respond right now. Please try again later.",
        },
      ]);
    }

    setLoading(false);
  };



  return (
    <div className="chatbot-widget">

      {/* CHAT WINDOW */}

      {open && (
        <div className=" w-[300px] h-[300px] , bg-cashia-white rounded-2xl shadow-2xl border border-cashia-mid-gray flex flex-col overflow-hidden mb-4">
         
          <div className="flex-1 overflow-y-auto p-4 bg-cashia-white space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-wrap shadow-sm 
                  ${
                  msg.role === "user"
                    ? "ml-auto bg-cashia-pink text-cashia-white rounded-tr-none" 
                    : "bg-white border border-cashia-mid-gray text-cashia-dark-gray rounded-tl-none"
                }
                `}
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <div className="bg-white border border-cashia-mid-gray rounded-2xl rounded-tl-none px-4 py-2.5 text-sm w-fit text-cashia-mid-gray shadow-sm animate-pulse">
                Thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
         
          </div>

          {/* INPUT */}
          <div className="border-t border-cashia-mid-gray bg-cashia-white p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex gap-2 w-full"
            >
              <input
                type="text"
                value={input}
                placeholder="Ask Cashia..."
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border border-cashia-mid-gray rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-cashia-pink focus:ring-1 focus:ring-cashia-pink text-cashia-dark-gray placeholder:text-cashia-mid-gray"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-cashia-red   text-cashia-white px-5 rounded-xl font-medium text-sm hover:bg-cashia-white  hover:text-cashia-red hover:border-2 hover:border-cashia-pink disabled:opacity-50 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-transparent p-0 shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
      >
        <Image
          src="/Rectangle.svg"
          alt="Chat"
          width={64}
          height={70}
          unoptimized
          className="h-20 w-auto object-contain mix-blend-multiply"
        />
      </button>
    </div>
  );
}
