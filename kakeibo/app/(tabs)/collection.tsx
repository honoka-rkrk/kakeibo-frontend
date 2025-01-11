import React from "react";
import { useRouter } from "expo-router";
import { StyleSheet, FlatList, Image, View, Dimensions } from "react-native";
import { Card, Layout, Text, Icon, Button } from "@ui-kitten/components";

// サンプルデータ
const photos = [
  {
    id: "1",
    title: "Photo 1",
    uri: "https://placehold.jp/150x150.png",
  },
  { id: "2", title: "Photo 2", uri: "https://placehold.jp/150x150.png" },
  { id: "3", title: "Photo 3", uri: "https://placehold.jp/150x150.png" },
  { id: "4", title: "Photo 4", uri: "https://placehold.jp/150x150.png" },
];

const { width } = Dimensions.get("window");

const PhotoCard = ({ title, uri }: { title: string; uri: string }) => (
  <Card style={styles.card}>
    <Image source={{ uri }} style={styles.image} />
    <Text style={styles.text}>{title}</Text>
  </Card>
);

const PhotoListScreen = () => {
  const router = useRouter();
  const handleAddPhoto = () => {
    // 写真追加処理をここに記述
    router.push("/registerPhoto");
  };
  return (
    <Layout style={styles.container}>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <PhotoCard title={item.title} uri={item.uri} />
        )}
        contentContainerStyle={styles.list}
      />
      <Button
        style={styles.fab}
        appearance="filled"
        accessoryLeft={<Icon name="plus-outline" />}
        onPress={handleAddPhoto}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  list: {
    justifyContent: "center",
  },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: "hidden",
    width: (width - 32) / 2, // 2列で表示するための幅計算
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  text: {
    marginTop: 8,
    textAlign: "center",
  },
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
    borderRadius: 50,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PhotoListScreen;
