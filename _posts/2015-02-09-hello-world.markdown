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
<p>The Synereo tech team has been hard at work drafting out our final&nbsp;architecture and putting all the tiny little details in our soon-to-be-published whitepaper. We'd like to share some of this information with you and provide updates and teasers about&nbsp;our development plans.</p>
<p>On the network modeling side, we've seen&nbsp;progress&nbsp;as our&nbsp;team started <em>implementing the attention economy principles,<&#47;em>&nbsp;as initially described in our <a href="https:&#47;&#47;bitcointalk.org&#47;index.php?topic=827782.0">pre-announcement thread<&#47;a>,&nbsp;into our technology.</p>
<p>One of the main concepts of Synereo's Attention Economy model is <strong>Reo, <&#47;strong>which is the<span class="author-p-273008"> measure of your reputation as a publisher of attention-worthy content. It is calculated from the point of view of each user as <span class="author-p-271766">they<&#47;span><span class="author-p-273008"> receive information from another, changing based on the slice of the network they share with the user trying for <&#47;span><span class="author-p-271766">their<&#47;span><span class="author-p-273008"> attention<&#47;span>.<&#47;span></p>
<p>Another important concept is that of&nbsp;<strong>Current<&#47;strong>. It <span class="author-p-273008">is a measure of the power of messages flowing through the Synereo network. The stronger the Current, the more priority a message or post will receive in a user's stream. People recharge and even supercharge a message's Current when attending it, making it more likely to be seen by others after them.<br />
<&#47;span></p>
<p>And of course, there's no Synereo network without <strong>AMPs<&#47;strong>, <span class="author-p-273008">Synereo&rsquo;s information flow currency<&#47;span>. <span class="author-p-273008">Users receiving AMPlified content will receive a portion of the attached AMPs, more if their Reo score is high. And if it's your content that is being&nbsp;AMPlified, a portion of the AMPs will come to you as a reward!<&#47;span></p>
<p>Now, these concepts are all well&nbsp;and good, but they mean nothing without a strong technical architecture supporting them. Synereo's&nbsp;core technology is the&nbsp;<strong>DendroNet<&#47;strong>: the framework&nbsp;that the technology and attention model are organized through.</p>
<p><a href="http:&#47;&#47;blog.synereo.com&#47;wp-content&#47;uploads&#47;2015&#47;02&#47;272664028-sensory-organ-dendrite-cell-nucleus-axon1.jpg"><img class=" size-full wp-image-165 aligncenter" src="http:&#47;&#47;blog.synereo.com&#47;wp-content&#47;uploads&#47;2015&#47;02&#47;272664028-sensory-organ-dendrite-cell-nucleus-axon1.jpg" alt="272664028-sensory-organ-dendrite-cell-nucleus-axon" width="960" height="535" &#47;><&#47;a></p>
<p><span class="author-p-273008 i"><i>The <strong>DEndron<&#47;strong> <&#47;i><&#47;span><span class="author-p-271766 i"><i>is Synereo's<&#47;i><&#47;span><span class="author-p-273008 i"><i> local consensus-keeping mechanism, decentralized ledger, and<&#47;i><&#47;span><span class="author-p-271766 i"><i> distributed content model. <&#47;i><&#47;span><span class="author-p-273008">Every user on Synereo has their own fraction of it, their <&#47;span><span class="author-p-273008 i"><i>Dendrite<&#47;i><&#47;span><span class="author-p-273008">, maintaining a view of the part of the network relevant to them. A user's Dendrite is constantly updated with information received from peers: social information from friends, changing the user's affinity to them based on the attention model; meta-data and keys to encrypted data hosted on the <strong>SpecialK<&#47;strong> distributed cloud; and information saved on their Dendrite itself, used in the consensus-keeping process.&nbsp;<&#47;span></p>
<p><span class="author-p-273008">The core of our&nbsp;stack is <strong>SpecialK<&#47;strong>, <span class="author-p-271766"> a distributed key-value store - not <&#47;span><span class="author-p-273008">unlike<&#47;span><span class="author-p-271766"> DHT - which takes <&#47;span><span class="author-p-273008">the Key&#47;Value DB <&#47;span><span class="author-p-271766">a step further and provides a monadic DSL <&#47;span><span class="author-p-273008">for<&#47;span><span class="author-p-271766"> it, <&#47;span><em><span class="author-p-273008">giving<&#47;span><span class="author-p-271766"> programmers a f<&#47;span><span class="author-p-271766 i">amiliar<&#47;span><span class="author-p-273008 i">,<&#47;span><&#47;em><span class="author-p-271766 i"><em> unified API where they can access data distributed across the network<&#47;em>.<&#47;span><&#47;span><span class="author-p-273008"><br />
<&#47;span></p>
<p>Finally, <span class="author-p-271766">while Synereo is a full-fledged decentralized network, we do understand that not everyone is able to deploy a personal Synereo node on their own computation device. We have taken this into consideration, and so, during our rollout phases, Synereo will provide <strong>Centralized Gateways<&#47;strong> that enable end users to use and enjoy the benefits of the network without the <&#47;span><span class="author-p-273008">needing to actually run <&#47;span><span class="author-p-271766">a<&#47;span><span class="author-p-273008">nd maintain<&#47;span><span class="author-p-271766"> node, thus increasing the availability&nbsp;of the network to all crowds.&nbsp;Gateways don't control or have access to your information, and should they go down, the key they send you upon account creation can be used to boot up your node (with all of your information) immediately if you download a client and plug the key in.<br />
<&#47;span></p>
<p><a href="http:&#47;&#47;blog.synereo.com&#47;wp-content&#47;uploads&#47;2014&#47;10&#47;squarepurelogo.png"><img class=" wp-image-9 aligncenter" src="http:&#47;&#47;blog.synereo.com&#47;wp-content&#47;uploads&#47;2014&#47;10&#47;squarepurelogo.png" alt="Synereo Blog logo" width="353" height="353" &#47;><&#47;a></p>
<p>Where do we go from here? First, stay tuned to this channel for our upcoming whitepaper release. In the mean time, if you're a hacker, you can take a look at <a href="https:&#47;&#47;github.com&#47;synereo&#47;">all our existing code over on Github<&#47;a>. We're still in the process of documenting it and making it more user&#47;developer friendly, but feel free to hack on it if you think you have the necessary chops!</p>
<p>We've also launched the <a href="https:&#47;&#47;discuss.synereo.com&#47;">Synereo Discussion Forums<&#47;a> where we'll be happy to discuss all aspects of our architecture, from design to technology, and anything else you'd like to engage us with. Join us there!</p>
<p>Finally, we'll be starting a new tradition this week - <strong>Synereo Community Hangouts<&#47;strong>, where you have a chance to meet the Synereo team and be involved in our plans for the future. The first hangout will take place this Wednesday, February 11 at 21:00 GMT. Join the hangout at: <a href="https:&#47;&#47;plus.google.com&#47;events&#47;ck39e1d78faj1ml2ce3jn474hu0">https:&#47;&#47;plus.google.com&#47;events&#47;ck39e1d78faj1ml2ce3jn474hu0<&#47;a></p>
<p>Looking forward to seeing you all!</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
