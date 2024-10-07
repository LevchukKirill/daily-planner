const initialData: any = {
  tasks: {
    "task-1": {
      id: "task-1",
      data: {
        title:
          "task-1dasdasda dsadasdasasdsdasdas task-1dasdasda dsadasdasasdsdasdas task-1dasdasda dsadasdasasdsdasdas task-1dasdasda dsadasdasasdsdasdas task-1dasdasda dsadasdasasdsdasdas ",
      },
    },
    "task-2": { id: "task-2", data: { title: "task-2" } },
    "task-3": { id: "task-3", data: { title: "task-31312" } },
    "task-4": { id: "task-4", data: { title: "task-22" } },
    "task-5": { id: "task-5", data: { title: "task-412" } },
    "task-6": { id: "task-6", data: { title: "task-22" } },
    "task-7": { id: "task-7", data: { title: "task-12412" } },
    "task-8": { id: "task-8", data: { title: "task-v12" } },
    "task-9": { id: "task-9", data: { title: "task-782" } },
    "task-10": { id: "task-10", data: { title: "task-71" } },
    "task-11": { id: "task-11", data: { title: "task-v1678" } },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "TODO",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5", "task-11"],
    },
    "column-2": {
      id: "column-2",
      title: "TODO 1",
      taskIds: ["task-6", "task-7", "task-8", "task-9", "task-10"],
    },
    "column-3": {
      id: "column-3",
      title: "TODO 2",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
export default initialData;
