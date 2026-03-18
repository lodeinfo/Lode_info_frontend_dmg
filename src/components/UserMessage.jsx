import React, { useState } from "react";
import { CopyOutlined, CheckOutlined, EditOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "../Styles/UserMessage.css";

const { TextArea } = Input;

const UserMessage = ({ content, index, onEdit }) => {
    const [hovered, setHovered] = useState(false);
    const [copied, setCopied] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState(content);

    const handleCopy = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(content).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleStartEdit = (e) => {
        e.stopPropagation();
        setIsEditing(true);
        setEditContent(content);
    };

    const handleSaveEdit = () => {
        if (editContent.trim() && editContent !== content) {
            onEdit(index, editContent);
        }
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditContent(content);
        setEditContent(content);
    };

    return (
        <div className={`user-message-container ${isEditing ? "editing-mode" : ""}`}>
            <div className="chat-bubble-user">
                {isEditing ? (
                    <div style={{ position: 'relative' }}>
                        <TextArea
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                            onPressEnter={(e) => {
                                if (!e.shiftKey) {
                                    e.preventDefault();
                                    handleSaveEdit();
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Escape") handleCancelEdit();
                            }}
                            autoSize={{ minRows: 1, maxRows: 6 }}
                            className="user-edit-textarea"
                            autoFocus
                            onBlur={handleSaveEdit}
                        />
                        {/* Ghost div mirrors typography and white-space to hold the bubble width exactly */}
                        <div style={{ 
                            visibility: 'hidden', 
                            height: 0, 
                            overflow: 'hidden', 
                            whiteSpace: 'pre-wrap', 
                            pointerEvents: 'none',
                            fontSize: '15px',
                            lineHeight: '1.5',
                            fontFamily: 'inherit',
                            padding: 0,
                            margin: 0
                        }}>
                            {content}
                        </div>
                    </div>
                ) : (
                    content
                )}
            </div>
            {!isEditing && (
                <div className="user-actions-row">
                    <div onClick={handleCopy} title="Copy message" style={{ cursor: "pointer" }}>
                        {copied ? <CheckOutlined style={{ color: "#4caf50" }} /> : <CopyOutlined />}
                    </div>
                    <div onClick={handleStartEdit} title="Edit prompt" style={{ cursor: "pointer" }}>
                        <EditOutlined />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMessage;
