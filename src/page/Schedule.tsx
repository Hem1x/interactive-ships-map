import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';
import { IRequest } from '../models/shipApi';
import { getCorrectFormatDate, getCorrectFormatDateWithTime } from '../utils/getDate';
import { useAppDispatch } from '../store/hooks';
import { setSelectedRequest } from '../store/filters/filtersSlice';
import ScheduleDrawer from '../components/Drawer';
import { useGetRequestsQuery } from '../store/api/api';

interface ScheduleProps {
  setOpen: (value: boolean) => void;
}

const Schedule: React.FC<ScheduleProps> = ({ setOpen }) => {
  const dispatch = useAppDispatch();
  const { data: requests } = useGetRequestsQuery(null);

  if (!requests) {
    return (
      <div className="w-full flex justify-center mt-56">
        <CircularProgress />
      </div>
    );
  }

  let tasks: Task[] = requests.map((el: IRequest, index: number) => ({
    start: new Date(getCorrectFormatDate(el.date_begin)),
    end: new Date(getCorrectFormatDate(el.date_end)),
    name: el.name,
    id: index.toString(),
    type: 'task',
    progress: 100,
    isDisabled: false,
    styles: { progressColor: '#000', progressSelectedColor: '#ff9e0d' },
  }));

  console.log(tasks);

  const onSelectHandler = (e: Task) => {
    try {
      let neededRequests = requests.find((el: IRequest) => {
        if (el.date_begin) {
          return (
            getCorrectFormatDateWithTime(el.date_begin).getTime() === e.start.getTime()
          );
        }
        return false;
      });
      dispatch(setSelectedRequest(neededRequests));
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <>
      <div className="p-10">
        <div id="ganttchart" className="w-[75vw] mt-5 overflow-auto">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-4xl mb-5">Расписание</h1>
            <button
              className="bg-black rounded-md py-1 px-3 text-white"
              onClick={() => setOpen(true)}>
              Добавить заявку
            </button>
          </div>

          <Gantt
            tasks={tasks}
            locale="rus"
            viewMode={ViewMode.Day}
            onSelect={(e) => onSelectHandler(e)}
          />
        </div>
        <ScheduleDrawer />
      </div>
    </>
  );
};

export default Schedule;
