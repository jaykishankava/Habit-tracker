// src/components/NotificationPanel.jsx
import { useContext, useEffect, useState } from "react";
import { HabitsContext } from "../context/HabitsContext";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const NotificationPanel = () => {
  const { habits, setHabits } = useContext(HabitsContext);
  const [notifications, setNotifications] = useState([]);

  // Load notifications for pending habits
  useEffect(() => {
    const pendingHabits = habits.filter((habit) => !habit.completed);

    const reminders = pendingHabits.map((habit) => ({
      id: habit.id,
      message: `Reminder: Don't forget to complete "${habit.name}" today!`,
    }));

    setNotifications(reminders);
  }, [habits]);

  // Function to mark a habit as complete
  const handleCompleteHabit = (id) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, completed: true } : habit
    );

    setHabits(updatedHabits);
    showMotivationMessage();
    toast.success("Habit marked as complete!"); // Toast notification for completion
  };

  // Function to display a motivational message
  const showMotivationMessage = () => {
    const messages = [
      "Great job! Keep up the good work!",
      "You're on fire! Don't stop now!",
      "Every small step counts! You're doing amazing!",
      "Fantastic! You're building great habits!",
      "Way to go! Keep pushing towards your goals!",
    ];
    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];
    
    toast.info(randomMessage); // Toast notification for motivational message
  };

  return (
    <div className="notification-panel">
      <h4>Habit Reminders</h4>
      {notifications.length === 0 ? (
        <p>No new reminders for today!</p>
      ) : (
        <ul className="list-group">
          {notifications.map((notification) => (
            <li key={notification.id} className="list-group-item" style={{backgroundColor:'#23c6af'}}>
              {notification.message}
              <button
                className="btn btn-success btn-sm float-end"
                onClick={() => handleCompleteHabit(notification.id)}
              >
                Complete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationPanel;
