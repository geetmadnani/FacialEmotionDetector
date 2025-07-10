## Facial Emotion Detector

- Web app that detects your face emotions using AI and matches them with emojis.
- Built using ReactJS and face-api.js
- Face-api.js is a JavaScript API for face detection and face recognition in the browser implemented on top of the tensorflow.js core API.
- Version 2.0

## URL / Live demo
- [geetmadnani.github.io/FacialEmotionDetector](https://geetmadnani.github.io/FacialEmotionDetector/)

## About this project
The main objective was very simple, to display emojis based on the facial expressions that we make in front of our camera.

Once the app detects your face, it will do two things:
- Change the background color.
- Replace the default emoji with the one that it thinks is the best match to your expression.

Face-API.js was used to facilitate this process. You can read more about it [here](https://justadudewhohacks.github.io/face-api.js/docs/).

**Note**: You are not being recorded at any point — it all happens in your own browser!

## Taking a look inside
To demonstrate the app’s functionality, imagine taking Dwayne Johnson, *The Rock*, as an example.

Very straightforward. 

Whenever he smiles, the emoji turns into a laughing emoji, and the background color changes to green.

![App demo image](https://github.com/geetmadnani/FacialEmotionDetector/blob/main/public/demo.png)

If he looks angry, the app detects that and shows the angry emoji and a red background.

![App demo image](https://github.com/geetmadnani/FacialEmotionDetector/blob/main/public/demo1.png)

If his expression is neutral, the emoji and background adjust accordingly.

![App demo image](https://github.com/geetmadnani/FacialEmotionDetector/blob/main/public/demo2.png)

## Detectable expressions

- Default:  😐  
- Neutral:  😐  
- Happy:  😀  
- Sad:  😥  
- Angry:  😠  
- Fearful:  😨  
- Disgusted:  🤢  
- Surprised:  😲  

## Browsers support 

| ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)<br/>Firefox | ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)<br/>Chrome | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)<br/>Safari |
| --------- | --------- | --------- |
| Last version | Last version | Last version |

## Other notes
For this app to properly work, make sure that:
- Your room has good lighting
- Your face is close enough to the computer
- You give it a few seconds after your camera is loaded, so it can detect your face accurately

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

### 👤 Created & Maintained by [Geet Madnani](https://github.com/geetmadnani)
