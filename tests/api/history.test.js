import handler from '../../pages/api/history/index';

describe('History API', () => {
  it('should get all history records', async () => {
    const req = { method: 'GET' };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  });

  it('should create a new history record', async () => {
    const req = {
      method: 'POST',
      body: {
        volunteerId: 1,
        eventId: 1,
        participationStatus: 'attended',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      participationStatus: 'attended',
    }));
  });

  it('should return 400 for invalid history data', async () => {
    const req = {
      method: 'POST',
      body: {
        volunteerId: 'invalid-id', // Invalid volunteer ID
        eventId: 1,
        participationStatus: '',
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

  it('should get all history records with increased timeout', async () => {
    const req = { method: 'GET' };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  }, 10000); // Increased timeout to 10 seconds

  it('should create a new history record with increased timeout', async () => {
    const req = {
      method: 'POST',
      body: {
        volunteerId: 1,
        eventId: 1,
        participationStatus: 'attended',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      participationStatus: 'attended',
    }));
  }, 10000); // Increased timeout to 10 seconds
});
