import React, { Suspense } from "react";
import { StatusBar } from "expo-status-bar";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { StyleSheet, Text, View } from "react-native";

import { ScreenLoader } from "./components";

import { environment } from "./constants";

const App = () => {
  return (
    <RelayEnvironmentProvider {...{ environment }}>
      <Suspense fallback={<ScreenLoader />}>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app test!</Text>
          <StatusBar style='auto' />
        </View>
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
