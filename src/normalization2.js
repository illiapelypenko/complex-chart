import {format, parse} from "date-fns";

const serverData = [
  {
    "id": "9025b734-8a43-47c6-8700-5721fb66a2c9",
    "exerciseGroupDto": {
      "id": 1,
      "name": "PELVIC MOVEMENTS"
    },
    "date": "2023-10-25",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": null,
    "time08_10": null,
    "time10_12": 12,
    "time12_14": null,
    "time14_16": null,
    "time16_18": 4,
    "time18_20": null,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "05930d94-0dfb-425d-899c-0df86ae981eb",
    "exerciseGroupDto": {
      "id": 1,
      "name": "PELVIC MOVEMENTS"
    },
    "date": "2023-10-26",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 12,
    "time08_10": null,
    "time10_12": null,
    "time12_14": null,
    "time14_16": null,
    "time16_18": 2,
    "time18_20": 60,
    "time20_22": 60,
    "time22_24": null
  },
  {
    "id": "7d811aa2-e9fd-4b23-a802-d1e6b537681a",
    "exerciseGroupDto": {
      "id": 2,
      "name": "HIP FLEXORS AND THIGHS FRONT"
    },
    "date": "2023-10-26",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 10,
    "time08_10": null,
    "time10_12": null,
    "time12_14": 60,
    "time14_16": null,
    "time16_18": null,
    "time18_20": null,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "46252166-7c04-47e7-ae49-f34436d26257",
    "exerciseGroupDto": {
      "id": 3,
      "name": "LATERAL THIGHS AND BUTTOCKS"
    },
    "date": "2023-10-26",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 50,
    "time08_10": null,
    "time10_12": null,
    "time12_14": null,
    "time14_16": null,
    "time16_18": null,
    "time18_20": null,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "5804510c-286b-4f03-8c35-ba133c256f77",
    "exerciseGroupDto": {
      "id": 4,
      "name": "BACK OF THIGHS"
    },
    "date": "2023-10-26",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 10,
    "time08_10": 80,
    "time10_12": null,
    "time12_14": null,
    "time14_16": null,
    "time16_18": null,
    "time18_20": null,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "74f7de76-091c-467a-a233-32cc6c2fed0b",
    "exerciseGroupDto": {
      "id": 5,
      "name": "ADDITIONALS"
    },
    "date": "2023-10-26",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 30,
    "time08_10": null,
    "time10_12": null,
    "time12_14": null,
    "time14_16": 22,
    "time16_18": null,
    "time18_20": null,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "fb12b303-6297-4c7c-b4ad-02e6efc37e88",
    "exerciseGroupDto": {
      "id": 1,
      "name": "PELVIC MOVEMENTS"
    },
    "date": "2023-10-27",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 10,
    "time08_10": null,
    "time10_12": null,
    "time12_14": null,
    "time14_16": null,
    "time16_18": null,
    "time18_20": 20,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "015c02cf-516a-4354-92a1-59d329b666e3",
    "exerciseGroupDto": {
      "id": 3,
      "name": "LATERAL THIGHS AND BUTTOCKS"
    },
    "date": "2023-10-27",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 10,
    "time08_10": null,
    "time10_12": null,
    "time12_14": null,
    "time14_16": null,
    "time16_18": null,
    "time18_20": null,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "ef8cd76b-3439-4e7e-bf00-070fa98ed9d9",
    "exerciseGroupDto": {
      "id": 4,
      "name": "BACK OF THIGHS"
    },
    "date": "2023-10-27",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 10,
    "time08_10": null,
    "time10_12": null,
    "time12_14": 10,
    "time14_16": null,
    "time16_18": null,
    "time18_20": null,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "9025b736-8a43-47c6-8700-5721fb66a2c9",
    "exerciseGroupDto": {
      "id": 1,
      "name": "PELVIC MOVEMENTS"
    },
    "date": "2023-10-24",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": null,
    "time08_10": null,
    "time10_12": 12,
    "time12_14": null,
    "time14_16": null,
    "time16_18": 4,
    "time18_20": null,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "05930d64-0dfb-425d-899c-0df86ae981eb",
    "exerciseGroupDto": {
      "id": 1,
      "name": "PELVIC MOVEMENTS"
    },
    "date": "2023-10-23",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 12,
    "time08_10": null,
    "time10_12": null,
    "time12_14": null,
    "time14_16": null,
    "time16_18": 2,
    "time18_20": 60,
    "time20_22": 60,
    "time22_24": null
  },
  {
    "id": "7d811aa6-e9fd-4b23-a802-d1e6b537681a",
    "exerciseGroupDto": {
      "id": 2,
      "name": "HIP FLEXORS AND THIGHS FRONT"
    },
    "date": "2023-11-03",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 10,
    "time08_10": null,
    "time10_12": null,
    "time12_14": 60,
    "time14_16": null,
    "time16_18": null,
    "time18_20": null,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "46252165-7c04-47e7-ae49-f34436d26257",
    "exerciseGroupDto": {
      "id": 3,
      "name": "LATERAL THIGHS AND BUTTOCKS"
    },
    "date": "2023-10-24",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 50,
    "time08_10": null,
    "time10_12": null,
    "time12_14": null,
    "time14_16": null,
    "time16_18": null,
    "time18_20": null,
    "time20_22": null,
    "time22_24": 11
  },
  {
    "id": "5804515c-286b-4f03-8c35-ba133c256f77",
    "exerciseGroupDto": {
      "id": 4,
      "name": "BACK OF THIGHS"
    },
    "date": "2023-11-02",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 10,
    "time08_10": 80,
    "time10_12": null,
    "time12_14": null,
    "time14_16": null,
    "time16_18": null,
    "time18_20": 33,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "44f7de76-091c-467a-a233-32cc6c2fed0b",
    "exerciseGroupDto": {
      "id": 5,
      "name": "ADDITIONALS"
    },
    "date": "2023-10-24",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 30,
    "time08_10": null,
    "time10_12": null,
    "time12_14": null,
    "time14_16": null,
    "time16_18": null,
    "time18_20": null,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "fb32b303-6297-4c7c-b4ad-02e6efc37e88",
    "exerciseGroupDto": {
      "id": 1,
      "name": "PELVIC MOVEMENTS"
    },
    "date": "2023-10-22",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 10,
    "time08_10": null,
    "time10_12": null,
    "time12_14": null,
    "time14_16": null,
    "time16_18": null,
    "time18_20": 20,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "014c02cf-516a-4354-92a1-59d329b666e3",
    "exerciseGroupDto": {
      "id": 3,
      "name": "LATERAL THIGHS AND BUTTOCKS"
    },
    "date": "2023-11-01",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 10,
    "time08_10": null,
    "time10_12": null,
    "time12_14": 90,
    "time14_16": null,
    "time16_18": null,
    "time18_20": null,
    "time20_22": 90,
    "time22_24": null
  },
  {
    "id": "ef8cd78b-3639-4e7e-bf00-070fa98ed9d9",
    "exerciseGroupDto": {
      "id": 4,
      "name": "BACK OF THIGHS"
    },
    "date": "2023-10-31",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 10,
    "time08_10": null,
    "time10_12": null,
    "time12_14": 10,
    "time14_16": null,
    "time16_18": null,
    "time18_20": null,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "ef8cd76b-3429-4e7e-bf00-070fa98ed9d9",
    "exerciseGroupDto": {
      "id": 4,
      "name": "BACK OF THIGHS"
    },
    "date": "2023-10-30",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 10,
    "time08_10": null,
    "time10_12": null,
    "time12_14": 10,
    "time14_16": null,
    "time16_18": null,
    "time18_20": null,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "9025b736-8a23-47c6-8700-5721fb66a2c9",
    "exerciseGroupDto": {
      "id": 1,
      "name": "PELVIC MOVEMENTS"
    },
    "date": "2023-10-22",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": null,
    "time08_10": null,
    "time10_12": 12,
    "time12_14": null,
    "time14_16": null,
    "time16_18": 4,
    "time18_20": null,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "05930d64-0dfb-225d-899c-0df86ae981eb",
    "exerciseGroupDto": {
      "id": 1,
      "name": "PELVIC MOVEMENTS"
    },
    "date": "2023-10-21",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 12,
    "time08_10": null,
    "time10_12": null,
    "time12_14": null,
    "time14_16": null,
    "time16_18": 2,
    "time18_20": 60,
    "time20_22": 60,
    "time22_24": null
  },
  {
    "id": "7d811aa6-e9fd-2b23-a802-d1e6b537681a",
    "exerciseGroupDto": {
      "id": 2,
      "name": "HIP FLEXORS AND THIGHS FRONT"
    },
    "date": "2023-10-29",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 10,
    "time08_10": null,
    "time10_12": null,
    "time12_14": 60,
    "time14_16": null,
    "time16_18": null,
    "time18_20": null,
    "time20_22": null,
    "time22_24": null
  },
  {
    "id": "46252165-7c04-27e7-ae49-f34436d26257",
    "exerciseGroupDto": {
      "id": 3,
      "name": "LATERAL THIGHS AND BUTTOCKS"
    },
    "date": "2023-10-28",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 50,
    "time08_10": null,
    "time10_12": null,
    "time12_14": null,
    "time14_16": null,
    "time16_18": null,
    "time18_20": null,
    "time20_22": null,
    "time22_24": 11
  },
  {
    "id": "5804515c-286b-2f03-8c35-ba133c256f77",
    "exerciseGroupDto": {
      "id": 4,
      "name": "BACK OF THIGHS"
    },
    "date": "2023-10-27",
    "time00_02": null,
    "time02_04": null,
    "time04_06": null,
    "time06_08": 10,
    "time08_10": 80,
    "time10_12": null,
    "time12_14": null,
    "time14_16": null,
    "time16_18": null,
    "time18_20": 33,
    "time20_22": null,
    "time22_24": null
  }
];

const durationMap = {
  "time00_02": "12 am",
  "time02_04": "2 am",
  "time04_06": "4 am",
  "time06_08": "6 am",
  "time08_10": "8 am",
  "time10_12": "10 am",
  "time12_14": "12 pm",
  "time14_16": "2 pm",
  "time16_18": "4 pm",
  "time18_20": "6 pm",
  "time20_22": "8 pm",
  "time22_24": "10 pm",
  "time24_00": "00 am",
}

function normalizeData(data) {
  let normalized = [];

  data.forEach(entry => {
    Object.entries(entry).forEach(([key, value]) => {
      if (key.startsWith("time")) {
        normalized.push({
          id: entry.id,
          exerciseGroupId: entry.exerciseGroupDto.id,
          exerciseGroupName: entry.exerciseGroupDto.name,
          date: format(parse(entry.date, 'yyyy-MM-dd', new Date()), 'dd/MM/yy'),
          timeKey: durationMap[key],
          value: value ?? 0
        });
      }
    });
  });

  return normalized;
}

console.log(JSON.stringify(normalizeData(serverData), undefined, 2));

export const normalizedData = normalizeData(serverData).sort((a, b) => a.date.localeCompare(b.date));
