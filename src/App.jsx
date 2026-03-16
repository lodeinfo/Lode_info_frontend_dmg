import React from "react";
import AppRoutes from "./Route/Routes";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { ConfigProvider, theme as antTheme } from "antd";
import "./App.css";

function AppContent() {
    const { theme } = useTheme();
    return (
        <ConfigProvider
            theme={{
                algorithm: theme === "dark" ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
                token: {
                    colorPrimary: "#1677ff",
                    borderRadius: 8,
                },
                components: {
                    Select: {
                        optionSelectedBg: theme === "dark" ? "#111a2c" : "#e6f7ff",
                        controlItemBgActive: theme === "dark" ? "#111a2c" : "#e6f7ff",
                    },
                },
            }}
        >
            <AppRoutes />
        </ConfigProvider>
    );
}

function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <AppContent />
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
