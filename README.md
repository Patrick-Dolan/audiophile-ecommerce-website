# THIS CHALLENGE IS STILL IN PROGRESS
# Frontend Mentor - Audiophile e-commerce website solution

<!-- TODO add known bugs section and add that you can tab focus behind modals -->

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
  <!-- - [What I learned](#what-i-learned) -->
  <!-- - [Continued development](#continued-development) -->
  <!-- - [Useful resources](#useful-resources) -->
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
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

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
- [Git](https://www.git-scm.com/)
- [Node](https://nodejs.org/en)

<!-- ### What I learned

Use this section to recap some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your knowledge.

To see how you can add code snippets, see below:

```HTML
<h1>Some HTML code I'm proud of</h1>
```

``` js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace them with your learnings.** -->

<!-- ### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace them with your plans for continued development.** -->

<!-- ### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article that helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.** -->

## Known bugs

- When a modal is open, you can still use the `tab` key to focus on elements in the background.

## Author

- Website - [Patrick Dolan](https://patrickdolan.dev/)
- Frontend Mentor - [@Patrick-Dolan](https://www.frontendmentor.io/profile/Patrick-Dolan)
