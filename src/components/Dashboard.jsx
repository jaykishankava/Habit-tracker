// src/components/Dashboard.jsx
import { useContext } from "react";
import { HabitsContext } from "../context/HabitsContext";
import NotificationPanel from "./NotificationPanel";
import './Dashboard.css'; // Import your CSS file for styling

const Dashboard = () => {
  const { habits } = useContext(HabitsContext);

  return (
    <div className="dashboard">
      <h2  className="text-center">Your Dashboard</h2>
      <NotificationPanel />
      <h2>Daily Habits</h2>
      <div className="habit-cards">
        {habits.map((habit) => (
          <div key={habit.id} className="habit-card" style={{backgroundColor:'#23c6af'}}>
            <h4>{habit.name}</h4>
            <p><strong>Goal:</strong> {habit.goal}</p>
            <p><strong>Streak:</strong> {habit.streak || 0}</p>
            <p><strong>Status:</strong> {habit.completed ? "Completed" : "Not Completed"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
