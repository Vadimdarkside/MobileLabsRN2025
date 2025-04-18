import React, { useRef, useState } from "react";
import { Alert, Animated } from "react-native";
import styled from "styled-components/native";
import HeaderCounter from "../components/HeaderCounter";
import {
  TapGestureHandler,
  LongPressGestureHandler,
  PanGestureHandler,
  FlingGestureHandler,
  PinchGestureHandler,
  Directions,
  GestureHandlerRootView,
  State,
} from "react-native-gesture-handler";

const Game = () => {
  const [score, setScore] = useState(0);
  const [scale] = useState(new Animated.Value(1));
  const [pan] = useState(new Animated.ValueXY());
  const doubleTapRef = useRef(null);
  const pinchRef = useRef(null);
  const flingLeftRef = useRef(null);
  const flingRightRef = useRef(null);
  const panRef = useRef(null);

  const addPoints = (points) => setScore((prev) => prev + points);

  const handleSingleTap = () => {
    addPoints(1);
  };

  const handleDoubleTap = () => {
    addPoints(2);
  };

  const handleLongPress = () => {
    addPoints(5);
  };

  const handleFling = (direction) => {
    const randomPoints = Math.floor(Math.random() * 10) + 1;
    addPoints(randomPoints);
    Alert.alert("Свайп!", `Свайп ${direction}, очки: +${randomPoints}`);
  };

  const handlePinch = Animated.event(
    [{ nativeEvent: { scale: scale } }],
    { useNativeDriver: false }
  );

  const handlePan = Animated.event(
    [{ nativeEvent: { translationX: pan.x, translationY: pan.y } }],
    { useNativeDriver: false }
  );

  return (
    <>
      <HeaderCounter score={score} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <FlingGestureHandler
          ref={flingRightRef}
          direction={Directions.RIGHT}
          onActivated={() => handleFling("вправо")}
        >
          <FlingGestureHandler
            ref={flingLeftRef}
            direction={Directions.LEFT}
            onActivated={() => handleFling("вліво")}
          >
            <PinchGestureHandler
              ref={pinchRef}
              onGestureEvent={handlePinch}
              simultaneousHandlers={[flingLeftRef, flingRightRef]}
            >
              <PanGestureHandler
                ref={panRef}
                onGestureEvent={handlePan}
                simultaneousHandlers={[pinchRef]}
              >
                <LongPressGestureHandler
                  onActivated={handleLongPress}
                  minDurationMs={800}
                >
                  <TapGestureHandler
                    waitFor={doubleTapRef}
                    numberOfTaps={1}
                    onActivated={handleSingleTap}
                  >
                    <TapGestureHandler
                      ref={doubleTapRef}
                      numberOfTaps={2}
                      onActivated={handleDoubleTap}
                    >
                      <BodyContainer>
                        <AnimatedCircle
                          style={{
                            transform: [
                              { translateX: pan.x },
                              { translateY: pan.y },
                              { scale: scale },
                            ],
                          }}
                        >
                          <CircleText>Tap</CircleText>
                        </AnimatedCircle>
                      </BodyContainer>
                    </TapGestureHandler>
                  </TapGestureHandler>
                </LongPressGestureHandler>
              </PanGestureHandler>
            </PinchGestureHandler>
          </FlingGestureHandler>
        </FlingGestureHandler>
      </GestureHandlerRootView>
    </>
  );
};

export default Game;

const BodyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AnimatedCircle = styled(Animated.View)`
  width: 200px;
  height: 200px;
  border-radius: 200px;
  background-color: rgb(192, 65, 65);
  border-width: 3px;
  border-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const CircleText = styled.Text`
  font-size: 20px;
  color: white;
`;
