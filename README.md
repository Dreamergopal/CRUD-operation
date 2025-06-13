🛠️ CRUD Operation App
Overview
A single-page React application demonstrating CRUD (Create, Read, Update, Delete) operations. Implements a clean UI with form handling, API integration, and modern tooling (Vite, ESLint).

---

## 🚀 Live Demo

🔗 [Live Preview](https://ops-crud.netlify.app)

---

📦 Features
✅ Create, Read, Update & Delete data records

🔍 Modular component design: Card, Form, Post

⚙️ Structured API interactions via services/PostApi.jsx

💡 Vite-powered development workflow

🔧 Code quality ensured using ESLint

---

🚀 Quick Start
Requirements
Node.js (v16 or higher)
npm (v8+)

Install 
1. git clone https://github.com/Dreamergopal/CRUD-operation.git
2. cd CRUD-operation
3. npm install
4. npm run dev

---

📁 Project Structure
├─ public/
│    └─ index.html
│
├─ src/
│    ├─ assets/       # Static assets (e.g. logos)
│    ├─ component/    # Reusable components (Card, Form, Post)
│    ├─ services/     # API helpers (PostApi.jsx)
│    ├─ App.jsx       # Main App component
│    └─ main.jsx      # Entry point
│
├─ .gitignore
├─ eslint.config.js
├─ package.json
├─ vite.config.js
└─ README.md (this file)

---

🔧 Scripts

npm run dev	 -> Starts development server
npm run build -> Creates production-ready build
npm run lint ->	Runs ESLint to check code style

---

🧩 Components
Form.jsx: Input form with create/edit functionality.

Card.jsx: Displays individual record items.

Post.jsx: Manages API calls and state updates.

---

🌐 API Integration (PostApi.jsx)
Handles HTTP requests to your backend or JSON server:

getPosts()

createPost(postData)

updatePost(id, data)

deletePost(id)

---

📝 Usage Guide
1. Create a new post via the form.

2. View / Read all posts displayed in Card components.

3. Update any post inline.

4. Delete posts with the delete button.

---

🔄 Extend or Customize
Connect to your own backend (e.g., Node/Express server, Firebase)

Add user authentication & authorization

Integrate notifications (e.g., toast popups)

Style using CSS frameworks like Tailwind or Bootstrap

---

👨‍💻 Author

Gopal Kumar Burman – Core developer of this app. 
Web Developer | React Enthusiast | MERN stack 

[GitHub](https://github.com/Dreamergopal)  
[LinkedIn](https://www.linkedin.com/in/gopal-kumar-burman-824aa4277)
