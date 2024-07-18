import historyService from '../backend/historyService';

describe('History Service', () => {
  it('should add a new history record', () => {
    const record = {
      volunteerId: 1,
      eventId: 1,
      participationStatus: 'attended',
    };
    const result = historyService.addHistory(record);
    expect(result).toHaveProperty('id');
    expect(result.participationStatus).toBe('attended');
  });

  it('should get all history records', () => {
    const history = historyService.getHistory();
    expect(history.length).toBeGreaterThan(0);
  });
});
