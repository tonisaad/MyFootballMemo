export default class DataManager {
  static myInstance = null;
  userID = "";

  memories = [
    {
      userid: "user1",
      memoryid: 1,
      title: "Free Kick Goal",
      location: "Old Trafford",
      subtitle: "Scored on 23 March 2007",
      country: "England",
      image: require("../assets/ManuFreekick.webp"),
    },
    {
      userid: "user1",
      memoryid: 2,
      title: "Free Kick Goal",
      location: "Estadio Bernabeu",
      subtitle: "Scored on 18 December 2012",
      country: "Spain",
      image: require("../assets/freekickgoal2.jpg"),
    },
    {
      userid: "user1",
      memoryid: 3,
      title: "Bicycle Goal",
      location: "San Siro",
      subtitle: "Scored on 26 March 2015",
      country: "Italy",
      image: require("../assets/ronaldobicyclegoal.jpg"),
    },

    {
      userid: "user1",
      memoryid: 4,
      title: "Penalty Goal",
      location: "Camp Nou",
      subtitle: "Scored on 11 March 2019",
      country: "Spain",
      image: require("../assets/ronaldopenalty.jpg"),
    },

    {
      userid: "user1",
      memoryid: 5,
      title: "Win against PSG",
      location: "Parc De Prencis",
      subtitle: "Scored on 3 March 2014",
      country: "France",
      image: require("../assets/ronaldovpsg.jpg"),
    },

    {
      userid: "user2",
      memoryid: 1,
      title: "Free Kick Goal",
      location: "Estadio Bernabeu",
      subtitle: "Scored on 22 April 2004",
      country: "Spain",
      image: require("../assets/dbfreekickgoal.jpg"),
    },
  ];
  static getInstance() {
    if (DataManager.myInstance == null) {
      DataManager.myInstance = new DataManager();
    }
    return this.myInstance;
  }

  getUserID() {
    return this.userID;
  }

  setUserID(id) {
    this.userID = id;
  }

  getcntyMemories(cnty, id) {
    return this.memories.filter(
      (memory) => memory.country === cnty && memory.userid === id
    );
  }
  getMemories(id) {
    return this.memories.filter((memory) => memory.userid === id);
  }

  addMemory(memory) {
    this.memories.push(memory);
  }
}
