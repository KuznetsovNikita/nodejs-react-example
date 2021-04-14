import classNames from "classnames";
import React from "react";
import { Channel } from "../models";
import "./channels.less";

interface ChannelsProps {
  channels: Channel[];
  selectedChannelId: number | undefined;
  selectChannel: (id: number | undefined) => void;
}

export const Channels: React.FC<ChannelsProps> = React.memo((props) => {
  return (
    <div className="channels">
      <h3>Channels</h3>
      <ChannelsList {...props} />
    </div>
  );
});

const ChannelsList: React.FC<ChannelsProps> = React.memo((props) => {
  const { channels, selectChannel, selectedChannelId } = props;
  if (channels.length === 0) return <span>Loading...</span>;

  return (
    <>
      {channels.map((channel) => {
        return (
          <div
            className={classNames("channel", {
              "as-active": channel.channelId === selectedChannelId,
            })}
            key={channel.channelId}
            onClick={() => selectChannel(channel.channelId)}
          >
            {channel.name}
          </div>
        );
      })}
    </>
  );
});
