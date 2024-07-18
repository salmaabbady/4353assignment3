const history = [];

const historyService = {
  getHistory() {
    return history;
  },

  addHistory(record) {
    record.id = history.length + 1;
    history.push(record);
    return record;
  },
};

export default historyService;
