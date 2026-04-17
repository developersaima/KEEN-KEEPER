import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Archive,
  Trash,
  Bell,
  MessageSquare,
  Phone,
  Video,
} from "lucide-react";
import {useTimeline} from "../context/TimelineContext";

const FriendDetailes = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  const { addToTimeline } = useTimeline();

  useEffect(() => {
    fetch("/friendData.json")
      .then((res) => res.json())
      .then((data) => {
        const one = data.find((i) => i.id === Number(id));
        setFriend(one);
      });
  }, [id]);

  if (!friend) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  const STATS = [
    {
      id: 1,
      title: friend.days_since_contact,
      subtitle: "Days Since Contact",
    },
    { id: 2, title: friend.goal, subtitle: "Goal (Days)" },
    {
      id: 3,
      title: new Date(friend.next_due_date).toLocaleDateString(),
      subtitle: "Next Due",
    },
  ];

  const ACTIONS = [
    { id: 1, icon: Phone, text: "Call", action: "call" },
    { id: 2, icon: MessageSquare, text: "Text", action: "message" },
    { id: 3, icon: Video, text: "Video", action: "video" },
  ];

  return (
    <section className="  py-10 bg-[#F8FAFC] min-h-screen px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">

        {/* LEFT */}
        <div className="w-80 mx-auto">

          <div className="p-6 bg-white border border-gray-200 rounded-md text-center">
            <img
              src={friend.picture}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />

            <h2 className="text-lg font-semibold">{friend.name}</h2>

            <p className="text-sm text-slate-500 mt-2">
              {friend.days_since_contact}d ago
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {friend.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span className="inline-block mt-3 text-xs px-3 py-1 bg-[#244d3f] text-white rounded-full">
              {friend.status}
            </span>
          </div>

          <div className="flex flex-col gap-4 my-4">
            <button className="bg-white py-3 border border-gray-200 rounded-md flex items-center justify-center gap-2">
              <Bell size={18} />
              Snooze 2 weeks
            </button>

            <button className="bg-white py-3 border border-gray-200 rounded-md flex items-center justify-center gap-2">
              <Archive size={18} />
              Archive
            </button>

            <button className="bg-white py-3 border border-gray-200 rounded-md text-red-500 flex items-center justify-center gap-2">
              <Trash size={18} />
              Delete
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 space-y-4">

          <div className="grid md:grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.id}
                className="text-center p-4 bg-white border border-gray-200 rounded-md"
              >
                <strong className="text-[30px] text-[#244D3F]">
                  {stat.title}
                </strong>
                <p className="text-lg text-[#64748B]">
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-white border border-gray-200 rounded-md flex justify-between">
            <div>
              <h1 className="text-xl text-[#244D3F] mb-2">
                Relationship Goal
              </h1>
              <p className="text-[#64748B]">
                Connect every <strong>30 days</strong>
              </p>
            </div>

            <button className="px-4 py-2 border border-gray-200 rounded-md">
              Edit
            </button>
          </div>

          {/* ACTIONS (NOW WORKING WITH CONTEXT) */}
          <div className="p-4 bg-white border border-gray-200 rounded-md">
            <h1 className="text-xl text-[#244D3F] mb-4">
              Quick Check-In
            </h1>

            <div className="grid grid-cols-3 gap-4">
              {ACTIONS.map((a) => (
                <button
                  key={a.id}
                  onClick={() => addToTimeline(a.action, friend.name)}
                  className="border border-gray-200 bg-[#f8fafc] p-4 flex flex-col items-center gap-2 rounded-md"
                >
                  <a.icon size={20} />
                  {a.text}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FriendDetailes;