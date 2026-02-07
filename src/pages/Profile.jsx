import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [form, setForm] = useState(user);

  const submit = async () => {
    await updateProfile(form);
    alert("Profile updated ✅");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>

      {["name","college","course","year","phone","city"].map(f => (
        <input
          key={f}
          placeholder={f.toUpperCase()}
          value={form[f] || ""}
          onChange={e => setForm({ ...form, [f]: e.target.value })}
          className="w-full border p-2 mb-3 rounded"
        />
      ))}

      <button
        onClick={submit}
        className="bg-black text-white px-6 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}