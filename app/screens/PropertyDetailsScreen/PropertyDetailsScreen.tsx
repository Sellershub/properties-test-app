import { ScrollView, Text, Image, View } from "tamagui";
import { useRouteInfo } from "expo-router/build/hooks";
import DefaultImg from "../../../assets/images/default.jpeg";
import styles from "./PropertyDetailsScreen.style";
import usePropertyDetailsHook from "./hooks/usePropertyDetails";
import {
  ShieldCheck,
  Building,
  Home,
  BedDouble,
  Bath,
  CircleDollarSign,
} from "@tamagui/lucide-icons";

export default function PropertyDetailsScreen() {
  const { id } = useRouteInfo()?.params;
  const { property } = usePropertyDetailsHook(Number(id));

  return (
    <ScrollView flex={1} contentContainerStyle={styles.containerStyle}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: property?.images?.[0]?.url
            ? property.images?.[0]?.url
            : DefaultImg,
        }}
      />

      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTitleContainerStyle}>
          <Building />
          <Text fontSize={16}>Address:</Text>
        </View>
        <Text fontSize={14} style={styles.cardDetailTextStyle}>
          {property?.address}
        </Text>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTitleContainerStyle}>
          <ShieldCheck />
          <Text fontSize={16}>Status:</Text>
        </View>
        <Text fontSize={14} style={styles.cardDetailTextStyle}>
          {property?.propertyStatusText}
        </Text>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTitleContainerStyle}>
          <Home />
          <Text fontSize={16}>Type:</Text>
        </View>
        <Text fontSize={14} style={styles.cardDetailTextStyle}>
          {property?.propertyTypeText}
        </Text>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTitleContainerStyle}>
          <BedDouble />
          <Text fontSize={16}>Bedrooms:</Text>
        </View>
        <Text fontSize={14} style={styles.cardDetailTextStyle}>
          {property?.bedrooms}
        </Text>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTitleContainerStyle}>
          <Bath />
          <Text fontSize={16}>Bathrooms:</Text>
        </View>
        <Text fontSize={14} style={styles.cardDetailTextStyle}>
          {property?.bathrooms}
        </Text>
      </View>

      <View style={[styles.cardContainerStyle, styles.priceContainerStyle]}>
        <View style={styles.cardTitleContainerStyle}>
          <CircleDollarSign />
          <Text fontSize={16}>Price:</Text>
        </View>
        <Text fontSize={14} style={styles.cardDetailTextStyle}>
          {property?.price} ({property?.priceCurrency})
        </Text>
      </View>
    </ScrollView>
  );
}
