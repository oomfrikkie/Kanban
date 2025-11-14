import { useState } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Board() {
  const [tasks, setTasks] = useState([
    { id: "1", title: "Dummy Title 1", task: "This is a dummy task..." },
    { id: "2", title: "Dummy Title 2", task: "This is a dummy task..." },
    { id: "3", title: "Dummy Title 3", task: "This is a dummy task..." },
    { id: "4", title: "Dummy Title 4", task: "This is a dummy task..." },
  ]);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor)
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = tasks.findIndex((t) => t.id === active.id);
      const newIndex = tasks.findIndex((t) => t.id === over.id);

      setTasks((items) => arrayMove(items, oldIndex, newIndex));
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-row p-10 gap-5">

        {/* To Do Column */}
        <div className="flex-1 border border-black p-10 rounded-lg pt-5">
          <h1 className="text-lg mb-6 text-red-500">To Do</h1>

          <SortableContext items={tasks.map((t) => t.id)}>
            {tasks.map((item) => (
              <SortableTask key={item.id} item={item} />
            ))}
          </SortableContext>
        </div>

        {/* Other columns unchanged */}
        <div className="flex-1 border border-black p-10 rounded-lg pt-5">
          <h1 className="text-lg mb-6 text-blue-500">In Progress</h1>
        </div>

        <div className="flex-1 border border-black p-10 rounded-lg pt-5">
          <h1 className="text-lg mb-6 text-green-500">Done</h1>
        </div>

      </div>
    </DndContext>
  );
}

/* 🔥 INLINE SORTABLE COMPONENT (NO EXTRA FILE) */
function SortableTask({ item }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-5 mb-4 rounded-lg hover:border hover:border-black hover:shadow cursor-grab"
    >
      <h3>{item.title}</h3>
      <p>{item.task}</p>
    </div>
  );
}
