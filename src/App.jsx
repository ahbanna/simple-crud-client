import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    // send data to server side start
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("users added successfully");
          form.reset;
        }
      });
    // send data to server side end
  };
  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <br />
        <input type="email" name="email" id="" placeholder="Your email" />
        <br />
        <input type="submit" value="add user" />
      </form>
    </>
  );
}

export default App;
