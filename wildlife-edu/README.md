# WildlifeEDU

## Let's Care for Our Wildlife Together

### Description
WildlifEdu is an online education platform focused on animal conservation, with special attention to endangered species in Africa. The main goal of this platform is to collaborate with local communities, conservation organizations, and specialists to promote sustainable wildlife conservation. Additionally, it encourages eco-tourism by actively involving people in conservation efforts. WildlifeEDU leverages digital technology and innovation to support various conservation projects, serving as a blueprint for future conservation efforts within similar ecosystems.

### Link to GitHub Repository
[GitHub Repository](https://github.com/Mugisha-Beline/WildlifeEdu.git)  

---

## Tech Stack
- **Frontend**: React.js
- **Backend**: Django (Python), Stripe API for payment processing
- **Database & Hosting**: Firebase for database and deployment of the frontend

---

## Setup and Installation Guide

### Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (for the frontend React app)
- **Python** (for Django backend)
- **Firebase CLI** (for deployment and database management)

### Installation Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Mugisha-Beline/WildlifEdu.git
   cd WildlifeEDU_Capstone
   ```

2. **Install Dependencies**  
   - For the React frontend, run:
     ```bash
     cd frontend
     npm install
     ```
   - For the Django backend, create a virtual environment and install dependencies:
     ```bash
     cd backend
     python3 -m venv env
     source env/bin/activate
     pip install -r requirements.txt
     ```

3. **Set Up Environment Variables**
   - Create a `.env` file in both the frontend and backend directories to include necessary API keys, Firebase configurations, Stripe keys, and other environment-specific settings.

4. **Database Setup**
   - Ensure Firebase is set up with Firestore, and configure your Firestore rules as needed.

5. **Run the Applications**
   - Start the React frontend:
     ```bash
     cd frontend
     npm start
     ```
   - Start the Django backend:
     ```bash
     cd backend
     python manage.py runserver
     ```

6. **Access the Application**
   - Open your browser and go to `http://localhost:3000` for the frontend and `http://localhost:8000` for the backend to interact with the application.

---

## Designs
- **Figma Mockups**  
  Access the design mockups for the platform here: [Figma Mockups](https://www.figma.com/design/BE9F2PnRlQDYmncrDeQkdR/Capstone-Project-Design?node-id=0-1&t=qyaXhublQVzqeQk3-1)

---

## Deployment Plan
The platform is built to be flexible and secure, supporting both cloud and on-premises deployments. The deployment strategy includes:

1. **Docker Deployment**
   - Create a `Dockerfile` and `docker-compose.yml` to enable multi-container deployments (frontend, backend, database).
   ```bash
   docker-compose up --build
   ```

2. **Cloud Deployment**
   - For cloud-based hosting, Firebase Hosting is used for the frontend. Configure Firebase using the Firebase CLI.
   ```bash
   firebase deploy
   ```
   - For the backend and database:
     - **Heroku**: Deploy the Django backend to Heroku and configure environment variables within the Heroku dashboard.
     - **Firebase Firestore**: Use Firebase Firestore for efficient and scalable data management.

3. **Monitoring and Logging**
   - Configure Firebase Analytics for tracking and logging, and set up *Heroku Logs* to monitor backend performance and errors in real-time.

4. **Final Deployment**
   - Once local testing is complete, configure the domain settings, add SSL for secure communication, and finalize deployment.

---

## Contributions
Contributions to WildlifeEDU are welcome. To contribute:
1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Submit a pull request for review.

## License
This project is open-source and available under the MIT License.
