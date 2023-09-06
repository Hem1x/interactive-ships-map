import React from 'react';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';
import { IShip } from '../models/ship';
import { randomColor } from '../utils/randomColor';
interface ScheduleProps {
  data: IShip[];
}

// const marginTable = '&nbsp;&nbsp;&nbsp;';

// document.querySelector(
//   '#root > div > div.flex-1 > div > div > div._3eULf > div:nth-child(1) > div._3_ygE > div > div:nth-child(1)',
// )!.innerHTML = marginTable + 'Наименование';
// document.querySelector(
//   '#root > div > div.flex-1 > div > div > div._3eULf > div:nth-child(1) > div._3_ygE > div > div:nth-child(3)',
// )!.innerHTML = marginTable + 'Отплытие';
// document.querySelector(
//   '#root > div > div.flex-1 > div > div > div._3eULf > div:nth-child(1) > div._3_ygE > div > div:nth-child(5)',
// )!.innerHTML = marginTable + 'Прибытие';

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
