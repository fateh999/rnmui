import React, { Fragment, memo, useLayoutEffect } from "react";
import { Platform, StatusBar } from "react-native";
import Block from "./Block";
import SafeAreaBlock from "./SafeAreaBlock";
function Container(props) {
    const { children, fullScreen, backgroundColor = "white", statusBarBackgroundColor = "lightgrey", statusBarStyle = "dark-content", isScreenFocussed = true, } = props;
    const statusBarBackgroundColorIos = statusBarBackgroundColor ??
        (fullScreen ? "transparent" : statusBarBackgroundColor);
    const screenBackgroundColor = backgroundColor;
    useLayoutEffect(() => {
        if (isScreenFocussed) {
            if (Platform.OS === "android") {
                StatusBar.setTranslucent(fullScreen ?? false);
                StatusBar.setBackgroundColor(statusBarBackgroundColor ??
                    (fullScreen ? "transparent" : statusBarBackgroundColor), true);
            }
        }
        StatusBar.setBarStyle(statusBarStyle);
    }, [fullScreen, statusBarBackgroundColor, statusBarStyle, isScreenFocussed]);
    return (<Block flex={1} backgroundColor={screenBackgroundColor}>
      {fullScreen ? (<Fragment>{children}</Fragment>) : (<Fragment>
          <SafeAreaBlock flex={0} backgroundColor={statusBarBackgroundColorIos}/>
          <SafeAreaBlock flex={1} backgroundColor={screenBackgroundColor}>
            {children}
          </SafeAreaBlock>
        </Fragment>)}
    </Block>);
}
export default memo(Container);
