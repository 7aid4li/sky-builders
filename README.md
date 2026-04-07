# Sky Builders - Modern Home Construction & Design

Sky Builders is a comprehensive web application for a modern home construction company, featuring dynamic floor plans, property filtering, and a robust cloud-ready architecture.

## 🚀 Features

- **Dynamic Home Designs**: Browse through various home collections including New Homes, Granny Flats, Modular Homes, Tiny Homes, and many more.
- **Interactive Filtering**: Filter home designs by price, lot width, bedrooms, and specific design features.
- **Full-Stack Integration**: Powered by a Node.js/Express backend with MongoDB Atlas for persistent storage.
- **Modern UI/UX**: Built with React and Vanilla CSS for a premium, high-performance user experience.
- **Containerized & Scalable**: Fully Dockerized and ready for deployment on Azure Kubernetes Service (AKS).

## 🛠️ Technology Stack

- **Frontend**: React (Vite), JavaScript, Vanilla CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas
- **DevOps**: Docker, Kubernetes (AKS)
- **Design**: Modern, responsive design system

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/7aid4li/sky-builders.git
   cd sky-builders
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   *Your app will be available at `http://localhost:5173`*

4. **Start the backend server**:
   ```bash
   node server.js
   ```
   *Ensure you have your `MONGODB_URI` environment variable set.*

## 🐳 Dockerization

Build the Docker image:
```bash
docker build -t <your-username>/sky-builders:v1 .
```

Run the container locally:
```bash
docker run -p 3000:3000 -e PORT=3000 -e MONGODB_URI=<your-mongodb-uri> <your-username>/sky-builders:v1
```

## ☸️ Kubernetes Deployment (AKS)

The application is configured to run on Azure Kubernetes Service.

1. **Apply the deployment**:
   ```bash
   kubectl apply -f aks-deployment.yaml
   ```

2. **Apply the service**:
   ```bash
   kubectl apply -f aks-service.yaml
   ```

3. **Get the external IP**:
   ```bash
   kubectl get service sky-builders-service --watch
   ```

## 📜 License

This project was built as part of a Cloud Computing assignment.
