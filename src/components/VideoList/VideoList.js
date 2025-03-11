import { useState } from "react";
import { List, Button } from "antd";
import SearchBar from "../SearchBar/SearchBar";
import "./VideoList.scss";

export default function VideoList({ availableVideos, handleAction }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVideos = availableVideos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="video-list">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <List
        bordered
        dataSource={filteredVideos}
        renderItem={(item) => (
          <List.Item>
            {item.title}
            <Button type="link" onClick={() => handleAction(item.url)}>Process</Button>
          </List.Item>
        )}
      />
    </div>
  );
}
