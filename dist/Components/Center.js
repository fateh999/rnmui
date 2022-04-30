import React, { memo } from "react";
import Block from "./Block";
function Center(props) {
    const { alignItems = "center", justifyContent = "center", flex = 0 } = props;
    return (<Block alignItems={alignItems} justifyContent={justifyContent} flex={flex} {...props}/>);
}
export default memo(Center);
