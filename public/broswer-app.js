console.log("broswer script linked");
const pageURL = "http://localhost:3000";
const getURL = "http://localhost:3000/events";

const fetchPage = async () => {
  try {
    await fetch(pageURL);
  } catch (error) {
    console.log(error);
  }
};
fetchPage();

const eventsContainer = document.querySelector(".events_container");
const paginateContainer = document.querySelector(".paginate_container");
let index = 0;
let pages = [];

const renderEvents = async () => {
  const events = await fetchEvents();
  pages = paginate(events);
  htmlEvents(pages[index]);
  htmlButtons(paginateContainer, pages, index);
};

const fetchEvents = async () => {
  try {
    const response = await fetch(getURL);
    const data = await response.json();
    const events = data.events;
    return events;
  } catch (error) {
    console.log(error);
  }
};

const htmlEvents = (events) => {
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
        <a href="registerEventForm.html?id=${id}">Register</a>
        <a href="eventsParticipants.html?id=${id}">View</a>
        </footer>
      </article>
      `;
    })
    .join("");
  eventsContainer.innerHTML = allEvents;
};

const paginate = (items) => {
  const itemsPerPage = 8;
  const numberOfPages = Math.ceil(items.length / itemsPerPage);
  const itemsPaginated = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });
  return itemsPaginated;
};

const htmlButtons = (container, pages, activeIndex) => {
  let btns = pages.map((_, pageIndex) => {
    return `<button class="page-btn ${
      activeIndex === pageIndex ? "active-btn" : null
    }" data-index="${pageIndex}">${pageIndex + 1}</button>`;
  });
  container.innerHTML = btns.join("");
};

paginateContainer.addEventListener("click", function (e) {
  index = parseInt(e.target.dataset.index);
  renderEvents();
});

renderEvents();
