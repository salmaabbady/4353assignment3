import userService from '../backend/userService';

describe('User Service', () => {
  it('should add a new user', () => {
    const user = {
      email: 'lisan@dune.com',
      fullName: 'Lisan Al Gaib',
      address1: '123 Arrakis Desert',
      city: 'Dune City',
      state: 'CA',
      zipCode: '12345',
      skills: ['leadership', 'strategic thinking'],
    };
    const result = userService.addUser(user);
    expect(result).toHaveProperty('id');
    expect(result.email).toBe('lisan@dune.com');
  });

  it('should get all users', () => {
    const users = userService.getUsers();
    expect(users.length).toBeGreaterThan(0);
  });
});
