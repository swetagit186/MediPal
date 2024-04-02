// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const  BasicDateTimePicker = ({value , setValue } : {value : any , setValue : any}) =>{
    // const [value, setValue] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={['DateTimePicker']}> */}
        <DateTimePicker value={value} onChange={(newVal)=>{
            // console.log(newVal);
            setValue(newVal)}}  label="Select Date and Time" />
      {/* </DemoContainer> */}
    </LocalizationProvider>
  );
}

export default BasicDateTimePicker;