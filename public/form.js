const form = document.querySelector("#event-registration-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fullName = document.querySelector("#full-name").value;
  const email = document.querySelector("#email").value;
  const dob = document.querySelector("#date-of-birth").value;
  const whereHeard = document.querySelector(
    'input[name="where-heard"]:checked'
  ).value;
  const params = new URLSearchParams(window.location.search);

  const id = params.get("id");
  try {
    const response = await axios.post(`/events/${id}/register`, {
      eventID: id,
      fullName,
      email,
      dob,
      hearFrom: whereHeard,
    });
    if (response) {
      document.getElementById("successMessage").classList.remove("hidden");
      setTimeout(function () {
        document.getElementById("successMessage").classList.add("hidden");
        window.location.href = "index.html";
      }, 3000);
    }
  } catch (error) {
    console.log(error);
  }
});
