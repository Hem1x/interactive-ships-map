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
    styles: { progressColor: el.color, progressSelectedColor: '#ff9e0d' },
  }));

  return (
    <div className="max-w-[1600px] mr-auto ml-auto mt-10 px-5">
      {data.length !== 0 && (
        <Gantt tasks={tasks} locale="rus" viewMode={ViewMode.Day} listCellWidth="" />
      )}
    </div>
  );
};

export default Schedule;
