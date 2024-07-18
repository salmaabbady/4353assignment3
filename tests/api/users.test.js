import handler from '../../pages/api/users/index';

describe('User API', () => {
  it('should get all users', async () => {
    const req = { method: 'GET' };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  });

  it('should create a new user', async () => {
    const req = {
      method: 'POST',
      body: {
        email: 'lisan@dune.com',
        fullName: 'Lisan Al Gaib',
        address1: '123 Arrakis Desert',
        city: 'Dune City',
        state: 'CA',
        zipCode: '12345',
        skills: ['leadership', 'strategic thinking'],
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      email: 'lisan@dune.com',
    }));
  });

  it('should return 400 for invalid user data', async () => {
    const req = {
      method: 'POST',
      body: {
        email: 'invalid-email',
        fullName: 'Lisan Al Gaib',
        address1: '123 Arrakis Desert',
        city: 'Dune City',
        state: 'CA',
        zipCode: '1234', // Invalid zip code
        skills: 'not-an-array', // Invalid skills format
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
