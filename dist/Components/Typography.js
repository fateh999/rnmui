import React,{forwardRef,memo}from"react";import{Text}from"react-native";function Typography(props,ref){const{style,color,textDecorationColor=color,children,testID,accessibilityHint,accessibilityLabel,accessibilityRole,accessibilityState,accessible,adjustsFontSizeToFit,allowFontScaling=false,ellipsizeMode,maxFontSizeMultiplier,numberOfLines,onLongPress,onLayout,selectionColor,onTextLayout,selectable,textBreakStrategy,onPress,...textStyleProps}=props;return(<Text ref={ref}onPress={onPress}testID={testID}accessibilityHint={accessibilityHint}accessibilityLabel={accessibilityLabel}accessibilityRole={accessibilityRole}accessibilityState={accessibilityState}accessible={accessible}adjustsFontSizeToFit={adjustsFontSizeToFit}allowFontScaling={allowFontScaling}ellipsizeMode={ellipsizeMode}maxFontSizeMultiplier={maxFontSizeMultiplier}numberOfLines={numberOfLines}onLongPress={onLongPress}onLayout={onLayout}selectionColor={selectionColor}onTextLayout={onTextLayout}selectable={selectable}textBreakStrategy={textBreakStrategy}style={[textStyleProps,{color:color,textDecorationColor:textDecorationColor,},style,]}>{children}</Text>);}
export default memo(forwardRef(Typography));