// src/types/index.ts

import { FluentIcon } from "@fluentui/react-icons";

export interface NavigationItem {
  path: string;
  label: string;
  icon: FluentIcon;
}

export interface MediaItem {
  id: number;
  title: string;
  url: string;
  description?: string;
}
