import './App.css';
import {CartesianGrid, Legend, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis} from "recharts";

const BAR_WIDTH = 7.5;
const SPACING = 0;

const TimePeriodShape = (props) => {
  const { cx, cy, payload } = props;
  const values = Object.values(payload.values);

  return (
    <g transform={`translate(${cx - ((BAR_WIDTH + SPACING) * values.length) / 2}, ${cy})`}>
      {values.map((value, index) => (
        <rect
          key={index}
          x={(BAR_WIDTH + SPACING) * index}
          y={-value} // Start drawing from the top to the bottom
          width={BAR_WIDTH}
          height={value}
          rx="1.75"
          fill="#7897FF"
          stroke="#063EF9"
          strokeWidth="0.5"
        />
      ))}
    </g>
  );
};

const timePeriods = [
    { timePeriod: '12 am', timeKey: 'time00_02', date: "2023-10-16" },
    { timePeriod: '2 am', timeKey: 'time02_04', date: "2023-10-17" },
    { timePeriod: '4 am', timeKey: 'time04_06', date: "2023-10-18" },
    { timePeriod: '6 am', timeKey: 'time06_08', date: "2023-10-19" },
    { timePeriod: '8 am', timeKey: 'time08_10', date: "2023-10-20" },
    { timePeriod: '10 am', timeKey: 'time10_12', date: "2023-10-21" },
    { timePeriod: '12 pm', timeKey: 'time12_14', date: "2023-10-22" },
    { timePeriod: '2 pm', timeKey: 'time14_16', date: "2023-10-23" },
    { timePeriod: '4 pm', timeKey: 'time16_18', date: "2023-10-24" },
    { timePeriod: '6 pm', timeKey: 'time18_20', date: "2023-10-25" },
    { timePeriod: '8 pm', timeKey: 'time20_22', date: "2023-10-26" },
    { timePeriod: '10 pm', timeKey: 'time22_24', date: "2023-10-27" },
  ].map(entry => ({
  ...entry,
  values: {
    value1: Math.floor(Math.random() * 101),
    value2: Math.floor(Math.random() * 101),
    value3: Math.floor(Math.random() * 101),
    value4: Math.floor(Math.random() * 101),
    value5: Math.floor(Math.random() * 101),
  }
}));

function App() {
  return (
    <div className="App">
      <ScatterChart
        width={1031}
        height={336}
      >
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" type="category" />
        <YAxis dataKey="timePeriod" type="category" domain={['10 pm', '12 am']} />
        <Scatter data={timePeriods} shape={<TimePeriodShape />} />
      </ScatterChart>
    </div>
  );
}

export default App;

// shape={({ value }) => <TimePeriodShape value={value}/>}
