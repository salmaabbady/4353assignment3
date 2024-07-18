import userService from '../backend/userService';

describe('User Service', () => {
  it('should add a new user', () => {
    const user = {
      email: 'john.doe@example.com',
      fullName: 'John Doe',
      address1: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      zipCode: '62701',
      skills: ['communication', 'teamwork'],
    };
    const result = userService.addUser(user);
    expect(result).toHaveProperty('id');
    expect(result.email).toBe('john.doe@example.com');
  });

  it('should get all users', () => {
    const users = userService.getUsers();
    expect(users.length).toBeGreaterThan(0);
  });
});
