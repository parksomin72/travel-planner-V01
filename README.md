# 🧳 Travel Planner

Travel Planner is a **full-stack web application** that helps users organize their trips, build day-by-day itineraries, and save favorite places.  
This project is built as part of my **ALX Capstone Project** 🚀.  

---

## ✨ Features
- 🔐 **User Authentication** – Register & login securely  
- 🗓 **Trip Management** – Create, update, and delete trips  
- 📅 **Itinerary Builder** – Add activities for each day of a trip  
- 📍 **Saved Places** – Save and manage favorite destinations  
- 📱 **Responsive UI** – Accessible from desktop, tablet, and mobile  

---

## 🛠 Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js + Express  
- **Database:** PostgreSQL
- **Version Control:** Git + GitHub  

---

## 📂 Project Structure
```plaintext
travel-planner/
│── index.html        # Landing page
│── planning.html     # Planning page
│── profile.html      # Profile page
│── style.css         # Styles
│── script.js         # Navbar toggle & interactivity
│── server/           # Backend folder
│   ├── app.js        # Express app
│   ├── routes/       # API routes
│   ├── models/       # Database models
│   └── controllers/  # Business logic
│── .gitignore
│── README.md
```
## 🚀 Getting Started
1. Clone the repo:
	```bash
		git clone https://github.com/your-username/travel-planner.git
		cd travel-planner
	```
2. Install dependencies:
	```bash
		npm install
	```
3. Setup environment variables:

- Create a .env file in the root directory:
	```env
		PORT=5000
		DATABASE_URL=database_connection_string
		JWT_SECRET=secret_key
	```
4. Run the app:
	```bash
		npm run dev
	```
- Now the app should be running at:
		👉 http://localhost:5000/

