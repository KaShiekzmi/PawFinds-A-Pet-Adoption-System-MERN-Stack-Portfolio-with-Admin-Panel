import React from 'react';

function AdminFooter() {
  return (
    <footer className="admin-footer">
      <p>&copy; {new Date().getFullYear()} Admin Panel. All rights reserved.</p>
    </footer>
  );
}

export default AdminFooter;
