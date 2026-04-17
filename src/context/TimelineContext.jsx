import { createContext, useContext, useRef, useState } from "react";
import toast from "react-hot-toast";

const TimelineContextApi = createContext(null);

export const useTimeline = () => useContext(TimelineContextApi);

export const TimelineProvider = ({ children }) => {
  const [allTimeline, setAllTimeline] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const addingRef = useRef(false);

  const messages = {
    call: "Call logged successfully",
    message: "Message sent successfully",
    video: "Video session added",
  };

  const addToTimeline = (media, name) => {
    if (addingRef.current) return;
    addingRef.current = true;

    setAllTimeline((prev) => [
      {
        id: crypto.randomUUID(),
        name,
        icon:
          media === "call"
            ? "/assets/call.png"
            : media === "message"
            ? "/assets/text.png"
            : "/assets/video.png",
        media:
          media === "call"
            ? "Call"
            : media === "message"
            ? "Text"
            : "Video",
        date: new Date().toLocaleString(),
      },
      ...prev,
    ]);

    toast.success(`${messages[media]} with ${name}`);

    setTimeout(() => {
      addingRef.current = false;
    }, 500);
  };

  const timeline =
    filterType === "All"
      ? allTimeline
      : allTimeline.filter((i) => i.media === filterType);

  return (
    <TimelineContextApi.Provider
      value={{
        timeline,
        addToTimeline,
        setFilterType,
      }}
    >
      {children}
    </TimelineContextApi.Provider>
  );
};