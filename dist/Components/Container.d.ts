import React from "react";
import { ColorValue, StatusBarStyle } from "react-native";
export declare type ContainerProps = {
    children?: React.ReactNode;
    backgroundColor?: ColorValue;
    statusBarBackgroundColor?: ColorValue;
    statusBarStyle?: StatusBarStyle;
    fullScreen?: boolean;
    isScreenFocussed?: boolean;
};
declare function Container(props: ContainerProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Container>;
export default _default;
