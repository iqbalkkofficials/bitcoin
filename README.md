# Angular Bitcoin App

This is an Angular application that uses NgRx for state management. The app fetches and displays Bitcoin value and trending Bitcoin data.

# Features
- Bitcoin Value Search: Fetch and display the current Bitcoin value.
- Trending Coins Listing: Display a list of trending coins.
- State Management: Utilizes NgRx for state management.
- Error Handling: Comprehensive error handling for API requests.

## Prerequisites

- Node.js 16.20.2
- Angular CLI: 16.2.14

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/iqbalkkofficials/bitcoin.git
    cd bitcoin
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Build the Angular application:

    ```bash
    ng serve
    ```



2. Open your browser and navigate to `http://localhost:4000`.


### Project Structure

- `src/app`: Main application source code
- `src/app/bitcoin/store/actions`: NgRx actions
- `src/app/bitcoin/store/reducer`: NgRx reducers
- `src/app/bitcoin/store/effects`: NgRx effects
- `src/app/bitcoin/services`: Application services
- `src/app/bitcoin`: Angular components

### Contributing

Feel free to submit issues and pull requests.

### License

This project is licensed under the MIT License.

### Acknowledgements
CoinGecko for providing the API to fetch cryptocurrency data.
