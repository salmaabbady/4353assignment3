import eventService from '../backend/eventService';

describe('Event Service', () => {
  it('should add a new event', () => {
    const event = {
      eventName: 'Spice Harvesting',
      eventDescription: 'A large-scale spice harvesting event on Arrakis.',
      city: 'Dune City',
      state: 'CA',
      location: 'Spice Fields',
      requiredSkills: ['harvesting', 'teamwork'],
      urgency: 'high',
      eventDate: '2024-08-01',
    };
    const result = eventService.addEvent(event);
    expect(result).toHaveProperty('id');
    expect(result.eventName).toBe('Spice Harvesting');
  });

  it('should get all events', () => {
    const events = eventService.getEvents();
    expect(events.length).toBeGreaterThan(0);
  });
});
