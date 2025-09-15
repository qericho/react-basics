import { useState } from "react";
import { item } from "./data";
const Accordion = () => {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <div className="w-120 mx-auto border px-2 py-4 mt-10">
      <button className="w-full py-3 border">Accordion</button>
      <div className="mt-10">
        <ul className="mx-auto w-100 space-y-4">
          {item.map((i) => (
            <li
              onClick={() => toggle(i.id)}
              key={i.id}
              className="flex flex-col items-center justify-between py-3 px-2 border"
            >
              <div className="w-full flex items-center justify-between">
                <p>{i.title}</p>
                <button>{openId === i.id ? "-" : "+"}</button>
              </div>
              {openId === i.id && (
                <p className="bg-red-300 px-2 py-1">{i.content}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
