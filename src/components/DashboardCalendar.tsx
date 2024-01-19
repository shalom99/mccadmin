"use client";

import React, { FC, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "./ui/calendar";
import {addDays, format } from "date-fns";
import { DateRange } from 'react-day-picker';

type ProfileAvatarProps = {};

const pastMonth = new Date(2023, 12, 1);

const DashboardCalendar: FC<ProfileAvatarProps> = ({}) => {


  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4)
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let CalendarFooter = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      CalendarFooter = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      CalendarFooter = (
        <p>
          {format(range.from, 'PPP')} – {format(range.to, 'PPP')}
        </p>
      );
    }
  }

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex">
          {CalendarFooter}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <div className="flex gap-x-2">
          <Calendar
            numberOfMonths={2}
             fromYear={2024}
             toYear={2024}
            mode="range"
            defaultMonth={pastMonth}
            selected={range}
            onSelect={setRange}
            className="rounded-md border"
            showOutsideDays
           
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DashboardCalendar;
