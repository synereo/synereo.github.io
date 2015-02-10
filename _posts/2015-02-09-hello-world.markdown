---
layout: post
status: publish
published: true
title: Hello World!
author:
  display_name: uberadmin
  login: uberadmin
  email: grelom@yahoo.com
  url: ''
author_login: uberadmin
author_email: grelom@yahoo.com
wordpress_id: 150
wordpress_url: http://blog.synereo.com/?p=150
date: '2015-02-09 12:45:15 +0200'
date_gmt: '2015-02-09 12:45:15 +0200'
categories:
- Synereo
tags:
- technology
- architecture
- network model
comments: []
---
The Synereo tech team has been hard at work drafting out our final architecture and putting all the tiny little details in our soon-to-be-published whitepaper. We'd like to share some of this information with you and provide updates and teasers about our development plans.

On the network modeling side, we've seen progress as our team started <em>implementing the attention economy principles,</em> as initially described in our <a href="https://bitcointalk.org/index.php?topic=827782.0">pre-announcement thread</a>, into our technology.

One of the main concepts of Synereo's Attention Economy model is <strong>Reo, </strong>which is the<span class="author-p-273008"> measure of your reputation as a publisher of attention-worthy content. It is calculated from the point of view of each user as <span class="author-p-271766">they</span><span class="author-p-273008"> receive information from another, changing based on the slice of the network they share with the user trying for </span><span class="author-p-271766">their</span><span class="author-p-273008"> attention</span>.</span>

Another important concept is that of <strong>Current</strong>. It <span class="author-p-273008">is a measure of the power of messages flowing through the Synereo network. The stronger the Current, the more priority a message or post will receive in a user's stream. People recharge and even supercharge a message's Current when attending it, making it more likely to be seen by others after them.<br />
</span>

And of course, there's no Synereo network without <strong>AMPs</strong>, <span class="author-p-273008">Synereo's information flow currency</span>. <span class="author-p-273008">Users receiving AMPlified content will receive a portion of the attached AMPs, more if their Reo score is high. And if it's your content that is being AMPlified, a portion of the AMPs will come to you as a reward!</span>

Now, these concepts are all well and good, but they mean nothing without a strong technical architecture supporting them. Synereo's core technology is the <strong>DendroNet</strong>: the framework that the technology and attention model are organized through.

<a href="http://blog.synereo.com/wp-content/uploads/2015/02/272664028-sensory-organ-dendrite-cell-nucleus-axon1.jpg"><img class=" size-full wp-image-165 aligncenter" src="http://blog.synereo.com/wp-content/uploads/2015/02/272664028-sensory-organ-dendrite-cell-nucleus-axon1.jpg" alt="272664028-sensory-organ-dendrite-cell-nucleus-axon" width="960" height="535" /></a>

<span class="author-p-273008 i"><i>The <strong>DEndron</strong> </i></span><span class="author-p-271766 i"><i>is Synereo's</i></span><span class="author-p-273008 i"><i> local consensus-keeping mechanism, decentralized ledger, and</i></span><span class="author-p-271766 i"><i> distributed content model. </i></span><span class="author-p-273008">Every user on Synereo has their own fraction of it, their </span><span class="author-p-273008 i"><i>Dendrite</i></span><span class="author-p-273008">, maintaining a view of the part of the network relevant to them. A user's Dendrite is constantly updated with information received from peers: social information from friends, changing the user's affinity to them based on the attention model; meta-data and keys to encrypted data hosted on the <strong>SpecialK</strong> distributed cloud; and information saved on their Dendrite itself, used in the consensus-keeping process. </span>

<span class="author-p-273008">The core of our stack is <strong>SpecialK</strong>, <span class="author-p-271766"> a distributed key-value store - not </span><span class="author-p-273008">unlike</span><span class="author-p-271766"> DHT - which takes </span><span class="author-p-273008">the Key/Value DB </span><span class="author-p-271766">a step further and provides a monadic DSL </span><span class="author-p-273008">for</span><span class="author-p-271766"> it, </span><em><span class="author-p-273008">giving</span><span class="author-p-271766"> programmers a f</span><span class="author-p-271766 i">amiliar</span><span class="author-p-273008 i">,</span></em><span class="author-p-271766 i"><em> unified API where they can access data distributed across the network</em>.</span></span><span class="author-p-273008"><br />
</span>

Finally, <span class="author-p-271766">while Synereo is a full-fledged decentralized network, we do understand that not everyone is able to deploy a personal Synereo node on their own computation device. We have taken this into consideration, and so, during our rollout phases, Synereo will provide <strong>Centralized Gateways</strong> that enable end users to use and enjoy the benefits of the network without the </span><span class="author-p-273008">needing to actually run </span><span class="author-p-271766">a</span><span class="author-p-273008">nd maintain</span><span class="author-p-271766"> node, thus increasing the availability of the network to all crowds. Gateways don't control or have access to your information, and should they go down, the key they send you upon account creation can be used to boot up your node (with all of your information) immediately if you download a client and plug the key in.<br />
</span>

<a href="http://blog.synereo.com/wp-content/uploads/2014/10/squarepurelogo.png"><img class=" wp-image-9 aligncenter" src="http://blog.synereo.com/wp-content/uploads/2014/10/squarepurelogo.png" alt="Synereo Blog logo" width="353" height="353" /></a>

Where do we go from here? First, stay tuned to this channel for our upcoming whitepaper release. In the mean time, if you're a hacker, you can take a look at <a href="https://github.com/synereo/">all our existing code over on Github</a>. We're still in the process of documenting it and making it more user/developer friendly, but feel free to hack on it if you think you have the necessary chops!

We've also launched the <a href="https://discuss.synereo.com/">Synereo Discussion Forums</a> where we'll be happy to discuss all aspects of our architecture, from design to technology, and anything else you'd like to engage us with. Join us there!

Finally, we'll be starting a new tradition this week - <strong>Synereo Community Hangouts</strong>, where you have a chance to meet the Synereo team and be involved in our plans for the future. The first hangout will take place this Wednesday, February 11 at 21:00 GMT. Join the hangout at: <a href="https://plus.google.com/events/ck39e1d78faj1ml2ce3jn474hu0">https://plus.google.com/events/ck39e1d78faj1ml2ce3jn474hu0</a>

Looking forward to seeing you all!
