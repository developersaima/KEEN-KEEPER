import { useState, useEffect } from "react";
import { Link } from "react-router";

const statusStyle = {
  Overdue: "bg-red-500",
  "On-Track": "bg-[#244d3f]",
  "Almost Due": "bg-yellow-500",
};

const SkeletonCard = () => {
  return (
    <div className="p-8 rounded-lg bg-white border border-gray-200 flex flex-col items-center gap-3 animate-pulse">
      <div className="w-20 h-20 rounded-full bg-gray-200" />
      <div className="w-3/4 h-4 bg-gray-200 rounded" />
      <div className="w-2/4 h-3 bg-gray-200 rounded" />
      <div className="w-3/5 h-6 bg-gray-200 rounded-full" />
      <div className="w-1/2 h-5 bg-gray-200 rounded-full" />
    </div>
  );
};

const FriendsCard = ({ friend }) => {
  return (
    <Link
      to={`/friend-detailes/${friend.id}`}
      className="p-8 rounded-lg bg-white border border-white shadow-sm flex flex-col items-center text-center transition-all duration-150 hover:scale-105 hover:border-green-100"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />

      <h3 className="text-lg font-semibold truncate w-full">
        {friend.name}
      </h3>

      <p className="text-xs text-slate-500 mb-2">
        {friend.days_since_contact}d ago
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-2">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        className={`text-xs text-white px-3 py-1 rounded-full ${
          statusStyle[friend.status] || "bg-[#244d3f]"
        }`}
      >
        {friend.status}
      </span>
    </Link>
  );
};

const HeroStats = ({ friends }) => {
  const onTrack = friends.filter((f) => f.status === "On-Track").length;
  const needAttention = friends.filter((f) => f.status === "Overdue").length;
  const interactions = friends.reduce(
    (acc, f) => acc + (f.interactions_this_month || 0),
    0
  );

  const stats = [
    { id: 1, title: friends.length, subtitle: "Total Friends" },
    { id: 2, title: onTrack, subtitle: "On Track" },
    { id: 3, title: needAttention, subtitle: "Need Attention" },
    { id: 4, title: interactions || 12, subtitle: "Interactions This Month" },
  ];

  return (
    <section className="pb-10 border-b border-gray-200 mb-10 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="text-center p-8 bg-white border border-white shadow-sm rounded-lg hover:border-[#244D3F] transition"
          >
            <strong className="text-3xl font-semibold text-[#244D3F] block">
              {stat.title}
            </strong>
            <p className="text-slate-500 text-lg">{stat.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const HomePage = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/friendData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <main className="max-w-6xl mx-auto">
      <section className="pt-24 pb-8 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-slate-500 mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          <br />
          the relationships that matter most.
        </p>

        <button className="bg-[#244d3f] text-white px-5 py-2 rounded-lg inline-flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg transition">
          <span className="text-lg">＋</span>
          Add a friend
        </button>
      </section>

      {loading ? (
        <>
          <section className="pb-10 border-b border-gray-200 mb-10 px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="p-8 bg-white border border-gray-200 rounded-lg animate-pulse"
                >
                  <div className="h-8 w-1/2 bg-gray-200 rounded mx-auto mb-2" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto" />
                </div>
              ))}
            </div>
          </section>

          <section className="pb-20 px-4">
            <div className="h-6 w-40 bg-gray-200 rounded mb-4 animate-pulse" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </section>
        </>
      ) : error ? (
        <div className="text-center text-red-500 py-20">{error}</div>
      ) : (
        <>
          <HeroStats friends={friends} />

          <section className="pb-20 px-4">
            <h2 className="text-xl font-semibold mb-4">Your Friends</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {friends.map((friend) => (
                <FriendsCard key={friend.id} friend={friend} />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default HomePage;