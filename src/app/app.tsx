import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';

import 'app/config/css-variables.css';

export const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
