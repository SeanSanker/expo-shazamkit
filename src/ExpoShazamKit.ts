import { requireNativeModule } from "expo-modules-core";

export default requireNativeModule('ExpoShazamKit') || {
  isAvailable(): boolean {
    return false;
  },

  startListening() {},

  stopListening() {},

  addToShazamLibrary() {
    return { success: false };
  },

  addListener() {
    // Nothing to do; unsupported platform.
    return Promise.resolve();
  },

  removeListeners() {
    // Nothing to do; unsupported platform.
    return Promise.resolve();
  },
};
