
const chatbotButton = document.createElement('button');
chatbotButton.id = 'chatbot-button';
chatbotButton.innerHTML = '💬';
document.body.appendChild(chatbotButton);

const chatbotContainer = document.createElement('div');
chatbotContainer.id = 'chatbot-container';
chatbotContainer.innerHTML = `
  <div id="chatbot-header">Javed's AI Assistant</div>
  <div id="chatbot-messages"></div>
  <div id="chatbot-input-area">
    <input id="chatbot-input" type="text" placeholder="Ask about Javed..." />
    <button id="chatbot-send">➤</button>
  </div>
`;
document.body.appendChild(chatbotContainer);

chatbotButton.addEventListener('click', () => {
  chatbotContainer.style.display =
    chatbotContainer.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('chatbot-send').addEventListener('click', sendMessage);
document.getElementById('chatbot-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const input = document.getElementById('chatbot-input');
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  input.value = '';
  respondToUser(text);
}

function addMessage(text, sender) {
  const msgContainer = document.createElement('div');
  msgContainer.className = 'message ' + sender;
  msgContainer.textContent = text;
  document.getElementById('chatbot-messages').appendChild(msgContainer);
  msgContainer.scrollIntoView({ behavior: 'smooth' });
}

function respondToUser(text) {
  let response = '';
  const msg = text.toLowerCase();
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hy')) {
    response = 'Hi there! I am Javed’s portfolio assistant. How can I help you?';
  } else if (msg.includes('who') && msg.includes('javed')) {
    response = 'Javed Khan is a Python Developer and Data Scientist who graduated with a BTech in Computer Science Engineering (2023). He has hands-on experience in Python programming and is skilled in building data-driven applications and web APIs. Javed is proficient in FastAPI, Flask, Pandas, NumPy, Matplotlib, and Seaborn, with a strong understanding of data visualization, analysis, and automation. His technical expertise also includes HTML, CSS, and basic JavaScript for front-end integration, along with experience in MySQL databases, Git and GitHub for version control, and GitHub Actions for CI/CD workflows. He works comfortably in Linux environments using tools like Jupyter Notebook, Visual Studio Code, and PyCharm.';
  } else if (msg.includes('skills')) {
    response = 'Javed’s key skills include Python, Flask, FastAPI, SQL, Git, Github, HTML, Css, Machine Learning, and Web Development.';
  } else if (msg.includes('project')) {
    response = 'He has worked on projects like Library Management System, Courier Tracking, and AI tools integration.';
  } else if (msg.includes('contact')) {
    response = 'You can reach Javed through his portfolio contact section or email.';
  } else {
    response = 'I’m not sure about that, but I can tell you more about Javed’s skills and experience!';
  }
  addMessage(response, 'bot');
  speakResponse(response);
}

function speakResponse(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-IN'; // Indian English accent
  utter.pitch = 1;
  utter.rate = 1;
  synth.speak(utter);
}
