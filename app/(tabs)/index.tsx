import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, Input, Button } from "tamagui";
import { fetchProperties } from "../../services/apis/Properties/PropertiesService";
import { TouchableOpacity, StyleSheet } from "react-native";
import DefaultImg from "../../assets/images/default.jpeg";
import { useNavigation } from "expo-router";
import { PropertyType } from "../../services/apis/Properties/types";
import { Filter, Building } from "@tamagui/lucide-icons";
import { SelectStatus } from "../components/StatusSelect/StatusSelect.component";

export default function TabOneScreen() {
  const navigation = useNavigation();
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [queryFilter, setQueryFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<number>(-1);

  useEffect(() => {
    fetchProperties(queryFilter, statusFilter).then((data) => {
      if (data?.length > 0) {
        setProperties(data);
      }
    });
  }, [queryFilter, statusFilter]);

  return (
    <ScrollView flex={1} contentContainerStyle={styles.containerStyle}>
      <Button
        fontSize={16}
        iconAfter={Filter}
        style={styles.filterButtonStyle}
        onPress={() => setOpenFilter(!openFilter)}
      >
        {openFilter ? "Close Filter" : "Open Filter"}
      </Button>
      {openFilter && (
        <View>
          <View>
            <Text style={styles.filterTitleStyle}>Address:</Text>
            <Input
              onChangeText={(val) => setQueryFilter(val)}
              value={queryFilter}
              size="$4"
              placeholder={`Address...`}
            />
          </View>

          <View style={styles.filterContainerStyle}>
            <Text style={styles.filterTitleStyle}>Status:</Text>
            <SelectStatus
              id="select-status"
              onValueChange={(val) => setStatusFilter(Number(val))}
            />
          </View>
        </View>
      )}

      {properties?.length
        ? properties.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigation.navigate(
                  "screens/PropertyDetailsScreen/PropertyDetailsScreen",
                  { id: item.id }
                );
              }}
              style={styles.cardStyle}
            >
              <Image
                style={styles.imageStyle}
                source={{
                  uri: item.image ? item.image : DefaultImg,
                }}
              />
              <Text fontSize={16} style={styles.cardTitleStyle}>
                <Building />
                {item.address}
              </Text>
            </TouchableOpacity>
          ))
        : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerStyle: { padding: 20 },
  filterButtonStyle: {
    backgroundColor: "#4793AF",
    marginBottom: 10,
    color: "#FFC470",
  },
  cardStyle: {
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "#FFC470",
    borderRadius: 10,
    alignItems: "center",
  },
  filterTitleStyle: {
    marginBottom: 10,
  },
  filterContainerStyle: { marginTop: 20 },
  imageStyle: { width: 100, height: 100 },
  cardTitleStyle: { marginLeft: 10, color: "#8B322C", width: "65%" },
});
