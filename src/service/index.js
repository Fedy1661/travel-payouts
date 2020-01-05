import data from './index.json'
export default class {
  getBonuses = () => {
    return data.bonuses;
  }
  getBalance = () => {
    return data.header.balance;
  }
  getNextPayout = () => {
    return data.header.next_payout;
  }
}