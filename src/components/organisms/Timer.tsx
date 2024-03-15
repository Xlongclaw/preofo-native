import { Text } from "react-native";
import React from "react";

/**
 * Prop Type of this React Component.
 */
type PropType = { seconds: number };

/**
 * This Component renders a timer of ${props.seconds} seconds.
 *
 * @returns a JSX Element that displays a timer.
 */
export default function Timer({ seconds }: PropType) {
  /**
   * timeValue - a State Variable that stores current Value of the seconds remaining.
   */
  const [timerValue, setTimerValue] = React.useState(seconds);

  React.useEffect(() => {

    /**
     * Runs only if the timer Value is not 0.
     * After every second it will decrease the timer Value By 1.
     */
    if (timerValue) {
      const intervalId = setInterval(() => {
        setTimerValue((x) => x - 1);
      }, 1000);
    }
  }, []);
  return <Text>{timerValue}</Text>;
}
