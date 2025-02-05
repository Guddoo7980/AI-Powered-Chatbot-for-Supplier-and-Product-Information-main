

const ChatHistory = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-4 overflow-y-auto mb-4 p-4 bg-white rounded-lg shadow-md h-3/4">
      {messages.map((message, index) => (
        <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
          <div
            className={`px-4 py-2 max-w-xs rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChatHistory