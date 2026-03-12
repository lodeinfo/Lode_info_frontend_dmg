import React, { useState } from "react";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import "../Styles/UserMessage.css";

const UserMessage = ({ content }) => {
    const [hovered, setHovered] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(content).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div
            className="chat-bubble-user user-message-container"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {content}
            {hovered && (
                <button
                    onClick={handleCopy}
                    title="Copy message"
                    className={`user-message-copy-btn ${copied ? "copied" : "not-copied"}`}
                >
                    {copied ? <CheckOutlined /> : <CopyOutlined />}
                    {copied ? "Copied!" : "Copy"}
                </button>
            )}
        </div>
    );
};

export default UserMessage;
