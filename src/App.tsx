/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WhopPage from './pages/Whop';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/whop" element={<WhopPage />} />
        {/* Redirect root to /whop for convenience in this preview */}
        <Route path="*" element={<Navigate to="/whop" replace />} />
      </Routes>
    </Router>
  );
}
