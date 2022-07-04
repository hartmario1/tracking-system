import { DATA } from "./entries"

const newEntry = {
  id: '4',
  title: 'test entry',
  start: 10,
  end: 12,
  day: '15',
  month: '06',
  year: '2022'
}

export const createEntry = () => {
  DATA.push(newEntry);
  console.log(DATA);
}
