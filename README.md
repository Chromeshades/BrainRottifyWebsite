# Brain Rottify Website

This project is a simple website that utilizes the `brain-rottify-text` library to manipulate text on the webpage. Below are the details for setting up and using the project.

![Screenshot 2025-03-25 at 7 37 55 AM](https://github.com/user-attachments/assets/8df9eb99-81bf-4383-a53b-d17c21bc0e69)

## Project Structure

```
brain-rottify-website
├── public
│   ├── index.html        # Main HTML document
│   ├── css
│   │   └── styles.css    # Styles for the website
│   └── js
│       └── main.js       # Client-side JavaScript functionality
├── src
│   └── index.js          # Entry point for server-side logic
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd brain-rottify-website
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the project:**
   You can start a simple server using the `src/index.js` file or open `public/index.html` directly in your browser.
   ```
   npm start
   ```

## Usage

- Open the `public/index.html` file in your web browser to view the website.
- The website allows you to input text, which will be processed using the `brain-rottify-text` library to demonstrate text manipulation.

## License

This project is licensed under the MIT License.
