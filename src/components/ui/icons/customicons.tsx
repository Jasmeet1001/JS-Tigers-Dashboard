import React from "react";

import { File } from "lucide-react";
import { Ship } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { MonitorCheck } from "lucide-react";
import { Bell } from "lucide-react";
import { LayoutList } from "lucide-react";
import { ChartPie } from "lucide-react";
import { Ban } from "lucide-react";
import { Plane } from "lucide-react";
import { Truck } from "lucide-react";
import { Download } from "lucide-react";

const DownloadIcon = () => {
  return <Download size={20}/>;
};

const PlaneIcon = () => {
  return <Plane size={20} />;
};

const ShipIcon = () => {
  return <Ship size={20} />;
};

const Arrow = () => {
  return <ChevronDown />;
};

const Monitor = () => {
  return <MonitorCheck size={68} />;
};

const NotifBell = () => {
  return <Bell />;
};

const PieIcon = () => {
  return <ChartPie size={68} />;
};

const StopIcon = () => {
  return <Ban size={68} />;
};

const TodoList = () => {
  return <LayoutList size={68} />;
};

const TruckIcon = () => {
  return <Truck />;
};

const FileIcon = () => {
  return <File />;
};

export {
  FileIcon,
  TruckIcon,
  PlaneIcon,
  ShipIcon,
  Arrow,
  Monitor,
  NotifBell,
  PieIcon,
  StopIcon,
  TodoList,
  DownloadIcon,
};
