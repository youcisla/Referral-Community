
# Referral Community Project

Welcome to the **Referral Community** project repository! This project implements a dynamic and interactive platform for managing referral communities with multiple sections, including Free, VIP, and Referrers sections.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Features](#features)
6. [JSON Data Explanation](#json-data-explanation)
7. [Usage](#usage)

---

## Project Overview

This project creates a Telegram-based referral community that allows users to share links, participate in draws, and boost their reach by inviting others. It comprises:
- A Free Section for all users.
- A VIP Section with enhanced odds for winners.
- A Referrers List to reward users inviting others.

[Read the concept details here](Community%20Idea%20!.pdf)

---

## File Structure

```
/
├── index.html              # Main homepage for the referral community
├── admin.html              # Admin panel for managing users and sections
├── leaderboard.html        # Displays the leaderboard for referral rankings
├── style.css               # Styling for all pages
├── app.js                  # JavaScript for the homepage
├── admin.js                # JavaScript for the admin panel
├── leaderboard.js          # JavaScript for the leaderboard page
├── particles.json          # Configuration for particle effects
├── users.json              # JSON file containing user data for all sections
└── Community Idea !.pdf    # Project concept document
```

---

## Technologies Used

- **HTML5** and **CSS3** for web structure and styling
- **JavaScript** (Vanilla JS and Vue.js) for interactivity and dynamic content
- **Bootstrap** for responsive design
- **Particles.js** for particle effects
- **JSON** for data handling
- **Font Awesome** for icons

---

## Setup Instructions

1. Clone this repository:
    ```bash
    git clone <repository_url>
    cd referral-community
    ```

2. Open `index.html` in a web browser to start the application.

3. Ensure all JSON and script files are served from a server if accessing dynamic data.

---

## Features

1. **Dynamic Sections**: Users can interact with Free, VIP, and Referrers sections.
2. **Leaderboard**: Displays referral rankings in a visually appealing format.
3. **Admin Panel**: Allows admins to manage users, edit their details, and delete entries.
4. **Responsive Design**: Fully responsive UI with Bootstrap integration.
5. **Particle Effects**: Adds aesthetic particle animations in the background.

---

## JSON Data Explanation

The `users.json` file organizes data into three sections:
- **Free Section**: Open to all users.
- **VIP Section**: Exclusive group with better odds.
- **Referrers Section**: Rewards users inviting others.

Example:
```json
{
    "free": [
        { "username": "Mina", "links": ["minaweb.dev"], "referrals": 5 },
        { "username": "Amine", "links": ["aminecode.org"], "referrals": 3 }
    ]
}
```

---

## Usage

### Drawing Winners
Admins can use the "Draw Winner" button in each section to randomly select winners.

### Managing Users
Admins can:
- Edit usernames
- Delete users
- View full user lists

### Leaderboard
Displays top referrers sorted by referral count.

---

## Contributors
This project was created collaboratively as a reference for a community referral platform.

---
