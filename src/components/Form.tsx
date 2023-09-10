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

interface FormProps {
  setOpen: (value: boolean) => void;
}

const Form: React.FC<FormProps> = ({ setOpen }) => {
  const [postData, setPostData] = useState<IRequest>();

  const handleChange = (event: SelectChangeEvent) => {
    if (postData) {
      setPostData({ ...postData, led_class: event.target.value as string });
    }
  };

  return (
    <div
      className="absolute w-screen h-screen bg-black z-50 bg-opacity-70"
      onClick={() => setOpen(false)}>
      <div
        className="relative w-[400px] bg-white ml-auto mr-auto mt-20 py-10 px-7 rounded-xl"
        onClick={(e) => e.stopPropagation()}>
        <div
          className="absolute top-1 right-3 cursor-pointer"
          onClick={() => setOpen(false)}>
          &times;
        </div>
        <form className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl text-center">Создание заявки</h1>
          <TextField id="outlined-basic" label="Наименование" variant="outlined" />
          <TextField type="number" id="outlined-basic" label="IMO" variant="outlined" />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Ледовый класс</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={postData?.led_class}
              label="Ледовый класс"
              onChange={handleChange}>
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
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Пункт назначения</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={postData?.led_class}
              label="Пункт назначения"
              onChange={handleChange}>
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
              value={postData?.led_class}
              label="Пункт окончания"
              onChange={handleChange}>
              <MenuItem value={'1'}>Сабетта 1</MenuItem>
              <MenuItem value={'3'}>Сабетта 2</MenuItem>
              <MenuItem value={'4'}>Саббета 3</MenuItem>
              <MenuItem value={'13'}>точка в Баренцевом море</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}>
            <DatePicker label="Дата начала" />
            <DatePicker label="Дата окончания" />
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
