const initialTimeData: any = {
  tasks: {
    "sto-1": {
      id: "sto-1",
      data: {
        time: {
          start: "8:30",
          end: "8:50",
          interval: 20,
        },
        title: "Подъем",
        description: "",
      },
    },
    "sto-2": {
      id: "sto-2",
      data: {
        time: {
          start: "8:50",
          end: "9:20",
          interval: 30,
        },
        title: "Завтрак",
        description: "",
      },
    },
    "sto-3": {
      id: "sto-3",
      data: {
        time: {
          start: "9:20",
          end: "10:00",
          interval: 40,
        },
        title: "Сборы",
        description: "",
      },
    },
    "sto-4": {
      id: "sto-4",
      data: {
        time: {
          start: "10:00",
          end: "11:00",
          interval: 60,
        },
        title: "Дорога до ВУЗ'а",
        description: "",
      },
    },
    "sto-5": {
      id: "sto-5",
      data: {
        time: {
          start: "11:00",
          end: "15:30",
          interval: 270,
        },
        title: "Пары",
        description: "",
      },
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "TODO",
      taskIds: ["sto-1", "sto-2", "sto-3", "sto-4", "sto-5"],
    },
  },
  columnOrder: ["column-1"],
};
export default initialTimeData;
