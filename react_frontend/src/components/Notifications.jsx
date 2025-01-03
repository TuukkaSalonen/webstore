import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAuthNotification,
  clearCartNotification,
  clearOrderNotification,
  clearUserNotification,
  clearProductNotification,
} from "../redux/actionCreators/notificationActions";
import { dataTestIds } from "../tests/constants/components";

export const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notification);

  useEffect(() => {
    for (const key in notifications) {
      const notification = notifications[key];
      if (notification.message) {
        const timeoutId = setTimeout(() => {
          if (key === "auth") {
            dispatch(clearAuthNotification());
          } else if (key === "cart") {
            dispatch(clearCartNotification());
          } else if (key === "order") {
            dispatch(clearOrderNotification());
          } else if (key === "user") {
            dispatch(clearUserNotification());
          } else if (key === "product") {
            dispatch(clearProductNotification());
          }
        }, 5000);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [dispatch, notifications]);

  const notificationIdGenerator = (notification, notificationType) => {
    if (notification.error === true) {
      return dataTestIds.notificationId.error(notificationType);
    } else if (notification.error === false) {
      return dataTestIds.notificationId.success(notificationType);
    } else {
      return dataTestIds.notificationId.loading(notificationType);
    }
  };

  const notificationColor = (notification) => {
    if (notification.error === true) {
      return { backgroundColor: "red" };
    } else if (notification.error === false) {
      return { backgroundColor: "green" };
    } else {
      return { backgroundColor: "cyan" };
    }
  };

  if (
    !notifications ||
    Object.keys(notifications).every((key) => !notifications[key].message)
  ) {
    return (
      <div data-testid={dataTestIds.containerId.empty}>
        <p>No new notifications</p>
      </div>
    );
  }

  return (
    <div data-testid={dataTestIds.containerId.notification}>
      {Object.keys(notifications).map((key) => {
        const notification = notifications[key];
        if (notification.message) {
          const notificationId = notificationIdGenerator(notification, key);
          return (
            <div
              key={key}
              style={notificationColor(notification)}
              data-testid={notificationId}
            >
              {notification.message}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
