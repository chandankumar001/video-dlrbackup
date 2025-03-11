import { useState } from "react";

export default function useVideoHandler() {
  const [videoUrl, setVideoUrl] = useState("");
  const [availableVideos, setAvailableVideos] = useState([
    { id: 1, title: "Sample Video 1", url: "https://sample1.com/video" },
    { id: 2, title: "Sample Video 2", url: "https://sample2.com/video" },
  ]);
  const [error, setError] = useState(null);

  const handleAction = async (url) => {
    if (!url) {
      setError("Please enter a valid URL.");
      return;
    }
    setError(null);
    try {
      // Simulated API call
      const response = await fetch("https://api.example.com/process?url=" + encodeURIComponent(url));
      if (!response.ok) throw new Error("Failed to process video.");
      alert(`Processing video from: ${url}`);
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
    }
  };

  return { videoUrl, setVideoUrl, availableVideos, handleAction, error };
}
