import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ruRU } from '@mui/x-date-pickers/locales';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { IRequest } from '../models/shipApi';
import { getValidData } from '../utils/getDate';
import { usePostAddRequestMutation } from '../store/api/api';

interface FormProps {
  setOpen: (value: boolean) => void;
}

const Form: React.FC<FormProps> = ({ setOpen }) => {
  const [postData, setPostData] = useState<IRequest>({
    name: '',
    imo: 0,
    led_class: '',
    speed: 0,

    date_begin: '',
    point_begin: '',

    date_end: '',
    point_end: '',
  });
  const [addRequest] = usePostAddRequestMutation();

  function covertDate(date: string) {
    const correctDate = new Date(date);
    const day = getValidData(correctDate.getDate());
    const month = getValidData(correctDate.getMonth());
    const year = correctDate.getFullYear().toString().slice(2);
    const hour = getValidData(correctDate.getHours());
    const minute = getValidData(correctDate.getMinutes());
    return `${day}.${month}.${year} ${hour}:${minute}`;
  }

  const handleChangeLedClass = (event: SelectChangeEvent) => {
    setPostData({ ...postData, led_class: event.target.value as string });
  };

  const handleChangePointBegin = (event: SelectChangeEvent) => {
    setPostData({ ...postData, point_begin: event.target.value as string });
  };

  const handleChangePointEnd = (event: SelectChangeEvent) => {
    setPostData({ ...postData, point_end: event.target.value as string });
  };

  const handleDateChangeDateBegin = (newDate: string | null) => {
    if (newDate) {
      setPostData({ ...postData, date_begin: covertDate(newDate) });
    }
  };

  const handleDateChangeDateEnd = (newDate: string | null) => {
    if (newDate) {
      setPostData({ ...postData, date_end: covertDate(newDate) });
    }
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postData.speed >= 10 && postData.speed <= 20) {
      if (
        postData.date_begin.split(' ')[0].split('.')[1] === '01' &&
        postData.date_begin.split(' ')[0].split('.')[2] === '21'
      ) {
        if (
          Number(postData.date_end.split(' ')[0].split('.')[0]) -
            Number(postData.date_begin.split(' ')[0].split('.')[0]) >=
          4
        ) {
          await addRequest(postData).unwrap();
        }
      }
    }
    console.log(postData);
  };

  return (
    <div
      className="absolute w-screen h-screen bg-black z-50 bg-opacity-70"
      onClick={() => setOpen(false)}>
      <div
        className="relative w-[400px] bg-white ml-auto mr-auto mt-20 py-10 px-7 rounded-xl overflow-auto"
        onClick={(e) => e.stopPropagation()}>
        <div
          className="absolute top-1 right-3 cursor-pointer"
          onClick={() => setOpen(false)}>
          &times;
        </div>
        <form className="flex flex-col gap-4" onSubmit={onSubmitForm}>
          <h1 className="font-bold text-2xl text-center">Создание заявки</h1>
          <TextField
            id="outlined-basic"
            label="Наименование"
            variant="outlined"
            value={postData.name}
            onChange={(e) => setPostData({ ...postData, name: e.target.value })}
          />
          <TextField
            type="number"
            id="outlined-basic"
            label="IMO"
            variant="outlined"
            value={postData.imo}
            onChange={(e) => setPostData({ ...postData, imo: Number(e.target.value) })}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Ледовый класс</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={postData.led_class}
              label="Ледовый класс"
              onChange={handleChangeLedClass}>
              <MenuItem value={'No ice class'}>No ice class</MenuItem>
              <MenuItem value={'Ice1'}>Ice1</MenuItem>
              <MenuItem value={'Ice2'}>Ice2</MenuItem>
              <MenuItem value={'Ice3'}>Ice3</MenuItem>
              <MenuItem value={'Аrс4'}>Аrс4</MenuItem>
              <MenuItem value={'Аrс5'}>Аrс5</MenuItem>
              <MenuItem value={'Аrс6'}>Аrс6</MenuItem>
              <MenuItem value={'Аrс7'}>Аrс7</MenuItem>
              <MenuItem value={'Аrс8'}>Аrс8</MenuItem>
              <MenuItem value={'Аrс9'}>Аrс9</MenuItem>
            </Select>
          </FormControl>
          <TextField
            type="number"
            id="outlined-basic"
            label="Скорость"
            variant="outlined"
            value={postData.speed}
            onChange={(e) => setPostData({ ...postData, speed: Number(e.target.value) })}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Пункт начала</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={postData.point_begin}
              label="Пункт начала"
              onChange={handleChangePointBegin}>
              <MenuItem value={'1'}>Сабетта 1</MenuItem>
              <MenuItem value={'3'}>Сабетта 2</MenuItem>
              <MenuItem value={'4'}>Саббета 3</MenuItem>
              <MenuItem value={'13'}>точка в Баренцевом море</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Пункт окончания</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={postData.point_end}
              label="Пункт окончания"
              onChange={handleChangePointEnd}>
              <MenuItem value={'1'}>Сабетта 1</MenuItem>
              <MenuItem value={'3'}>Сабетта 2</MenuItem>
              <MenuItem value={'4'}>Саббета 3</MenuItem>
              <MenuItem value={'13'}>точка в Баренцевом море</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}>
            <DatePicker
              label="Дата начала"
              value={postData.date_begin}
              onChange={(newDate) => handleDateChangeDateBegin(newDate)}
            />
            <DatePicker
              label="Дата окончания"
              value={postData.date_end}
              onChange={(newDate) => handleDateChangeDateEnd(newDate)}
            />
          </LocalizationProvider>
          <button className="w-full py-4 bg-black text-white rounded-md  hover:bg-gray-700 transition-all duration-200">
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
