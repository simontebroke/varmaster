import { useState, useEffect } from "react";

type TaskProps = {
  taskNumber: number;
  description: string;
  task: string;
  correct: number;
  onCorrectAnswer: () => void;
  variable: string;
};

function Task({
  taskNumber,
  description,
  task,
  correct,
  onCorrectAnswer,
  variable,
}: TaskProps) {
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [selection, setSelection] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelection(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selectedNumber = Number(selection);
    if (selectedNumber === correct) {
      setAnswer(true);
      onCorrectAnswer();
    } else {
      setAnswer(false);
    }
  };

  let validator: JSX.Element;
  if (answer === true) {
    validator = <h4>✅</h4>;
  } else if (answer === false) {
    validator = <h4>❌</h4>;
  } else {
    validator = <h4>⬅️</h4>;
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event as any);
    }
  };

  useEffect(() => {
    setAnswer(null);
    setSelection(null);
  }, [taskNumber]);

  return (
    <div className="taskContainer">
      <div className="task">
        <h2>Aufgabe Nr. {taskNumber}</h2>
        <h3>{description}</h3>
        <h4>{task}</h4>
        <form onSubmit={handleSubmit}>
          <div className="submitArea">
            <p>{variable} = </p>
            <input
              type="number"
              placeholder="Antwort eingeben"
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              value={selection || ""}
            />
            {validator}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Task;
