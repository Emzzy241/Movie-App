# Movie App

This is a single-page application built with React that displays a list of popular movies by fetching data from a third-party API. The application is designed to be responsive and provide a simple, clean user experience for browsing movie titles.

---

#### Features

- Displays a list of currently popular movies.
- Fetches movie data from a public API.
- Built using React for a dynamic user interface.
- A search bar to allow users to search for specific movies.

---

#### Project Setup

To get a local copy up and running, follow these steps.

#### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later) or yarn

#### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Emzzy241/Movie-App.git
   ```

2. Navigate to the project directory:

```bash
cd Movie-App

```

3. Install the dependencies:
```bash
npm install
# or
yarn install
```

4. Environment Variables
This project requires an API key to fetch movie data. A .env file is used to manage this key locally. API key can be gotten from: https://omdbapi.com/apikey.aspx, and select the free version

* Create a file named .env in the root of the project directory.

Add your API key to this file in the following format, where [your-api-key] is your actual key:

```bash
REACT_APP_MOVIE_API_KEY=your-api-key-from-omdb-api
```

Note: The variable name must be prefixed with REACT_APP_ as per the Create React App convention for client-side environment variables.

Running the Application
To start the development server, run the following command:

Bash
```bash
npm start
# or
yarn start
The application will be available at http://localhost:3000.
```

### Deployment
The application is hosted on Vercel. 

For successful deployment, the REACT_APP_MOVIE_API_KEY environment variable must be configured within the Vercel project settings under Environment Variables.

### App Link
Click the link below to view the live app hosted on vercel:

https://movie-l7nzbtg7c-dynastys-projects-932344db.vercel.app/

### Project Structure
```bash
    src/: Contains all the source code for the React application.

    src/components/: Reusable React components.

    src/App.js: The main application component.

    src/index.js: The entry point for the React application.
```

### Future Improvements

* Add detailed movie pages with information such as plot summaries, cast, and ratings.

* Introduce state management with Redux or the React Context API for a more scalable architecture.

* Optimize performance with lazy loading or code splitting.

* Implement error handling for API failures and network issues.

### Contact
For any questions or suggestions, please open an issue in this repository.