import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"

const data = [
  { name: "Page A", uv: 100, pv: 2000, amt: 2400 },
  { name: "Page A", uv: 400, pv: 1400, amt: 2400 },
  { name: "Page A", uv: 300, pv: 2600, amt: 2400 },
  { name: "Page A", uv: 400, pv: 3400, amt: 2400 },
  { name: "Page A", uv: 500, pv: 400, amt: 2400 },
]

const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]
const data3 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
]
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const transactionData = [
  {
    name: "johndoe",
    transNumber: "0015449",
    date: "2021-03-01",
    total: "$403.00",
  },
  {
    name: "johnla",
    transNumber: "0015019",
    date: "2021-04-01",
    total: "$43.50",
  },
  {
    name: "johnba",
    transNumber: "0012249",
    date: "2021-05-01",
    total: "$23.00",
  },
  {
    name: "johnma",
    transNumber: "0015449",
    date: "2021-06-01",
    total: "$48.00",
  },
  {
    name: "johnla",
    transNumber: "0015849",
    date: "2021-07-01",
    total: "$431.00",
  },
  {
    name: "johnfa",
    transNumber: "0015249",
    date: "2021-08-01",
    total: "$53.00",
  },
]
export default function ChartConatiner() {
  return (
    <div className=" mt-14">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 min-h-[300px]">
        <div className="flex lg:col-span-2 justify-center items-center p-8 dark:bg-[#121212] dark:text-white bg-white  w-full rounded-lg shadow-lg min-h-[300px]">
          <ResponsiveContainer>
            <LineChart
              width={700}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#077a8f" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className=" bg-white dark:bg-[#121212] dark:text-white   rounded-lg shadow-lg h-[300px] overflow-x-hidden overflow-scroll">
          <h2 className="border-b-4  dark:border-[#1f1f1f] p-4 text-lg">
            recent transaction
          </h2>
          {transactionData.map((transaction, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 dark:border-[#1f1f1f] border-b-4"
            >
              <div>
                <div className="text-[#077a8f] font-bold">
                  {transaction.transNumber}
                </div>
                <div>{transaction.name}</div>
              </div>
              <div>{transaction.date}</div>
              <button className="bg-[#077a8f] text-white rounded p-2">
                $43.00
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
