# 🌸 Iris Flower Classifier

A responsive web application that predicts the species of an Iris flower using a custom **K-Nearest Neighbors (KNN)** algorithm implemented in **JavaScript**.

## 📌 Project Overview

This project demonstrates how a machine learning algorithm can be implemented and deployed entirely on the client side without using a backend or external ML libraries.

The application predicts the Iris flower species based on four botanical measurements:

* Sepal Length (cm)
* Sepal Width (cm)
* Petal Length (cm)
* Petal Width (cm)

The model is trained using the famous **Iris Dataset**.

---

## ✨ Features

* 🌸 Predicts Iris flower species instantly
* 📊 Uses a custom KNN algorithm written in JavaScript
* 📁 Loads training data from `iris.csv`
* 📈 Normalizes input data before prediction
* ✅ Validates user input
* 📱 Responsive design for desktop and mobile devices
* 🌐 Deployed using GitHub Pages

---

## 🛠 Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* PapaParse (CSV Parser)

---

## 🧠 Machine Learning Algorithm

The classifier uses the **K-Nearest Neighbors (KNN)** algorithm.

### Workflow

1. Load the Iris dataset from `iris.csv`
2. Normalize all feature values
3. Read user input
4. Normalize the input values
5. Calculate Euclidean distance between the input and every training sample
6. Find the **5 nearest neighbors (K = 5)**
7. Predict the species by majority voting

---

## 📂 Project Structure

```text
Iris-Project/
│
├── index.html
├── style.css
├── script.js
├── iris.csv
└── README.md
```

---

## 🚀 Live Demo

🌐 **Live Website:**

👉 **https://houriyash.github.io/iris-flower-classifier-project**

---

## 📸 Screenshot

Add one or more screenshots of your application here.

Example:

```
/images/homepage.png
```

---

## 📚 Dataset

This project uses the **Iris Dataset**, one of the most widely used datasets for machine learning classification.

Features:

* Sepal Length
* Sepal Width
* Petal Length
* Petal Width

Target Classes:

* Iris Setosa
* Iris Versicolor
* Iris Virginica

---

## 👨‍💻 Author

**H SH**

Machine Learning & Web Development Project

Built with HTML, CSS, JavaScript and a custom KNN implementation.
