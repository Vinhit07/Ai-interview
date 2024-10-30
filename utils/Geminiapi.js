/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = "AIzaSyDEEBDiliVsT8qyM4WRrRmnCFs2xYZMfq4"
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  

    export const chatSession = model.startChat({
      generationConfig
    });
  
    /*const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());*/
  
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
  /*history: [
        {
          role: "user",
          parts: [
            {text: "Job Position: Full Stack Developer, Job Description: React, Nodejs MySql, Years of Experience: 6, Depends on this information please give me 5 Interview question with Answered in Json Format, Give Question and Answered as field in JSON"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"Question\": \"Describe your experience with React.js and how you've used it to build complex user interfaces.\",\n    \"Answer\": \"I have over 6 years of experience using React.js to develop dynamic and interactive user interfaces. I am proficient in using React components, state management with libraries like Redux or Context API, and working with APIs to fetch and display data. For example, on my previous project, I implemented a complex dashboard using React that allowed users to visualize real-time data, customize charts, and filter information. I also leveraged React's virtual DOM for efficient updates and optimized component performance for a seamless user experience.\"\n  },\n  {\n    \"Question\": \"Explain how you would handle database interactions using Node.js and MySQL in a full-stack application.\",\n    \"Answer\": \"In a full-stack application, I would use Node.js to connect to a MySQL database and perform CRUD (Create, Read, Update, Delete) operations. I would use the 'mysql' or 'mysql2' package for Node.js to establish a connection to the database. For data retrieval, I would use SQL queries to select specific data from tables. For data manipulation, I would use INSERT, UPDATE, and DELETE queries to modify the database. To ensure data integrity and security, I would implement proper validation and sanitization techniques for user input before interacting with the database.\"\n  },\n  {\n    \"Question\": \"What are the advantages and disadvantages of using a relational database like MySQL in a web application?\",\n    \"Answer\": \"Advantages of MySQL:\\n - Data integrity through constraints and relationships\\n - Efficient data retrieval with structured queries\\n - Scalability and reliability for large datasets\\n - Robust security features\\n\\n Disadvantages of MySQL:\\n - Can be complex to design and maintain\\n - Not as flexible for unstructured data\\n - Performance can be affected by large joins and complex queries\\n - Requires specialized skills to administer and manage\"\n  },\n  {\n    \"Question\": \"How do you ensure your code is clean, readable, and maintainable, particularly when working on a large project?\",\n    \"Answer\": \"I prioritize code quality and maintainability by adhering to best practices like:\\n - Following coding standards and style guides (e.g., Airbnb, Google)\\n - Implementing unit tests to ensure code functionality and prevent regressions\\n - Using code linters and formatters to enforce code style and catch potential issues\\n - Utilizing design patterns and architectural principles (e.g., MVC, RESTful API) to improve code organization and maintainability\\n - Regularly reviewing and refactoring code to maintain its readability and efficiency\\n - Collaborating with team members to ensure consistency and best practices across the codebase.\"\n  },\n  {\n    \"Question\": \"Describe your experience with version control systems, specifically Git. How do you manage branches, merge conflicts, and contribute to a team project using Git?\",\n    \"Answer\": \"I have extensive experience using Git for version control. I am comfortable with branching strategies, merging conflicts, and collaborating on team projects. I use Git to track changes, create branches for new features or bug fixes, and merge them back into the main branch. I use tools like GitFlow for managing branches and Github/Bitbucket for code hosting. I am also familiar with resolving merge conflicts using various strategies and communicating effectively with team members to ensure a smooth workflow.\"\n  }\n]\n```"},
          ],
        },
      ],*/
