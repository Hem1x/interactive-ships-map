import React from 'react';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';
import { IShip } from '../models/ship';
import { randomColor } from '../utils/randomColor';
interface ScheduleProps {
  data: IShip[];
}

const Schedule: React.FC<ScheduleProps> = ({ data }) => {
  let tasks: Task[] = data.map((el: IShip) => ({
    start: new Date(el.route.from.time),
    end: new Date(el.route.to.time),
    name: el.name,
    id: el.id.toString(),
    type: 'task',
    progress: 100,
    isDisabled: true,
    styles: { progressColor: `${randomColor()}`, progressSelectedColor: '#ff9e0d' },
  }));

  return (
    <div className="max-w-[1600px] mr-auto ml-auto mt-10 px-5">
      <Gantt tasks={tasks} locale="RU-ru" viewMode={ViewMode.Day} />
    </div>
  );
};

export default Schedule;
