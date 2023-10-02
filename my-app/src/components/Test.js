import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import DoughnutChartCals from "./DoughnutChartCals";
import BarChart from "./BarChartCals";
import DatePicker from "react-datepicker";
import { Bar } from "react-chartjs-2";
import TodoList from "./TodoList";
import OpinionForm from "./OpinionTest";

export default function Test() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [idUser, setIdUser] = useState([]);
  const [login, setLogin] = useState(false);
  const [loginData, setLoginData] = useState();
  const [data, setData] = useState([]);
  const [selectedFood, setSelectedFood] = useState("");
  const [foodName, setFoodName] = useState("");
  const [gramsConsumed, setGramsConsumed] = useState("");
  const [caloriesPerGram, setCaloriesPerGram] = useState(null);
  const [proteinPerGram, setProteinPerGram] = useState(null);
  const [carbsPerGram, setCarbsPerGram] = useState(null);
  const [caloriesConsumed, setCaloriesConsumed] = useState(null);
  const [proteinConsumed, setProteinConsumed] = useState(null);
  const [carbsConsumed, setCarbsConsumed] = useState(null);
  const [foodConsumed, setFoodConsumed] = useState([]);
  const [totalCaloriesConsumed, setTotalCaloriesConsumed] = useState(0);
  const [calorie_range, setCalorie_range] = useState();
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [dateForSelStart, setDateForSelStart] = useState();
  const [dateForSelEnd, setDateForSelEnd] = useState();
  const [groupedBar, setGroupedBar] = useState({});

  const today = new Date();

  // Format today's date in "year-month-day" format
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Add 1 to month because it's zero-based
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const bruh = "10-04-2023";

  let table = ["name", "grams", "calories", "proteins", "carbs"];

  async function fetchData() {
    let { data: groupsFood, error } = await supabase
      .from("groups_food")
      .select("food(*)");

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setData(groupsFood);
    }
  }

  async function fetchFoodConsumed() {
    const { data, error } = await supabase
      .from("food_consumed")
      .select("*")
      .gte("date", dateForSelStart)
      .lte("date", dateForSelEnd)
      .eq("user_id", idUser);
    if (error) {
      console.error("Error fetching data:", error);
      return;
    } else {
      // Group the data by date
      const newData = {};

      data.forEach((item) => {
        const date = item.date;
        if (!newData[date]) {
          newData[date] = [];
        }
        newData[date].push(item);
      });

      // Update the state with the grouped data
      setGroupedBar(newData);
    }

    if (!data || data.length === 0) {
      // Handle the case where there is no data
      setFoodConsumed([]);
      setTotalCaloriesConsumed(0);
      return;
    }

    setFoodConsumed(data);

    // Calculate the total calories consumed
    const totalCalories = data.reduce(
      (total, food) => total + food.calories_consumed,
      0
    );
    setTotalCaloriesConsumed(totalCalories);

    const groupedData = foodConsumed.reduce((result, item) => {
      if (!result[item.date]) {
        result[item.date] = [];
      }
      result[item.date].push(item);
      return result;
    }, {});

    console.log(groupedData);
  }

  useEffect(() => {
    fetchFoodConsumed();
  }, [idUser, selectedStartDate, selectedEndDate]);

  const handleLogin = async (e) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (data) {
      setLoginData(data);
      setLogin(true);

      let { data: user, error } = await supabase
        .from("user")
        .select("*")
        .eq("email", data.session.user.email)
        .single();
      setIdUser(user.id);
      setCalorie_range(user.calorie_range);
      console.log(user);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFoodChange = async (event) => {
    setSelectedFood(event.target.value);

    const selectedFoodData = data.find(
      (item) => item.food.id.toString() === event.target.value
    );

    if (selectedFoodData) {
      setFoodName(selectedFoodData.food.name);

      const foodId = selectedFoodData.food.id;
      const { data: foodDetails, error } = await supabase
        .from("food")
        .select("calories, protein, carbs")
        .eq("id", foodId)
        .single();
      if (!error) {
        setCaloriesPerGram(foodDetails.calories);
        setProteinPerGram(foodDetails.protein);
        setCarbsPerGram(foodDetails.carbs);
      } else {
        console.error("Error fetching food details:", error);
        setCaloriesPerGram(null);
        setProteinPerGram(null);
        setCarbsPerGram(null);
      }
    } else {
      setFoodName("");
      setCaloriesPerGram(null);
      setProteinPerGram(null);
      setCarbsPerGram(null);
    }
  };

  const handleGramsChange = (event) => {
    setGramsConsumed(event.target.value);
  };

  const calculateNutrients = () => {
    if (
      selectedFood &&
      gramsConsumed !== "" &&
      caloriesPerGram !== null &&
      proteinPerGram !== null &&
      carbsPerGram !== null
    ) {
      const totalCalories = (gramsConsumed * caloriesPerGram).toFixed(2);
      const totalProtein = (gramsConsumed * proteinPerGram).toFixed(2);
      const totalCarbs = (gramsConsumed * carbsPerGram).toFixed(2);

      setCaloriesConsumed(totalCalories);
      setProteinConsumed(totalProtein);
      setCarbsConsumed(totalCarbs);
    } else {
      setCaloriesConsumed(null);
      setProteinConsumed(null);
      setCarbsConsumed(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loginData]);

  useEffect(() => {
    calculateNutrients(); // Calculate nutrients when any of the relevant values change
  }, [
    selectedFood,
    gramsConsumed,
    caloriesPerGram,
    proteinPerGram,
    carbsPerGram,
  ]);

  const submitConsumedFood = async () => {
    if (selectedFood && gramsConsumed !== "" && caloriesPerGram !== null) {
      try {
        const { data: insertedData, error } = await supabase
          .from("food_consumed")
          .upsert([
            {
              food_name: foodName,
              grams_consumed: gramsConsumed,
              calories_consumed: caloriesConsumed,
              protein_consumed: proteinConsumed,
              carbs_consumed: carbsConsumed,
              user_id: idUser,
              date: formattedDate,
            },
          ]);

        if (error) {
          console.error("Error inserting data:", error);
        } else if (!data) {
          alert("Login first");
        } else {
          console.log("Data inserted successfully:", insertedData);

          // Fetch the updated foodConsumed data after inserting the new item
          await fetchFoodConsumed();

          // Clear the form fields after successful submission
          setSelectedFood("");
          setGramsConsumed("");
          setCaloriesConsumed(null);
          setProteinConsumed(null);
          setCarbsConsumed(null);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("Incomplete data. Cannot submit.");
    }
  };

  function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 to month because it's zero-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const handleDateStartChange = (date) => {
    const testing = formatDateToYYYYMMDD(date);
    setDateForSelStart(testing);
    setSelectedStartDate(date);
  };
  const handleDateEndChange = (date) => {
    const testing = formatDateToYYYYMMDD(date);
    setDateForSelEnd(testing);
    setSelectedEndDate(date);
  };

  return (
    <div className="flex flex-row">
      {!login && (
        <div className="flex justify-around items-center h-screen bg-black flex-col mr-10">
          <div className="w-64 h-64 bg-white rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <div className="mb-4">
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md border border-gray-300"
                placeholder="E-mail"
                value={email}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full px-3 py-2 rounded-md border border-gray-300"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button
              className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      )}

      <div className="bg-red-500 mr-10">
        <h1>Calorie Tracker</h1>
        <form>
          <div>
            <label>Select Food:</label>
            <select value={selectedFood} onChange={handleFoodChange}>
              <option value="">Select a food</option>
              {data.map((item) => (
                <option key={item.food.id} value={item.food.id}>
                  {item.food.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Grams Consumed:</label>
            <input
              type="number"
              value={gramsConsumed}
              onChange={handleGramsChange}
            />
          </div>
          {gramsConsumed && selectedFood && (
            <div>
              <p>Calories Consumed: {caloriesConsumed} calories</p>
              <p>Protein Consumed: {proteinConsumed} grams</p>
              <p>Carbs Consumed: {carbsConsumed} grams</p>
            </div>
          )}
          <button type="button" onClick={submitConsumedFood}>
            Submit Consumed Food
          </button>
        </form>
      </div>
      {login && foodConsumed !== null && (
        <div className="bg-red-500 w-50 w-full">
          <div className="flex justify-evenly">
            {table.map((item) => (
              <div>
                <div key={item}>{item}</div>
              </div>
            ))}
          </div>
          {foodConsumed.map((food) => (
            <div key={food.id} className="flex justify-around">
              <div>{food.food_name}</div>
              <div>{food.grams_consumed}</div>
              <div>{food.calories_consumed}</div>
              <div>{food.protein_consumed}</div>
              <div>{food.carbs_consumed}</div>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-col">
        <DatePicker
          selected={selectedStartDate}
          onChange={handleDateStartChange}
          dateFormat="dd/MM/yyyy"
        />
        <DatePicker
          className="mt-4"
          selected={selectedEndDate}
          onChange={handleDateEndChange}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="h-full">
        <TodoList props={idUser} />
      </div>
      <div>
        <OpinionForm />
      </div>
    </div>
  );
}
