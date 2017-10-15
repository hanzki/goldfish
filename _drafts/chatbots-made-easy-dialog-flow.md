---
layout: post
title:  "Chatbots made easy with Dialogflow"
tags: dialogflow chatbots hobby-project tech
excerpt: >
    Dialogflow is a platform for creating rich chatbot experiences. It allows developer to focus 
    on the important by solving many of the common problems for them.
---

I recently stumbled upon a service called [Dialogflow][dialogflow] which is a platform for creating rich chatbot experiences.
The easiness of creating a cross platform chatbot peaked my interest so I decided to give it a closer look.

> **Note:** Dialogflow was known as api.ai up until October 2017 when they changed their name. You can find more about it
in their [blog post][dialogflow-new-name].

## Why would you use Dialogflow?

Once I made a simple Telegram bot from scratch. I remember the considerable amount of time I spent learning the chat
platform's API and integrating with it. Also in the end my bot required the user's input in very strict format akin to
using a command line utility.

Dialogflow tries to offer reusable solutions to these common problems. It makes it easy to parse complicated and varied
user queries and it provides one click integrations with most of the popular chat platforms like Telegram, Slack,
Facebook Messenger, Google assistant, etc… 

With Dialogflow a developer can focus on implementing the unique business logic of their bot instead of writing boring
boilerplate code. It’s also easy to support free form user queries without any extra coding and thanks to machine
learning the bot’s ability to understand its users just increases over time.

Another nice thing about Dialogflow is that at least for time being it is completely free to use. However it is good to
note that this fact can change in the future and I recommend checking the [license terms][dialogflow-license] before 
commercial use. Dialogflow was purchased by google in September 2016 so my personal guess is that Dialogflow will be 
integrated into their [cloud platform][google-cloud] at some point in the future.

## How does Dialogflow work?

![Dialogflow architecture]({{ site.url }}/assets/images/dialogflow-architecture.png)  
*Overview of the architecture of Dialogflow<sup>1</sup>*

The Dialogflow works so that the developer specifies one or multiple "Intents" that correspond to a single action or
a question the user wants to do. A `show.weather` intent could for example display the weather forecast for the user.
The developer also gives a set of examples for what user could possibly say to the bot. Examples like 
*"What's the weather like?"* or *"Give me the forecast."* The Dialogflow can then use
these examples with machine learning to match users queries to the correct intent. 

Final part of the equation is the fulfillment of the query. The developer can define a set of canned responses for the
intents from which the Dialogflow will select randomly or the intent can be connected to a webhook for composing more
dynamic responses.

This allows the developer to focus programming efforts on the webhooks which can be made to interact with other systems
or query data from a database for example. 

The Dialogflow supports also more advanced features such as dialog context which allows basing responses on previous
queries. Also the Dialogflow is able to parse parameters such as dates and numbers from the user’s query and pass those
to the webhook allowing for example the user to ask the weather for certain day or location.

To read more about the usage and capabilities of Dialogflow I recommend checking their [documentation][dialogflow-docs]. It's well written 
with useful examples. 

## What I did with Dialogflow?

![GuildEventsBot in action]({{ site.url }}/assets/images/guildeventsbot.jpg)  
*A chatbot I created for giving information about events of our student guild*

I decided to give the Dialogflow a try. I made with it a simple chatbot for querying information about our student
organisations events. The work needed to do on the Dialogflow side was minimal and getting the webhook for resolving
the user queries working didn’t take much longer. The end result is still a work in progress but works quite decently.
You can give the [GuildEventsBot][guildeventsbot] a shout on Telegram.

## Links
Dialogflow: [https://dialogflow.com/][dialogflow]  
Dialogflow Docs: [https://dialogflow.com/docs/getting-started/basics][dialogflow-docs]  
GuildEventsBot: [https://telegram.me/guildeventsbot][guildeventsbot]  
GuildEventsBot Source: {% include icon-github.html username="hanzki" %} / [GuildEventsBot][guildeventsbot-code]

<sup>1</sup>Copyright of Dialogflow, licence [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)

[dialogflow]: https://dialogflow.com/
[dialogflow-new-name]: https://blog.dialogflow.com/post/apiai-new-name-dialogflow-new-features/
[dialogflow-docs]: https://dialogflow.com/docs/getting-started/basics
[dialogflow-license]: https://dialogflow.com/terms-and-privacy
[google-cloud]: https://cloud.google.com/
[guildeventsbot]: https://telegram.me/guildeventsbot
[guildeventsbot-code]: https://github.com/hanzki/GuildEventsBot