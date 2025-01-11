import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Layout, Button } from "@ui-kitten/components";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <Layout style={styles.container}>
      <Layout style={styles.layout} level="1">
        <Button onPress={() => router.push("/login")}>ログイン</Button>
      </Layout>
      <Layout style={styles.layout} level="1">
        <Button onPress={() => router.push("/signup")}>新規登録</Button>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
