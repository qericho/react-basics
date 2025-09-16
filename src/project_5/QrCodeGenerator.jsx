import { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [qrValue, setQrValue] = useState("Hellos");
  const [input, setInput] = useState("");

  const addValueQr = () => {
    if (!input.trim()) {
      alert("Input is empty!!");
      return;
    }
    setQrValue(input);
    setInput("");
  };

  return (
    <div className="w-120 mx-auto my-20 border p-4 relative">
      <div className="w-full flex space-x-2">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Enter value"
          className="border outline-0 py-3 px-5"
        />
        <button
          onClick={addValueQr}
          className="text-xs px-5 bg-black text-white cursor-pointer"
        >
          Confirm
        </button>
      </div>

      <div className="size-90 mx-auto my-10 flex items-center justify-center">
        <QRCode value={qrValue} className="w-full h-full" />
      </div>
      <h4 className="absolute bottom-2 right-2 text-xl text-black font-bold">
        QR CODE GENERATOR
      </h4>
    </div>
  );
};

export default QrCodeGenerator;
