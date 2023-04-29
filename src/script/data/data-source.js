import makeups from "./makeup.js";

class DataSource {
  static searchMakeup(keyword) {
    return new Promise((resolve, reject) => {
      const filteredMakeups = makeups.filter(makeup => makeup.name.toUpperCase().includes(keyword.toUpperCase()));
      
      if (filteredMakeups.length) {
        resolve(filteredMakeups);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
};
export default DataSource;