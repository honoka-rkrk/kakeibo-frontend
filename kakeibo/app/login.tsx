import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Layout, Button } from "@ui-kitten/components";

export default function SignIn() {
  const router = useRouter();

  return (
    <Layout style={styles.container}>
      <Button onPress={() => router.push("/(tabs)")}>Tabに移動</Button>
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
