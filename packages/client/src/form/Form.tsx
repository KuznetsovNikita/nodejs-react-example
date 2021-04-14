import React from "react";
import "./form.less";

interface FormProps {
  selectedChannelId: number | undefined;
  submitMessage: (channelId: number, text: string) => void;
}

export const Form: React.FC<FormProps> = React.memo(
  ({ selectedChannelId, submitMessage }) => {
    const [text, setText] = React.useState("");

    if (selectedChannelId === undefined) return <div className="form"></div>;

    const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      setText(e.currentTarget.value);
    };

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
      submitMessage(selectedChannelId, text);
      setText("");
    };

    const disabled = text.trim() === "";

    return (
      <div className="form">
        <h3>New message</h3>
        <form onSubmit={onSubmit}>
          <div>
            <textarea value={text} onChange={onChange} />
          </div>
          <div>
            <button disabled={disabled}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
);
