import React, { useState } from "react";

const ChangePasswordForm = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
const email = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    // console.log(user.id)


    try {
      setLoading(true);

      const res = await fetch(
        "https://kirti.bteam11.com/api/tours/change-password/",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: user.id,
            oldPassword,
            newPassword,
          }),
        }
      );

      const data = await res.json();
      console.log("data",data)

      if (!res.ok) throw new Error(data.message);

      alert("Password changed successfully!");
      onClose();

    } catch (err) {
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
<p className="text-sm text-gray-600 mb-2">
  Email: <span className="font-semibold text-blue-900">{email.email}</span>
</p>
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="password"
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-900 transition"
      >
        {loading ? "Updating..." : "Update Password"}
      </button>

    </form>
    </>
  );
};

export default ChangePasswordForm;