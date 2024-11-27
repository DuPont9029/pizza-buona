import React from 'react';
import Sidebar from './components/sidebar';
import Form from './components/form';

const App: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 p-4">
        <Form />
      </div>
    </div>
  );
};

export default App;