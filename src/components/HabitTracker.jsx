// src/components/HabitTracker.jsx
import { useContext } from "react";
import { HabitsContext } from "../context/HabitsContext";

const HabitTracker = () => {
  const { habits, markHabitComplete } = useContext(HabitsContext);

  return (
    <div className="habit-tracker">
      <h2 className="mb-4">Track Your Habits</h2>
      <div className="row">
        {habits.map((habit) => (
          <div className="col-md-4 mb-3" key={habit.id}>
            <div className="card">
              <div className="card-body" style={{backgroundColor:'#23c6af'}}>
                <h5 className="card-title">{habit.name}</h5>
                <p className="card-text">
                  Status: {habit.completed ? "Completed" : "Incomplete"}
                </p>
                {!habit.completed && (
                  <button
                    onClick={() => markHabitComplete(habit.id)}
                    className="btn btn-success"
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitTracker;
