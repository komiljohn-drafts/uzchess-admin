import {
  Bell,
  BookAudio,
  BookOpenCheck,
  File,
  FileQuestion,
  LibraryBig,
  Medal,
  Newspaper,
  Package,
  Puzzle,
  Radio,
  Swords,
  Users
} from "lucide-react"
import { ReactElement } from "react"

interface IMenuItem {
  id: string
  path: string
  title: string
  icon: () => ReactElement
}

export const menuItems: IMenuItem[] = [
  {
    id: "1",
    path: "/courses",
    title: "Courses",
    icon: () => <BookAudio className="inline" />
  },
  {
    id: "2",
    path: "/grandmasters",
    title: "Grandmasters",
    icon: () => <Medal className="inline" />
  },
  {
    id: "3",
    path: "/news",
    title: "News",
    icon: () => <Newspaper className="inline" />
  },
  {
    id: "4",
    path: "/books",
    title: "Books",
    icon: () => <LibraryBig className="inline" />
  },
  {
    id: "5",
    path: "/afisha",
    title: "Afisha",
    icon: () => <File className="inline" />
  },
  {
    id: "6",
    path: "/tournaments",
    title: "Tournaments",
    icon: () => <Swords className="inline" />
  },
  {
    id: "7",
    path: "/modules",
    title: "Modules",
    icon: () => <Package className="inline" />
  },
  {
    id: "8",
    path: "/lessons",
    title: "Lessons",
    icon: () => <BookOpenCheck className="inline" />
  },
  {
    id: "9",
    path: "/quiz",
    title: "Quiz",
    icon: () => <FileQuestion className="inline" />
  },
  {
    id: "10",
    path: "/streams",
    title: "Live streams",
    icon: () => <Radio className="inline" />
  },
  {
    id: "11",
    path: "/puzzles",
    title: "Puzzles",
    icon: () => <Puzzle className="inline" />
  },
  {
    id: "12",
    path: "/teachers",
    title: "Teachers",
    icon: () => <Users className="inline" />
  },
  {
    id: "13",
    path: "/notifications",
    title: "Notifications",
    icon: () => <Bell className="inline" />
  }
]
