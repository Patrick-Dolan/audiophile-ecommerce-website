# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Previews](#previews)
  - [Links](#links)
- [Setup and installation instructions](#setup-and-installation-instructions)
- [Testing](#testing)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Known bugs](#known-bugs)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on the device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary  

### Previews

<details open>
  <summary>Desktop Version</summary>
  <img src="./previews/Desktop.gif" alt="Desktop Version">
</details>

<details>
  <summary>Tablet Version</summary>
  <img src="./previews/Tablet.gif" alt="Tablet Version" height="500">
</details>

<details>
  <summary>Mobile Version</summary>
  <img src="./previews/Mobile.gif" alt="Mobile Version" height="500">
</details>

### Links
<!-- TODO add solution URL from Frontend mentor -->
<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com) -->
- Live Site URL: [GitHub Pages Live Site](https://patrick-dolan.github.io/audiophile-ecommerce-website/)

### Setup and installation instructions

**Step 1: Prerequisites**  
Before you start, ensure you have the following installed on your machine:
* **Git**: For cloning the repository.
* **Node.js** and **npm**: For installing and managing dependencies. You can download Node.js (which includes npm) from [nodejs.org](https://nodejs.org/en).

**Step 2: Clone the Repository**  

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the project.
3. Run the following command to clone the repository.

```sh
git clone https://github.com/Patrick-Dolan/audiophile-ecommerce-website
```

**Step 3: Navigating to the Project Directory**  

After cloning the repository, navigate to the project directory:

```sh
cd audiophile-ecommerce-site
```

**Step 4: Installing Dependencies**  

In the project directory, install the project's dependencies using npm:

```sh
npm install
```

This command reads the package.json file and installs all the required dependencies for the project.

**Step 5: Running the Project**  

Once the dependencies are installed, you can start the development server using Vite. Run the following command:

```sh
npm run dev
```

This command will start the Vite development server, and you should see an output indicating that the server is running. By default, Vite serves the project on `http://localhost:3000`.


### Testing

**Step 1: Prerequisites**  

Download and set up the project using the instructions in the [setup and installation instructions](#setup-and-installation-instructions) if you haven't already. 

**Step 2: Run tests**  

In the project directory run the following command to run the tests:

```sh
npm run test
```


## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Jest](https://jestjs.io/) - JS testing framework
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [Vite](https://vitejs.dev/) - Frontend Tooling
- [Git](https://www.git-scm.com/) - Version control
- [Node](https://nodejs.org/en) - JavaScript runtime environment

### What I learned

**Testing**

Throughout the development of this project, I gained a deeper understanding of testing in a JavaScript environment. Specifically, I learned how to:

* Set up a testing framework: I chose Jest for this project and learned how to configure it to work seamlessly with Vite.

* Write unit tests: I created a variety of tests to ensure the correctness of my code, focusing on reducer functions.

**Using the `useReducer` hook**

In this project, I opted to use the `useReducer` hook for state management instead of a library like Redux since I only needed it for a cart system. I learned more about:

* Understanding of reducers: I deepened my understanding of reducers and how they work, which improved my overall state management skills.

* Cleaner code: Using useReducer led to cleaner and more readable code, as I avoided the boilerplate often associated with Redux.

**Using `useContext` for Cart System**

Since this project is an e-commerce site, I utilized the `useContext` hook to create a cart system. Through this implementation, I learned how to:

* Share state globally: useContext enabled me to share state across multiple components without the need for prop drilling, simplifying the state management for the cart.

* Combine with useReducer: I effectively combined useContext with useReducer to manage the cart's state in a centralized and efficient manner.

* Manage complex state: Implementing the cart system helped me understand how to handle complex state logic, including adding, removing, and updating items in the cart.

* Improve user experience: By maintaining a global cart state, I provided a consistent and seamless user experience throughout the e-commerce site.

### Continued development

As I continue honing my development abilities, there are several areas I want to continue focusing on to refine my skills and build more robust applications.

**Improving my use of `useReducer` with `useContext`**
* Deepening: Integration: I aim to further improve my use of the `useReducer` hook in combination with `useContext` for managing complex state across my applications. This includes:
  * Reusable contexts: Creating more reusable and modular context and reducer setups that can be easily integrated into different projects.
  * Performance optimization: Ensuring that my state management solutions are optimized for performance, especially in larger applications.

**Improving Accessibility Skills**
* Inclusive design: I plan to put a stronger emphasis on accessibility in my future projects to ensure that my applications are usable by as many people as possible.
 * ARIA roles and attributes: Gaining a better understanding of ARIA (Accessible Rich Internet Applications) roles and attributes to enhance the accessibility of interactive components.
* Keyboard navigation: Ensuring that all features of my applications are fully operable using only a keyboard.

## Known bugs

- When a modal is open, you can still use the `tab` key to focus on elements in the background.

## Author

- Website - [Patrick Dolan](https://patrickdolan.dev/)
- Frontend Mentor - [@Patrick-Dolan](https://www.frontendmentor.io/profile/Patrick-Dolan)
