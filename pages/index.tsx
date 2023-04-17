import DatePicker from "@/components/Calendar/Calendar";
import Calendar from "@/components/DatePicker/DatePicker";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(new Date());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <DatePicker inputClassName="w-72 h-12 border-1 border-primary outline-none rounded-lg pl-2" /> */}
      <Calendar
        value={value}
        inputClassName="w-72 h-12 border-1 border-primary outline-none rounded-lg pl-2"
      />
    </main>
  );
}
