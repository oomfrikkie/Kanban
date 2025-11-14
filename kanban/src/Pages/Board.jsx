import { useState } from "react";
import { Button, Dialog } from "@mui/material";

function Board() {
  const [open, setOpen] = useState(false);

  const [dummyTasks, setDummyTasks] = useState([
    { id: 1, title: "Dummy Title 1", task: "This is a dummy task..." },
    { id: 2, title: "Dummy Title 2", task: "This is a dummy task..." },
    { id: 3, title: "Dummy Title 3", task: "This is a dummy task..." },
    { id: 4, title: "Dummy Title 4", task: "This is a dummy task..." },
  ]);

  const [inProgress, setInProgress] = useState([]);

  const addToInProgress = (task) => {
    setInProgress((prev) => [...prev, task]);
    setDummyTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <>
      {/* WHOLE PAGE */}
      <div className="flex flex-col h-screen">

        {/* HEADER */}
        <div className="p-3 flex flex-col gap-2">
          <h1 className="font-bold text-2xl">User's Board</h1>

          <div>
              <Button
                className="!bg-white !text-gray-600 !rounded-md hover:!bg-gray-300"
                onClick={() => setOpen(true)}
              >
                Create Task
              </Button>
              <Button className="!bg-white !text-gray-600 !rounded-md hover:!bg-gray-300">Summary</Button>
          </div>
        </div>

        {/* BOARD AREA */}
        <div className="flex-1 flex flex-row gap-5 p-10 overflow-hidden">

          {/* TO DO */}
          <div className="flex-1 border border-black p-5 rounded-lg overflow-y-auto">
            <h1 className="text-lg mb-4 text-red-500">To Do</h1>

            {dummyTasks.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-lg hover:border hover:border-black hover:shadow mb-3"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mb-3">{item.task}</p>

                <div className="flex w-[75%] justify-between">
                  <Button
                    className="!text-xs !bg-yellow-200 !rounded-full hover:!bg-yellow-400"
                    onClick={() => addToInProgress(item)}
                  >
                    In Progress
                  </Button>

                  <Button className="!text-xs !bg-red-200 !rounded-full hover:!bg-red-400">
                    Done
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* IN PROGRESS */}
          <div className="flex-1 border border-black p-5 rounded-lg overflow-y-auto">
            <h1 className="text-lg mb-4 text-yellow-500">In Progress</h1>

            {inProgress.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-lg hover:border hover:border-black hover:shadow mb-3"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p>{item.task}</p>
              </div>
            ))}
          </div>

          {/* DONE */}
          <div className="flex-1 border border-black p-5 rounded-lg overflow-y-auto">
            <h1 className="text-lg mb-4 text-green-500">Done</h1>

            {/* Currently you reuse dummyTasks here, but we’ll fix Done logic later */}
            {dummyTasks.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-lg hover:border hover:border-black hover:shadow mb-3"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p>{item.task}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </>
  );
}

export default Board;
