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
            <!--<div class="col-md-4 shadow mb-5 bg-white"
                style="background-color: white;margin-top:15%;overflow: scroll;height: 60vh !important;">
                <div class="container my-4">
                    <h2 class="text-black font-weight-bold" style="text-align: center;color: #c53025;margin-bottom: 5%">
                        Latest Posts</h2>
                    <ul class="list-group list-group-flush">
                        {% for post in site.posts %}
                        <li class="list-group-item" style="margin-top:2%;margin-bottom:2%">
                            <h4 class="font-weight-bold">{{ post.title }}</h4>
                            <span class="post-meta">{{ post.date | date: "%-d %B %Y %R" }}</span>
                            <span class="post-meta font-weight-bold" style="color: #c53025;">from</span>
                            <span class="post-meta">{{ post.author }}</span>
                            <p style="margin-top:5%;">{{ post.excerpt }}</p>
                            <a href="{{ post.url }}" target="_blank">Read More...</a>
                        </li>
                        {% endfor %}
                    </ul>
                </div>
            </div>-->
            <div id="carouselExampleIndicators" class="col-md-4 carousel slide shadow-lg p-0 mb-5" data-ride="carousel"
                style="background-color:black;margin-top:10%;overflow: hidden;width: 100%important;height: 65vh !important;">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    {% assign count = 0 %}
                    {% for post in site.posts %}
                    {% assign count = count | plus:1 %}
                    <div class="carousel-item {% if count == 1 %}active{% endif %}">
                        <img class="d-block w-100"
                            style="object-fit: none; object-position: center;width: 100%;height: 65vh; margin-bottom: 1rem;"
                            src="{{ post.thumbnail }}">
                        <div class="carousel-caption d-none d-md-block">
                            <h5><a href="{{ post.url }}" target="_blank"
                                    style="background-color: #c53025;color:white;">{{ post.title }}</a></h5>
                        </div>
                    </div>
                    {% if count == 3 %}{% break %}
                    {% endif %}
                    {% endfor %}
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
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
            <li class="list-group-item" style="margin-bottom:2%;padding-top:4%;" id="{{ category[0] | camelcase }}">
                <div class="row justify-content-left">
                    <h4 style="text-align: center;color: #c53025;">{{ category[0] | camelcase }}</h4>
                </div>
                <div class="row" style="margin-bottom 2%">
                    {% assign pages_list = category[1] %}
                    {% assign count = 0 %}
                    {% for post in pages_list %}
                    {% assign count = count | plus:1 %}
                    <div class="col-sm-4">
                        <div class="card" style="width: 18rem;height: 32rem !important;">
                            <img class="card-img-top" src="{{ post.thumbnail }}" alt="No post image..">
                            <div class="card-body">
                                <div class="row" style="max-height: 14rem;overflow:hidden;">
                                    <h5 class="card-title">{{ post.title }}</h5>
                                    <p class="card-text">{{ post.excerpt }}</p>
                                </div>
                            </div>
                            <div class="row align-items-center d-flex justify-content-center" style="margin-bottom:8%">
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
