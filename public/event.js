console.log("event participants script is loaded");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const title = params.get("title");
const participantsURL = `/events/${id}/participants`;
const mainDOM = document.querySelector("main");

content = `
<h1>${title}</h1>
<section class="participants_container"></section>
`;
mainDOM.innerHTML = content;

const init = async () => {
  const participants = await fetchParticipants();
  htmlParticipants(participants);
};

const fetchParticipants = async () => {
  try {
    const response = await fetch(participantsURL);
    const data = await response.json();
    const participants = data.participants;
    console.log(participants);
    return participants;
  } catch (error) {
    console.log(error);
  }
};

const htmlParticipants = (participants) => {
  const participantsContainer = document.querySelector(
    ".participants_container"
  );
  const allParticipants = participants
    .map((participant) => {
      const { fullName, email } = participant;
      return `
      <article class="participant">
        <h2>${fullName}</h2>
        <p>${email}</p>
      </article>
      `;
    })
    .join("");
  participantsContainer.innerHTML = allParticipants;
};

init();
