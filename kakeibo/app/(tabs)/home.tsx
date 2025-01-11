import { StyleSheet } from "react-native";

import { Layout, Button } from "@ui-kitten/components";
import {
  Radio,
  Toggle,
  CheckBox,
  Datepicker,
  Calendar,
  Text,
} from "@ui-kitten/components";

export default function HomeScreen() {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.container}>
        <Layout style={styles.layout} level="1">
          <Text>hello! </Text>
        </Layout>
        <Layout style={styles.layout} level="1">
          <Button>Button</Button>
        </Layout>
        <Layout style={styles.layout} level="2">
          <Radio checked>Radio</Radio>
        </Layout>
        <Layout style={styles.layout} level="4">
          <CheckBox checked>CheckBox</CheckBox>
        </Layout>
      </Layout>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Toggle checked>Toggle</Toggle>
        <Datepicker />
        <Calendar />
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
