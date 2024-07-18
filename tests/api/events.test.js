import handler from '../../pages/api/events/index';

describe('Event API', () => {
  it('should get all events', async () => {
    const req = { method: 'GET' };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  });

  it('should create a new event', async () => {
    const req = {
      method: 'POST',
      body: {
        eventName: 'Spice Harvesting',
        eventDescription: 'A large-scale spice harvesting event on Arrakis.',
        city: 'Dune City',
        state: 'CA',
        location: 'Spice Fields',
        requiredSkills: ['harvesting', 'teamwork'],
        urgency: 'high',
        eventDate: '2024-08-01',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      eventName: 'Spice Harvesting',
    }));
  });

  it('should return 400 for invalid event data', async () => {
    const req = {
      method: 'POST',
      body: {
        eventName: '', // Invalid event name
        eventDescription: 'A large-scale spice harvesting event on Arrakis.',
        city: 'Dune City',
        state: 'CA',
        location: 'Spice Fields',
        requiredSkills: ['harvesting', 'teamwork'],
        urgency: 'high',
        eventDate: 'invalid-date', // Invalid event date
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      errors: expect.any(Array),
    }));
  });
});
