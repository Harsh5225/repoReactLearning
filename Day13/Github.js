import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router";

export function Github() {
  const { name } = useParams(); // Get username from URL
  const [profile, setProfile] = useState(null);
  const [searchName, setSearchName] = useState(name || ""); // Initialize with URL param
  const navigate = useNavigate(); 
  async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setProfile(data);
  }

  function handleSearch() {
    fetchUser(searchName); // Fetch data based on input
  }

  useEffect(() => {
    fetchUser(name); // Fetch user when component mounts or name changes
  }, [name]);

  return (
    <>
      <h1>Welcome to Github</h1>
      
      <input
        placeholder="Search your profile by name"
        style={{
          margin: "10px",
          border: "2px solid black",
          borderRadius: "10px",
          width: "70%",
          padding: "10px",
        }}
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)} // Corrected
      />
      
      <button onClick={handleSearch} style={{ padding: "10px", marginLeft: "10px" }}>
        Search
      </button>

      {/* Display the user data */}
      {profile && (
        <div>
          <img src={profile?.avatar_url} alt="User avatar" width="400px" />
          <h2>{profile?.login}</h2>
        </div>
      )}
    </>
  );
}
