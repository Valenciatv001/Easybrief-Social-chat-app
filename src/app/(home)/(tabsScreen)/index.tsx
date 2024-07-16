import { router } from "expo-router";

import { ChannelList } from "stream-chat-expo";

export default function MainTbScreen() {
  return (
    <ChannelList
      onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
    />
  );
}
