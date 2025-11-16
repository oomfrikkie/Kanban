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

  const addToDo = (task) => {
    setDummyTasks((prev) => [...prev, task]);
    setInProgress((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <>
    <div className="flex flex-col gap-4">
      <div className="mt-2">
        <h1 className="text-2xl">Users Board</h1>
      </div>

      <div>
        <Button onClick={() => setOpen(true)} className="!bg-white !text-black hover:!bg-gray-400">Create Task</Button>
      </div>
    </div>
      {/* BOARD AREA */}
<div className="flex-1 flex flex-row gap-5 p-10 overflow-hidden">

  {/* TO DO */}
 <div className="flex-1 rounded-lg border border-black overflow-hidden flex flex-col h-[80vh]">

    {/* STATIC TOP AREA */}
    <div className="bg-red-400 p-5">
      <h1 className="text-lg text-black">To Do</h1>
    </div>

    {/* SCROLLABLE TASK AREA */}
    <div className="flex-1 overflow-y-auto p-5 bg-white">
      {dummyTasks.map((item) => (
        <div
          key={item.id}
          className="p-5 rounded-lg hover:border hover:border-black hover:shadow mb-3"
        >
          <h3 className="font-semibold">{item.title}</h3>
          <p className="mb-3">{item.task}</p>

          <div className="flex w-[75%] justify-between">
            <Button
              className="!text-xs !bg-yellow-200 !text-black !rounded-full hover:!bg-yellow-400"
              onClick={() => addToInProgress(item)}
            >
              In Progress
            </Button>

            <Button className="!text-xs !bg-red-200 !text-black !rounded-full hover:!bg-red-400">
              Done
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* IN PROGRESS */}
  <div className="flex-1 rounded-lg border border-black overflow-hidden flex flex-col h-[80vh]">

    {/* STATIC TOP AREA */}
    <div className="bg-yellow-400 p-5">
      <h1 className="text-lg text-black">In Progress</h1>
    </div>

    {/* SCROLLABLE TASK AREA */}
    <div className="flex-1 overflow-y-auto p-5 bg-white">
      {inProgress.map((item) => (
        <div
          key={item.id}
          className="p-5 rounded-lg hover:border hover:border-black hover:shadow mb-3"
        >
          <h3 className="font-semibold">{item.title}</h3>
          <p>{item.task}</p>
          <div className="flex w-[75%] justify-between">
            <Button
              className="!text-xs !bg-yellow-200 !text-black !rounded-full hover:!bg-yellow-400"
              onClick={() => addToDo(item)}
            >
              To Do
            </Button>

            <Button className="!text-xs !bg-red-200 !text-black !rounded-full hover:!bg-red-400">
              Done
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* DONE */}
  <div className="flex-1 rounded-lg border border-black overflow-hidden flex flex-col">
    {/* STATIC TOP AREA */}
    <div className="bg-green-400 p-5">
      <h1 className="text-lg text-black">Done</h1>
    </div>

    {/* SCROLLABLE TASK AREA */}
    <div className="flex-1 overflow-y-auto p-5 bg-white">
      {dummyTasks.map((item) => (
        <div
          key={item.id}
          className="p-5 rounded-lg hover:border hover:border-black hover:shadow mb-3"
        >
          <h3 className="font-semibold">{item.title}</h3>
          <p>{item.task}</p>
          <div className="flex w-[75%] justify-between">
            <Button
              className="!text-xs !bg-yellow-200 !text-black !rounded-full hover:!bg-yellow-400"
              onClick={() => addToInProgress(item)}
            >
              In Progress
            </Button>

            <Button className="!text-xs !bg-red-200 !text-black !rounded-full hover:!bg-red-400">
              Done
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>

</div>

    </>
  );
}

export default Board;
