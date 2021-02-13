import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardPage = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <ul>
        <Link to="/ingredients"><li>Ingredients</li></Link>
        <Link to="/recipes"><li>Recipes</li></Link>
      </ul>
    </>
  );
}
