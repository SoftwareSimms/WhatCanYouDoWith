# WhatCanYouDoWith

## Introduction

Welcome to the official repository of "WhatCanYouDoWith," a software initiative designed to enlighten and educate the public on resource utilization. Our goal is to foster sustainable behaviors, reduce waste generation, increase productivity, and contribute to poverty reduction by providing a platform filled with impactful facts and actionable information.

## Features

- **Educational Pop-ups:** Deliver informative content directly to users through a browser extension.
- **Resource Utilization Data:** A `database.json` file contains data on various resources and their potential uses to maximize efficiency.
- **Sustainable Living Tips:** Offers tips and tricks for leading a more sustainable lifestyle.
- **Recipe Suggestions:** Uses SPARQL queries (see `sparql.sql`) to fetch creative recipes, helping to reduce food waste by suggesting ways to use specific ingredients.

## Project Structure

- `background.js`: Handles the background operations of the browser extension.
- `database.json`: Contains the data related to resource utilization and sustainability tips.
- `manifest.json`: Configures the settings for the browser extension.
- `popup.html`: The HTML file for the pop-up interface of the extension.
- `popup.js`: Manages the interactive elements within the popup.
- `sparql.sql`: Holds SPARQL queries used to fetch data for the application.
- `style.css`: Provides styling for the popup interface.
