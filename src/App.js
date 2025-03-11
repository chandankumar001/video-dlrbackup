import { Suspense, lazy } from "react";
import { Typography, message, Spin } from "antd";
import useVideoHandler from "./hooks/useVideoHandler";
import "./styles/global.scss";

const { Title } = Typography;

const VideoInput = lazy(() => import("./components/VideoInput/VideoInput"));
const VideoList = lazy(() => import("./components/VideoList/VideoList"));

export default function App() {
  const { videoUrl, setVideoUrl, availableVideos, handleAction, error } = useVideoHandler();

  return (
    <div className="container">
      <Title level={1}>📺 Video Hub</Title>
      {error && message.error(error)}

      <div className="section">
        <Suspense fallback={<Spin size="large" />}>
          <VideoInput videoUrl={videoUrl} setVideoUrl={setVideoUrl} handleAction={handleAction} />
        </Suspense>
      </div>

      <div className="section">
        <Title level={2}>🎥 Available Videos</Title>
        <Suspense fallback={<Spin size="large" />}>
          <VideoList availableVideos={availableVideos} handleAction={handleAction} />
        </Suspense>
      </div>
    </div>
  );
}
