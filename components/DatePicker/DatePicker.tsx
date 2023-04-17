import { Popover, Transition } from "@headlessui/react";
import Close from "../../assets/svg/close.svg";
import { Fragment } from "react";
import Image from "next/image";

import CalendarIcon from "../../assets/svg/calendar.svg";

// interface
import { CalendarProps } from "../Calendar/CalendarInterface";

const DatePicker: React.FC<CalendarProps> = ({ inputClassName }) => {
  return (
    <div className="fixed top-16 w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                  text-14 focus:outline-none`}
            >
              <div className="flex relative">
                <input
                  id="date-picker-input"
                  type="text"
                  className={inputClassName}
                />

                <label
                  htmlFor="date-picker-input"
                  className="absolute right-0 cursor-pointer bg-secondary300 h-full px-4 rounded-r-lg flex justify-center items-center"
                >
                  <Image src={CalendarIcon} alt="Calendar Icon" />
                </label>
              </div>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-0 z-10">
                <div className="overflow-hidden rounded-lg p-4 shadow-lg">
                  <div className="relative grid gap-8 bg-white">
                    <input type="date" />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default DatePicker;
