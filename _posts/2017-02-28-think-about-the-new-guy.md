---
layout: post
title:  "Think about the new guy"
date:   2017-02-28 20:00:00 +0200
tags: team documentation tests
excerpt: >
    Software projects and teams are not static, but instead often surprisingly dynamic.
    That's why it's important to try to make onboarding in your project easy.
---

You probably have worked at some point in a project with the sizable codebase, little to none documentation, no tests, and the development environment took at least a day for you to set up when you started in the project. This project probably had a quite small team and developers in the team had been working with the codebase for a long time. People in the team are aware of the lack of documentation and tests but never get around to doing anything about it because they are busy working on new code and fixing the old one. Also, documentation is seen as a waste of time as the code “documents itself” and, anyway, the current team has been working with the code so long that they know the codebase back to front so why would they need anything written down?

Sadly this is quite a common scenario. This kind of behaviour leaves the team and the project very brittle and slow to react to changes. Many people in these kinds of teams are knowledge silos even if they don’t realize it. A departure of even a single person might cause major disruptions to the productivity of the team and opens a door for nasty bugs especially if testing is also overlooked. Also expanding the team with new people is a very slow process as there is not much for the newbie to lean on and he needs a lot of tutoring from existing team members before becoming productive in the project.

I believe it’s important to think often about how your project and codebase looks from the viewpoint of someone new to the project. A well-cared project should be something that anyone could pick up and get developer environment running quickly (preferably in less than 30 minutes) without any help or handholding. The project should also include some documentation in addition to the source code so that the new guy can quickly get an overview of the whole system, what does it do and why. Think of the source code as a book and your documentation as the back cover text. Lastly, the project should have a well-defined list of tasks waiting to be done so that almost anyone could just pick one and start working. An up to date test suite helps with this as it gives the new guy a safety net to lean against in case of unexpected side effects.

Once you have taken care of these things it’s first of all easy to include new developers when you need more manpower or you want to get a fresh opinion on problems. Also with these practices, much of the domain knowledge is saved in the documentation and tests so that even when your most senior developer decides to retreat to a mountain temple in Tibet it won’t affect much the rest of your team. In the end, your productivity will also increase because if your project is in a state that even new developers can implement changes on their first day without breaking anything, everyone will introduce less bugs to the codebase. Less bugs means less firefighting and that means more time for tackling the harder problems.

