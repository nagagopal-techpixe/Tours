import React, { useState } from "react";
import UploadTourModal from "./PackagePopup.jsx";
import useTours from "../data/tours.js";

const AdminPage = ({ leads = [] }) => {
  const { TOURS = [], loading, error } = useTours();
  const [open, setOpen] = useState(false);

  if (loading) return <p>Loading tours…</p>;
  if (error) return <p>Error: {error}</p>;
const handleLogout = () => {
  localStorage.removeItem('adminLoggedIn');
  setIsLoggedIn(false);
};

  return (
    <div className="pt-32 min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-950">
            Admin Dashboard
          </h1>

          <button
            className="bg-white px-4 py-2 rounded shadow text-sm font-bold"
            onClick={() => setOpen(true)}
          >
            Upload Packages
          </button>
       <button
  className="bg-white px-4 py-2 rounded shadow text-sm font-bold"
  onClick={() => {
    localStorage.removeItem('adminLoggedIn');
    setIsLoggedIn(false);
  }}
>
  Logout
</button>

        </div>

        {/* ==== MODAL ==== */}
        <UploadTourModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onSubmit={(data) => console.log("Submit to backend", data)}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500 text-xs font-bold uppercase">
              Total Leads
            </h3>
            <p className="text-3xl font-bold text-blue-950 mt-2">
              {leads.length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500 text-xs font-bold uppercase">
              Active Tours
            </h3>
            <p className="text-3xl font-bold text-blue-950 mt-2">
              {TOURS.length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500 text-xs font-bold uppercase">
              Pending Actions
            </h3>
            <p className="text-3xl font-bold text-amber-500 mt-2">
              {leads.filter((l) => l.status === "New").length}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b font-bold text-gray-800">
            Recent Enquiries
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 font-bold uppercase text-xs">
                <tr>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Phone</th>
                  <th className="px-6 py-3">Details</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {leads.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-8 text-center text-gray-400"
                    >
                      No enquiries yet.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{lead.date}</td>
                      <td className="px-6 py-4 font-bold text-blue-900">
                        {lead.name}
                      </td>
                      <td className="px-6 py-4">{lead.email}</td>
                      <td className="px-6 py-4">{lead.phone}</td>
                      <td className="px-6 py-4 truncate max-w-xs text-gray-500">
                        {lead.budget} | {lead.pax} pax | {lead.days} |{" "}
                        {lead.message}
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
