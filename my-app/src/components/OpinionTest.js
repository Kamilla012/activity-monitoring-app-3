import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";

function OpinionForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1); // Default rating is set to 1
  const [comment, setComment] = useState("");
  const [opinions, setOpinions] = useState([]);
  const [newData, setNewData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the sendOpinion function to send the opinion to Supabase
    sendOpinion();
  };

  async function fetchOpinion() {
    let { data, error } = await supabase.from("opinion").select("*");
    setOpinions(data);
  }
  async function sendOpinion() {
    // Create a new opinion object
    const newOpinion = {
      name,
      rating,
      opinion: comment,
    };

    // Send the opinion to Supabase
    const { data, error } = await supabase.from("opinion").insert([newOpinion]);
    setNewData(!newData);
    if (data) {
      // If the opinion is successfully added to Supabase, update the opinions state
      setOpinions((prevOpinions) => [...prevOpinions, data[0]]);
      // Clear the form fields
      setName("");
      setRating(1);
      setComment("");
    } else if (error) {
      console.error("Error sending opinion:", error);
    }
  }

  useEffect(() => {
    fetchOpinion();
  }, [newData]);

  return (
    <div className="flex flex-wrap">
      <div className="w-[500px] mt-4 p-4 bg-gray-100 rounded">
        <h2 className="text-xl font-semibold mb-4">Write Your Opinion</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Rating:</label>
            <select
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
              className="w-full p-2 border rounded"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star} stars
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Comment:</label>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Write your opinion..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 text-sm"
          >
            Submit
          </button>
        </form>
      </div>
      



      <div className="ml-10 flex flex-wrap">
        {opinions.map((opinion) => (
          <div
            key={opinion.id}
            className="bg-white p-4 rounded-lg shadow-md my-5 mx-10"
          >
            <div className="font-semibold text-blue-600">
              {opinion.name} -{" "}
              <span className="text-green-600">{opinion.rating} stars</span>
            </div>
            <div className="text-black mt-2">{opinion.opinion}</div>
          </div>
        ))}
      </div>



    </div>

    
  );
}

export default OpinionForm;
