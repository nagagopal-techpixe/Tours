import { useState } from "react";
import { X, Trash } from "lucide-react";
import { useEffect } from "react";
const UploadTourModal = ({ isOpen, onClose, onSubmit }) => {
  const [tour, setTour] = useState({
    title: "",
    days: "",
    price: "",
    destination: "",
    packageType: "",
    image: "",
    overview: "",
    itinerary: [{ day: 1, title: "", desc: "" }]
  });

  const [imagePreview, setImagePreview] = useState("");
    useEffect(() => {
    const days = Number(tour.daysNum) || 1;
    setTour(prev => ({
      ...prev,
      itinerary: Array.from({ length: days }, (_, i) => prev.itinerary[i] || { day: i + 1, title: "", desc: "" })
    }));
  }, [tour.daysNum]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const addDay = () => {
    setTour({
      ...tour,
      itinerary: [
        ...tour.itinerary,
        { day: tour.itinerary.length + 1, title: "", desc: "" }
      ]
    });
  };

  const removeDay = (index) => {
    const list = [...tour.itinerary];
    list.splice(index, 1);
    setTour({ ...tour, itinerary: list });
  };

  const handleItineraryChange = (index, field, value) => {
    const list = [...tour.itinerary];
    list[index][field] = value;
    setTour({ ...tour, itinerary: list });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://kirti.bteam11.com/api/tours/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: tour.title,
    duration: `${tour.daysNum} Days / ${tour.nightsNum} Nights`,
        price: tour.price,
        region: tour.destination,
        theme: tour.packageType,
        image: tour.image || imagePreview, // use uploaded image preview if URL empty
        description: tour.overview,
        itinerary: tour.itinerary,
      }),
    });

    if (!res.ok) throw new Error("Failed to save tour");

    const data = await res.json();
    console.log("Tour saved:", data);
    onSubmit(data); // pass data back if needed
    onClose(); // close modal
  } catch (error) {
    console.error("Error submitting tour:", error);
  }
};


  if (!isOpen) return null;
  

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[95%] max-w-6xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b flex-shrink-0">
          <h2 className="text-xl font-bold text-blue-900">Upload Tour Package</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* BODY — scrollable */}
        <div className="flex-1 overflow-y-auto grid grid-cols-12">

          {/* LEFT — IMAGE PANEL */}
          <div className="col-span-3 border-r p-6 flex flex-col items-center">
            <h3 className="font-semibold mb-3">Upload Image</h3>
            <div className="w-full aspect-[3/4] border-2 border-dashed rounded-xl flex items-center justify-center overflow-hidden">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <label className="text-gray-500 cursor-pointer text-center p-6">
                  <p className="font-medium mb-2">Drag & Drop or Click to Upload</p>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
            <input
              className="mt-4 w-full border rounded-lg px-3 py-2"
              placeholder="or paste image URL"
              value={tour.image}
              onChange={e => setTour({ ...tour, image: e.target.value })}
            />
          </div>

          {/* RIGHT — FORM PANEL */}
          <div className="col-span-8 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* GRID INPUTS */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="font-medium block mb-1">Package Title</label>
                  <input
                    className="w-full border rounded-lg px-3 py-2"
                    value={tour.title}
                    onChange={e => setTour({ ...tour, title: e.target.value })}
                    placeholder="Golden Triangle Tour"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
  <div>
    <label className="font-medium block mb-1">Total Days</label>
    <input
      type="number"
      className="w-full border rounded-lg px-3 py-2"
      value={tour.daysNum}
      onChange={e => setTour({ ...tour, daysNum: e.target.value })}
      placeholder="6"
    />
  </div>

  <div>
    <label className="font-medium block mb-1">Total Nights</label>
    <input
      type="number"
      className="w-full border rounded-lg px-3 py-2"
      value={tour.nightsNum}
      onChange={e => setTour({ ...tour, nightsNum: e.target.value })}
      placeholder="5"
    />
  </div>
</div>

                <div>
                  <label className="font-medium block mb-1">Price</label>
                  <input
                    type="number"
                    className="w-full border rounded-lg px-3 py-2"
                    value={tour.price}
                    onChange={e => setTour({ ...tour, price: e.target.value })}
                  />
                </div>
               <div>
  <label className="font-medium block mb-1">Filter</label>

  <select
    className="w-full border rounded-lg px-3 py-2"
    value={tour.destination}
    onChange={e => setTour({ ...tour, destination: e.target.value })}
  >
    <option value="">Select</option>
    <option value="North India">North India</option>
    <option value="South India">South India</option>
    <option value="Heritage">Heritage</option>
    <option value="Nature">Nature</option>
  </select>
</div>

                <div>
                  <label className="font-medium block mb-1">Package Type</label>
                  <select
                    className="w-full border rounded-lg px-3 py-2"
                    value={tour.packageType}
                    onChange={e => setTour({ ...tour, packageType: e.target.value })}
                  >
                    <option value="">Select</option>
                    <option>Family</option>
                    <option>Honeymoon</option>
                    <option>Adventure</option>
                    <option>Luxury</option>
                  </select>
                </div>
              </div>

              {/* OVERVIEW */}
              <div>
                <label className="font-medium block mb-1">Overview</label>
                <textarea
                  className="w-full border rounded-lg px-3 py-2 h-24"
                  value={tour.overview}
                  onChange={e => setTour({ ...tour, overview: e.target.value })}
                  placeholder="Brief description of the tour..."
                />
              </div>

              {/* ITINERARY */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-700">Itinerary</h3>
                  <button
                    type="button"
                    onClick={addDay}
                    className="text-amber-600 font-medium"
                  >
                    + Add Day
                  </button>
                </div>

                {tour.itinerary.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-gray-50 space-y-2">
                    <div className="flex justify-between font-semibold">
                      Day {item.day}
                      {tour.itinerary.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeDay(index)}
                          className="text-red-500"
                        >
                          <Trash size={16} />
                        </button>
                      )}
                    </div>
                    <input
                      className="w-full border-b outline-none px-1 py-1"
                      placeholder="Day Title"
                      value={item.title}
                      onChange={e => handleItineraryChange(index, "title", e.target.value)}
                    />
                    <textarea
                      className="w-full border rounded-lg px-2 py-2"
                      rows={2}
                      placeholder="Description"
                      value={item.desc}
                      onChange={e => handleItineraryChange(index, "desc", e.target.value)}
                    />
                  </div>
                ))}
              </div>

              {/* SUBMIT */}
              <button className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold">
                Save Package
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UploadTourModal;
