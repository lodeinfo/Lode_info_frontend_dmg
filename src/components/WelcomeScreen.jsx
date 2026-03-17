import React from "react";
import InputBar from "./InputBar";

const WelcomeScreen = ({
    user,
    question,
    setQuestion,
    handleAsk,
    handleFileUpload,
    selectedModel,
    setSelectedModel,
    modelMode,
    setModelMode,
    modelModalOpen,    // Added
    setModelModalOpen  // Added
}) => {
    return (
        <div className="welcome-container welcome-wrapper">
            <div className="welcome-text">
                <div className="welcome-line-1">Hi {user?.firstName?.split(' ')[0] || user?.username || 'User'}</div>
                <div className="welcome-line-2">Let's get started.</div>
            </div>

            {/* Centered Input */}
            <InputBar
                centered={true}
                question={question}
                setQuestion={setQuestion}
                handleAsk={handleAsk}
                handleFileUpload={handleFileUpload}
                selectedModel={selectedModel}
                setSelectedModel={setSelectedModel}
                modelMode={modelMode}
                setModelMode={setModelMode}
                modelModalOpen={modelModalOpen}    // Passed through
                setModelModalOpen={setModelModalOpen} // Passed through
            />
        </div>
    );
};

export default WelcomeScreen;