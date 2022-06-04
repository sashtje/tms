export const data = [
  {
    key: "1",
    request: "Заявка 1",
    loading: "3",
    unloading: "4",
  },
  {
    key: "2",
    request: "Заявка 2",
    loading: "5",
    unloading: "3",
  },
  {
    key: "3",
    request: "Заявка 3",
    loading: "2",
    unloading: "3",
  },
  {
    key: "4",
    request: "Заявка 4",
    loading: "kjhdkhfkdj djhfkdhfkd ddhfkdhf",
    // loading: "kjhdkhfkdj",
    unloading: "3",
  },
  {
    key: "5",
    request: "Заявка 5",
    loading: "5",
    unloading: "6",
  },
];

export const columns = [
  {
    title: "Заявка",
    dataIndex: "request",
    key: "request",
    width: 100,
  },
  {
    title: "Погрузка",
    dataIndex: "loading",
    key: "loading",
    width: 100,
  },
  {
    title: "Разгрузка",
    dataIndex: "unloading",
    key: "unloading",
    width: 100,
  },
];
