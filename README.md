Habit Tracker Application
Overview
This is a Habit Tracker Application built using React, Vite, and Bootstrap. It helps users manage their daily habits by providing a dashboard to track progress, notifications for pending tasks, and a simple interface to add, update, or delete habits.

Key Features
Dashboard:

Displays the user's daily habits along with their goals, streaks, and current completion status.
Offers motivational messages when habits are completed.
Habit Management:

Users can add new habits by specifying habit name, goal, start date, and frequency (daily, weekly, or monthly).
Users can edit or delete existing habits.
Data persistence is handled through localStorage so that habits are retained across sessions.
Habit Tracking:

Users can mark habits as complete, which updates the habit's streak and triggers a motivational message.
The notification panel reminds users of pending habits for the day.
Notification Panel:

Provides reminders for incomplete habits and allows users to mark them as complete with a single click.
Utilizes react-toastify for toast notifications to inform users of habit completions and motivational messages.
Responsive Design:

The app is mobile-first and built using Bootstrap for responsiveness, ensuring a smooth experience on both mobile and desktop.
File Structure
src/components/Header.jsx:
The navigation bar with links to different sections of the app such as the Dashboard, Habit Manager, and Notification panel.
src/components/Dashboard.jsx:
Displays the list of daily habits along with their status and progress.
src/components/NotificationPanel.jsx:
Provides habit reminders and allows marking habits as complete, with toast notifications for user interaction.
src/components/HabitManager.jsx:
A form to add, edit, and delete habits. Handles storing and retrieving habits from localStorage.
Getting Started
Prerequisites
Node.js and npm installed on your machine.
A package manager like npm or yarn.
Dependencies
React Router: For handling navigation between different routes.
Bootstrap: For responsive design and pre-built components.
React Toastify: For toast notifications.
Vite: As the build tool for fast development.
Usage
The Dashboard displays an overview of your current habits, allowing you to see their status and goals.
The Manage Habits page lets you add new habits, edit existing ones, or delete them as necessary.
The Notification Panel reminds you of incomplete habits for the day, and provides a way to quickly mark them as completed.