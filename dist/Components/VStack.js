import React,{memo}from"react";import Block from"./Block";function VStack(props){const{flexDirection="column",flex=1}=props;return<Block flexDirection={flexDirection}flex={flex}{...props}/>;}
export default memo(VStack);