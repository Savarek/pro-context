const items = {
  state: {
    lists: [
      {
        inputShowed: false,
        outputShowed: false,
        checked: false,
        items: [
          { color: '#ffffff', value: 10, checked: false },
          { color: '#ffffff', value: 10, checked: false },
          { color: '#ffffff', value: 10, checked: false },
          { color: '#ffffff', value: 10, checked: false },
        ],
      },
      {
        inputShowed: false,
        outputShowed: false,
        checked: false,
        items: [
          { color: '#ffffff', value: 10, checked: false },
          { color: '#ffffff', value: 10, checked: false },
          { color: '#ffffff', value: 10, checked: false },
          { color: '#ffffff', value: 10, checked: false },
        ],
      },
      {
        inputShowed: false,
        outputShowed: false,
        checked: false,
        items: [
          { color: '#ffffff', value: 10, checked: false },
          { color: '#ffffff', value: 10, checked: false },
          { color: '#ffffff', value: 10, checked: false },
          { color: '#ffffff', value: 10, checked: false },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    items: (state) => state.items,
    lists: (state) => state.lists,
  },
}

export default items
