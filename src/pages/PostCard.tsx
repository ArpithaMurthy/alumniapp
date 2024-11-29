import React, { useState } from "react";
import html2canvas from "html2canvas";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const PostCard = () => {
  const [text, setText] = useState("");

  const handleDownloadImage = async () => {
    const textAreaElement = document.getElementById("capture-area");
    if (textAreaElement) {
      const canvas = await html2canvas(textAreaElement, {
        useCORS: true,
        backgroundColor: null, // Ensures gradient is retained
        scale: 2, // Higher resolution
      });
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "postcard.png";
      link.click();
    }
  };

  const handleShare = (platform: string) => {
    const encodedText = encodeURIComponent(text);
    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodedText}`, "_blank");
    } else if (platform === "email") {
      window.location.href = `mailto:?subject=Check out my postcard&body=${encodedText}`;
    } else {
      alert(
        "Direct sharing for this platform is not supported. Download the image and share it manually."
      );
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <div
        id="postcard"
        style={{
          background: "linear-gradient(135deg, #FFECB3, #FFD54F)",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          width: "400px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Capturable Area */}
        <div
          id="capture-area"
          style={{
            width: "100%",
            height: "350px", // Adjusted height
            padding: "15px",
            borderRadius: "10px",
            backgroundImage: "linear-gradient(135deg, #FFECD3, #FFD56F)", // Yellow gradient
            backgroundColor: "transparent", // Ensures fallback for older browsers
            boxSizing: "border-box",
            fontFamily: "'Dancing Script', cursive",
            position: "relative",
            overflowWrap: "break-word",
          }}
        >
          {/* Placeholder */}
          {!text && (
            <div
              style={{
                position: "absolute",
                top: "15px",
                left: "15px",
                right: "15px",
                bottom: "15px",
                color: "rgba(0, 0, 0, 0.5)", // Light gray for placeholder
                fontSize: "18px",
                whiteSpace: "pre-line",
                pointerEvents: "none",
              }}
            >
              Hi Dear,{"\n\n"}
              Write your post here{"\n\n"}
              Your presence makes my life wonderful,{"\n"}Lots of love
            </div>
          )}
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder=""
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              fontSize: "18px",
              color: "#333", // Text color
              resize: "none",
              lineHeight: "1.5",
              zIndex: 1,
            }}
          />
        </div>

        <div
          style={{
            marginTop: "15px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <button
            onClick={() => handleShare("whatsapp")}
            style={{
              backgroundColor: "#25D366",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            title="Share on WhatsApp"
          >
            <FaWhatsapp size={20} />
          </button>
          <button
            onClick={() => handleShare("email")}
            style={{
              backgroundColor: "#0078D4",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            title="Share via Email"
          >
            <FaEnvelope size={20} />
          </button>
        </div>

        <button
          onClick={handleDownloadImage}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "10px",
            backgroundColor: "#FFC107",
            color: "black",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Download as Image
        </button>
      </div>
    </div>
  );
};

export default PostCard;
