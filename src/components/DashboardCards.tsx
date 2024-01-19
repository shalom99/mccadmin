"use client";

import React, { FC, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdPeople } from "react-icons/md";
import { BsBox2 } from "react-icons/bs";
import { LuDollarSign } from "react-icons/lu";
import { BiStats } from "react-icons/bi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BarChart from "./BarChart";

type DashboardCardsProps = {};

const DashboardCards: FC<DashboardCardsProps> = ({}) => {
  return (
    <div className="w-full flex flex-col gap-y-10">
      <div id="cardsTop" className="w-full flex gap-x-2">
        <Card className="w-[25%]">
          <CardHeader>
            <CardTitle className="flex justify-between text-md">
              <p>Total Revenue</p>
              <LuDollarSign size={20} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">$00.00</p>
          </CardContent>
          <CardFooter>
            <p className="text-xs">+0% from last month</p>
          </CardFooter>
        </Card>

        <Card className="w-[25%]">
          <CardHeader>
            <CardTitle className="flex justify-between text-md">
              <p>Customers</p>
              <MdPeople size={20} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">0</p>
          </CardContent>
          <CardFooter>
            <p className="text-xs">+0% from last month</p>
          </CardFooter>
        </Card>
        <Card className="w-[25%]">
          <CardHeader>
            <CardTitle className="flex justify-between text-md">
              <p>Sales</p>
              <BsBox2 size={20} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">0</p>
          </CardContent>
          <CardFooter>
            <p className="text-xs">+0% from last month</p>
          </CardFooter>
        </Card>
        <Card className="w-[25%]">
          <CardHeader>
            <CardTitle className="flex justify-between text-md">
              <p>Active Now</p>
              <BiStats size={20} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>0</p>
          </CardContent>
          <CardFooter>
            <p className="text-xs">+0% from last month</p>
          </CardFooter>
        </Card>
      </div>
      <div id="cardsBottom" className="w-full flex gap-x-2">
        <Card className="w-[60%]">
          <CardHeader>
            <CardTitle className="flex text-md">
              <p>Overview</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart />
          </CardContent>
        </Card>

        <Card className="w-[40%]">
          <CardHeader>
            <CardTitle className="flex justify-between text-md">
              <p>Recent Sales</p>
            </CardTitle>

            <p>You made 0 sales this month.</p>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col font-bold">
                  <p>Name</p>
                  <p>sampleemail@gmail.com</p>
                </div>
              </div>

              <div>
                <p className="text-lg font-bold">+$00.00</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col font-bold">
                  <p>Name</p>
                  <p>sampleemail@gmail.com</p>
                </div>
              </div>

              <div>
                <p className="text-lg font-bold">+$00.00</p>
              </div>
            </div>

    
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardCards;
