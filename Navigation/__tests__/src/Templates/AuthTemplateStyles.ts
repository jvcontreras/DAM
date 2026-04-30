import React from "react";
import { View } from "react-native";

interface AuthTemplateProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}
const AuthTemplate = ( {title,subtitle,children}: AuthTemplateProps) => {
    return (
        <View></View>
    );
};
export default AuthTemplate;