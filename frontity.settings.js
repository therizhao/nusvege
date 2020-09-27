require('dotenv').config()

const settings = {
  "name": "nusvege",
  "state": {
    "frontity": {
      "url": "https://www.nusvege.com",
      "title": "nusvege",
      "description": "Change What You Eat, Change The World"
    },
    "social": {
      "githubUrl": "https://github.com/therizhao/nusvege",
      "instagramUrl": "https://www.instagram.com/nusvege"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": process.env.REACT_APP_SOURCE_URL
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
