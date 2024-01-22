# Features Flag Implementation in Ecommerce

## Problem Statement

The Problem Statement of this project includes the comprehensive integration of feature flags into the clothing eCommerce website, empowering it with dynamic control over specific features. This encompasses the enhancement of agility, optimization of deployment processes, effective testing mechanisms, mitigation of user disruption risks, and scalability. The project aims to elevate the platform's responsiveness to market trends, ensuring a seamless and personalized shopping experience while establishing a foundation for future growth and adaptability in the ever-evolving online fashion industry.

### Industrial Real-time Problems and Solutions
<details>
<summary>Problems</summary>
  
- **Risky Feature Releases:** New features can introduce bugs or unintended consequences, impacting user experience and potentially leading to revenue loss.
- **Limited Experimentation:** Evaluating the effectiveness of new features or design changes can be difficult without the ability to conduct controlled experiments and gather data.
- **Risk of User Disruption:** Making changes to a live eCommerce website can introduce the risk of user disruption or dissatisfaction. Without a feature flagging system, implementing new features or updates becomes a high-stakes endeavor..
- **Inefficient Development Processes:** Managing multiple feature branches and release schedules can introduce complexity and overhead, reducing developer productivity.
</details>

<details>
<summary>Solutions</summary>
  The proposed solution involves the strategic implementation of feature flags within the clothing eCommerce website. Feature flags, or toggles, serve as a dynamic control mechanism, allowing for the seamless activation and deactivation of specific features in real-time. This solution addresses the identified challenges by:
  
- **Enhancing Agility:** Introducing feature flags in both frontend and backend to enable rapid adjustments to the website's functionalities, ensuring quick adaptation to changing market trends and consumer preferences.
- **Optimizing Deployment Processes:** Facilitating efficient and controlled feature rollouts, minimizing downtime and complexities associated with traditional deployment methods.
- **Enabling Effective Testing:** Providing a framework for comprehensive A/B testing and phased feature releases, allowing for data-driven decision-making and optimal user experience refinement.
- **Mitigating User Disruption:** Minimizing the risk of user disruption by allowing features to be activated or deactivated seamlessly, ensuring a smooth and reliable user experience during updates.
- **Promoting Scalability:** Introducing a scalable feature management system to accommodate the growth of the eCommerce platform and efficiently manage new features as the website expands.

</details>


<br/>
<div style="text-align: center;">
  <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/match-game-output.mp4" type="video/mp4">
  </video>
</div>
<br/>

### Design Files(Screenshots)
<details>
<summary>Click to view</summary>

- ![Front Page](https://assets.ccbp.in/frontend/content/react-js/match-game-sm-outputs.png)
- ![Match Game](https://assets.ccbp.in/frontend/content/react-js/match-game-lg-output.png)
- ![Scorecard](https://assets.ccbp.in/frontend/content/react-js/match-game-score-card-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions(How to Play)

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially,
  - Score should be `0` and time should be `60` sec
  - The image to be matched should have the src attribute value as the value of the key `imageUrl` from the first object in **imagesList** provided
  - The **Fruits** tab should be active and the thumbnails with **FRUIT** as their category should be displayed
- The timer should start running backwards from the `60` sec
- When a tab is clicked, then the thumbnails in the corresponding category should be displayed
- When a thumbnail is clicked, if that is matched with the image to be matched,
  - Score is incremented by one
  - The new image to be matched should be generated randomly among the value of the key `imageUrl` from **imagesList** provided
- When a thumbnail is clicked, if it is not matched with the image to be matched,
  - The game should end, and the [Scorecard](https://assets.ccbp.in/frontend/content/react-js/match-game-score-card-lg-output.png) view should be displayed
  - When **PLAY AGAIN** button is clicked, then we should be able to play the game again
    - The score and time values should be reset to `0` and `60` sec respectively
    - The image to be matched should reset to the value of the key `imageUrl` from the first object in **imagesList** provided
    - The active tab should reset to **Fruits**, and the thumbnails with **FRUIT** as their category should be displayed
- When the timer reached `0` sec, then the game should end, and the [Scorecard](https://assets.ccbp.in/frontend/content/react-js/match-game-score-card-lg-output.png) view should be displayed
- The App is provided with `tabsList`. It consists of a list of tabItem objects with the following properties in each tabItem object

  |     Key     | Data Type |
  | :---------: | :-------: |
  |    tabId    |  String   |
  | displayText |  String   |

- The App is provided with `imagesList`. It consists of a list of imageItem objects with the following properties in each imageItem object

  |     Key      | Data Type |
  | :----------: | :-------: |
  |      id      |  String   |
  |   imageUrl   |  String   |
  | thumbnailUrl |  String   |
  |   category   |  String   |

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- The image to be matched in the app should have the alt as **match**
- The thumbnail images in the app should have the alt as **thumbnail**

</details>





> ### _Things to Keep in Mind_
> - Developed by :-
>  - - **Pratik Bagade**
> - - **Yash Deshmukh**
>  - - **Dipak Chahakar**
> - Last Year Computer Engineering Project
> - From :- Government College Of Engineering Jalgaon.
> - 
> - So lets buy our products guys and make a payment for my efforts.
> - Good by...!!!!

