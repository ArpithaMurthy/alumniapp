// src/utils/mockData.ts
import { MediaItem } from "../types";
import { NavigationItem } from "../types";
import {
  Image20Filled,
  VideoClip20Filled,
  Home20Filled,
  Mail20Filled,
} from "@fluentui/react-icons";

export const generateMockPhotos = (count: number): MediaItem[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Photo ${i + 1}`,
    url: `/api/placeholder/400/300?text=Photo${i + 1}`,
    description: `Description for photo ${i + 1}`,
  }));

export const generateMockVideos = (count: number): MediaItem[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Video ${i + 1}`,
    url: `/api/placeholder/400/300?text=Video${i + 1}`,
    description: `Description for video ${i + 1}`,
  }));

export const navItems: NavigationItem[] = [
  {
    path: "/",
    label: "Home",
    icon: Home20Filled,
  },
  {
    path: "/photos",
    label: "Photos",
    icon: Image20Filled,
  },
  {
    path: "/videos",
    label: "Videos",
    icon: VideoClip20Filled,
  },
  {
    path: "/postcard",
    label: "Post card",
    icon: Mail20Filled,
  },
];
