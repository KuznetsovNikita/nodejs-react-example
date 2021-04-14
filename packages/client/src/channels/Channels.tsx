import classNames from "classnames";
import React from "react";
import { Channel } from "../models";
import { StateContext } from "../state";
import "./channels.less";

export const Channels = () => {
  const { channels, selectChannel, selectedChannelId } = React.useContext(
    StateContext
  );

  return (
    <div className="channels">
      <h3>Channels</h3>
      <ChannelsList
        channels={channels}
        selectChannel={selectChannel}
        selectedChannelId={selectedChannelId}
      />
    </div>
  );
};

interface ChannelsProps {
  channels: Channel[];
  selectedChannelId: number | undefined;
  selectChannel: (id: number) => void;
}

const ChannelsList: React.FC<ChannelsProps> = React.memo(
  ({ channels, selectChannel, selectedChannelId }) => {
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
  }
);
