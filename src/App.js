import "./App.css";
import {
  CartesianGrid,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { normalizedData, totalTimePerDate } from "./normalization2";

const groupsStyle = [
  {
    backgroundColor: "#50C4E3",
    borderColor: "#0095CC",
    id: 2,
  },
  {
    backgroundColor: "#7897FF",
    borderColor: "#063EF9",
    id: 3,
  },
  {
    backgroundColor: "#C19CFC",
    borderColor: "#6308F7",
    id: 4,
  },
  {
    backgroundColor: "#DCC80F",
    borderColor: "#A37F00",
    id: 1,
  },
  {
    backgroundColor: "#FFAC66",
    borderColor: "#FF7500",
    id: 5,
  },
];

const CHART_HEIGHT = 375;
const CHART_WIDTH = 1062;
const BAR_WIDTH = 7.5;
const Y_GAP_AMOUNT = 12;
const MAX_MINUTES = 120;

const TimePeriodShape = (props) => {
  const { cx, cy, payload } = props;

  const groupId = payload.exerciseGroupId;
  const value = payload.value;

  const groupStyle = groupsStyle.find(
    (groupStyle) => groupStyle.id === groupId,
  );
  const { backgroundColor, borderColor } = groupStyle;

  const adjustedX = cx + BAR_WIDTH * groupId;

  return (
    <rect
      x={adjustedX}
      y={cy - (CHART_HEIGHT / Y_GAP_AMOUNT / MAX_MINUTES) * value - 1}
      width={BAR_WIDTH}
      height={(CHART_HEIGHT / Y_GAP_AMOUNT / MAX_MINUTES) * value}
      fill={backgroundColor}
      stroke={borderColor}
      strokeWidth="0.5"
      rx="1.75"
    />
  );
};

const TimePeriodShape2 = (props) => {
  const { cx, cy, payload } = props;

  const value = payload.hours;

  const backgroundColor = "#D0F9BC";
  const borderColor = "#339801";

  const onePeriodPx = CHART_HEIGHT / Y_GAP_AMOUNT;

  return (
    <rect
      x={cx}
      y={cy - onePeriodPx * value - 1}
      width={BAR_WIDTH}
      height={onePeriodPx * value}
      fill={backgroundColor}
      stroke={borderColor}
      strokeWidth="0.5"
      rx="1.75"
    />
  );
};

const LabelX = ({ x, y, payload }) => (
  <text x={x} y={y} dy={20} dx={30} className="label" textAnchor="middle">
    {payload.value}
  </text>
);

const LabelY = ({ x, y, payload }) => (
  <text
    x={x}
    y={y}
    dy={4}
    dx={-20}
    className="label labelY"
    textAnchor="middle"
  >
    {payload.value}
  </text>
);

const LabelY2 = ({ x, y, payload }) => (
  <text
    x={x}
    y={y}
    dy={4}
    dx={-80}
    className="label labelY"
    textAnchor="middle"
  >
    {payload.value}
  </text>
);

function App() {
  return (
    <div className="App">
      <ScatterChart width={CHART_WIDTH} height={CHART_HEIGHT + 60}>
        <Tooltip />
        <CartesianGrid vertical={false} stroke="#D9DBE9" />
        <XAxis
          dataKey="date"
          type="category"
          allowDuplicatedCategory={false}
          scale="point"
          interval={0}
          tick={<LabelX />}
          padding={{ right: 60 }}
          tickLine={false}
          axisLine={{ stroke: "#D9DBE9" }}
        />

        <YAxis
          dataKey="timeKey"
          type="category"
          allowDuplicatedCategory={false}
          scale="point"
          tick={<LabelY />}
          padding={{ top: 28 }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          dataKey="hoursLabel"
          type="category"
          allowDuplicatedCategory={false}
          scale="point"
          tick={<LabelY2 />}
          padding={{ top: 28 }}
          tickLine={false}
          axisLine={false}
        />

        <Scatter data={normalizedData} shape={<TimePeriodShape />} />
        <Scatter data={totalTimePerDate} shape={<TimePeriodShape2 />} />
      </ScatterChart>
    </div>
  );
}

export default App;
