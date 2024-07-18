import authService from '../backend/authService';

describe('Auth Service', () => {
  it('should register a new user', () => {
    const result = authService.register('test@example.com', 'password123');
    expect(result).toHaveProperty('message', 'User registered successfully');
  });

  it('should not register an existing user', () => {
    authService.register('test@example.com', 'password123');
    const result = authService.register('test@example.com', 'password123');
    expect(result).toHaveProperty('error', 'User already exists');
  });

  it('should login an existing user', () => {
    authService.register('test@example.com', 'password123');
    const result = authService.login('test@example.com', 'password123');
    expect(result).toHaveProperty('token');
  });

  it('should not login with wrong credentials', () => {
    const result = authService.login('test@example.com', 'wrongpassword');
    expect(result).toHaveProperty('error', 'Invalid email or password');
  });
});
