/* =========================================================
   PADHLELALA
   PERSONAL LEARNING TRACKER

   DSA
   WEB DEVELOPMENT
   AI / ML
   PROJECTS
   RESOURCES
   STREAK
   HISTORY
   PIE CHARTS
   LOCAL STORAGE
   GOOGLE SHEET SYNC
========================================================= */


/* =========================================================
   GOOGLE SHEET CONNECTION

   Follow the setup steps, then paste your Web App URL below.
========================================================= */

const SHEET_URL = "https://script.google.com/macros/s/AKfycbyo70xy9guwcKsKrZl-EHkw2I_wpF8FBGoGNPM9rF0Z2SL9TqCJVbdAQmhtj9ZQ2KA8/exec";


/* =========================================================
   STORAGE
========================================================= */

const STORAGE_KEY = "padhlelala_user";

let data = null;


/* =========================================================
   DSA SYLLABUS
   DSA Important Questions - topic-wise placement sheet (198 questions).
   star = high-priority question
========================================================= */

const DSA_SYLLABUS = [

    {
        id: "arrays",
        name: "Arrays",
        star: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        questions: [
            "Two Sum",
            "Best Time to Buy and Sell Stock",
            "Maximum Subarray — Kadane's Algorithm",
            "Move Zeroes",
            "Remove Duplicates from Sorted Array",
            "Rotate Array",
            "Merge Sorted Arrays",
            "Majority Element",
            "Missing Number",
            "Find Duplicate Number",
            "Sort 0s, 1s and 2s",
            "Next Permutation",
            "Product of Array Except Self",
            "Maximum Product Subarray",
            "Subarray Sum Equals K"
        ]
    },

    {
        id: "strings",
        name: "Strings",
        star: [0, 1, 2, 3, 4, 5, 6, 7],
        questions: [
            "Reverse String",
            "Reverse Words in a String",
            "Valid Palindrome",
            "Valid Anagram",
            "First Unique Character",
            "Longest Common Prefix",
            "Longest Substring Without Repeating Characters",
            "String Compression",
            "Implement atoi",
            "Group Anagrams",
            "Longest Palindromic Substring"
        ]
    },

    {
        id: "searching",
        name: "Searching",
        star: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        questions: [
            "Search an Element",
            "Find Maximum/Minimum",
            "Binary Search",
            "First and Last Position",
            "Search Insert Position",
            "Search in Rotated Sorted Array",
            "Search in Rotated Sorted Array II",
            "Find Minimum in Rotated Sorted Array",
            "Peak Element",
            "Square Root using Binary Search",
            "Koko Eating Bananas",
            "Allocate Minimum Number of Pages",
            "Aggressive Cows",
            "Median of Two Sorted Arrays"
        ]
    },

    {
        id: "sorting",
        name: "Sorting",
        star: [0, 1, 2, 3, 4, 5, 6],
        questions: [
            "Bubble Sort",
            "Selection Sort",
            "Insertion Sort",
            "Merge Sort",
            "Quick Sort",
            "Counting Sort",
            "Sort 0s, 1s and 2s",
            "Merge Overlapping Intervals",
            "Meeting Rooms",
            "Kth Largest/Smallest Element"
        ]
    },

    {
        id: "linked-list",
        name: "Linked List",
        star: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        questions: [
            "Reverse Linked List",
            "Find Middle of Linked List",
            "Detect Cycle",
            "Remove Cycle",
            "Merge Two Sorted Lists",
            "Remove Nth Node From End",
            "Palindrome Linked List",
            "Intersection of Two Linked Lists",
            "Add Two Numbers",
            "Reverse Linked List in Groups of K",
            "Sort Linked List",
            "Flatten a Linked List"
        ]
    },

    {
        id: "stack",
        name: "Stack",
        star: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        questions: [
            "Implement Stack using Array",
            "Implement Stack using Linked List",
            "Valid Parentheses",
            "Next Greater Element",
            "Next Smaller Element",
            "Previous Greater Element",
            "Previous Smaller Element",
            "Min Stack",
            "Evaluate Postfix Expression",
            "Infix to Postfix",
            "Largest Rectangle in Histogram",
            "Celebrity Problem"
        ]
    },

    {
        id: "queue",
        name: "Queue",
        star: [0, 1, 2, 3, 4, 5, 6],
        questions: [
            "Implement Queue using Array",
            "Implement Queue using Linked List",
            "Circular Queue",
            "Queue using Two Stacks",
            "Stack using Two Queues",
            "First Negative Number in Every Window",
            "Sliding Window Maximum",
            "Generate Binary Numbers from 1 to N"
        ]
    },

    {
        id: "recursion",
        name: "Recursion",
        star: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        questions: [
            "Factorial",
            "Fibonacci",
            "Sum of N Numbers",
            "Reverse a String",
            "Reverse an Array",
            "Power of a Number",
            "Check Palindrome",
            "Binary Search using Recursion",
            "Generate Subsequences",
            "Generate All Permutations",
            "Tower of Hanoi"
        ]
    },

    {
        id: "backtracking",
        name: "Backtracking",
        star: [0, 1, 2, 3, 4, 5, 6, 7],
        questions: [
            "Rat in a Maze",
            "N-Queens",
            "Sudoku Solver",
            "Generate Parentheses",
            "Permutations",
            "Combinations",
            "Subsets",
            "Combination Sum",
            "Word Search"
        ]
    },

    {
        id: "trees",
        name: "Trees",
        star: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        questions: [
            "Inorder Traversal",
            "Preorder Traversal",
            "Postorder Traversal",
            "Level Order Traversal",
            "Height/Maximum Depth",
            "Count Nodes",
            "Diameter of Binary Tree",
            "Check Balanced Binary Tree",
            "Lowest Common Ancestor",
            "Left View",
            "Right View",
            "Top View",
            "Bottom View",
            "Zigzag Traversal",
            "Boundary Traversal",
            "Serialize and Deserialize Binary Tree"
        ]
    },

    {
        id: "bst",
        name: "Binary Search Tree",
        star: [0, 1, 2, 3, 4, 5, 6],
        questions: [
            "Search in BST",
            "Insert into BST",
            "Delete Node in BST",
            "Validate BST",
            "Find Minimum/Maximum",
            "Kth Smallest Element",
            "Lowest Common Ancestor in BST",
            "Convert Sorted Array to BST",
            "Two Sum in BST"
        ]
    },

    {
        id: "heap",
        name: "Heap / Priority Queue",
        star: [0, 1, 2, 3, 4, 5, 6, 7],
        questions: [
            "Implement Min Heap",
            "Implement Max Heap",
            "Kth Largest Element",
            "Kth Smallest Element",
            "Top K Frequent Elements",
            "Merge K Sorted Arrays",
            "Merge K Sorted Linked Lists",
            "Find Median from Data Stream",
            "Sort a K-Sorted Array"
        ]
    },

    {
        id: "hashing",
        name: "Hashing",
        star: [0, 1, 2, 3, 4, 5, 6],
        questions: [
            "Two Sum",
            "Frequency of Elements",
            "First Non-Repeating Element",
            "Longest Consecutive Sequence",
            "Subarray Sum Equals K",
            "Count Distinct Elements",
            "Intersection of Two Arrays",
            "Group Anagrams"
        ]
    },

    {
        id: "greedy",
        name: "Greedy",
        star: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        questions: [
            "Activity Selection",
            "Fractional Knapsack",
            "Job Sequencing",
            "Minimum Number of Platforms",
            "N Meetings in One Room",
            "Assign Cookies",
            "Jump Game",
            "Gas Station",
            "Minimum Coins",
            "Huffman Coding"
        ]
    },

    {
        id: "dp",
        name: "Dynamic Programming",
        star: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        questions: [
            "Fibonacci",
            "Climbing Stairs",
            "House Robber",
            "Frog Jump",
            "Maximum Sum of Non-Adjacent Elements",
            "0/1 Knapsack",
            "Subset Sum",
            "Equal Sum Partition",
            "Count Subsets with Given Sum",
            "Coin Change",
            "Rod Cutting",
            "Longest Common Subsequence",
            "Longest Common Substring",
            "Edit Distance",
            "Longest Palindromic Subsequence",
            "Minimum Insertions to Make Palindrome",
            "Longest Increasing Subsequence",
            "Matrix Chain Multiplication",
            "Partition DP",
            "Word Break"
        ]
    },

    {
        id: "graphs",
        name: "Graphs",
        star: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        questions: [
            "Graph Representation",
            "BFS",
            "DFS",
            "Number of Islands",
            "Detect Cycle in Undirected Graph",
            "Detect Cycle in Directed Graph",
            "Bipartite Graph",
            "Topological Sort",
            "Course Schedule",
            "Number of Connected Components",
            "Shortest Path in Unweighted Graph",
            "Dijkstra's Algorithm",
            "Bellman-Ford",
            "Floyd-Warshall",
            "Prim's Algorithm",
            "Kruskal's Algorithm",
            "Disjoint Set Union",
            "Minimum Spanning Tree"
        ]
    },

    {
        id: "trie",
        name: "Trie",
        star: [0, 1, 2, 3, 4],
        questions: [
            "Implement Trie",
            "Search Word",
            "Insert Word",
            "Starts With / Prefix Search",
            "Word Dictionary",
            "Maximum XOR of Two Numbers"
        ]
    }

];


/* =========================================================
   WEB DEVELOPMENT

   Starts from BASIC HTML/CSS.
========================================================= */

const DEV_SYLLABUS = [

    {
        id: "html-basics",
        name: "HTML Basics",
        tasks: [
            "HTML document structure",
            "Headings and paragraphs",
            "Links and images",
            "Lists",
            "Tables",
            "Forms",
            "Semantic HTML"
        ]
    },

    {
        id: "css-basics",
        name: "CSS Basics",
        tasks: [
            "CSS syntax",
            "Selectors",
            "Colors and backgrounds",
            "Box model",
            "Margin and padding",
            "Fonts and text",
            "Borders"
        ]
    },

    {
        id: "css-layout",
        name: "CSS Layout",
        tasks: [
            "Display",
            "Position",
            "Flexbox",
            "Grid",
            "Responsive design",
            "Media queries"
        ]
    },

    {
        id: "javascript-basics",
        name: "JavaScript Basics",
        tasks: [
            "Variables",
            "Data types",
            "Operators",
            "Conditionals",
            "Loops",
            "Functions",
            "Arrays",
            "Objects"
        ]
    },

    {
        id: "javascript-es6",
        name: "Modern JavaScript",
        tasks: [
            "let and const",
            "Arrow functions",
            "Template literals",
            "Destructuring",
            "Spread and rest",
            "Array methods",
            "Modules"
        ]
    },

    {
        id: "dom",
        name: "DOM & Browser",
        tasks: [
            "DOM selection",
            "Events",
            "Event listeners",
            "Forms",
            "LocalStorage",
            "Fetch API",
            "Async JavaScript"
        ]
    },

    {
        id: "projects",
        name: "Frontend Projects",
        tasks: [
            "Landing page",
            "To-do application",
            "Weather application",
            "API based project"
        ]
    },

    {
        id: "react",
        name: "React",
        tasks: [
            "React basics",
            "Components",
            "Props",
            "State",
            "Hooks",
            "Forms",
            "API integration"
        ]
    },

    {
        id: "backend",
        name: "Backend",
        tasks: [
            "Node.js",
            "Express",
            "REST APIs",
            "Middleware",
            "Authentication"
        ]
    },

    {
        id: "database",
        name: "Databases",
        tasks: [
            "MongoDB basics",
            "CRUD",
            "SQL basics",
            "Database integration"
        ]
    },

    {
        id: "fullstack",
        name: "Full Stack Projects",
        tasks: [
            "Frontend + backend",
            "Authentication",
            "Database",
            "Deployment"
        ]
    }

];


/* =========================================================
   AI / ML

   TOPIC-WISE, NOT MONTH-WISE.

   Long videos stay whole.
   Timestamps can be stored against individual topics.
========================================================= */

const AIML_SYLLABUS = [

    {
        id: "python",
        name: "Python Revision",
        video: "Python Full Course",
        tasks: [
            "Python fundamentals revision",
            "Functions and modules",
            "OOP revision",
            "File handling",
            "Useful Python for AI"
        ]
    },

    {
        id: "numpy",
        name: "NumPy",
        video: "Complete NumPy Course",
        tasks: [
            "Arrays",
            "Array operations",
            "Indexing and slicing",
            "Broadcasting",
            "Reshaping",
            "NumPy practice"
        ]
    },

    {
        id: "pandas",
        name: "Pandas",
        video: "Complete Pandas Course",
        tasks: [
            "Series",
            "DataFrame",
            "Data loading",
            "Data selection",
            "Missing values",
            "Data cleaning",
            "GroupBy"
        ]
    },

    {
        id: "visualization",
        name: "Data Visualization",
        video: "Complete Data Visualization",
        tasks: [
            "Matplotlib basics",
            "Line plots",
            "Bar plots",
            "Scatter plots",
            "Subplots",
            "Data visualization practice"
        ]
    },

    {
        id: "statistics",
        name: "Statistics",
        video: "Complete Statistics Course",
        tasks: [
            "Mean median mode",
            "Variance and standard deviation",
            "Probability",
            "Distributions",
            "Correlation",
            "Hypothesis basics"
        ]
    },

    {
        id: "ml-fundamentals",
        name: "Machine Learning Fundamentals",
        video: "Machine Learning Part 1",
        tasks: [
            "What is Machine Learning",
            "Types of Machine Learning",
            "Train test split",
            "Features and labels",
            "Model evaluation"
        ]
    },

    {
        id: "supervised",
        name: "Supervised Learning",
        video: "Machine Learning Part 2",
        tasks: [
            "Linear Regression",
            "Multiple Regression",
            "Regression metrics",
            "Decision Trees",
            "KNN"
        ]
    },

    {
        id: "classification",
        name: "Classification",
        video: "Machine Learning Part 3",
        tasks: [
            "Logistic Regression",
            "Classification metrics",
            "KNN Classification",
            "Decision Tree Classification",
            "Random Forest"
        ]
    },

    {
        id: "tuning",
        name: "Model Tuning & Unsupervised Learning",
        video: "Machine Learning Part 4",
        tasks: [
            "Hyperparameters",
            "Cross validation",
            "Grid search",
            "Ensemble methods",
            "Clustering",
            "Unsupervised Learning"
        ]
    },

    {
        id: "sql",
        name: "SQL for Data Analytics",
        video: "Complete SQL",
        tasks: [
            "SELECT",
            "WHERE",
            "GROUP BY",
            "JOINS",
            "Subqueries",
            "Window functions"
        ]
    },

    {
        id: "nlp",
        name: "NLP",
        video: "Complete NLP",
        tasks: [
            "Text preprocessing",
            "Tokenization",
            "Bag of Words",
            "TF-IDF",
            "Text classification"
        ]
    },

    {
        id: "deep-learning",
        name: "Deep Learning — ANN",
        video: "Deep Learning Part 1",
        tasks: [
            "Neural Network introduction",
            "Perceptron",
            "ANN architecture",
            "Hidden layers",
            "Activation functions",
            "Loss functions",
            "Forward propagation",
            "Backpropagation",
            "Optimizers",
            "ANN implementation"
        ]
    },

    {
        id: "cnn",
        name: "Deep Learning — CNN",
        video: "Deep Learning Part 2",
        tasks: [
            "CNN introduction",
            "Convolution",
            "Filters",
            "Pooling",
            "CNN architecture",
            "CNN implementation"
        ]
    },

    {
        id: "rnn",
        name: "Deep Learning — RNN",
        video: "Deep Learning Part 3",
        tasks: [
            "Sequence data",
            "RNN architecture",
            "Vanishing gradient",
            "LSTM",
            "GRU",
            "RNN implementation"
        ]
    },

    {
        id: "transformers",
        name: "Transformers & Attention",
        video: "Deep Learning Part 4",
        tasks: [
            "Attention",
            "Self attention",
            "Transformers",
            "Encoder",
            "Decoder",
            "Transformer applications"
        ]
    },

    {
        id: "genai",
        name: "Generative AI",
        video: "Generative AI Part 1",
        tasks: [
            "LLM introduction",
            "Prompting",
            "LangChain basics",
            "LLM applications"
        ]
    },

    {
        id: "rag",
        name: "RAG",
        video: "Generative AI Part 2",
        tasks: [
            "Document loaders",
            "Text splitters",
            "Embeddings",
            "Vector databases",
            "Retrieval",
            "RAG pipeline"
        ]
    },

    {
        id: "agents",
        name: "AI Agents",
        video: "Generative AI Part 3",
        tasks: [
            "Tools",
            "Tool calling",
            "APIs",
            "Agent architecture",
            "LangChain agents"
        ]
    },

    {
        id: "multi-agent",
        name: "Multi-Agent AI",
        video: "Multi-Agent Research System",
        tasks: [
            "Multi-agent architecture",
            "Agent communication",
            "Research agent",
            "Tool integration",
            "Multi-agent project"
        ]
    },

    {
        id: "ai-assistant",
        name: "AI Video Assistant with RAG",
        video: "AI Video Assistant",
        tasks: [
            "Video ingestion",
            "Transcript processing",
            "Embeddings",
            "RAG",
            "Question answering",
            "Final project"
        ]
    },

    {
        id: "agentic-ai",
        name: "Agentic AI",
        video: "Agentic AI Course",
        tasks: [
            "Agentic AI fundamentals",
            "Planning",
            "Tool usage",
            "Memory",
            "Autonomous workflows",
            "Agentic project"
        ]
    }

];


/* =========================================================
   DEFAULT DATA
========================================================= */

function defaultData() {

    return {

        user: {
            id: "guest",
            name: "Guest",
            email: "",
            provider: "guest"
        },

        enabledTracks: {
            dsa: true,
            development: true,
            aiml: true
        },

        dailyGoals: {
            dsa: 2
        },

        completed: {
            dsa: [],
            development: [],
            aiml: []
        },

        projects: {
            development: [
                false,
                false,
                false
            ],

            aiml: [
                false,
                false,
                false
            ]
        },

        resources: [],

        history: [],

        activity: {},

        profile: null,

        streak: {
            current: 0,
            best: 0,
            lastActive: null
        },

        dailyAssignments: {},

        settings: {
            sundayRevision: true
        }

    };
}


/* =========================================================
   UTILITIES
========================================================= */

function dateKey(d) {

    return d.getFullYear() + "-" +
        String(d.getMonth() + 1).padStart(2, "0") + "-" +
        String(d.getDate()).padStart(2, "0");
}


function todayKey() {

    return dateKey(new Date());
}


function uid() {

    return Math.random()
        .toString(36)
        .substring(2, 11);
}


function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function dataKey() {

    return STORAGE_KEY + "_" + (session ? session.username : "guest");
}


function saveData() {

    if (!data) return;

    data.updatedAt = Date.now();

    localStorage.setItem(
        dataKey(),
        JSON.stringify(data)
    );

    queueSync();
}


function loadData() {

    const saved =
        localStorage.getItem(dataKey());

    if (!saved) {

        data = defaultData();

        return;
    }

    try {

        data = {
            ...defaultData(),
            ...JSON.parse(saved)
        };

    } catch {

        data = defaultData();

    }
}


/* =========================================================
   PROGRESS CALCULATION
========================================================= */

function getDSAStats() {

    const all = [];

    DSA_SYLLABUS.forEach(topic => {

        topic.questions.forEach((question, index) => {

            all.push(
                topic.id + "-" + index
            );

        });

    });

    const completed =
        all.filter(id =>
            data.completed.dsa.includes(id)
        ).length;

    return {
        total: all.length,
        completed,
        percentage:
            all.length
                ? Math.round(completed / all.length * 100)
                : 0
    };
}


function getTrackStats(track) {

    const syllabus =
        track === "development"
            ? DEV_SYLLABUS
            : AIML_SYLLABUS;

    const all = [];

    syllabus.forEach(topic => {

        topic.tasks.forEach((task, index) => {

            all.push(
                topic.id + "-" + index
            );

        });

    });

    const completed =
        all.filter(id =>
            data.completed[track].includes(id)
        ).length;

    return {
        total: all.length,
        completed,
        percentage:
            all.length
                ? Math.round(completed / all.length * 100)
                : 0
    };
}


/* =========================================================
   PIE CHART
========================================================= */

function pieHTML(
    title,
    percentage,
    color,
    emoji
) {

    return `

        <div class="card pie-card">

            <h3>
                ${emoji} ${title}
            </h3>

            <div class="pie-container">

                <div
                    class="pie"
                    style="
                        --percentage:${percentage}%;
                        --color:${color};
                    "
                ></div>

                <div class="pie-number">
                    ${percentage}%
                </div>

            </div>

            <p class="muted">
                ${percentage}% completed
            </p>

        </div>

    `;
}


/* =========================================================
   COMBINED PROGRESS
========================================================= */

function combinedProgress() {

    const dsa = getDSAStats();

    const dev =
        getTrackStats("development");

    const ai =
        getTrackStats("aiml");

    let completed = 0;
    let total = 0;

    if (data.enabledTracks.dsa) {

        completed += dsa.completed;
        total += dsa.total;

    }

    if (data.enabledTracks.development) {

        completed += dev.completed;
        total += dev.total;

    }

    if (data.enabledTracks.aiml) {

        completed += ai.completed;
        total += ai.total;

    }

    return total
        ? Math.round(completed / total * 100)
        : 0;
}


/* =========================================================
   STREAK
========================================================= */

function updateStreak() {

    const today = todayKey();

    if (data.streak.lastActive === today) {

        return;
    }

    const yesterday =
        new Date();

    yesterday.setDate(
        yesterday.getDate() - 1
    );

    const yesterdayKey =
        dateKey(yesterday);

    if (
        data.streak.lastActive ===
        yesterdayKey
    ) {

        data.streak.current++;

    } else {

        data.streak.current = 1;

    }

    data.streak.best =
        Math.max(
            data.streak.best,
            data.streak.current
        );

    data.streak.lastActive =
        today;

    data.history.unshift({

        date: today,

        type: "activity",

        message:
            "Learning activity completed."

    });

    saveData();

}


/* =========================================================
   CHECKBOX COMPLETION
========================================================= */

function setDone(
    track,
    id,
    checked
) {

    const list =
        data.completed[track];

    if (checked) {

        if (!list.includes(id)) {

            list.push(id);

        }

        updateStreak();

        data.activity = data.activity || {};

        data.activity[todayKey()] =
            (data.activity[todayKey()] || 0) + 1;

        toast("Progress saved 🔥");

    } else {

        const index =
            list.indexOf(id);

        if (index !== -1) {

            list.splice(index, 1);

            const k = todayKey();

            if (data.activity && data.activity[k] > 0) {
                data.activity[k]--;
            }

        }

    }

    saveData();

    renderAll();
}


/* =========================================================
   TOPIC RENDERER
========================================================= */

function renderTrack(
    track,
    syllabus
) {

    const completed =
        data.completed[track];

    return `

        <div class="topic-list tl-${track}">

            ${syllabus.map(topic => {

                const count =
                    topic.tasks
                        ? topic.tasks.length
                        : topic.questions.length;

                const done =
                    topic.tasks
                        ? topic.tasks.filter(
                            (_, i) =>
                                completed.includes(
                                    topic.id + "-" + i
                                )
                        ).length
                        : topic.questions.filter(
                            (_, i) =>
                                completed.includes(
                                    topic.id + "-" + i
                                )
                        ).length;

                const items =
                    topic.tasks || topic.questions;

                return `

                    <div class="topic ${count && done === count ? "complete" : ""}">

                        <button
                            class="topic-header"
                            data-toggle-topic
                        >

                            <span>

                                ${escapeHTML(topic.name)}

                                <small
                                    class="topic-meta"
                                >
                                    ${done}/${count}
                                </small>

                            </span>

                            <span class="topic-right">
                                <span class="mini-bar"><i style="width:${count ? Math.round(done / count * 100) : 0}%"></i></span>
                                <span class="chev">+</span>
                            </span>

                        </button>


                        <div class="topic-body">

                            ${
                                topic.video
                                    ? `
                                    <div
                                        class="topic-meta"
                                    >
                                        🎥
                                        ${escapeHTML(topic.video)}
                                    </div>
                                    `
                                    : ""
                            }

                            ${items.map(
                                (item, index) => {

                                    const id =
                                        topic.id +
                                        "-" +
                                        index;

                                    const checked =
                                        completed
                                            .includes(id);

                                    return `

                                        <label
                                            class="
                                                check-row
                                                ${checked
                                                    ? "done"
                                                    : ""}
                                            "
                                        >

                                            <input
                                                type="checkbox"

                                                data-track="${track}"

                                                data-id="${id}"

                                                ${
                                                    checked
                                                        ? "checked"
                                                        : ""
                                                }
                                            >

                                            <span>
                                                ${topic.star && topic.star.includes(index) ? "★ " : ""}${escapeHTML(item)}
                                            </span>

                                        </label>

                                    `;

                                }
                            ).join("")}

                        </div>

                    </div>

                `;

            }).join("")}

        </div>

    `;

}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {

    const dsa =
        getDSAStats();

    const dev =
        getTrackStats("development");

    const ai =
        getTrackStats("aiml");

    const combined =
        combinedProgress();

    const sunday =
        new Date().getDay() === 0;

    document.getElementById(
        "dashboard"
    ).innerHTML = `

        <div class="hero">

            <h3>
                ${moodEmoji()}
                ${moodText()}
            </h3>

            <p>
                ${sunday
                    ? "Sunday revision mode is active."
                    : "Complete today's mission and protect your streak."
                }
            </p>

        </div>


        ${pathCard()}

        ${howItWorks()}

        <div class="grid grid-4">

            ${
                data.enabledTracks.dsa
                    ? `
                    <div class="card track-card track-yellow">

                        <span class="label">
                            DSA
                        </span>

                        <div class="big-number">
                            ${dsa.percentage}%
                        </div>

                        <div class="progress">
                            <div
                                class="progress-fill yellow"
                                style="
                                    width:${dsa.percentage}%
                                "
                            ></div>
                        </div>

                        <small class="muted">
                            ${dsa.completed}/${dsa.total}
                            questions
                        </small>

                    </div>
                    `
                    : ""
            }


            ${
                data.enabledTracks.development
                    ? `
                    <div class="card track-card track-blue">

                        <span class="label">
                            WEB DEVELOPMENT
                        </span>

                        <div class="big-number">
                            ${dev.percentage}%
                        </div>

                        <div class="progress">
                            <div
                                class="progress-fill blue"
                                style="
                                    width:${dev.percentage}%
                                "
                            ></div>
                        </div>

                        <small class="muted">
                            ${dev.completed}/${dev.total}
                            tasks
                        </small>

                    </div>
                    `
                    : ""
            }


            ${
                data.enabledTracks.aiml
                    ? `
                    <div class="card track-card track-purple">

                        <span class="label">
                            AI / ML
                        </span>

                        <div class="big-number">
                            ${ai.percentage}%
                        </div>

                        <div class="progress">
                            <div
                                class="progress-fill purple"
                                style="
                                    width:${ai.percentage}%
                                "
                            ></div>
                        </div>

                        <small class="muted">
                            ${ai.completed}/${ai.total}
                            tasks
                        </small>

                    </div>
                    `
                    : ""
            }


            <div class="card track-card track-pink">

                <span class="label">
                    🔥 STREAK
                </span>

                <div class="big-number">
                    ${data.streak.current}
                </div>

                <small class="muted">
                    Best: ${data.streak.best} days
                </small>

            </div>

        </div>


        ${heatmapCard()}

        <div class="card">

            <div class="section-head">

                <div>
                    <h3>
                        🎯 Today's Mission
                    </h3>

                    <p>
                        Your tracks remain independent.
                    </p>
                </div>

                <span class="badge purple">
                    ${sunday
                        ? "REVISION SUNDAY"
                        : "DAILY GOAL"
                    }
                </span>

            </div>


            <div class="today-grid">

                ${
                    data.enabledTracks.dsa
                        ? renderDailyDSA()
                        : ""
                }


                ${
                    data.enabledTracks.development
                        ? renderDailyDevelopment()
                        : ""
                }


                ${
                    data.enabledTracks.aiml
                        ? renderDailyAI()
                        : ""
                }

            </div>

        </div>


        <br>


        <div class="section-head">

            <div>

                <h3>
                    📊 Growth
                </h3>

                <p>
                    Individual progress + combined progress.
                </p>

            </div>

        </div>


        <div class="chart-grid">

            ${
                data.enabledTracks.dsa
                    ? pieHTML(
                        "DSA",
                        dsa.percentage,
                        "var(--yellow)",
                        "🟡"
                    )
                    : ""
            }

            ${
                data.enabledTracks.development
                    ? pieHTML(
                        "Web Dev",
                        dev.percentage,
                        "var(--blue)",
                        "🔵"
                    )
                    : ""
            }

            ${
                data.enabledTracks.aiml
                    ? pieHTML(
                        "AI / ML",
                        ai.percentage,
                        "var(--purple)",
                        "🟣"
                    )
                    : ""
            }

            ${pieHTML(
                "Overall",
                combined,
                "var(--pink)",
                "🌈"
            )}

        </div>

    `;

}


/* =========================================================
   DAILY DSA
========================================================= */

function renderDailyDSA() {

    const goal =
        Number(data.dailyGoals.dsa) || 2;

    const assignment =
        getDailyDSA();

    const completed =
        assignment.filter(
            id =>
                data.completed.dsa
                    .includes(id)
        ).length;

    return `

        <div class="goal-box">

            <h4>
                🟡 DSA
            </h4>

            <p class="muted">
                Minimum goal:
                <strong>${goal}</strong>
                questions
            </p>

            <ul>

                ${assignment.map(id => {

                    const parts =
                        id.split("-");

                    const topicId =
                        parts[0];

                    const index =
                        Number(
                            parts.slice(1).join("-")
                        );

                    const topic =
                        DSA_SYLLABUS.find(
                            t =>
                                t.id === topicId
                        );

                    const question =
                        topic?.questions[index]
                        || "Question";

                    const checked =
                        data.completed.dsa
                            .includes(id);

                    return `

                        <li>

                            <label
                                class="
                                    check-row
                                    ${checked
                                        ? "done"
                                        : ""}
                                "
                            >

                                <input
                                    type="checkbox"
                                    data-track="dsa"
                                    data-id="${id}"
                                    ${checked
                                        ? "checked"
                                        : ""}
                                >

                                <span>
                                    ${escapeHTML(question)}
                                </span>

                            </label>

                        </li>

                    `;

                }).join("")}

            </ul>

            <small class="muted">

                ${completed}/${goal}
                minimum completed

                ${
                    completed >= goal
                        ? " 🔥 Goal achieved!"
                        : ""
                }

            </small>

        </div>

    `;
}


/* =========================================================
   DAILY TOPIC SELECTION
========================================================= */

function getDailyTopic(
    syllabus,
    track
) {

    const key =
        todayKey();

    if (
        data.dailyAssignments[key] &&
        data.dailyAssignments[key][track]
    ) {

        const id =
            data.dailyAssignments[key][track];

        return syllabus.find(
            topic => topic.id === id
        );

    }

    const stats =
        getTrackStats(track);

    let topic =
        syllabus.find(topic => {

            return topic.tasks.some(
                (_, i) =>
                    !data.completed[track]
                        .includes(
                            topic.id + "-" + i
                        )
            );

        });

    if (!topic) {

        topic =
            syllabus[
                syllabus.length - 1
            ];

    }

    if (!data.dailyAssignments[key]) {

        data.dailyAssignments[key] = {};

    }

    data.dailyAssignments[key][track] =
        topic.id;

    saveData();

    return topic;
}


/* =========================================================
   DAILY DSA SELECTION

   Minimum 2.
   Users can do extra questions from DSA page.
========================================================= */

function getDailyDSA() {

    const key =
        todayKey();

    if (
        data.dailyAssignments[key] &&
        data.dailyAssignments[key].dsa
    ) {

        return data.dailyAssignments[key].dsa;

    }

    const selected = [];

    for (const topic of DSA_SYLLABUS) {

        for (
            let i = 0;
            i < topic.questions.length;
            i++
        ) {

            const id =
                topic.id + "-" + i;

            if (
                !data.completed.dsa
                    .includes(id)
            ) {

                selected.push(id);

            }

            if (
                selected.length >=
                Number(data.dailyGoals.dsa || 2)
            ) {

                break;

            }

        }

        if (
            selected.length >=
            Number(data.dailyGoals.dsa || 2)
        ) {

            break;

        }

    }

    if (!data.dailyAssignments[key]) {

        data.dailyAssignments[key] = {};

    }

    data.dailyAssignments[key].dsa =
        selected;

    saveData();

    return selected;
}


/* =========================================================
   DSA PAGE
========================================================= */

function renderDSAPage() {

    const stats =
        getDSAStats();

    document.getElementById(
        "dsa"
    ).innerHTML = `

        <div class="section-head">

            <div>

                <h3>
                    🟡 DSA Journey
                </h3>

                <p>
                    ${stats.completed}
                    of
                    ${stats.total}
                    questions completed.
                </p>

            </div>

            <span class="badge green">
                ${stats.percentage}% Complete
            </span>

        </div>

        <div class="card">

            ${renderTrack(
                "dsa",
                DSA_SYLLABUS
            )}

        </div>

    `;
}


/* =========================================================
   DEVELOPMENT PAGE
========================================================= */

function renderDevelopmentPage() {

    const stats =
        getTrackStats(
            "development"
        );

    document.getElementById(
        "development"
    ).innerHTML = `

        <div class="section-head">

            <div>

                <h3>
                    🔵 Web Development
                </h3>

                <p>
                    Start from HTML/CSS and move
                    toward full-stack development.
                </p>

            </div>

            <span class="badge green">
                ${stats.percentage}% Complete
            </span>

        </div>

        <div class="card">

            ${renderTrack(
                "development",
                DEV_SYLLABUS
            )}

        </div>

    `;
}


/* =========================================================
   AI PAGE
========================================================= */

function renderAIMLPage() {

    const dev =
        getTrackStats(
            "development"
        );

    const ai =
        getTrackStats(
            "aiml"
        );

    const locked = false;

    document.getElementById(
        "aiml"
    ).innerHTML = `

        <div class="section-head">

            <div>

                <h3>
                    🟣 AI / ML Journey
                </h3>

                <p>
                    Topic-wise learning using
                    your AI/ML course journey.
                </p>

            </div>

            <span
                class="
                    badge
                    ${locked
                        ? "red"
                        : "green"}
                "
            >

                ${
                    locked
                        ? "🔒 Complete Web Dev First"
                        : ai.percentage +
                          "% Complete"
                }

            </span>

        </div>


        ${
            locked
                ? `

                    <div class="card">

                        <h3>
                            🔒 AI/ML is waiting for you!
                        </h3>

                        <p class="muted">

                            AI/ML tracking is open
                            from the day after
                            Web Development reaches
                            100%.

                        </p>

                        <div class="progress">

                            <div
                                class="progress-fill blue"
                                style="
                                    width:
                                    ${dev.percentage}%
                                "
                            ></div>

                        </div>

                        <strong>
                            Web Development:
                            ${dev.percentage}%
                        </strong>

                    </div>

                `
                : `

                    <div class="card">

                        ${renderTrack(
                            "aiml",
                            AIML_SYLLABUS
                        )}

                    </div>

                `
        }

    `;
}


/* =========================================================
   PROJECTS
========================================================= */

function renderProjects() {

    const devProjects = [

        "Personal Portfolio Website",

        "Full Stack Web Application",

        "Major Web Development Project"

    ];

    const aiProjects = [

        "Machine Learning Project",

        "RAG Application",

        "AI Agent / Multi-Agent Project"

    ];

    document.getElementById(
        "projects"
    ).innerHTML = `

        <div class="section-head">

            <div>

                <h3>
                    🚀 Projects
                </h3>

                <p>
                    Projects are tracked separately
                    from syllabus completion.
                </p>

            </div>

        </div>


        <div class="grid grid-2">


            <div class="card">

                <h3>
                    🔵 Development Projects
                </h3>

                <p class="muted">
                    ${
                        data.projects
                            .development
                            .filter(Boolean)
                            .length
                    } / 3 completed
                </p>

                ${devProjects.map(
                    (project, index) => `

                        <label
                            class="check-row"
                            style="margin:14px 0"
                        >

                            <input
                                type="checkbox"

                                data-project-track="development"

                                data-project-index="${index}"

                                ${
                                    data.projects
                                        .development[index]
                                        ? "checked"
                                        : ""
                                }
                            >

                            <span>
                                ${project}
                            </span>

                        </label>

                    `
                ).join("")}

            </div>


            <div class="card">

                <h3>
                    🟣 AI/ML Projects
                </h3>

                <p class="muted">
                    ${
                        data.projects
                            .aiml
                            .filter(Boolean)
                            .length
                    } / 3 completed
                </p>

                ${aiProjects.map(
                    (project, index) => `

                        <label
                            class="check-row"
                            style="margin:14px 0"
                        >

                            <input
                                type="checkbox"

                                data-project-track="aiml"

                                data-project-index="${index}"

                                ${
                                    data.projects
                                        .aiml[index]
                                        ? "checked"
                                        : ""
                                }
                            >

                            <span>
                                ${project}
                            </span>

                        </label>

                    `
                ).join("")}

            </div>

        </div>

    `;
}


/* =========================================================
   RESOURCES

   These do NOT affect:
   - syllabus %
   - streak
   - daily goals
========================================================= */

function renderResources() {

    document.getElementById(
        "resources"
    ).innerHTML = `

        <div class="section-head">

            <div>

                <h3>
                    📚 Optional Resources
                </h3>

                <p>
                    Extra resources are separate
                    from your actual syllabus.
                </p>

            </div>

        </div>


        <div class="card">

            <form id="resourceForm"
                class="form-grid">

                <div class="field">

                    <label>
                        Resource Name
                    </label>

                    <input
                        id="resourceName"
                        placeholder="MDN Flexbox Guide"
                        required
                    >

                </div>


                <div class="field">

                    <label>
                        Link
                    </label>

                    <input
                        id="resourceURL"
                        type="url"
                        placeholder="https://..."
                        required
                    >

                </div>


                <div class="field full">

                    <label>
                        Description
                    </label>

                    <input
                        id="resourceDescription"
                        placeholder="Useful extra reference"
                    >

                </div>


                <div class="field full">

                    <button
                        class="primary-btn"
                    >
                        Add Resource
                    </button>

                </div>

            </form>

        </div>


        <br>


        <div class="grid grid-2">

            ${
                data.resources.length
                    ? data.resources.map(
                        (resource, index) => `

                            <div class="resource">

                                <a
                                    href="${escapeHTML(resource.url)}"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    ${escapeHTML(
                                        resource.name
                                    )}
                                </a>

                                <p class="muted">
                                    ${escapeHTML(
                                        resource.description ||
                                        ""
                                    )}
                                </p>

                                <button
                                    class="danger-btn"
                                    data-delete-resource="${index}"
                                >
                                    Delete
                                </button>

                            </div>

                        `
                    ).join("")
                    : `
                        <div class="card">
                            No optional resources yet.
                        </div>
                    `
            }

        </div>

    `;
}


/* =========================================================
   HISTORY
========================================================= */

function renderHistory() {

    document.getElementById(
        "history"
    ).innerHTML = `

        <div class="section-head">

            <div>

                <h3>
                    📜 Learning History
                </h3>

                <p>
                    Resetting progress never
                    deletes your journey.
                </p>

            </div>

        </div>


        <div class="card">

            ${heatmapHTML()}

            <br>

            <div class="grid grid-3">

                <div>

                    <span class="label">
                        CURRENT STREAK
                    </span>

                    <div class="big-number">
                        🔥
                        ${data.streak.current}
                    </div>

                </div>


                <div>

                    <span class="label">
                        BEST STREAK
                    </span>

                    <div class="big-number">
                        🏆
                        ${data.streak.best}
                    </div>

                </div>


                <div>

                    <span class="label">
                        HISTORY EVENTS
                    </span>

                    <div class="big-number">
                        ${data.history.length}
                    </div>

                </div>

            </div>


            <br>


            ${
                data.history.length

                    ? data.history.map(
                        item => `

                            <div
                                class="history-row"
                            >

                                <strong>
                                    ${item.date}
                                </strong>

                                <span>
                                    ${escapeHTML(
                                        item.message
                                    )}
                                </span>

                                <span
                                    class="
                                        badge
                                        ${
                                            item.type ===
                                            "reset"
                                                ? "red"
                                                : "green"
                                        }
                                    "
                                >

                                    ${
                                        item.type ===
                                        "reset"
                                            ? "Reset"
                                            : "Activity"
                                    }

                                </span>

                            </div>

                        `
                    ).join("")

                    : `
                        <p class="muted">
                            Your history will appear here.
                        </p>
                    `
            }

        </div>

    `;
}


/* =========================================================
   SETTINGS
========================================================= */

function renderSettings() {

    document.getElementById(
        "settings"
    ).innerHTML = `

        <div class="section-head">

            <div>

                <h3>
                    ⚙️ Settings
                </h3>

                <p>
                    Everyone can have a different
                    learning workload.
                </p>

            </div>

        </div>


        <div class="grid grid-2">


            <div class="card">

                <h3>
                    🎯 My Daily Goals
                </h3>

                <p class="muted">
                    Your minimum for each day. You can always do more.
                </p>

                ${goalInputs()}

                <br>

                <button
                    id="saveGoalsBtn"
                    class="primary-btn"
                >
                    Save Goals
                </button>

                <button
                    id="redoSetupBtn"
                    class="secondary-btn"
                    style="margin-top:10px"
                >
                    Redo my setup
                </button>

            </div>


            <div class="card">

                <h3>
                    📚 Track Selection
                </h3>

                <p class="muted">
                    Choose what you want to track.
                </p>

                ${pathButtons()}

                


                

            </div>


            <div class="card">

                <h3>
                    ♻️ Reset Progress
                </h3>

                <p class="muted">

                    This resets active learning
                    progress but keeps your
                    history.

                </p>

                <button
                    id="resetBtn"
                    class="danger-btn"
                >
                    Reset Active Progress
                </button>

            </div>


            <div class="card">

                <h3>
                    👤 Account
                </h3>

                <p>

                    <strong>
                        ${escapeHTML(
                            data.user.name
                        )}
                    </strong>

                    <br>

                    <span class="muted">

                        ${
                            escapeHTML(
                                data.user.email ||
                                "Guest / Local Account"
                            )
                        }

                    </span>

                </p>

                <span class="badge purple">
                    ${data.user.provider === "cloud" ? "☁️ Synced to Google Sheet" : data.user.provider === "local" ? "💾 Saved on this browser" : "👤 Guest"}
                </span>

                <br><br>

                <button id="syncNowBtn" class="primary-btn">Sync now</button>

            </div>

        </div>

    `;
}


/* =========================================================
   RENDER ALL
========================================================= */

function renderAllRaw() {

    if (!data) return;

    document.getElementById(
        "sideStreak"
    ).textContent =
        data.streak.current;


    document.getElementById(
        "profileName"
    ).textContent =
        data.user.name;


    document.getElementById(
        "avatar"
    ).textContent =
        (
            data.user.name ||
            "G"
        )
        .charAt(0)
        .toUpperCase();


    renderDashboard();

    renderDSAPage();

    renderDevelopmentPage();

    renderAIMLPage();

    renderProjects();

    renderResources();

    renderHistory();

    renderSettings();

}


/* Re-draw everything, but keep open topics and scroll position */

function renderAll() {

    const open = [...document.querySelectorAll(".topic.open")].map(topic => {

        const page = topic.closest(".page");

        return page.id + ":" +
            [...page.querySelectorAll(".topic")].indexOf(topic);
    });

    const y = window.scrollY;

    renderAllRaw();

    open.forEach(key => {

        const [id, index] = key.split(":");

        const topic =
            document.getElementById(id)
                ?.querySelectorAll(".topic")[index];

        if (topic) topic.classList.add("open");
    });

    ["dsa", "development", "aiml"].forEach(track => {

        document
            .querySelector('.nav-btn[data-section="' + track + '"]')
            .classList.toggle("hidden", !data.enabledTracks[track]);
    });

    window.scrollTo(0, y);
}


/* =========================================================
   MOTIVATION
========================================================= */

function moodEmoji() {

    if (data.streak.current >= 14)
        return "🔥";

    if (data.streak.current >= 7)
        return "😎";

    if (data.streak.current >= 1)
        return "🙂";

    return "😢";
}


function moodText() {

    if (data.streak.current >= 14)
        return "You are on fire! Keep the chain alive.";

    if (data.streak.current >= 7)
        return "Amazing streak! Don't let Lala down.";

    if (data.streak.current >= 1)
        return "Nice start. Come back tomorrow.";

    return "Lala is sad 😭 Start a fresh streak today.";
}


/* =========================================================
   NAVIGATION
========================================================= */

function openSection(section) {

    document.querySelectorAll(".page")
        .forEach(page =>
            page.classList.remove(
                "active-page"
            )
        );


    document.getElementById(section)
        .classList.add(
            "active-page"
        );


    document.querySelectorAll(".nav-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.section ===
                section
            );

        });


    const titles = {

        dashboard: greeting(),

        dsa:
            "DSA Journey",

        development:
            "Web Development",

        aiml:
            "AI / ML",

        projects:
            "Projects",

        resources:
            "Optional Resources",

        history:
            "Learning History",

        settings:
            "Settings"

    };


    document.getElementById(
        "pageTitle"
    ).textContent =
        titles[section];

    window.scrollTo(0, 0);
}


/* =========================================================
   TOAST
========================================================= */

function toast(message) {

    const element =
        document.getElementById(
            "toast"
        );

    element.textContent =
        message;

    element.classList.add("show");

    clearTimeout(
        window.toastTimer
    );

    window.toastTimer =
        setTimeout(() => {

            element.classList.remove(
                "show"
            );

        }, 2200);
}


/* =========================================================
   EVENT LISTENERS
========================================================= */

document.addEventListener(
    "click",
    event => {

        /* Navigation */

        const nav =
            event.target.closest(
                ".nav-btn"
            );

        if (nav) {

            openSection(
                nav.dataset.section
            );

            return;
        }


        /* Expand Topic */

        const topic =
            event.target.closest(
                "[data-toggle-topic]"
            );

        if (topic) {

            topic
                .closest(".topic")
                .classList.toggle(
                    "open"
                );

            return;
        }


        /* Save DSA Goal */

        if (
            event.target.id ===
            "saveGoalBtn"
        ) {

            const input =
                document.getElementById(
                    "dsaGoalInput"
                );

            data.dailyGoals.dsa =
                Math.max(
                    1,
                    Number(input.value) || 2
                );

            /*
                Delete today's DSA assignment
                so the new goal is applied.
            */

            if (
                data.dailyAssignments[
                    todayKey()
                ]
            ) {

                delete data.dailyAssignments[
                    todayKey()
                ].dsa;

            }

            saveData();

            toast(
                "Daily DSA goal updated 🎯"
            );

            renderAll();

            return;
        }


        /* Reset */

        if (
            event.target.id ===
            "resetBtn"
        ) {

            const answer =
                confirm(
                    "Reset active progress? Your history will remain."
                );

            if (!answer) return;


            data.history.unshift({

                date: todayKey(),

                type: "reset",

                message:
                    "Active learning progress was reset."

            });


            data.completed = {

                dsa: [],

                development: [],

                aiml: []

            };


            data.projects = {

                development: [
                    false,
                    false,
                    false
                ],

                aiml: [
                    false,
                    false,
                    false
                ]

            };


            data.dailyAssignments = {};

            data.streak.current = 0;

            data.streak.lastActive = null;


            saveData();

            toast(
                "Progress reset. History preserved 📜"
            );

            renderAll();

            return;
        }


        /* Delete Resource */

        const deleteResource =
            event.target.closest(
                "[data-delete-resource]"
            );

        if (deleteResource) {

            const index =
                Number(
                    deleteResource.dataset
                        .deleteResource
                );

            data.resources.splice(
                index,
                1
            );

            saveData();

            renderResources();

            toast(
                "Resource deleted."
            );

        }

    }
);


/* =========================================================
   CHECKBOX EVENTS
========================================================= */

document.addEventListener(
    "change",
    event => {


        /* Syllabus checkbox */

        if (
            event.target.matches(
                "[data-track][data-id]"
            )
        ) {

            setDone(

                event.target.dataset.track,

                event.target.dataset.id,

                event.target.checked

            );

            return;

        }


        /* Project */

        if (
            event.target.matches(
                "[data-project-track]"
            )
        ) {

            const track =
                event.target.dataset
                    .projectTrack;

            const index =
                Number(
                    event.target.dataset
                        .projectIndex
                );


            data.projects[
                track
            ][index] =
                event.target.checked;


            saveData();

            toast(
                event.target.checked
                    ? "Project completed 🚀"
                    : "Project unchecked"
            );

            renderAll();

            return;

        }


        /* Track Selection */

        if (
            event.target.matches(
                "[data-enable-track]"
            )
        ) {

            const track =
                event.target.dataset
                    .enableTrack;

            data.enabledTracks[
                track
            ] =
                event.target.checked;


            saveData();

            renderAll();

        }

    }
);


/* =========================================================
   RESOURCE FORM
========================================================= */

document.addEventListener(
    "submit",
    event => {

        if (
            event.target.id !==
            "resourceForm"
        ) return;


        event.preventDefault();


        const name =
            document.getElementById(
                "resourceName"
            ).value.trim();


        const url =
            document.getElementById(
                "resourceURL"
            ).value.trim();


        const description =
            document.getElementById(
                "resourceDescription"
            ).value.trim();


        data.resources.unshift({

            id: uid(),

            name,

            url,

            description

        });


        saveData();

        renderResources();

        toast(
            "Resource added 📚"
        );

    }
);


/* =========================================================
   STUDY CALENDAR  (GitHub / LeetCode style green squares)
========================================================= */

function heatmapHTML() {

    const weeks = window.innerWidth < 800 ? 18 : 30;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const start = new Date(today);
    start.setDate(start.getDate() - ((weeks - 1) * 7 + today.getDay()));

    const activity = data.activity || {};

    const level = n =>
        n >= 6 ? 4 : n >= 4 ? 3 : n >= 2 ? 2 : n >= 1 ? 1 : 0;

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    let cols = "";
    let lastMonth = -1;
    let activeDays = 0;
    let total = 0;

    for (let w = 0; w < weeks; w++) {

        let cells = "";
        let label = "";

        for (let d = 0; d < 7; d++) {

            const day = new Date(start);
            day.setDate(start.getDate() + w * 7 + d);

            if (d === 0 && day.getMonth() !== lastMonth) {
                lastMonth = day.getMonth();
                label = months[lastMonth];
            }

            if (day > today) {
                cells += '<i class="hm-cell future"></i>';
                continue;
            }

            const key = dateKey(day);
            const n = activity[key] || 0;

            if (n) { activeDays++; total += n; }

            cells += `<i class="hm-cell l${level(n)} ${day.getTime() === today.getTime() ? "today" : ""}"
                title="${n} task${n === 1 ? "" : "s"} on ${key}"></i>`;
        }

        cols += `<div class="hm-col"><span class="hm-month">${label}</span>${cells}</div>`;
    }

    return `
        <div class="heatmap">
            <div class="hm-stats">
                <span><b>${total}</b> tasks done</span>
                <span><b>${activeDays}</b> active days</span>
                <span>🔥 <b>${data.streak.current}</b> day streak</span>
                <span>🏆 <b>${data.streak.best}</b> best</span>
            </div>
            <div class="hm-scroll">
                <div class="hm-grid">${cols}</div>
            </div>
            <div class="hm-legend">
                Less
                <i class="hm-cell l0"></i><i class="hm-cell l1"></i><i class="hm-cell l2"></i><i class="hm-cell l3"></i><i class="hm-cell l4"></i>
                More
            </div>
        </div>
    `;
}


function heatmapCard() {

    return `
        <div class="card" style="margin-bottom:20px">
            <div class="section-head">
                <div>
                    <h3>🗓️ Study Calendar</h3>
                    <p>Every green square is a day you studied. Darker = more tasks done.</p>
                </div>
            </div>
            ${heatmapHTML()}
        </div>
    `;
}


/* =========================================================
   CHOOSE YOUR PATH
========================================================= */

const TRACK_CHOICES = [
    ["dsa",         "🟡 DSA"],
    ["development", "🔵 Web Development"],
    ["aiml",        "🟣 AI / ML"]
];


function pathButtons() {

    return `
        <div class="path-grid">
            ${TRACK_CHOICES.map(([track, label]) => `
                <button
                    class="path-btn ${data.enabledTracks[track] ? "active" : ""}"
                    data-track-toggle="${track}"
                    aria-pressed="${!!data.enabledTracks[track]}"
                >
                    ${data.enabledTracks[track] ? "✓ " : ""}${label}
                </button>
            `).join("")}
        </div>
    `;
}


function pathCard() {

    if (data.settings.pathChosen) return "";

    return `
        <div class="card guide">
            <h3>🧭 What do you want to learn?</h3>
            <p class="muted">
                Tap one, two or all three. It's completely your choice,
                and you can change it any time in Settings.
            </p>
            ${pathButtons()}
            <button class="primary-btn" data-path-done>Done</button>
        </div>
    `;
}


document.addEventListener("click", event => {

    if (event.target.closest("[data-path-done]")) {

        data.settings.pathChosen = true;

        saveData();

        renderAll();

        return;
    }

    const btn = event.target.closest("[data-track-toggle]");

    if (!btn) return;

    const track = btn.dataset.trackToggle;

    const enabled = !data.enabledTracks[track];

    const othersOn =
        Object.keys(data.enabledTracks)
            .some(k => k !== track && data.enabledTracks[k]);

    if (!enabled && !othersOn) {

        toast("Keep at least one track on 🙂");

        return;
    }

    data.enabledTracks[track] = enabled;

    saveData();

    renderAll();
});


/* =========================================================
   DAILY TASKS  (Web Dev + AI/ML)
   Picks the NEXT unfinished tasks, using each student's own
   daily goal. Starts right after whatever they already finished.
========================================================= */

const SYL = {
    dsa: DSA_SYLLABUS,
    development: DEV_SYLLABUS,
    aiml: AIML_SYLLABUS
};


function getDailyTasks(track) {

    const key = todayKey();

    data.dailyAssignments[key] = data.dailyAssignments[key] || {};

    const slot = track + "_tasks";

    if (data.dailyAssignments[key][slot]) {
        return data.dailyAssignments[key][slot];
    }

    const goal = Number(data.dailyGoals[track]) || 2;

    const picked = [];

    outer:
    for (const topic of SYL[track]) {

        const items = topic.tasks || topic.questions;

        for (let i = 0; i < items.length; i++) {

            const id = topic.id + "-" + i;

            if (!data.completed[track].includes(id)) {

                picked.push(id);

                if (picked.length >= goal) break outer;
            }
        }
    }

    data.dailyAssignments[key][slot] = picked;

    saveData();

    return picked;
}


function renderDailyTasks(track, emoji, title) {

    const ids = getDailyTasks(track);

    const goal = Number(data.dailyGoals[track]) || 2;

    if (!ids.length) {

        return `
            <div class="goal-box">
                <h4>${emoji} ${title}</h4>
                <p class="muted">You finished everything here. Amazing! 🎉</p>
            </div>
        `;
    }

    const done = ids.filter(id => data.completed[track].includes(id)).length;

    return `
        <div class="goal-box">

            <h4>${emoji} ${title}</h4>

            <p class="muted">
                Your goal today: <strong>${goal}</strong> task${goal === 1 ? "" : "s"}
            </p>

            <ul>
                ${ids.map(id => {

                    const cut = id.lastIndexOf("-");

                    const topic = SYL[track].find(t => t.id === id.slice(0, cut));

                    const index = Number(id.slice(cut + 1));

                    const text = topic ? (topic.tasks || topic.questions)[index] : "Task";

                    const checked = data.completed[track].includes(id);

                    return `
                        <li>
                            <label class="check-row ${checked ? "done" : ""}">
                                <input type="checkbox" data-track="${track}" data-id="${id}" ${checked ? "checked" : ""}>
                                <span>
                                    ${escapeHTML(text)}
                                    <small class="topic-meta">${topic ? escapeHTML(topic.name) : ""}</small>
                                </span>
                            </label>
                        </li>
                    `;

                }).join("")}
            </ul>

            <small class="muted">
                ${done}/${ids.length} done${done >= ids.length ? " 🔥 Goal achieved!" : ""}
            </small>

        </div>
    `;
}


function renderDailyDevelopment() {

    return renderDailyTasks("development", "🔵", "Web Development");
}


function renderDailyAI() {

    return renderDailyTasks("aiml", "🟣", "AI / ML");
}


function goalInputs() {

    return TRACK_CHOICES
        .filter(([track]) => data.enabledTracks[track])
        .map(([track, label]) => `
            <div class="field" style="margin-bottom:10px">
                <label>${label} — per day</label>
                <input type="number" min="1" max="10"
                    data-goal-input="${track}"
                    value="${Number(data.dailyGoals[track]) || 2}">
            </div>
        `).join("");
}


/* =========================================================
   FIRST-TIME SETUP WIZARD
   1. Goal   2. What to learn   3. What's already done
   4. Time per day -> personal daily targets
========================================================= */

const GOALS = [
    "💼 Get a job or internship",
    "🧠 Crack coding interviews",
    "🛠️ Build my own projects",
    "🌱 Learn for fun and basics"
];

const MINUTES_PER_ITEM = { dsa: 30, development: 40, aiml: 50 };

const TIME_CHOICES = [
    [30, "30 min"],
    [60, "1 hour"],
    [120, "2 hours"],
    [180, "3+ hours"]
];

let ob = null;


function obTracks() {

    return TRACK_CHOICES.filter(([track]) => ob.tracks[track]);
}


function obSuggest() {

    const on = obTracks();

    on.forEach(([track]) => {

        const share = ob.minutes / on.length;

        ob.goals[track] = Math.max(
            1,
            Math.min(10, Math.round(share / MINUTES_PER_ITEM[track]))
        );
    });
}


function startOnboarding() {

    const has = !!(data.profile && data.profile.onboarded);

    ob = {
        step: 1,
        goal: (data.profile && data.profile.goal) || "",
        tracks: has
            ? { ...data.enabledTracks }
            : { dsa: false, development: false, aiml: false },
        done: { dsa: "", development: "", aiml: "" },
        minutes: (data.profile && data.profile.minutes) || 60,
        goals: {},
        touched: false
    };

    obRender();
}


function obRender() {

    let el = document.getElementById("onboarding");

    if (!el) {

        el = document.createElement("div");

        el.id = "onboarding";

        el.className = "onboard";

        document.body.appendChild(el);
    }

    const dots = [1, 2, 3, 4]
        .map(n => `<i class="${n <= ob.step ? "on" : ""}"></i>`)
        .join("");

    let body = "";
    let canNext = true;

    if (ob.step === 1) {

        canNext = !!ob.goal;

        body = `
            <h2>What's your main goal? 🎯</h2>
            <p class="muted">We'll shape your plan around it.</p>
            <div class="ob-grid">
                ${GOALS.map(g => `
                    <button class="path-btn ${ob.goal === g ? "active" : ""}" data-ob-goal-pick="${g}">${g}</button>
                `).join("")}
            </div>
        `;

    } else if (ob.step === 2) {

        canNext = obTracks().length > 0;

        body = `
            <h2>What do you want to learn? 🧭</h2>
            <p class="muted">
                Tap one, two or all three. It's completely your choice.
            </p>
            <div class="ob-grid ob-three">
                ${TRACK_CHOICES.map(([track, label]) => `
                    <button class="path-btn ${ob.tracks[track] ? "active" : ""}" data-ob-track="${track}">
                        ${ob.tracks[track] ? "✓ " : ""}${label}
                    </button>
                `).join("")}
            </div>
        `;

    } else if (ob.step === 3) {

        body = `
            <h2>What have you already finished? ✅</h2>
            <p class="muted">
                Pick the last topic you completed. Your plan will start right after it.
                Not started? Leave it as it is.
            </p>
            ${obTracks().map(([track, label]) => `
                <div class="field" style="margin-bottom:14px">
                    <label>${label}</label>
                    <select data-ob-done="${track}">
                        <option value="">Not started yet — begin from the start</option>
                        ${SYL[track].map(t => `
                            <option value="${t.id}" ${ob.done[track] === t.id ? "selected" : ""}>
                                Finished up to: ${escapeHTML(t.name)}
                            </option>
                        `).join("")}
                    </select>
                </div>
            `).join("")}
        `;

    } else {

        if (!ob.touched) obSuggest();

        body = `
            <h2>How much time can you study each day? ⏱️</h2>
            <p class="muted">We'll suggest daily targets from this. You can change them.</p>
            <div class="ob-grid ob-four">
                ${TIME_CHOICES.map(([m, label]) => `
                    <button class="path-btn ${ob.minutes === m ? "active" : ""}" data-ob-time="${m}">${label}</button>
                `).join("")}
            </div>
            <h3 style="margin:18px 0 8px">Your daily targets</h3>
            ${obTracks().map(([track, label]) => `
                <div class="field" style="margin-bottom:10px">
                    <label>${label} — tasks per day</label>
                    <input type="number" min="1" max="10" data-ob-goal="${track}" value="${ob.goals[track]}">
                </div>
            `).join("")}
        `;
    }

    el.innerHTML = `
        <div class="ob-card">
            <div class="ob-dots">${dots}</div>
            ${body}
            <div class="ob-actions">
                ${ob.step > 1 ? '<button class="secondary-btn" data-ob-back>Back</button>' : '<button class="text-link" data-ob-skip>Skip setup</button>'}
                ${ob.step < 4
                    ? `<button class="primary-btn" data-ob-next ${canNext ? "" : "disabled"}>Next</button>`
                    : '<button class="primary-btn" data-ob-finish>Start learning 🚀</button>'}
            </div>
        </div>
    `;
}


function obFinish() {

    data.enabledTracks = { ...ob.tracks };

    data.dailyGoals = {
        dsa: Number(data.dailyGoals.dsa) || 2,
        development: Number(data.dailyGoals.development) || 2,
        aiml: Number(data.dailyGoals.aiml) || 2,
        ...ob.goals
    };

    obTracks().forEach(([track]) => {

        const topicId = ob.done[track];

        if (!topicId) return;

        const syllabus = SYL[track];

        const last = syllabus.findIndex(t => t.id === topicId);

        for (let k = 0; k <= last; k++) {

            const topic = syllabus[k];

            (topic.tasks || topic.questions).forEach((_, i) => {

                const id = topic.id + "-" + i;

                if (!data.completed[track].includes(id)) {
                    data.completed[track].push(id);
                }
            });
        }
    });

    data.profile = {
        goal: ob.goal,
        minutes: ob.minutes,
        onboarded: true
    };

    data.settings.pathChosen = true;

    data.dailyAssignments = {};

    closeOnboarding();

    saveData();

    renderAll();

    openSection("dashboard");

    toast("Your plan is ready 🚀");
}


function closeOnboarding() {

    const el = document.getElementById("onboarding");

    if (el) el.remove();

    ob = null;
}


document.addEventListener("click", event => {

    if (!ob) return;

    const t = event.target;

    const goal = t.closest("[data-ob-goal-pick]");
    const track = t.closest("[data-ob-track]");
    const time = t.closest("[data-ob-time]");

    if (goal) {

        ob.goal = goal.dataset.obGoalPick;

    } else if (track) {

        ob.tracks[track.dataset.obTrack] = !ob.tracks[track.dataset.obTrack];

    } else if (time) {

        ob.minutes = Number(time.dataset.obTime);

        ob.touched = false;

        obSuggest();

    } else if (t.closest("[data-ob-next]")) {

        ob.step++;

    } else if (t.closest("[data-ob-back]")) {

        ob.step--;

    } else if (t.closest("[data-ob-finish]")) {

        return obFinish();

    } else if (t.closest("[data-ob-skip]")) {

        data.profile = { goal: "", minutes: 0, onboarded: true };

        closeOnboarding();

        saveData();

        renderAll();

        return;

    } else {

        return;
    }

    obRender();
});

document.addEventListener("change", event => {

    if (ob && event.target.matches("[data-ob-done]")) {

        ob.done[event.target.dataset.obDone] = event.target.value;
    }
});

document.addEventListener("input", event => {

    if (ob && event.target.matches("[data-ob-goal]")) {

        ob.touched = true;

        ob.goals[event.target.dataset.obGoal] =
            Math.max(1, Math.min(10, Number(event.target.value) || 1));
    }
});


/* ---------- settings: goals + redo setup ---------- */

document.addEventListener("click", event => {

    if (event.target.id === "saveGoalsBtn") {

        document.querySelectorAll("[data-goal-input]").forEach(input => {

            data.dailyGoals[input.dataset.goalInput] =
                Math.max(1, Math.min(10, Number(input.value) || 2));
        });

        delete data.dailyAssignments[todayKey()];

        saveData();

        renderAll();

        toast("Daily goals updated 🎯");
    }

    if (event.target.id === "redoSetupBtn") startOnboarding();
});


/* =========================================================
   ACCOUNTS + GOOGLE SHEET SYNC
   Username + password. Progress is saved to your Google Sheet
   automatically (through your Apps Script Web App).
========================================================= */

let session = null;      // { username, name, hash }  (null = guest)
let syncTimer = null;

const SESSION_KEY = "padhlelala_session";
const ACCOUNTS_KEY = "padhlelala_local_accounts";


function greeting() {

    const h = new Date().getHours();

    const word =
        h < 12 ? "Good morning"
        : h < 17 ? "Good afternoon"
        : "Good evening";

    const name = (data?.user?.name || "").split(" ")[0];

    return word + (name && name !== "Guest" ? ", " + name : "") + " 👋";
}


function howItWorks() {

    if (data.settings.hideGuide) return "";

    return `
        <div class="card guide">
            <div class="section-head">
                <div>
                    <h3>👋 New here? Start in 3 steps</h3>
                    <p>It takes less than a minute to understand.</p>
                </div>
                <button class="danger-btn" data-dismiss-guide>Got it</button>
            </div>
            <div class="grid grid-3">
                <div class="step"><b>1</b><strong>Open a topic</strong>
                    <span>Go to DSA, Web Development or AI / ML and tap a topic.</span></div>
                <div class="step"><b>2</b><strong>Tick what you finish</strong>
                    <span>Every tick updates your progress and saves automatically.</span></div>
                <div class="step"><b>3</b><strong>Come back daily</strong>
                    <span>Finish today's mission to grow your 🔥 streak.</span></div>
            </div>
        </div>
    `;
}


async function sha256(text) {

    if (!window.crypto || !crypto.subtle) throw new Error("NO_CRYPTO");

    const buffer = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(text)
    );

    return [...new Uint8Array(buffer)]
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}


function makeHash(username, password) {

    return sha256("padhlelala|" + username + "|" + password);
}


async function api(payload) {

    let response;

    try {

        response = await fetch(SHEET_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(payload)
        });

    } catch {

        throw new Error("NETWORK");
    }

    const text = await response.text();

    try {

        return JSON.parse(text);

    } catch {

        throw new Error("BAD_RESPONSE");
    }
}


function explainError(err) {

    const code = String(err && err.message);

    if (code === "NETWORK") {
        return "Can't reach your Google Sheet. Check the internet, and make sure the Web app is deployed with access set to Anyone.";
    }

    if (code === "BAD_RESPONSE") {
        return "The Sheet link answered with a web page, not data. Use the Web app URL that ends with /exec, deployed with access set to Anyone.";
    }

    if (code === "NO_CRYPTO") {
        return "This browser blocks secure login on this address. Open the site with https:// (or localhost).";
    }

    return "Something went wrong: " + code;
}


/* ---------- sync status ---------- */

function setSync(state) {

    const badge = document.getElementById("syncBadge");

    if (!badge) return;

    const map = {
        off:     ["", ""],
        pending: ["⏳ Saving…", "pending"],
        syncing: ["☁️ Syncing…", "pending"],
        ok:      ["✅ Saved to cloud", "ok"],
        error:   ["⚠️ Offline – will retry", "error"]
    };

    badge.textContent = map[state][0];
    badge.className = "sync-badge " + map[state][1];
}


function buildSummary() {

    const dsa = getDSAStats();
    const dev = getTrackStats("development");
    const ai = getTrackStats("aiml");

    return {
        name: data.user.name,
        overall: combinedProgress(),
        dsaPercent: dsa.percentage,
        dsaDone: dsa.completed + "/" + dsa.total,
        webPercent: dev.percentage,
        webDone: dev.completed + "/" + dev.total,
        aimlPercent: ai.percentage,
        aimlDone: ai.completed + "/" + ai.total,
        streak: data.streak.current,
        best: data.streak.best,
        devProjects: data.projects.development.filter(Boolean).length,
        aiProjects: data.projects.aiml.filter(Boolean).length,
        lastActive: data.streak.lastActive || ""
    };
}


function queueSync() {

    if (!session || !SHEET_URL) return;

    setSync("pending");

    clearTimeout(syncTimer);

    syncTimer = setTimeout(syncNow, 1500);
}


async function syncNow() {

    if (!session || !SHEET_URL || !data) return;

    setSync("syncing");

    const key = todayKey();

    const compact = {
        ...data,
        history: data.history.slice(0, 100),
        dailyAssignments: {
            [key]: data.dailyAssignments[key] || {}
        }
    };

    try {

        const result = await api({
            action: "save",
            username: session.username,
            hash: session.hash,
            summary: buildSummary(),
            data: compact
        });

        setSync(result.ok ? "ok" : "error");

        if (!result.ok) toast(result.error || "Could not save.");

    } catch {

        setSync("error");
    }
}


/* ---------- start / stop a session ---------- */

function showApp() {

    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");

    renderAll();
    openSection("dashboard");

}


function startSession(user, remoteData) {

    session = user;

    localStorage.setItem(SESSION_KEY, JSON.stringify(user));

    loadData();

    if (
        remoteData &&
        (remoteData.updatedAt || 0) > (data.updatedAt || 0)
    ) {

        data = { ...defaultData(), ...remoteData };
    }

    data.user = {
        id: user.username,
        name: user.name,
        email: "",
        provider: SHEET_URL ? "cloud" : "local"
    };

    saveData();

    showApp();

    if (SHEET_URL) syncNow();
}


function startGuest() {

    session = null;

    localStorage.removeItem(SESSION_KEY);

    loadData();

    data.user = {
        id: "guest",
        name: "Guest",
        email: "",
        provider: "guest"
    };

    setSync("off");

    showApp();
}


function logout() {

    if (session && SHEET_URL) syncNow();

    session = null;

    data = null;

    localStorage.removeItem(SESSION_KEY);

    setSync("off");

    document.getElementById("app").classList.add("hidden");
    document.getElementById("loginScreen").classList.remove("hidden");
}


/* ---------- login form ---------- */

let authMode = "login";

function setAuthMode(mode) {

    authMode = mode;

    const signup = mode === "signup";

    document.querySelectorAll(".auth-tab").forEach(tab =>
        tab.classList.toggle("active", tab.dataset.authTab === mode)
    );

    document.getElementById("nameWrap").classList.toggle("hidden", !signup);

    document.getElementById("authTitle").textContent =
        signup ? "Create your account 🚀" : "Welcome back 👋";

    document.getElementById("authSub").textContent =
        signup
            ? "Pick a username and password. It takes 20 seconds."
            : "Log in to continue your learning journey.";

    document.getElementById("authSubmit").textContent =
        signup ? "Create account" : "Log in";

    document.getElementById("authPass").autocomplete =
        signup ? "new-password" : "current-password";

    showAuthError("");
}


function showAuthError(message) {

    const box = document.getElementById("authError");

    box.textContent = message;

    box.classList.toggle("hidden", !message);
}


async function submitAuth(event) {

    event.preventDefault();

    const username =
        document.getElementById("authUser").value.trim().toLowerCase();

    const password =
        document.getElementById("authPass").value;

    const name =
        document.getElementById("authName").value.trim();

    if (!/^[a-z0-9_.]{3,20}$/.test(username)) {

        return showAuthError(
            "Username must be 3–20 characters: letters, numbers, _ or . only."
        );
    }

    if (password.length < 6) {

        return showAuthError("Password must be at least 6 characters.");
    }

    if (authMode === "signup" && name.length < 2) {

        return showAuthError("Please enter your name.");
    }

    const button = document.getElementById("authSubmit");

    button.disabled = true;

    button.textContent = "Please wait…";

    showAuthError("");

    try {

        const hash = await makeHash(username, password);

        let result;

        if (SHEET_URL) {

            result = await api({ action: authMode, username, hash, name });

        } else {

            /* No Google Sheet connected yet: accounts stay on this browser. */

            const accounts =
                JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "{}");

            if (authMode === "signup") {

                if (accounts[username]) {
                    result = { ok: false, error: "This username is already taken." };
                } else {
                    accounts[username] = { hash, name };
                    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
                    result = { ok: true, name };
                }

            } else {

                result =
                    accounts[username] && accounts[username].hash === hash
                        ? { ok: true, name: accounts[username].name }
                        : { ok: false, error: "Wrong username or password." };
            }
        }

        if (!result.ok) {

            showAuthError(result.error || "Something went wrong.");

        } else {

            startSession(
                { username, name: result.name || name || username, hash },
                result.data
            );

            document.getElementById("authPass").value = "";
        }

    } catch (err) {

        console.error(err);

        showAuthError(explainError(err));
    }

    button.disabled = false;

    button.textContent =
        authMode === "signup" ? "Create account" : "Log in";
}


/* ---------- events ---------- */

document.addEventListener("click", event => {

    const tab = event.target.closest("[data-auth-tab]");

    if (tab) return setAuthMode(tab.dataset.authTab);

    if (event.target.id === "togglePass") {

        const input = document.getElementById("authPass");

        const show = input.type === "password";

        input.type = show ? "text" : "password";

        event.target.textContent = show ? "Hide" : "Show";

        return;
    }

    if (event.target.closest("[data-dismiss-guide]")) {

        data.settings.hideGuide = true;

        saveData();

        renderDashboard();

        return;
    }

    if (event.target.id === "syncNowBtn") {

        if (!session || !SHEET_URL) {
            toast("Log in with an account to sync.");
            return;
        }

        syncNow().then(() => toast("Synced to Google Sheet ☁️"));
    }
});

document.getElementById("authForm").addEventListener("submit", submitAuth);

document.getElementById("guestLoginBtn").addEventListener("click", startGuest);

document.getElementById("logoutBtn").addEventListener("click", logout);


/* =========================================================
   START
========================================================= */

function initApp() {

    if (SHEET_URL && !/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test(SHEET_URL)) {

        console.warn("SHEET_URL should look like https://script.google.com/macros/s/.../exec");
    }

    document.getElementById("cloudNote").textContent =
        SHEET_URL
            ? "Your progress is saved to the cloud, so you can log in from any device."
            : "Guest progress is saved only on this browser.";

    try {

        const saved = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");

        if (saved && saved.username) return startSession(saved);

    } catch { /* ignore */ }

    loadData();
}

initApp();
