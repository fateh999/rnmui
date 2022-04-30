### Block

```javascript
type BlockProps = {
  children?: ReactNode,
} & ViewProps &
  ViewStyle;
```

### Typography

```javascript
type TypographyProps = {
  children?: ReactNode,
} & TextProps &
  TextStyle;
```

### Touch

```javascript
type TouchProps = PressableProps &
  ViewStyle & {
    style?: ViewStyle,
  };
```

### Container

```javascript
type ContainerProps = {
  children?: React.ReactNode,
  backgroundColor?: ColorValue,
  statusBarBackgroundColor?: ColorValue,
  statusBarStyle?: StatusBarStyle,
  fullScreen?: boolean,
  isScreenFocussed?: boolean,
};
```
