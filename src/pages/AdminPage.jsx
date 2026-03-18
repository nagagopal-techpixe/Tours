import React, { useState } from "react";
import { Users, Map, AlertCircle, LogOut, Upload, Eye, Trash2, User, Key,UserPlus  } from "lucide-react";
import UploadTourModal from "./PackagePopup.jsx";
import useTours from "../data/tours.js";
import ChangePasswordForm from "./ChangePasswordPage.jsx";
import CreateAdminModal from "./CreateAdmin.jsx";
/* ================= HELPER ================= */
const DetailItem = ({ label, value, badge }) => {
  
  
  return (
    <div className="flex justify-between items-center border-b pb-2">

      <p className="text-gray-500 font-semibold">
        {label}
      </p>

      {badge ? (
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold
          ${
            value === "New"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {value}
        </span>
      ) : (
        <p className="text-gray-800 font-medium">
          {value || "N/A"}
        </p>
      )}
    </div>
  );
};

/* ================= MAIN ================= */
const AdminPage = ({ leads = [], setLeads, setIsLoggedIn }) => {
const [showChangePassword, setShowChangePassword] = useState(false);
  const { TOURS = [], loading, error } = useTours();
const [showCreateAdmin, setShowCreateAdmin] = useState(false);
  const [open, setOpen] = useState(false);
const [adminMenuOpen, setAdminMenuOpen] = useState(false);
  //  For View Popup
  const [selectedLead, setSelectedLead] = useState(null);
  const [showPackages, setShowPackages] = useState(false);
const [packages, setPackages] = useState([]);
const [loadingPackages, setLoadingPackages] = useState(false);
const [editTour, setEditTour] = useState(null);
// const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("adminLoggedIn");
    setIsLoggedIn(false);
  };

const fetchPackages = async () => {
  setShowPackages(true); // open modal immediately
  setLoadingPackages(true); // show loading indicator

  try {
    const res = await fetch("https://kirti.bteam11.com/api/tours");
    const data = await res.json();

    setPackages(data?.data || data || []);
  } catch (error) {
    console.error("Error fetching packages:", error);
    setPackages([]); // clear packages on error
  } finally {
    setLoadingPackages(false); // hide loading when done
  }
};


const handleDelete = async (id) => {
  if (!window.confirm("Delete this enquiry?")) return;

  try {
    const res = await fetch(
      `https://kirti.bteam11.com/api/tours/enquiries/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json(); //  Read backend response

    if (!res.ok) {
      throw new Error(data.message || "Delete failed");
    }

    //  Update UI
    setLeads((prev) => prev.filter((l) => l._id !== id));

    //  Show success
    alert(data.message);

  } catch (err) {
    console.error(err);
    alert(err.message || "Delete failed");
  }
};



const handleStatusUpdate = async (id, status) => {
  try {
    const res = await fetch(
      `https://kirti.bteam11.com/api/tours/enquiries/${id}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    // Update selected lead (modal)
    setSelectedLead(data);

    //Update table list
    setLeads((prev) =>
      prev.map((lead) =>
        lead._id === id ? data : lead
      )
    );

  } catch (error) {
    console.error("Status update failed:", error.message);
    alert("Failed to update status");
  }
};


// DELETE FUNCTION
const handleDeletePackage = async (id) => {
  if (!confirm("Are you sure you want to delete this package?")) return;

  try {
    const res = await fetch(`https://kirti.bteam11.com/api/tours/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("Failed to delete package");

    // Remove deleted package from UI
    setPackages((prev) => prev.filter((pkg) => pkg._id !== id));

    alert("Package deleted successfully!");
  } catch (err) {
    console.error(err);
    alert("Error deleting package");
  }
};
  /* ================= LOADING ================= */
  if (loading)
    return (
      <p className="p-6 text-center text-gray-500">
        Loading tours…
      </p>
    );

  if (error)
    return (
      <p className="p-6 text-center text-red-500">
        Error: {error}
      </p>
    );
const InfoItem = ({ label, value, badge }) => {
  return (
    <div className="flex flex-col gap-1">

      <span className="text-xs text-gray-500 font-semibold">
        {label}
      </span>

      {badge ? (
        <span
          className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-bold
          ${
            value === "New"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {value}
        </span>
      ) : (
        <span className="text-gray-800 font-medium break-words">
          {value || "N/A"}
        </span>
      )}

    </div>
  );
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 pt-28 p-4 sm:p-8">

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
       <div className="bg-white rounded-2xl shadow-md p-6 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">

  <h1 className="text-3xl font-bold text-blue-900">
    Admin Dashboard
  </h1>

  <div className="flex gap-3 w-full sm:w-auto flex-wrap">

    {/* Upload Package */}
    <button
      onClick={() => setOpen(true)}
      className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition w-full sm:w-auto"
    >
      <Upload size={18} />
      Upload Package
    </button>

  <button
  onClick={fetchPackages}
  className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition w-full sm:w-auto"
>
  <Eye size={18} />
  View Packages
</button>


  <div className="relative">

  {/* Toggle Button */}
  <button
    onClick={() => setAdminMenuOpen(!adminMenuOpen)}
    className="flex items-center gap-2 bg-blue-950 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-blue-900 transition"
  >
    <User size={18} />
    Admin
  </button>

  {/* Dropdown */}
  {adminMenuOpen && (
    <div className="absolute right-0 mt-2 w-56 bg-white shadow-xl rounded-xl border z-50 overflow-hidden">

      {/* Create New Admin */}
      <button
        onClick={() => {
          setShowCreateAdmin(true);
          setAdminMenuOpen(false);
        }}
        className="flex items-center gap-2 w-full px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
      >
        <UserPlus size={16} />
        Create New Admin
      </button>

      {/* Divider */}
      <div className="border-t"></div>

      {/* Change Password */}
      <button
        onClick={() => {
          setShowChangePassword(true);
          setAdminMenuOpen(false);
        }}
        className="flex items-center gap-2 w-full px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
      >
        <Key size={16} />
        Change Password
      </button>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition"
      >
        <LogOut size={16} />
        Logout
      </button>

    </div>
  )}
</div>
  
   

  </div>

</div>

        {/* ================= MODAL ================= */}
        <UploadTourModal
  isOpen={open}
  onClose={() => {
    setOpen(false);
    setEditTour(null);
  }}
  onSubmit={(data) => {
    fetchPackages(); // refresh list
  }}
  editTour={editTour}
/>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <StatCard
            title="Total Leads"
            value={leads.length}
            icon={<Users className="text-blue-600" />}
            bg="bg-blue-100"
          />

          <StatCard
            title="Active Tours"
            value={TOURS.length}
            icon={<Map className="text-green-600" />}
            bg="bg-green-100"
          />

          <StatCard
            title="New Leads"
            value={leads.filter(l => l.status === "New").length}
            icon={<AlertCircle className="text-amber-600" />}
            bg="bg-amber-100"
          />

        </div>

        {/* ================= TABLE ================= */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

  <div className="px-6 py-4 border-b font-bold text-lg text-gray-800">
    Recent Enquiries
  </div>

  <div className="overflow-x-auto">
  <table className="w-full table-auto text-sm text-left">
    <thead className="bg-blue-50 text-blue-800 font-bold uppercase text-xs">
      <tr>
        <th className="px-4 py-3">Date</th>
        <th className="px-4 py-3">Name</th>
        <th className="px-4 py-3 hidden md:table-cell">Email</th>
        <th className="px-4 py-3 text-center">Status</th>
        <th className="px-4 py-3 text-center">Action</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-100">
      {leads.length === 0 ? (
        <tr>
          <td
            colSpan="5"
            className="px-6 py-8 text-center text-gray-400"
          >
            No enquiries yet.
          </td>
        </tr>
      ) : (
        leads.map((lead) => (
          <tr
            key={lead._id}
            className="hover:bg-blue-50 transition"
          >
            <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
              {new Date(lead.date).toLocaleDateString("en-IN")}
            </td>

            <td className="px-4 py-3 font-semibold text-blue-900">
              {lead.name}
            </td>

            <td className="px-4 py-3 hidden md:table-cell text-gray-600">
              {lead.email}
            </td>

            <td className="px-4 py-3 text-center">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  lead.status === "New"
                    ? "bg-blue-100 text-blue-700"
                    : lead.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {lead.status || "New"}
              </span>
            </td>

            <td className="px-4 py-3 text-center">
              <div className="flex justify-center items-center gap-3">
                <button
                  onClick={() => setSelectedLead(lead)}
                  className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                  title="View"
                >
                  <Eye size={16} />
                </button>

                <button
                  onClick={() => handleDelete(lead._id)}
                  className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
                  title="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>



</div>



{showChangePassword && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">

    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h2 className="text-lg font-bold text-blue-900">
          Change Password
        </h2>

        <button
          onClick={() => setShowChangePassword(false)}
          className="text-gray-400 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>
      </div>

      {/* Body */}
      <div className="p-6">

        <ChangePasswordForm
          onClose={() => setShowChangePassword(false)}
        />

      </div>

    </div>
  </div>
)}


{/* ================= PACKAGES POPUP ================= */}
{showPackages && (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">

    <div className="bg-white rounded-2xl shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b">

        <h2 className="text-xl font-bold text-blue-900">
          All Packages
        </h2>

        <button
          onClick={() => setShowPackages(false)}
          className="text-2xl text-gray-400 hover:text-red-500"
        >
          ✕
        </button>

      </div>

      {/* Body */}
      <div className="p-6 overflow-y-auto max-h-[80vh]">

        {loadingPackages ? (
  <div className="flex justify-center items-center py-10">
    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-600"></div>
  </div>
) : packages.length === 0 ?(
  <p className="text-center text-gray-400 py-10">No packages found</p>
): (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {packages.map((pkg) => (
  <div
    key={pkg._id}
    className="border rounded-xl shadow-sm hover:shadow-md transition p-4 relative"
  >

    {/* Image */}
    <img
      src={pkg.image}
      alt={pkg.title}
      className="w-full h-40 object-cover rounded-lg mb-3"
    />

    {/* Title */}
    <h3 className="font-bold text-blue-900 mb-1">
      {pkg.title}
    </h3>

    {/* Location */}
    <p className="text-sm text-gray-500 mb-2">
      📍 {pkg.region}
    </p>

    {/* Price */}
    <p className="font-semibold text-green-600 mb-2">
      ₹ {pkg.price}
    </p>

    {/* Days */}
    <p className="text-sm text-gray-600 mb-2">
      {pkg.duration}
    </p>

    {/* DELETE BUTTON */}
    <button
      onClick={() => handleDeletePackage(pkg._id)}
      className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition"
    >
      Delete
    </button>
     <button
  onClick={() => {
  setEditTour(pkg);
  setOpen(true);
  setShowPackages(false);
}}
  className="absolute top-2 left-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
>
  Edit
</button>

  </div>
))}


          </div>

        )}

      </div>

    </div>

  </div>
)}

{showCreateAdmin && (
  <CreateAdminModal onClose={() => setShowCreateAdmin(false)} />
)}
       {/* ================= VIEW POPUP ================= */}
{selectedLead && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">

    <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">

        <h2 className="text-lg font-bold text-blue-900">
          Enquiry Details
        </h2>

        <button
          onClick={() => setSelectedLead(null)}
          className="text-gray-400 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

      </div>

      {/* Body */}
      <div className="p-6 max-h-[70vh] overflow-y-auto text-sm">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">

          <InfoItem label="Name" value={selectedLead.name} />
          <InfoItem label="Email" value={selectedLead.email} />
          <InfoItem label="Phone" value={selectedLead.phone} />
          <InfoItem
            label="Date"
            value={new Date(selectedLead.date).toLocaleString("en-IN")}
          />

          <InfoItem label="Budget" value={selectedLead.budget ? `₹ ${selectedLead.budget}` : "N/A"} />
          <InfoItem label="Persons" value={selectedLead.pax} />
          <InfoItem label="Days" value={selectedLead.days} />

     <div className="flex items-center gap-3">
  <span className="font-medium">Status:</span>

  <select
    value={selectedLead?.status || "New"}
    onChange={(e) =>
      handleStatusUpdate(selectedLead._id, e.target.value)
    }
    className="border rounded px-2 py-1 text-sm"
  >
    <option value="New">New</option>
    <option value="Contacted">Contacted</option>
    <option value="Pending">Pending</option>
    <option value="Closed">Closed</option>
  </select>
</div>



        </div>

        {/* Message */}
        <div className="mt-6">

          <p className="text-gray-500 font-semibold mb-2">
            Message
          </p>

          <div className="bg-gray-50 border rounded-lg p-4 text-gray-700 leading-relaxed">
            {selectedLead.message || "No message"}
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t bg-gray-50 flex justify-end">

        <button
          onClick={() => setSelectedLead(null)}
          className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Close
        </button>

      </div>

    </div>
  </div>
)}


      </div>
    </div>
  );
};

/* ================= STAT CARD ================= */
const StatCard = ({ title, value, icon, bg }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">

      <div className="flex items-center gap-4">

        <div className={`p-3 ${bg} rounded-xl`}>
          {icon}
        </div>

        <div>
          <p className="text-gray-500 text-sm font-semibold">
            {title}
          </p>

          <p className="text-3xl font-bold text-blue-900">
            {value}
          </p>
        </div>

      </div>

    </div>
  );
};

export default AdminPage;
