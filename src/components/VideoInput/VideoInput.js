import { Input, Button } from "antd";
import { CloudDownloadOutlined } from "@ant-design/icons";
import "./VideoInput.scss";

export default function VideoInput({ videoUrl, setVideoUrl, handleAction }) {
  return (
    <div className="input-container">
      <Input
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <Button type="primary" icon={<CloudDownloadOutlined />} onClick={() => handleAction(videoUrl)}>
        Process
      </Button>
    </div>
  );
}
