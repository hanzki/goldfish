---
layout: post
title:  "Chatbots made easy with Dialogflow"
tags: dialogflow chatbots hobby-project tech
excerpt: >
    Dialogflow is a platform for creating rich chatbot experiences. It allows developer to focus 
    on the important by solving many of the common problems for them.
---

I recently stumbled upon a service called [Dialogflow][dialogflow] which is a platform for creating a rich chatbot experiences.
The easiness of creating a chatbot and cross platform support peaked my interest so I decided to give it a closer look.

> **Note:** Dialogflow was known as api.ai up until October 2017 when they changed their name. You can find more about it
in their [blog post][dialogflow-new-name].

## Why would you use Dialogflow?

I had made a simple Telegram bot before from scratch. I remember considerable amount of time spent learning the chat
platforms api and integrating with it. Also in the end my bot required the user input in very strict format akin to
using a command line utility.

Dialogflow tries to solve these common problems. It makes it easy to parse complicated and varied user queries and it
provides one click integrations with most popular chat platforms like Telegram, Slack, Facebook Messenger,
Google assistant, etc… 

Using Dialogflow a developer can focus on implementing the unique business logic of their bot instead of the boring
boilerplate code. It’s also easy to support free form user queries without any extra coding and thanks to machine
learning the bot’s ability to understand its users just increases over time.

## How does Dialogflow work?

![Dialogflow architecture](https://dialogflow.com/docs/images/overview/agents/agents-000.png)  
*Overview of the architecture of Dialogflow*

The Dialogflow works so that the developer specifies one or multiple “intents” that correspond to a single action or
a question the user wants to do. An intent could for example be “show.weather” for displaying the weather forecast.
The developer also gives a set of examples for what user would possibly say to the bot. The Dialogflow can then use
these examples with machine learning to match users queries to the intent. Final part of the equation is the fulfillment
of the query. The developer can define a set of canned responses for the intents from which the Dialogflow will select
randomly or the intent can be connected to a webhook for composing more dynamic responses.

This allows the developer to focus programming efforts on the webhooks which can be made to interact with other systems
or query data from a database for example. 

The Dialogflow supports also more advanced features such as dialog context which allows basing responses on previous
queries. Also the Dialogflow is able to parse parameters such as dates and numbers from the user’s query and pass those
to the webhook allowing for example the user to ask the weather for certain day or location.

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
GuildEventsBot: {% include icon-github.html username="hanzki" %} / [GuildEventsBot][guildeventsbot-code]

[dialogflow]: https://dialogflow.com/
[dialogflow-new-name]: https://blog.dialogflow.com/post/apiai-new-name-dialogflow-new-features/
[dialogflow-docs]: https://dialogflow.com/docs/getting-started/basics
[guildeventsbot]: https://telegram.me/guildeventsbot
[guildeventsbot-code]: https://github.com/hanzki/GuildEventsBot