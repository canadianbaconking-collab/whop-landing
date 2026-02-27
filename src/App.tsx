/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WhopPage from './pages/Whop';
import FitCheckPage from './pages/FitCheck';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Serve landing page at root */}
        <Route path="/" element={<WhopPage />} />

        {/* Fit Check Page */}
        <Route path="/fit-check" element={<FitCheckPage />} />

        {/* Redirect legacy /whop route to root */}
        <Route path="/whop" element={<Navigate to="/" replace />} />

        {/* Redirect any unknown routes to root */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
