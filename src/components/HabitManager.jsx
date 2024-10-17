// src/components/HabitManager.jsx
import { useContext, useState, useEffect } from "react";
import { HabitsContext } from "../context/HabitsContext";

const HabitManager = () => {
  const { habits, setHabits } = useContext(HabitsContext);
  const [habitName, setHabitName] = useState("");
  const [goal, setGoal] = useState("");
  const [startDate, setStartDate] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const [editingHabitId, setEditingHabitId] = useState(null);

  // Load existing habits from localStorage when the component mounts
  useEffect(() => {
    const savedHabits = localStorage.getItem("habits");
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    }
  }, [setHabits]);

  // Update localStorage whenever habits change
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // Load existing habit details when editing
  useEffect(() => {
    if (editingHabitId) {
      const habitToEdit = habits.find(habit => habit.id === editingHabitId);
      if (habitToEdit) {
        setHabitName(habitToEdit.name);
        setGoal(habitToEdit.goal);
        setStartDate(habitToEdit.startDate);
        setFrequency(habitToEdit.frequency);
      }
    }
  }, [editingHabitId, habits]);

  // Function to add or update a habit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingHabitId) {
      // Update existing habit
      const updatedHabits = habits.map(habit =>
        habit.id === editingHabitId
          ? { ...habit, name: habitName, goal, startDate, frequency }
          : habit
      );
      setHabits(updatedHabits);
    } else {
      // Add new habit
      const newHabit = {
        id: Date.now(), // Unique ID based on timestamp
        name: habitName,
        goal,
        startDate,
        frequency,
        completed: false,
      };
      setHabits([...habits, newHabit]);
    }

    // Reset form
    resetForm();
  };

  // Function to reset the form
  const resetForm = () => {
    setHabitName("");
    setGoal("");
    setStartDate("");
    setFrequency("daily");
    setEditingHabitId(null);
  };

  // Function to handle editing a habit
  const handleEdit = (habit) => {
    setEditingHabitId(habit.id);
  };

  // Function to delete a habit
  const handleDelete = (id) => {
    const updatedHabits = habits.filter(habit => habit.id !== id);
    setHabits(updatedHabits);
  };

  return (
    <div className="habit-manager mb-5">
      <form onSubmit={handleSubmit} className="mb-4 border-dark border p-3 rounded" style={{backgroundColor:'#23c6af'}}>
      <h2>Manage Your Habits</h2>
        <div className="mb-3">
          <input
          style={{backgroundColor:'#23c6af'}}
            type="text"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            className="form-control"
            placeholder="Habit Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
          style={{backgroundColor:'#23c6af'}}
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="form-control"
            placeholder="Goal"
            required
          />
        </div>
        <div className="mb-3">
          <input
          style={{backgroundColor:'#23c6af'}}
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <select
          style={{backgroundColor:'#23c6af'}}
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="form-select"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {editingHabitId ? "Update Habit" : "Add Habit"}
        </button>
        <button type="button" onClick={resetForm} className="btn btn-warning ms-2">
          Cancel
        </button>
      </form>

      <h3>Your Habits</h3>    
      <ul className="list-group" >
        {habits.map((habit) => (
          <li key={habit.id} className="list-group-item" style={{backgroundColor:'#23c6af'}}>
            <strong>{habit.name}</strong> - Goal: {habit.goal}, Start: {habit.startDate}, Frequency: {habit.frequency}
            <div className="float-end">
              <button className="btn btn-success btn-sm" onClick={() => handleEdit(habit)}>
                Edit
              </button>
              <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(habit.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitManager;
