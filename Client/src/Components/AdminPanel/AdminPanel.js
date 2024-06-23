import React from 'react'
import AdminNavBar from "./AdminNavBar";
import AdminFooter from "./AdminFooter";
import AdminScreen from './AdminScreen';

const AdminPanel = () => {
  return (
    <div>
      <AdminNavBar/>
      <AdminScreen/>
      <AdminFooter/>
    </div>
  )
}

export default AdminPanel
