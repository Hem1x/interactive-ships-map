import React, { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import { useDebounce } from '../utils/debounce';
import { useAppDispatch } from '../store/hooks';
import { setSelectedDate } from '../store/filters/filtersSlice';

const SliderBar = () => {
  const dispatch = useAppDispatch();

  const [day, setDay] = useState(new Date().getDate());
  const [currentMonth, setCurrentMonth] = useState(1);
  const [currentYear, setCurrentYear] = useState(2021);
  const debounced = useDebounce(day, 500);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setDay(newValue as number);
  };

  const selectedDate = new Date(2021, currentMonth - 1, day, 12);
  const daysInMonth = new Date(2021, currentMonth, 0).getDate();

  useEffect(() => {
    dispatch(setSelectedDate(selectedDate.toString()));
  }, [debounced]);

  const nextHandler = () => {
    if (currentMonth === 12) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(1);
    } else {
      setCurrentMonth(currentMonth + 1);
      setDay(1);
    }
  };

  const prevHandler = () => {
    if (currentMonth === 1) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(12);
    } else {
      setCurrentMonth(currentMonth - 1);
      setDay(1);
    }
  };

  return (
    <div className="absolute bottom-0 w-full py-3 px-5 bg-white">
      <div className="flex justify-between items-center">
        <button
          className="py-2 px-4 bg-black rounded-md text-white hover:bg-gray-800 transition-all duration-150"
          onClick={prevHandler}>
          Прошлый месяц
        </button>
        <h1 className="text-center">
          {day} {selectedDate.toLocaleString('RU-ru', { month: 'short' })} {currentYear}{' '}
          12:00
        </h1>
        <button
          className="py-2 px-4 bg-black rounded-md text-white hover:bg-gray-800 transition-all duration-150"
          onClick={nextHandler}>
          Следующий месяц
        </button>
      </div>
      <Slider max={daysInMonth} min={1} value={day} onChange={handleChange} />
    </div>
  );
};

export default SliderBar;
