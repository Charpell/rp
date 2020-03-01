import React, { useState, useEffect } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import { Block } from "./components";
import Navigation from "./navigation";

import AuthState from "./contex/auth/authState";
import { VendorState } from "./contex";
console.disableYellowBox = true;

export default function App(props) {
  useEffect(() => {
    StatusBar.setBackgroundColor('green', true)
  }, [])

  return (
      <View style={{ flex: 1 }}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AuthState>
          <VendorState>
            <Navigation />
          </VendorState>
        </AuthState>
      </View>
    );
}
