# lifehack
## Inspiration
Due to COVID-19, schools around the world have had to pivot towards Home-Based Learning (HBL). While schools have largely adapted well through the use of video-conferencing technologies such as Zoom and Microsoft Teams, we find that social interaction among students is still starkly lacking. 

During the past 2 “online-semesters”, many students felt lonely. Without organic social interactions arising from physical tutorials and lectures, it is difficult for students to find friends within their modules. As such, many do not have a study support group with which they can collaborate with, hindering learning.

To combat this, we sought to provide a solution that allows NUS students to easily find and connect with friends who are enrolled in the same modules as them. Through this, we hope to build a more collaborative and interactive learning environment amid the pandemic.

## What it does
Our website serves as a one-stop platform for students to find friends who are taking the same modules easily. The features of our application include, an authentication page where students are allowed to sign up and sign in to their accounts, a “Find a Friend” feature where students may view and connect with a list of people taking similar modules as well as a “Find a Group” feature where students may join other groups with their friends.

Main Features:
1. Landing Page - Sign up / Log in button 
2. Sign Up Page - Fields: Email, Password, Name, List of modules (dropdown), Telegram user ID, Self-intro
3. Log In Page - Fields: Email, Password
4. Home Page - Display current pairs and groups, Find a friend, Find a group button
Find a friend: When users first sign up, they will not be allowed to join a group. Instead, they have to connect with one other person first to form a pair, before they are allowed to form a group with other pairs on the site. 
Find a Group: After users have their pairs, the pair may find another pair which takes similar modules to form a group.
5. Find a Friend - The Find a Friend page shows a list of other users and the common modules they have in common with the user.  The user may connect with any of them and this should link them to the “Join Chat” page on Telegram.
6. Find a Group - Users may then join other pairs to form a group. The Find a Group page allows a user to select the pair he/she wants to form a group for. Then, users will be redirected to a page which lists all other pairs and the number of common modules with the user’s selected pair. They may then join the other pair, and they should be redirected to the “Join Chat” page on Telegram, where the chat would comprise both pairs.

## How we built it
Our team developed a website using Vue.js. The website was configured to easily link users to their Telegram accounts for easy communication. _This method was chosen as opposed to a Telegram bot as it allows for an easy-to-use front-end user interface to be developed._ Our back-end was established using Firebase and the website is hosted via Heroku.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
