---
layout: post
title:  "Creating a blog with Jekyll and AWS"
tags: jekyll blog tech
---

This tutorial we will go through how to set up a blog or a website similar to this one. In this tutorial we are going to use the same tools that
I used to build my own blog. For the content management we use [Jekyll][jekyll-home] a popular static website generator. For hosting
we will use [Amazon Web Services (AWS)][aws] and for automated build and deployment we are using [CircleCI][circleci].

You might wonder why aren't we using the [GitHub pages][gh-pages]? By using GitHub pages we don't need to set up the hosting ourselves
and also CI is provided by GitHub. So it might be a good option for you but I wanted a tech blog with custom domain and HTTPS. Using
GitHub pages I would have had to choose between the two. So this guide will show how we can have our cake and eat it too!

Of course using commercial service like AWS instead of GitHub does introduce also some costs. However, when hosting a static website on
AWS you are basically only paying for the usage on your site. Small amount of visitors equals very small monthly bills. My AWS bill from
last month was around $1.00.

**This tutorial is split into following parts**

1. [Getting started with Jekyll](#jekyll)
2. [Deploying the blog to AWS S3](#aws-s3)
3. [Setting up CircleCI to handle updates](#circleci)

# <a name="jekyll"></a>Getting started with Jekyll

First we want to set up Jekyll running on our local machine. This will enable us to build our beautiful blog that we want to
share with the world. For this part I recommend following the getting started instructions on the Jekyll webpage [here][jekyll-install].

![blank Jekyll template]({{ site.url }}/assets/images/jekyll-blank.png)
*Once you have Jekyll running [http://localhost:4000/](http://localhost:4000/) should look like this*

# <a name="aws-s3"></a>Deploying the blog to AWS S3

Next step is to take the blog running on our local machine and publish it on the internet. For this we want to deploy it into AWS
Simple Storage Service (S3)

# <a name="circleci"></a>Setting up CircleCI to handle updates

[jekyll-home]: https://jekyllrb.com/
[aws]: https://aws.amazon.com/
[circleci]: https://circleci.com/
[gh-pages]: https://pages.github.com/
[jekyll-install]: https://jekyllrb.com/docs/quickstart/

