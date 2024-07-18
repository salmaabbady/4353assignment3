import matchingService from '../backend/matchingService';

describe('Matching Service', () => {
  it('should match a volunteer to an event', () => {
    const result = matchingService.matchVolunteer(1, 1);
    expect(result).toHaveProperty('message', 'Volunteer matched successfully');
  });
});
