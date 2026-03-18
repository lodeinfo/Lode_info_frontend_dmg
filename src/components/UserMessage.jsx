import React, { useState } from "react";
import { CopyOutlined, CheckOutlined, EditOutlined } from "@ant-design/icons";
import "../Styles/UserMessage.css";

const UserMessage = ({ content, index, onEdit }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(content).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="user-message-container">
            <div className="chat-bubble-user">
                {content}
            </div>
            <div className="user-actions-row">
                <div onClick={handleCopy} title="Copy message" style={{ cursor: "pointer" }}>
                    {copied ? <CheckOutlined style={{ color: "#4caf50" }} /> : <CopyOutlined />}
                </div>
                <div onClick={() => onEdit(index, content)} title="Edit prompt" style={{ cursor: "pointer" }}>
                    <EditOutlined />
                </div>
            </div>
        </div>
    );
};

export default UserMessage;
