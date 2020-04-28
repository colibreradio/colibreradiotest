---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<div>
    <header class="masthead">
        <div class="row" style="margin-right:2%;margin-left:2%;">
            <div class="col-md-8">
                <div class="row justify-content-md-right" style="margin-top:5%">
                    <p class="marquee text-white-75 font-weight-light mb-5">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>{{site.data.site.banner}}</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </p>
                    <p class="marquee marquee2 text-white-75 font-weight-light mb-5">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>{{site.data.site.banner}}</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </p>
                </div>
                <div class="row justify-content-md-center" style="margin-top:20%">
                    <div class="col-md-6">
                        <div class="row justify-content-center">
                            <h1 class="text-uppercase text-white font-weight-bold" style="text-align: center">
                                Co-Libre Radio</h1>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-md-6">
                        <div class="row justify-content-center">
                            <p class="text-white-75 font-weight-light mb-5" style="text-align: center">
                                {{site.data.site.maindesc}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 shadow mb-5 bg-white"
                style="background-color: white;margin-top:15%;overflow: scroll;height: 60vh !important;">
                <div class="container my-4">
                    <h2 class="text-black font-weight-bold" style="text-align: center;color: #c53025;margin-bottom: 5%">
                        Latest Posts</h2>
                    <ul class="list-group list-group-flush">
                        {% for post in site.posts %}
                        <li class="list-group-item" style="margin-top:2%;margin-bottom:2%">
                            <h4 class="font-weight-bold">{{ post.title }}</h4>
                            <span class="post-meta">{{ post.date | date_to_string }}</span>
                            <span class="post-meta">{{ post.author }}</span>
                            <p style="margin-top:5%;">{{ post.excerpt }}</p>
                            <a href="{{ post.url }}" target="_blank">Read More...</a>
                        </li>
                        {% endfor %}
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <section class="page-section bg-primary" id="chat">
        <div class="container">
            <div class="row justify-content-center">
                <h3 class="text-white font-weight-bold" style="margin-bottom: 2%;">Chat Room</h3>
                <iframe src="https://minnit.chat/CoLibreChat?embed&nickname=" class="shadow mb-5 bg-white"
                    style="border:0;width:90%;height:500px;" allowTransparency="true"></iframe>
            </div>
        </div>
    </section>
<section class="page-section" id="posts">
    <div class="container">
        <div class="row justify-content-center">
            <h3 class="font-weight-bold" style="margin-bottom: 2%;">Posts</h3>
        </div>
        <ul class="list-group list-group-flush">
        {% for category in site.categories %}
            <li class="list-group-item" style="margin-bottom:2%">
                <div class="row justify-content-left">
                    <h4 style="text-align: center;color: #c53025;">{{ category[0] | camelcase }}</h4>
                </div>
                <div class="row" style="margin-bottom 2%">
                {% assign pages_list = category[1] %}
                {% assign count = 0 %}
                {% for post in pages_list %}
                    {% assign count = count | plus:1 %}
                    <div class="col-sm-4">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="{{ post.thumbnail }}"
                                alt="No post image..">
                            <div class="card-body">
                                <h5 class="card-title">{{ post.title }}</h5>
                                <p class="card-text">{{ post.excerpt }}</p>
                                <a href="{{ post.url }}" class="btn btn-primary" target="_blank">Read More..</a>
                            </div>
                        </div>
                    </div>
                    {% if count == 4 %}{% break %}
                    {% endif %}
                {% endfor %}
                </div>
                <div class="row justify-content-right" style="margin-top:2%;float: right;">
                <a href="/{{ category[0] | camelcase }}.html" target="_blank">See All Posts</a>
                </div>
            </li>            
        {% endfor %}
        </ul>
    </div>
</section>
</div>
