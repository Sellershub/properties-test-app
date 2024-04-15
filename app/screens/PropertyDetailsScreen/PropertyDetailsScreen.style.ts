import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerStyle: {
    padding: 20,
  },
  imageStyle: {
    borderRadius: 10,
    height: 250,
    width: "100%",
  },
  cardContainerStyle: {
    backgroundColor: "#add2f7",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  cardDetailTextStyle: { marginTop: 10, color: "#4793AF" },
  priceContainerStyle: {
    backgroundColor: "#FFC470",
  },
  cardTitleContainerStyle: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});

export default styles;
