import { LogBox } from "react-native";
import { isExpoGo } from "./expoGo";

if (isExpoGo) LogBox.ignoreLogs(["expo-notifications: Android Push notifications", "expo-notifications: Push notifications"]);