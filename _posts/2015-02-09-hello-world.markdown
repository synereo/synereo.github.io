---
layout: post
status: publish
published: true
title: Hello World!
date: '2015-02-09 12:45:15 +0200'
categories:
- blog
---
The Synereo tech team has been hard at work drafting out our final architecture and putting all the tiny little details in our soon-to-be-published whitepaper. We'd like to share some of this information with you and provide updates and teasers about our development plans.

On the network modeling side, we've seen progress as our team started *implementing the attention economy principles*, as initially described in our [pre-announcement thread](https://bitcointalk.org/index.php?topic=827782.0), into our technology.

One of the main concepts of Synereo's Attention Economy model is **Reo**, which is the measure of your reputation as a publisher of attention-worthy content. It is calculated from the point of view of each user as they receive information from another, changing based on the slice of the network they share with the user trying for their attention.

Another important concept is that of **Current**. It is a measure of the power of messages flowing through the Synereo network. The stronger the Current, the more priority a message or post will receive in a user's stream. People recharge and even supercharge a message's Current when attending it, making it more likely to be seen by others after them.

And of course, there's no Synereo network without **AMPs**, Synereo's information flow currency. Users receiving AMPlified content will receive a portion of the attached AMPs, more if their Reo score is high. And if it's your content that is being AMPlified, a portion of the AMPs will come to you as a reward!

Now, these concepts are all well and good, but they mean nothing without a strong technical architecture supporting them. Synereo's core technology is the **DendroNet**: the framework that the technology and attention model are organized through.

![Dendrite](/img/blog/dendrite.jpg)

*The **DEndron** is Synereo's local consensus-keeping mechanism, decentralized ledger, and distributed content model.* Every user on Synereo has their own fraction of it, their *Dendrite*, maintaining a view of the part of the network relevant to them. A user's Dendrite is constantly updated with information received from peers: social information from friends, changing the user's affinity to them based on the attention model; meta-data and keys to encrypted data hosted on the **SpecialK** distributed cloud; and information saved on their Dendrite itself, used in the consensus-keeping process.

The core of our stack is **SpecialK**, a distributed key-value store - not unlike DHT - which takes the Key/Value DB a step further and provides a monadic DSL for it, *giving programmers a familiar, unified API where they can access data distributed across the network*.

Finally, while Synereo is a full-fledged decentralized network, we do understand that not everyone is able to deploy a personal Synereo node on their own computation device. We have taken this into consideration, and so, during our rollout phases, Synereo will provide **Centralized Gateways** that enable end users to use and enjoy the benefits of the network without the needing to actually run and maintain node, thus increasing the availability of the network to all crowds. Gateways don't control or have access to your information, and should they go down, the key they send you upon account creation can be used to boot up your node (with all of your information) immediately if you download a client and plug the key in.

![Synereo Logo](/img/blog/squarepurelogo.png)

Where do we go from here? First, stay tuned to this channel for our upcoming whitepaper release. In the mean time, if you're a hacker, you can take a look at [all our existing code over on Github](https://github.com/synereo/). We're still in the process of documenting it and making it more user/developer friendly, but feel free to hack on it if you think you have the necessary chops!

We've also launched the [Synereo Discussion Forums](https://discuss.synereo.com/) where we'll be happy to discuss all aspects of our architecture, from design to technology, and anything else you'd like to engage us with. Join us there!

Finally, we'll be starting a new tradition this week - **Synereo Community Hangouts**, where you have a chance to meet the Synereo team and be involved in our plans for the future. The first hangout will take place this Wednesday, February 11 at 21:00 GMT. Join the hangout at: [https://plus.google.com/events/ck39e1d78faj1ml2ce3jn474hu0](https://plus.google.com/events/ck39e1d78faj1ml2ce3jn474hu0).

Looking forward to seeing you all!
