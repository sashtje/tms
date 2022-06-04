import SelectEdit from "../components/SelectEdit";

export const startPoints = [
  {
    title: "Москва",
    point: [],
  },
  {
    title: "Балашиха",
    point: [],
  },
  {
    title: "Химки",
    point: [],
  },
  {
    title: "Домодедово",
    point: [],
  },
  {
    title: "Мытищи",
    point: [],
  },
];

export const finishPoints = [
  {
    title: "Санкт-Петербург",
    point: [],
  },
  {
    title: "Архангельск",
    point: [],
  },
  {
    title: "Воронеж",
    point: [],
  },
  {
    title: "Сыктывкар",
    point: [],
  },
  {
    title: "Пермь",
    point: [],
  },
];

export const data = [];

for (let i = 0; i < 5; i++) {
  data.push({
    key: `${i + 1}`,
    number: i + 1,
    request: `Заявка №${i + 1}`,
    loading: startPoints[i].title,
    unloading: finishPoints[i].title,
  });
}

export const columns = [
  { title: "№", dataIndex: "number", key: "number", fixed: "left" },
  {
    title: "Заявка",
    dataIndex: "request",
    key: "request",
  },
  {
    title: "Погрузка",
    dataIndex: "loading",
    key: "loading",
    render: (_, { loading, number }) => (
      <SelectEdit type="loading" defaultValue={loading} number={number} />
    ),
  },
  {
    title: "Разгрузка",
    dataIndex: "unloading",
    key: "unloading",
    render: (_, { unloading, number }) => (
      <SelectEdit type="unloading" defaultValue={unloading} number={number} />
    ),
  },
];
