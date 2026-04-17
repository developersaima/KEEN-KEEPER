import { useTimeline } from "../context/TimelineContext";

const Timeline = () => {
  const { timeline, setFilterType } = useTimeline();

  return (
    <section className="my-20 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">Timeline</h1>

      {/* FILTER */}
      <div className="mb-6">
        <select
          className="border border-gray-200 px-3 py-2 rounded-md"
          defaultValue="All"
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {/* LIST */}
      <div className="space-y-2">
        {timeline.length === 0 ? (
          <p className="text-gray-400 text-center py-10">
            No timeline found
          </p>
        ) : (
          timeline.map((data) => (
            <div
              key={data.id}
              className="p-4 border border-gray-200 rounded-md shadow flex items-center gap-4 bg-white"
            >
              <img
                src={data.icon}
                className="w-10 h-10"
                alt={data.media}
              />

              <div>
                <p className="text-[#64748B]">
                  <strong className="text-[#244D3F]">{data.media}</strong> with{" "}
                  {data.name}
                </p>
                <p className="text-sm text-gray-500">{data.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Timeline;