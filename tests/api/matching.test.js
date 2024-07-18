import handler from '../../pages/api/matching/index';

describe('Matching API', () => {
  it('should match a volunteer to an event', async () => {
    const req = {
      method: 'POST',
      body: {
        volunteerId: 1,
        eventId: 1,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      message: 'Volunteer matched successfully',
    }));
  });

  it('should return 400 for invalid matching data', async () => {
    const req = {
      method: 'POST',
      body: {
        volunteerId: 'invalid-id', // Invalid volunteer ID
        eventId: 1,
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

  it('should match a volunteer to an event with increased timeout', async () => {
    const req = {
      method: 'POST',
      body: {
        volunteerId: 1,
        eventId: 1,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      message: 'Volunteer matched successfully',
    }));
  }, 10000); // Increased timeout to 10 seconds
});
