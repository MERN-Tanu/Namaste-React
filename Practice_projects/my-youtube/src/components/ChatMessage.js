import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8 mx-2 rounded-full"
        src="https://media.licdn.com/dms/image/D4D35AQFXGGREY2RN3Q/profile-framedphoto-shrink_400_400/0/1662172514167?e=1702407600&v=beta&t=XRW_D44h4rMIlhmZi-qJYbXZNK4NBCZ0DGDd6yUogNU"
        alt="user"
      />
      <span className="font-bold px-2">{name}</span>
      <span className="">{message}</span>
    </div>
  );
};

export default ChatMessage;
