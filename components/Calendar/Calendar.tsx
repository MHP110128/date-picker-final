import Image from "next/image";
import CalendarIcon from "../../assets/svg/calendar.svg";

// interface
import { CalendarProps } from "./CalendarInterface";

const Calendar: React.FC<CalendarProps> = ({ value,inputClassName }) => {
  return (
    <div className="flex relative">
      <input
        id="date-picker-input"
        type="text"
        value={value}
        className={inputClassName}
      />

      <label
        htmlFor="date-picker-input"
        className="absolute right-0 bg-secondary300 h-full px-4 rounded-r-lg flex justify-center items-center"
      >
        <Image src={CalendarIcon} alt="Calendar Icon" />
      </label>
    </div>
  );
};

export default Calendar;
