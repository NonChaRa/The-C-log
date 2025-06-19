import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [meals, setMeals] = useState({
    breakfast: [],
    lunch: [],
    snacks: [],
    dinner: [],
  });

  const [newItem, setNewItem] = useState({ name: '', kcal: '', type: '' });
  const navigate = useNavigate();

  const handleAddMeal = () => {
    if (!newItem.name || !newItem.kcal || !newItem.type) return;

    setMeals(prev => ({
      ...prev,
      [newItem.type]: [...prev[newItem.type], { name: newItem.name, kcal: Number(newItem.kcal) }]
    }));

    setNewItem({ name: '', kcal: '', type: '' });
  };

  const totalKcal = Object.values(meals).flat().reduce((sum, item) => sum + item.kcal, 0);

  return (
    <div className="dashboard">
    <button className="BackButton" onClick={() => navigate('/')}>Back</button>
      <div className="summary-box">
        <h2>{totalKcal} kcal</h2>
        <div className="macros">
          <div className="bar carbs"></div>
          <div className="bar protein"></div>
          <div className="bar fat"></div>
        </div>
      </div>

      <div className="meal-sections">
        {Object.entries(meals).map(([mealType, items]) => (
          <div key={mealType} className="meal-block">
            <h3>
              {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
              <button className="add-btn" onClick={() => setNewItem({ ...newItem, type: mealType })}>+</button>
            </h3>
            <ul>
              {items.map((item, i) => (
                <li key={i}>{item.name} - {item.kcal} kcal</li>
              ))}
            </ul>

            {newItem.type === mealType && (
              <div className="input-inline">
                <input
                  type="text"
                  placeholder="Food name"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="kcal"
                  value={newItem.kcal}
                  onChange={(e) => setNewItem({ ...newItem, kcal: e.target.value })}
                />
                <button onClick={handleAddMeal}>Add</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
