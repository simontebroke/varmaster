import { useState } from "react";
import "./App.css";
import Task from "./task";

function App() {
  const [currentTask, setCurrentTask] = useState(1);
  let task;
  if (currentTask === 1) {
    task = (
      <>
        <Task
          taskNumber={currentTask}
          description="Löse die Gleichung, um den Wert von x herauszufinden."
          task="3x+5 = 65"
          correct={20}
          onCorrectAnswer={incrementTask}
          variable="x"
        />
      </>
    );
  } else if (currentTask === 2) {
    task = (
      <>
        <Task
          taskNumber={currentTask}
          description="Noch ist es recht einfach..."
          task="25z + 75 = 1000"
          correct={37}
          onCorrectAnswer={incrementTask}
          variable="z"
        />
      </>
    );
  } else if (currentTask === 3) {
    task = (
      <>
        <Task
          taskNumber={currentTask}
          description="Runde auf 2 Nachkommastellen..."
          task="(3/5)u + (7/4) = 50"
          correct={80.42}
          onCorrectAnswer={incrementTask}
          variable="u"
        />
      </>
    );
  } else if (currentTask === 4) {
    task = (
      <>
        <Task
          taskNumber={currentTask}
          description="100 Euro wenn du diese Aufgabe lösen kannst 💀"
          task="(2/7)p^2 - (3/4)p + (5/9) = (7/3)p^2 - (2/5)p - (4/11)"
          correct={2.11}
          onCorrectAnswer={incrementTask}
          variable="p"
        />
      </>
    );
  } else if (currentTask === 5) {
    task = (
      <>
        <Task
          taskNumber={currentTask}
          description="Nur die Elefanten indischer Zen-Meister konnten diese Aufgabe je lösen 🥶"
          task="((2/35)x + (7/28)) - ((6/49)x - (5/36)) + ((3/22)x - (8/15)) - ((4/30)x + (7/50)) + ((5/17)x - (9/42)) - ((6/19)x + (10/37)) + ((7/21)x - (11/48)) - ((8/25)x + (12/43)) + ((9/29)x - (13/44)) - ((10/31)x + (14/45)) + ((11/33)x - (15/46)) - ((12/35)x + (16/47)) + ((13/37)x - (17/48)) - ((14/39)x + (18/49)) + ((15/41)x - (19/50)) - ((16/43)x + (20/51)) + ((17/45)x - (21/52)) - ((18/47)x + (22/53)) + ((19/49)x - (23/54)) - ((20/51)x + (24/55)) + ((21/53)x - (25/56)) - ((22/55)x + (26/57)) + ((23/57)x - (27/58)) - ((24/59)x + (28/59)) + ((25/61)x - (29/60)) - ((26/63)x + (30/61)) = ((1/50)x + (1/45)) - ((2/55)x - (2/40)) + ((3/60)x - (3/35)) - ((4/65)x + (4/30)) + ((5/70)x - (5/25)) - ((6/75)x + (6/20)) + ((7/80)x - (7/15)) - ((8/85)x + (8/10)) + ((9/90)x - (9/5)) - ((10/95)x + (10/0))"
          correct={27.14}
          onCorrectAnswer={incrementTask}
          variable="x"
        />
      </>
    );
  } else {
    task = (
      <>
        <h2>Erfinde die Zeitmaschine ☠️</h2>
      </>
    );
  }

  function incrementTask() {
    setTimeout(() => {
      setCurrentTask(() => currentTask + 1);
    }, 1500);
  }

  return (
    <>
      <div className="header">
        <h1>VarMaster</h1>
        <h2>Das zuverlässigste Mathe Quiz der Welt</h2>
      </div>
      {task}
    </>
  );
}

export default App;
