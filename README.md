# Contributing
1. Clone the repo and get it running on your local machine

2. In your terminal, type ```git remote add origin https://github.com/ChristopherFotos/link-and-build.git``` and hit enter. This will ensure that your local repository is linked to this repository, i.e., that your changes will show up here when you use git push. 


3. Now it's time to figure out what you want to work on. Check the issues tab on this repo and pick one that no one is working on yet, and then let everyone else know that you've claimed it. If there are no issues available, find something that needs to be done and open an issue for it.

4. Open the project on your local machine and run ```git pull``` to get the latest updates. **this is an important step**. 

5. Create a branch on your local repository for the bug fix/feature you're working on. You can do this with ```git checkout -b <name-of-your-new-branch>```. don't include the angle brakets. Make sure you're on the main branch when you run this command. if you're not sure type ```git branch``` in your terminal to see which branch you're on. If you're on a different branch type ```git checkout main``` to switch to main. 

6. When you think you've finsihed the feature/bug fix that you're working on, it's time to push to github. type ```git push --set-upstream origin <name-of-your-new-branch>``` in your terminal. This creates a branch here on the github repo that matches the new branch you made on your local repo, then pushes your changes to that branch. If you try to push normally you'll get an error unless a matching branch already exists. 

7. When you're all done, go the github repo and look for the new branch you made, then click 'make pull request.' Someone will take a look at your code and merge it with the main branch. 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
