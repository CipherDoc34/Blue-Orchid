# Blue-Orchid
PolyHacks 2023
##Inspiration:
Students experience a lot of changes in their growth, motivation and maturity when they are in university. These changes can have profound impacts in a student's ability to grow, cope and develop resiliency. Having been through similar yet unique journeys, Keshav & Sam realize the importance of mental health, and its impacts on shaping how we might perceive ourselves, and its role in helping us develop self-actualization.

## What it does?
Blue Orchid is an easily accessible SMS chatbot that helps students realize their potential with responses crafted to provide encouraging suggestions and perspective on reframing a challenge. Simply text 289-814-BLUE to get started. 

## How we built it?
We built the app using the **Twilio API** , to process SMS communication. Then, we created a pipeline, using **Node.js**, between **Twilio** and **Co:Here** to send messages to our NLP **Sentiment Analysis Model**. The model then compares the messages to its our trained model, then outputs a response to use as a reply to the user.

## What are some challenges we ran into?
Weaving Twilio and Co:Here together with Node.js was quite a challenge as we needed to understand how Twilio handled communication and relate it back to the fundamentals of Node.js. This kept us scratching our heads for while! 

Another challenge we ran into was using a Toll Free number on Twilio. We tried to make the chatbot as accessible to everyone as possible, and chose to use a Toll Free number initially. This posed a lot of challenges as our messages were unable to pass through cellular spam filters. This also required us to provide additional documentation to verify the number, so we narrowed the scope of the project to Canadian students (for now) and used a local number. 

Moreover, the dataset we found required both of us to clean the data and conform to Co:Here's dataset requirements. 

## Accomplishments that we're proud of
We made a fully functional end to end prototype of Blue Orchid! It pushed us to think out of the box and strive to reach as many design challenges as possible. On a personal note, Keshav used Co:Here for the first time this weekend! Similarly, it was Sam's first time using Node.js - this formed the basis of Blue Orchid! 

## What we learned
We learnt that no technology is difficult to understand. It is just setting our mind and will towards learning more about it, and forming connections between different technologies to create something spectacular. The biggest challenge is convincing ourselves to be ambitious, and to just get started!

## What's next for Blue Orchid
We have lots of plans on how to take this further! First, create a logging system to provide an option to let users choose if they want us to compare their growth through weekly check-ins. This would involve data visualization to show how a student is communicating with the chatbot and how it compares to before. Second, extensively test our product and see how people use it and break it, and gather signals to refine Blue Orchid. Last, spend more time curating inputs and training our model. This could be a user saying something like "I didn't like that response" indicating negative reward for the model, tuning it for better responses.
