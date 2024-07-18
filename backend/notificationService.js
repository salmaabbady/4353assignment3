const notifications = [];

const notificationService = {
  getNotifications() {
    return notifications;
  },

  addNotification(notification) {
    notification.id = notifications.length + 1;
    notifications.push(notification);
    return notification;
  },
};

export default notificationService;
