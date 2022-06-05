export const startPoints = [
  {
    title: "Москва",
    point: [55.767607, 37.621076],
  },
  {
    title: "Балашиха",
    point: [55.797367, 37.934474],
  },
  {
    title: "Химки",
    point: [55.89808, 37.446458],
  },
  {
    title: "Домодедово",
    point: [55.432927, 37.767131],
  },
  {
    title: "Мытищи",
    point: [55.910504, 37.736364],
  },
];

export const finishPoints = [
  {
    title: "Санкт-Петербург",
    point: [59.909374, 30.240424],
  },
  {
    title: "Архангельск",
    point: [64.569901, 40.569553],
  },
  {
    title: "Воронеж",
    point: [51.677647, 39.172394],
  },
  {
    title: "Сыктывкар",
    point: [61.669058, 50.847904],
  },
  {
    title: "Пермь",
    point: [58.006597, 56.256605],
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
