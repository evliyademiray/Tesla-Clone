import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 16,
    color: "#5e5c62",
  },
  subTitleCTA:{
    textDecorationLine:'underline',
    
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
  },
  buttonContainer:{
    position:'absolute',
    bottom:50,
    width:'100%',
  }
});
export default styles;
