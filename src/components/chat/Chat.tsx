"use client"
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: "User", text: "Hey, how's it going?" },
    { id: 2, sender: "Bot", text: "All good! Want to play a game?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { id: messages.length + 1, sender: "User", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <>
      {/* Chat Toggle Button */}
     { 
!isOpen &&  <button
onClick={toggleChat}
className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg z-50"
>
<MessageCircle size={24} />
</button>

     }

      {/* Full-Screen Chat */}
      <div
        className={`fixed top-0 right-0 w-[350px] h-full bg-[#131313] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg z-40 flex flex-col`}
      >
        {/* Chat Header */}
        <div className="bg-[#262626] p-4 flex justify-between items-center text-white">
          <span className="font-bold text-xl">Live Chat</span>
          <button onClick={toggleChat}>
            <X size={20} />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 rounded-lg ${
                msg.sender === "User" ? "bg-[#262626] ml-auto" : "bg-gray-700"
              } max-w-[80%]`}
            >
              <span className="text-sm font-bold text-white">{msg.sender}:</span> <span className="text-[#ebbe7d]"> {msg.text} </span>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-3 bg-gray-800 flex items-center">
          <input
            type="text"
            className="flex-1 p-2 bg-gray-700 rounded-md text-white"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className="ml-2 bg-green-500 px-4 py-2 rounded-md" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </>
  );
}
