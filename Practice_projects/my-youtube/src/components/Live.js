import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { generateRandomMessage } from "../utils/helper";

const Live = () => {
  const [liveMessage, setliveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("API POLLING");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="w-[400px] h-[400px] overflow-scroll ml-2 p-2 mt-9 border border-black bg-slate-50 rounded-lg  flex-col-reverse overscroll-y-none">
        <div>
          {" "}
          {chatMessages.map((c) => {
            return <ChatMessage name={c.name} message={c.message} />;
          })}
        </div>

        {/* {<chatMessages.map((c) => {return <ChatMessage name={c.name} message={c.message}/> })} */}
        {/* <ChatMessage name="Tanu Singh" message="How are you 🙋‍♀️?" />
      <ChatMessage name="Tanu Singh" message="How are you 🙋‍♀️?" />
      <ChatMessage name="Tanu Singh" message="How are you 🙋‍♀️?" />
      <ChatMessage name="Tanu Singh" message="How are you 🙋‍♀️?" />
      <ChatMessage name="Tanu Singh" message="How are you 🙋‍♀️?" />
      <ChatMessage name="Tanu Singh" message="How are you 🙋‍♀️?" /> */}
      </div>
      <form
        className="border border-black w-[400px] p-2 ml-2"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On Form Submit", liveMessage);
          dispatch(addMessage({ name: "Tanu Singh", message: liveMessage }));

          setliveMessage("");
        }}>
        <input
          className="px-4 w-72 border border-black"
          type="text"
          placeholder="Type your message here"
          value={liveMessage}
          onChange={(e) => {
            setliveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </div>
  );
};

{
  /* //     const dispatch = useDispatch();

//     const chatMessage = useSelector((store) => store.chat.message);
//   useEffect(() => { */
}
{
  /* //     const i = setInterval(() => { */
}
//       // API Polling
{
  /* //       console.log("API calling");
//     }, 2000);
//     return () => clearInterval(i);
//   }, []);
//   return (
//     <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-50 rounded-lg">
//       {/* <ChatMessage name="Tanu Singh" message="Hi, All!" /> */
}

//       {/* Disclaimer: don't use indexes as keys */}
{
  /* //       ChatMessage.map((c,index) => { */
}
{
  /* //          <ChatMessage  name="Tanu Singh" message ="How are you?"/>
//       });
{/* //     </div> */
}
{
  /* );
};  */
}

export default Live;
