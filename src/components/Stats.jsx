
import { useTimeline } from './../context/TimelineContext';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const Stats = () => {
  const { timeline } = useTimeline();

  const data = [
    {
      name: "Text",
      value: timeline.filter((i) => i.media === "Text").length,
      fill: "#7f37f5",
    },
    {
      name: "Call",
      value: timeline.filter((i) => i.media === "Call").length,
      fill: "#244d3f",
    },
    {
      name: "Video",
      value: timeline.filter((i) => i.media === "Video").length,
      fill: "#37a163",
    },
  ];

  const isEmpty = data.every((i) => i.value === 0);

  return (
    <section className="my-20 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        Friendship Analytics
      </h1>

      <div className="rounded-2xl shadow p-8 bg-white">
        <h6 className="font-medium text-xl text-[#244D3F] mb-6">
          By Interaction Type
        </h6>

        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400 gap-2">
            <p className="text-sm font-medium">No statistics yet</p>
            <p className="text-xs opacity-60">
              Start a call, text, or video to see your stats
            </p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={5}
                cornerRadius={8}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Pie>

              <Tooltip
                formatter={(value, name) => [`${value} entries`, name]}
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  fontSize: "13px",
                }}
              />

              <Legend
                iconType="circle"
                formatter={(value) => (
                  <span className="text-gray-500 text-sm">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </section>
  );
};

export default Stats;