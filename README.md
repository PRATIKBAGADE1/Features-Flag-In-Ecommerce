# Features Flag Implementation in Ecommerce

## Problem Statement

The Problem Statement of this project includes the comprehensive integration of feature flags into the clothing eCommerce website, empowering it with dynamic control over specific features. This encompasses the enhancement of agility, optimization of deployment processes, effective testing mechanisms, mitigation of user disruption risks, and scalability. The project aims to elevate the platform's responsiveness to market trends, ensuring a seamless and personalized shopping experience while establishing a foundation for future growth and adaptability in the ever-evolving online fashion industry.

### Languages and Technologies
- ReactJs-Javascript (FrontEnd)
- SpringBoot-Java (BackEnd)
- MySql
- Hibernet
- Postman-API Testing
- TailWind CSS
- Material UI
- RazorPay(PaymentGateWay)

### Industrial Real-time Problems and Solutions
 The proposed solution involves the strategic implementation of feature flags within the clothing eCommerce website. Feature flags, or toggles, serve as a dynamic control mechanism, allowing for the seamless activation and deactivation of specific features in real-time.
<details>
<summary>Problems</summary>
  
- **Risky Feature Releases:** New features can introduce bugs or unintended consequences, impacting user experience and potentially leading to revenue loss.
- **Limited Experimentation:** Evaluating the effectiveness of new features or design changes can be difficult without the ability to conduct controlled experiments and gather data.
- **Risk of User Disruption:** Making changes to a live eCommerce website can introduce the risk of user disruption or dissatisfaction. Without a feature flagging system, implementing new features or updates becomes a high-stakes endeavor..
- **Inefficient Development Processes:** Managing multiple feature branches and release schedules can introduce complexity and overhead, reducing developer productivity.
</details>

<details>
<summary>Solutions</summary>
 This solution addresses the identified challenges by:
  
- **Enhancing Agility:** Introducing feature flags in both frontend and backend to enable rapid adjustments to the website's functionalities, ensuring quick adaptation to changing market trends and consumer preferences.
- **Optimizing Deployment Processes:** Facilitating efficient and controlled feature rollouts, minimizing downtime and complexities associated with traditional deployment methods.
- **Enabling Effective Testing:** Providing a framework for comprehensive A/B testing and phased feature releases, allowing for data-driven decision-making and optimal user experience refinement.
- **Mitigating User Disruption:** Minimizing the risk of user disruption by allowing features to be activated or deactivated seamlessly, ensuring a smooth and reliable user experience during updates.
- **Promoting Scalability:** Introducing a scalable feature management system to accommodate the growth of the eCommerce platform and efficiently manage new features as the website expands.

</details>

### Design Files(Screenshots)
<details>
<summary>Click to view</summary>

-  **Admin Page** ![Admin Page](https://github.com/PRATIKBAGADE1/Features-Flag-In-Ecommerce/blob/main/assets/admin.png)
- **Order Treaking**  ![Order Treaking](https://github.com/PRATIKBAGADE1/Features-Flag-In-Ecommerce/blob/main/assets/order_treaking.png)
- **Customer Order List** ![](https://github.com/PRATIKBAGADE1/Features-Flag-In-Ecommerce/blob/main/assets/productlist.png)
- **Product Page** ![](https://github.com/PRATIKBAGADE1/Features-Flag-In-Ecommerce/blob/main/assets/product_page.png)
- ![]()


</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The Website must have the following functionalities

- Initially,
  - Score should be `0` and time should be `60` sec
  - The image to be matched should have the src attribute value as the value of the key `imageUrl` from the first object in **imagesList** provided
  - The **Fruits** tab should be active and the thumbnails with **FRUIT** as their category should be displayed

  - Score is incremented by one
  - The new image to be matched should be generated randomly among the value of the key `imageUrl` from **imagesList** provided

- When the timer reached `0` sec, then the game should end, and the [Scorecard]() view should be displayed
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

