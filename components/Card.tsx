import React, { FC, ReactNode } from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import Colors from "../constants/Colors";

const s = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: Colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

type Props = {
  title: string;
  image: string;
};

const Card: FC<Props> = ({ title, image }) => {
  return (
    <View style={s.card}>
      <Image
        style={s.image}
        source={{
          uri:
            "https://cdn.pixabay.com/photo/2021/04/13/09/50/road-6175186_960_720.jpg",
        }}
      />
      <View style={s.detailsContainer}>
        <Text style={s.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Card;
