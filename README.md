# Therapy Chatbot

Therabot is a chatbot that provides therapy services to users. It is designed to provide a safe space for users to talk about their feelings and emotions. Using natural language processing, Therabot can understand and respond to users in a way that feels natural and human-like. Therabot is available 24/7 and can help users work through a variety of issues, including stress, anxiety, depression, and more.

## Table of Contents

- [Therapy Chatbot](#therapy-chatbot)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Inspiration](#inspiration)
  - [What I Learned](#what-i-learned)
  - [How I Built It](#how-i-built-it)
  - [Challenges I Faced](#challenges-i-faced)
  - [Additional Features and Enhancements](#additional-features-and-enhancements)
  - [Future Enhancements](#future-enhancements)
  - [Conclusion](#conclusion)
  - [Project Link](#project-link)
  - [Images](#images)

## Demo

Add a link to your live demo or a screenshot of the application here.

## Features

- Real-time chat with a therapy chatbot
- Natural language processing using OpenAI's GPT-3.5-turbo
- 24/7 availability
- Helps users work through stress, anxiety, depression, and more

## Tech Stack

- **Backend:** Flask, OpenAI API
- **Frontend:** React, Tailwind CSS, Axios
- **Environment Management:** dotenv
- **Deployment:** Heroku

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Python 3.x
- Node.js (with npm)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/therapy-chatbot.git
   cd therapy-chatbot
   ```
2. **Setup the backend**
  ```sh
   cd backend
   python -m venv venv
   source venv/bin/activate # On Windows use `venv\Scripts\activate`
   pip install -r requirements.txt
  ```
3. **Setup the backend**
   ```sh
   cd ../frontend
   npm install
   ```
4.**Environment Variables:**
  Create a '.env' file in the 'backend' directory and add your OpenAI key:
  ```sh
  OPENAI_API_KEY=your_openai_api_key
  ```
## Running the Application

### Start the backend server:

```sh
cd backend
python app.py
```

### Start the frontend serve
```sh
cd ../fronted
npm start
```
Open your browser and navigate to http://localhost3000.

### Usage
- Navigate to the homepage.
- Click on the "Get started" button.
- Start chatting with Therabot by typing your message and hitting "Send".

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

    1. Fork the Project
    2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
    3. Commit your Changes (git commit -m 'Add some AmazingFeature')
    4. Push to the Branch (git push origin feature/AmazingFeature)
    5. Open a Pull Request
### License
Distributed under the MIT License. See 'LICENSE' for more information.

## Inspiration
The inspiration for Therabot came from the increasing need for accessible mental health support. In today's fast-paced world, many individuals struggle with stress, anxiety, and other mental health issues but may not have immediate access to professional help. I wanted to create a solution that offers round-the-clock support, providing a safe space for individuals to express their feelings and receive guidance.

## What I Learned

Building Therabot was a journey filled with learning experiences:

  - Natural Language Processing (NLP): I gained a deeper understanding of how NLP can be leveraged to create empathetic and supportive chatbot interactions.
  - API Integration: Integrating the OpenAI API taught me the intricacies of managing and processing API responses to create meaningful conversations.
  - Frontend and Backend Coordination: Ensuring smooth communication between the frontend and backend components of the application was crucial for delivering a seamless user experience.
  - Mental Health Awareness: I learned about the importance of sensitive communication and the critical resources available for mental health support, ensuring the bot could provide immediate help in crisis situations.

## How I Built It
Therabot was built using a combination of modern web development technologies and AI:

  - Backend: I used Flask, a lightweight Python web framework, to handle API requests and integrate with the OpenAI GPT-3.5-turbo model for generating responses.
  - Frontend: The frontend was built with React, utilizing Tailwind CSS for styling to create a responsive and user-friendly interface.
  - Version Control: Git and GitHub were used for version control, allowing for efficient collaboration and code management.
  - Deployment: The application was deployed on Heroku, ensuring it is accessible online and can handle user interactions in real-time.
  
## Challenges I Faced
Building Therabot was not without its challenges:

  - Handling Sensitive Topics: Ensuring the bot could respond appropriately to sensitive topics like suicide and self-harm required careful consideration and extensive testing.
  - User Experience: Creating an intuitive and supportive user experience was paramount, and I faced challenges in designing interactions that felt natural and empathetic.
  - Scalability: Ensuring the application could handle multiple users simultaneously without compromising performance was a significant challenge that required optimizing the backend and managing server resources effectively.

## Additional Features and Enhancements
In addition to the core functionalities, I implemented several other features to enhance the user experience and the bot's capabilities:

  - Resource Links: Integrated a feature to provide users with links to valuable mental health resources and emergency contacts when critical keywords are detected.

## Future Enhancements
Looking forward, I plan to introduce several enhancements to Therabot:

  - Advanced Analytics: Implementing analytics to track user interactions and gather insights to improve the bot's performance and effectiveness continually.
    like WhatsApp, Facebook Messenger, and more.
   -  Voice Interaction: Introducing voice interaction capabilities to provide a more natural and convenient way for users to communicate with Therabot.

## Conclusion
Despite the challenges, building Therabot was an incredibly rewarding experience. I hope that this project can provide valuable support to those in need and contribute positively to the mental health landscape. With continued development and enhancements, Therabot has the potential to become a robust tool for mental health support, making a meaningful impact on people's lives.

## Project Link
You can view the live project at [Therabot Live](https://therapy-chatbot-murphy-24161ebc687d.herokuapp.com/). If the project is down, please email me at [murphg04@gmail.com](mailto:murphgo4@gmail.com), and I will redeploy it for you to test.

## Images
**Landing Page**
![Landing](https://github.com/lawofthedmz/Therabot/assets/99233521/9441a55f-3082-485f-a27a-c85d4a6f8a12)
**Chatbox**
![ChatBox](https://github.com/lawofthedmz/Therabot/assets/99233521/ae684443-1ead-4dbc-a71d-9b5e6de61c15)
