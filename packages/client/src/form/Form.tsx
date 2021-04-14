import React from "react";
import { StateContext } from "../state";
import "./form.less";

export const Form = () => {
  const { selectedChannelId, submitMessage } = React.useContext(StateContext);

  const [text, setText] = React.useState("");

  React.useEffect(() => {
    setText("");
  }, [selectedChannelId]);

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
};
