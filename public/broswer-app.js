console.log("broswer script linked");
const pageURL = "http://localhost:3000";
const getURL = "http://localhost:3000/events";

const fetchPage = async () => {
  try {
    const response = await fetch(pageURL);
  } catch (error) {
    console.log(error);
  }
};
fetchPage();

const eventsContainer = document.querySelector(".events_container");

const fetchEvents = async () => {
  try {
    const response = await fetch(getURL);
    const data = await response.json();
    console.log(data);
    const events = data.events;
    console.log(events);
    const allEvents = events
      .map((event) => {
        const { id, title, description, event_date: date, organizer } = event;
        return `
      <article class="event">
        <h2>${title}</h2>
        <span
          >${description}</span
        >
        <p>${date}</p>
        <p>${organizer}</p>
        <footer>
          <button data-id="${id}">Register</button>
          <button data-id="${id}">View</button>
        </footer>
      </article>
      `;
      })
      .join("");
    eventsContainer.innerHTML = allEvents;
  } catch (error) {
    console.log(error);
  }
};

fetchEvents();
