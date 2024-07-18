import notificationService from '../backend/notificationService';

describe('Notification Service', () => {
  it('should add a new notification', () => {
    const notification = {
      volunteerId: 1,
      message: 'You have been assigned to the Spice Harvesting event',
    };
    const result = notificationService.addNotification(notification);
    expect(result).toHaveProperty('id');
    expect(result.message).toBe('You have been assigned to the Spice Harvesting event');
  });

  it('should get all notifications', () => {
    const notifications = notificationService.getNotifications();
    expect(notifications.length).toBeGreaterThan(0);
  });
});
