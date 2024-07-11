import { useEffect, useState, useContext } from 'react';
import Message from '../components/Message';
import { ChatContext } from '../context/ChatContext';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from "../firebase";

const MessageSection = () => {
  const [messages, setMessages] = useState([]);
  const {data} = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () =>{
      unSub();
    }
  },[data.chatId])

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
}

export default MessageSection