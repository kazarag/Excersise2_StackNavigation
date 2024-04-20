import { View, Text, StyleSheet } from "react-native";
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
const DetailsScreen = () => {
  return (
    <View style={style.container}>
      <Text>Details Screen</Text>
    </View>
  );
};
export default DetailsScreen;
