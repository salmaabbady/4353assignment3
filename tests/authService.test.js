import authService from '../backend/authService';

describe('Auth Service', () => {
  it('should register a new user', () => {
    const result = authService.register('lisan@dune.com', 'secretpassword');
    expect(result).toHaveProperty('message', 'User registered successfully');
  });

  it('should not register an existing user', () => {
    authService.register('lisan@dune.com', 'secretpassword');
    const result = authService.register('lisan@dune.com', 'secretpassword');
    expect(result).toHaveProperty('error', 'User already exists');
  });

  it('should login an existing user', () => {
    authService.register('lisan@dune.com', 'secretpassword');
    const result = authService.login('lisan@dune.com', 'secretpassword');
    expect(result).toHaveProperty('token');
  });

  it('should not login with wrong credentials', () => {
    const result = authService.login('lisan@dune.com', 'wrongpassword');
    expect(result).toHaveProperty('error', 'Invalid email or password');
  });
});
