import React, { memo } from "react";
import Block from "./Block";
function HStack(props) {
    const { flexDirection = "row" } = props;
    return <Block flexDirection={flexDirection} {...props}/>;
}
export default memo(HStack);
