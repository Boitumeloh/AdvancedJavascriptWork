document.addEventListener("DOMContentLoaded", () => {
  // Load notes from Local Storage
  loadNotes();

  // Handle note form submission
  document.getElementById("noteForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addNote();
  });

  // Handle chatbot interaction
  document.getElementById("chatSend").addEventListener("click", () => {
    handleChat();
  });
});

const loadNotes = () => {
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = ""; // Clear existing notes

  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.forEach((note) => {
    const noteElement = document.createElement("div");
    noteElement.innerHTML = `<h3>${note.title}</h3><p>${note.content}</p>`;
    notesList.appendChild(noteElement);
  });
};

const addNote = () => {
  const title = document.getElementById("noteTitle").value;
  const content = document.getElementById("noteContent").value;

  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push({ title, content });
  localStorage.setItem("notes", JSON.stringify(notes));

  // Clear the form and reload notes
  document.getElementById("noteForm").reset();
  loadNotes();
};

const handleChat = async () => {
  const chatInput = document.getElementById("chatInput").value;
  const chatMessages = document.getElementById("chatMessages");

  if (chatInput.trim() === "") return;

  // Display user message
  chatMessages.innerHTML += `<div><strong>You:</strong> ${chatInput}</div>`;

  // Simulate chatbot response (could be replaced with actual AI/ML model)
  const response = await getChatbotResponse(chatInput);
  chatMessages.innerHTML += `<div><strong>Chatbot:</strong> ${response}</div>`;
  document.getElementById("chatInput").value = "";
};

const getChatbotResponse = async (message) => {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  // Basic response based on keywords
  if (message.toLowerCase().includes("show all notes")) {
    return notes.length
      ? notes
          .map((note) => `<strong>${note.title}</strong>: ${note.content}`)
          .join("<br>")
      : "No notes available.";
  } else if (message.toLowerCase().includes("count")) {
    return `You have ${notes.length} notes.`;
  } else {
    return "I’m not sure how to help with that. Try asking about your notes.";
  }
};
