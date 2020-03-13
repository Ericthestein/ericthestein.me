const data = [
  {
    "name": "NYC 311 Map App",
    "categories": ["app", "hackathon"],
    "date": "4/2019",
    "description": "An Android/iOS app written in React Native that populates a map with recent 311 incidents in New York City. Made as part of the first NYC CS4All Hack League.",
    "media": [
      {
        "type": "snack",
        "src": "https://appetize.io/embed/8bnmakzrptf1hv9dq7v7bnteem?autoplay=false&debug=true&device=iphonex&deviceColor=black&embed=true&orientation=portrait&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXKernelLaunchUrlDefaultsKey%22:%22exp:%2F%2Fexpo.io%2F@ericthestein%2F311-map%2BbFtZ!fRms%22,%22EXKernelDisableNuxDefaultsKey%22:true%7D&scale=50&osVersion=11.4"
      },
      {
        "type": "image",
        "src": require("./ProjectImages/311AppGif.gif")
      }
    ],
    links: [
        "https://github.com/Ericthestein/NYC-311-Map-App",
        "https://snack.expo.io/@ericthestein/311-map"
    ]
  },
  {
    "name": "Battle Royale Template",
    "categories": ["game", "hackathon"],
    "date": "2/2019",
    "description": "A template for creating a game of the popular battle royale genre. Games made with this template can be easily published to Roblox.com and/or be used to quickly iterate through ideas for battle royale games on other platforms.",
    "media": [
      {
        "type": "video",
        "youtubeVideoID": "jgVE6CG1ZTA"
      }
    ],
    links: [
        "https://github.com/Ericthestein/Roblox-Battle-Royale-Template",
        "https://www.youtube.com/watch?v=jgVE6CG1ZTA&t",
        "https://www.roblox.com/games/2850063392/Battle-Royale-Template"
    ]
  },
  {
    "name": "Interactive Loading Screen Chrome Extension",
    "categories": ["app", "research", "web"],
    "date": "4/2017",
    "description": "A Google Chrome Extension that renders an interactive loading screen over any website. Interactive loading screens have been proven to be more effective at increasing tolerable waiting time than blank and passive loading screens.",
    "media": [
      {
        "type": "image",
        "src": require("./ProjectImages/interactive-loading-screen.png")
      }
    ],
    links: [
      "https://chrome.google.com/webstore/detail/waiting/bhhpafhgfaeifjeceaeijijbemifafhk",
    ]
  },
  {
    "name": "UVA Landmark Recognition App",
    "categories": ["app", "research", "artificial intelligence"],
    "date": "10/2019",
    "description": "An app that serves two purposes: 1) crowdsource pictures of UVA landmarks for use in training a computer vision model; 2) use this model to generate and display predictions about the UVA landmark represented by a given image",
    "media": [

    ],
    links: [
        "https://github.com/Ericthestein/UVA-Landmark-Recognition-Mobile-App",
        "https://testflight.apple.com/join/qwiaF1SD",
        "https://play.google.com/store/apps/details?id=com.ericstein.uvalandmarkrecognition&hl=en_US"
    ]
  },
  {
    "name": "SoundScope",
    "categories": ["app", "web", "research", "artificial intelligence"],
    "date": "2/2020",
    "description": "An online learning environment with three main purposes: 1) allow users to visualize musical notes; 2) allow users to create music using block programming; 3) collect data for use in training artificial intelligence to offer musical suggestions",
    "media": [

    ],
    links: [
        "https://github.com/Ericthestein/SoundScope",
        "https://soundscope-website.s3.amazonaws.com/index.html"
    ]
  },
  {
    "name": "Genetic Algorithm Demonstration",
    "categories": ["research", "game", "artificial intelligence"],
    "date": "6/2018",
    "description": "A demo of a genetic algorithm being used to train an AI agent to complete an obstacle course. In this scenario, the agent must learn to change its color depending on the color of the next obstacle, which is detected by its front sensor. If the agent's color matches that of the next obstacle, it is able to pass through",
    "media": [
      {
        "type": "image",
        "src": require("./ProjectImages/GeneticAlgorithmVideo.gif")
      }
    ],
    links: [
        "https://github.com/Ericthestein/Genetic-Algorithm-Demonstration"
    ]
  },
  {
    "name": "Aggressiveness Detection via Deep Learning",
    "categories": ["research", "artificial intelligence"],
    "date": "4/2019",
    "description": "A research project in which a model was trained to detect whether a given audio file contains aggressiveness. This project was extended to also detect whether a given audio file contains an instance of bullying",
    "media": [

    ],
    links: [
        "https://github.com/Ericthestein/Aggressiveness-Detection-Deep-Learning"
    ]
  }
]

export default data