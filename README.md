<div align="center">
  <br />
    <a href="https://imaginify-wine-seven.vercel.app/" target="_blank">
      <img src="https://github.com/sujatagunale/EasyRead/assets/151519281/daf9e91b-6342-4e9a-9361-8dc2bd01ce64" alt="Project Banner">
    </a>
  <br />

  <div align="center">
  <a href="https://imaginify-wine-seven.vercel.app/" target="_blank">
    <p><strong>View Live Project: https://imaginify-wine-seven.vercel.app</strong></p>
  </a>
</div>

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" alt="stripe" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

   # AI SaaS Image Transformation Tool - Imaginify

## 🚀 **Project Overview**
This project is an AI-powered SaaS (Software as a Service) application that allows users to transform and generate images seamlessly. Built with the MERN stack and integrated with Cloudinary for image transformation, the tool offers features such as image uploads, transformations, and real-time previews. User authentication is handled by Clerk, and the UI is built using Shadcn.

---


</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)


## <a name="introduction">🤖 Introduction</a>

Build an AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal.


## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- MongoDB
- Clerk
- Cloudinary
- Stripe
- Shadcn
- TailwindCSS

## <a name="features">🔋 Features</a>

👉 **Authentication and Authorization**: Secure user access with registration, login, and route protection.

👉 **Community Image Showcase**: Explore user transformations with easy navigation using pagination

👉 **Advanced Image Search**: Find images by content or objects present inside the image quickly and accurately

👉 **Image Restoration**: Revive old or damaged images effortlessly

👉 **Image Recoloring**: Customize images by replacing objects with desired colors easily

👉 **Image Generative Fill**: Fill in missing areas of images seamlessly

👉 **Object Removal**: Clean up images by removing unwanted objects with precision


## 💻 **Tech Stack**
- **Frontend**: React.js, TypeScript, Shadcn (UI components)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL)
- **Image Transformation**: Cloudinary
- **Authentication**: Clerk
- **Styling**: TailwindCSS
- **Deployment**: Vercel (frontend)
- **Version Control**: Git & GitHub

---

## 📂 **Project Structure**
bash
project-root/
|-- frontend/              # Frontend React code
|   |-- src/
|       |-- components/   # Reusable components
|       |-- assets/       # Images and static assets
|-- lib/backend/               # Backend Node.js code
|   |-- actions/      # Request handlers
|   |-- models/           # Database models (MongoDB)
|   |-- middleware/       # Authentication, error handling
|-- README.md              # Documentation
|-- package.json           # Project dependencies

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

bash
git clone https://github.com/Prajjwal-Rawat/imaginify.git
cd imaginify


**Installation**

Install the project dependencies using npm:

bash
npm run dev


**Set Up Environment Variables**

Create a new file named .env.local in the root of your project and add the following content:

env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=


Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/), [Cloudinary](https://cloudinary.com/) and [Stripe](https://stripe.com)

**Running the Project**

bash
npm run dev


Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

<div strong>
##📚 **Credits / Acknowledgments**
</div>
This project was inspired by the tutorial:
[JSM-Mastery] by [Adrian]
