```
entities: {
  users: {
    12: {
      id: 12,
      username: "Jack Lewis",
      imgUrl: "http://fuzzypixel.com/static/photo/1x/001.jpg"
    },
    17: {
      id: 17,
      username: "John Tolkien",
      imgUrl: "http://fuzzypixel.com/static/photo/1x/003.jpg"
    }
  },
  boards: {
    1: {
      id: 1,
      title: "Inklings reunion",
      lists: [1, 2, 3],
      imgUrl: null,
      backgroundColor: "green"
    },
    2: {
      id: 2,
      title: "Dawn Treader plot",
      lists: [4, 5],
      imgUrl: "http://fuzzypixel.com/static/photo/1x/ocean.jpg",
      backgroundColor: null
    },
  },
  lists: {
    1: {
      id: 1,
      title: "Week before",
      cards: [5, 2, 6]
    },
    2: {
      id: 2,
      title: "Day of",
      cards: [1, 3, 4]
    }    
  },
  cards: {
    1: {
      id: 1,
      title: "Reserve room at Magdalene",
      description: "Find a less stuffy room with a fireplace",
      dueDate: {07/03/1951 09:00},
      labels: [3]
    },
    2: {
      id: 2,
      title: "Learn a new Nordic language",
      description: "Compose a sonnet for discussion",
      dueDate: {07/10/1951 13:00},
      labels: [4, 5]
    }
  },
  boardMemberships: {
    1: {
      userId: 12,
      boardId: 1
    },
    2: {
      userId: 12,
      boardId: 2
    },
    3: {
      userId: 17,
      boardId: 1
    }
  },
  cardMemberships: {
    1: {
      userId: 12,
      cardId: 12
    },
    2: {
      userId: 12,
      cardId: 23
    },
    3: {
      userId: 12,
      cardId: 5
    },
    4: {
      userId: 17,
      cardId: 1
    },
    5: {
      userId: 17,
      cardId: 22
    },
    6: {
      userId: 17,
      cardId: 15
    },
  },
  labels: {
    3: {
      id: 3,
      description: "Dreadfully boring"
      color: "grey"
    },
    4: {
      id: 4,
      description: "Easy"
      color: "light-green"
    }
  }
},
ui: {
  loading: true/false
},
errors: {
  signup: ["Password must be at least six characters"],
  login: ["Incorrect username/password combination"],
  boardForm: ["Board title cannot be blank"],
  listForm: ["List title cannot be blank"],
  cardForm: ["Card title cannot be blank"]
},
session: {
  currentUserId: 12
}
```
