---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<div>
    <header class="masthead">
        <div class="row mr-3 ml-3 mb-2">
            <div class="col-md-8">
                <div class="row justify-content-md-right" style="margin-top:5%">
                    <p class="marquee text-white-75 font-weight-light mb-5 col-md-12">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>site.data.site.banner</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </p>
                    <p class="marquee marquee2 text-white-75 font-weight-light mb-5 col-md-12">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>site.data.site.banner</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
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
            <div id="carouselExampleIndicators" class="col-md-4 carousel slide shadow-lg p-0 w-100" data-ride="carousel"
                style="background-color:black;margin-top:12%;overflow: hidden;height: 65vh !important;">
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
                        <div class="carousel-caption" style="margin-bottom:2%">
                            <a href="{{ post.url }}" target="_blank"
                                    style="background-color: #c53025;color:white;">{{ post.title }}</a>
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
        <div class="row justify-content-center mb-5 pt-5">
            <h3 class="text-white font-weight-bold pt-3">Chat Room</h3>
            </div>
            <div class="row justify-content-center">
            <iframe src="https://minnit.chat/CoLibreChat?embed&nickname=" class="shadow mb-4 bg-white"
                style="border:0;width:90%;height:500px;" allowTransparency="true"></iframe>
        </div>
    </div>
</section>
<section class="page-section" id="posts">
    <div class="container">
        <div class="row justify-content-center pt-5">
            <h3 class="font-weight-bold pt-3">Posts</h3>
        </div>
        <hr>
        <ul class="list-group list-group-flush">
            {% for category in site.categories %}
            <li class="list-group-item pt-5" id="{{ category[0]}}">
                <div class="row justify-content-left">
                <div class="col-md-10">
                    <h4 style="text-align: left;color: #c53025;">
                    {% include categorycondition.html %}
                    </h4>
                    </div>
                    <div class="col-md-2">
                    <a href="/{{ category[0]}}.html" target="_blank" style="text-align: right;">See All Posts</a>
                    </div>
                </div>
                <div class="row" style="margin-bottom:2%">
                    {% assign pages_list = category[1] %}
                    {% assign count = 0 %}
                    {% for post in pages_list %}
                    {% assign count = count | plus:1 %}
                    {% include tile.html %}
                    {% if count == 3 %}{% break %}
                    {% endif %}
                    {% endfor %}
                </div>
                <div class="row justify-content-right" style="margin-top:2%;float: right;">                    
                </div>
            </li>
            {% endfor %}
        </ul>
    </div>
</section>
</div>
