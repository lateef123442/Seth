import type * as NotificationsType from "expo-notifications";
import { isExpoGo } from "./expoGo";

const stub = {
  setNotificationHandler: () => {},
    getPermissionsAsync: async () => ({ status: "denied" }),
      requestPermissionsAsync: async () => ({ status: "denied" }),
        scheduleNotificationAsync: async () => "",
          cancelScheduledNotificationAsync: async () => {},
            getAllScheduledNotificationsAsync: async () => [],
              getExpoPushTokenAsync: async () => ({ data: "" }),
                setNotificationChannelAsync: async () => null,
                  addNotificationResponseReceivedListener: () => ({ remove: () => {} }),
                    getLastNotificationResponseAsync: async () => null,
                      AndroidImportance: { DEFAULT: 3 },
                      } as unknown as typeof NotificationsType;

                      export const Notifications: typeof NotificationsType = isExpoGo ? stub : require("expo-notifications");
                      export type NotificationResponse = NotificationsType.NotificationResponse;