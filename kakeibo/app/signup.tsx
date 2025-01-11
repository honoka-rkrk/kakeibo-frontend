import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Button } from "@ui-kitten/components";
import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();
  return (
    <Layout style={styles.container}>
      <Button onPress={() => router.push("/setting")}>新規登録</Button>
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
