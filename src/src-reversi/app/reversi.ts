export class RoomHistory {
  point: number;
  order: string;
  date: Object;
  $key: string;
}

export class RoomObj {
  $key: string;
  name: string;
  order: string;
  joinNum: number;
  history: Array<RoomHistory>;
}