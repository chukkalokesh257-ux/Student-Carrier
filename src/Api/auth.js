// Base URL of our backend authentication APIs
const API_URL = "http://localhost:8002/api/auth";

// Function used to send login details to the backend
export async function loginUser(email, password) {

  // Send a POST request to the login API
  const response = await fetch(`${API_URL}/login`, {
    
    // HTTP method
    method: "POST",

    // Tell the backend that we are sending JSON data
    headers: {
      "Content-Type": "application/json"
    },

    // Convert email and password into JSON
    // and send them in the request body
    body: JSON.stringify({
      email,
      password
    })
  });

  // Convert the backend's JSON response into a JavaScript object
  const data = await response.json();

  // Return both the HTTP status and the response data
  return {
    ok: response.ok,
    data
  };
}