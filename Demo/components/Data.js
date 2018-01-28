const myData = [
  {
    code: 'TYU',
    company: 'COMPANY 2',
    price: 0.45,
    volume: 9000,
    value: 0
  },
  {
    code: 'HNM',
    company: 'COMPANY ',
    price: 0.56,
    volume: 9000,
    value:0,
  },
  {
    code: 'CVB',
    company: 'COMPANY 3',
    price: 0.45,
    volume: 8000,
    value: 0
  },
  {
    code: 'BNM',
    company: 'COMPANY 4',
    price: 0.56,
    volume: 3000,
    value: 0
  },
  {
    code: 'KLO',
    company: 'COMPANY 5',
    price: 1.23,
    volume: 3000,
    value: 0
  },
  {
    code: 'BNH',
    company: 'COMPANY 6',
    price: 1.52,
    volume: 3000,
    value: 0
  },
  {
    code: 'QWS',
    company: 'COMPANY 7',
    price: 1.36,
    volume: 3000,
    value: 0
  },
  {
    code: 'DFR',
    company: 'COMPANY 8',
    price: 1.78,
    volume: 3000,
    value: 0
  },
  {
    code: 'FVB',
    company: 'COMPANY 9',
    price: 5.12,
    volume: 1000,
    value: 0
  },
  {
    code: 'GHY',
    company: 'COMPANY 10',
    price: 5.56,
    volume: 1000,
    value: 0
  },
  {
    code: 'ZXC',
    company: 'COMPANY 11',
    price: 5.78,
    volume: 1000,
    value: 0
  },
  {
    code: 'VBG',
    company: 'COMPANY 12',
    price: 5.89,
    volume: 6000,
    value: 0
  },
  {
    code: 'KLI',
    company: 'COMPANY 13',
    price: 5.45,
    volume: 6000,
    value: 0
  },
  {
    code: 'VDT',
    company: 'COMPANY 14',
    price: 6.23,
    volume: 6000,
    value: 0
  },
  {
    code: 'HJJ',
    company: 'COMPANY 15',
    price: 6.52,
    volume: 7000,
    value: 0
  },
  {
    code: 'MNB',
    company: 'COMPANY 16',
    price: 6.14,
    volume: 7000,
    value: 0
  },
  {
    code: 'OPI',
    company: 'COMPANY 17',
    price: 6.96,
    volume: 7000,
    value: 0
  },
  {
    code: 'QWER',
    company: 'COMPANY 18',
    price: 9.21,
    volume: 7000,
    value: 0
  },
  {
    code: 'BNO',
    company: 'COMPANY 19',
    price: 9.56,
    volume: 7000,
    value: 0
  },
  {
    code: 'ZXS',
    company: 'COMPANY 20',
    price: 9.89,
    volume: 2000,
    value: 0
  },
  {
    code: 'TGH',
    company: 'COMPANY 21',
    price: 9.75,
    volume: 2000,
    value: 0
  },
  {
    code: 'UIO',
    company: 'COMPANY 22',
    price: 9.63,
    volume: 2000,
    value: 0
  },
  {
    code: 'POI',
    company: 'COMPANY 23',
    price: 9.22,
    volume: 2000,
    value: 0
  },
  {
    code: 'CBA',
    company: 'COMPANY 24',
    price: 8.25,
    volume: 2000,
    value: 0
  },
  {
    code: 'ASD',
    company: 'COMPANY 25',
    price: 8.62,
    volume: 5000,
    value: 0
  },
  {
    code: 'SDF',
    company: 'COMPANY 26',
    price: 8.78,
    volume: 5000,
    value: 0
  },
  {
    code: 'FSE',
    company: 'COMPANY 27',
    price: 8.12,
    volume: 5000,
    value: 0
  },
  {
    code: 'GRH',
    company: 'COMPANY 28',
    price: 8.89,
    volume: 5000,
    value: 0
  },
  {
    code: 'HJK',
    company: 'COMPANY 29',
    price: 52.33,
    volume: 5000,
    value: 0
  },
  {
    code: 'WER',
    company: 'COMPANY 30',
    price: 52.89,
    volume: 9000,
    value: 0
  },

];

for (let i = 0; i < myData.length; i++) {
  myData[i].value = myData[i].price * myData[i].volume;
}
export default myData;