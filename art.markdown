---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: category
---

<div> 
<section class="page-section" id="posts">
    <div class="container">
        <div class="row justify-content-center" style="margin-top: 5%;">            
        </div>
        <ul class="list-group list-group-flush">
        {% for category in site.categories %}
        {% if category[0] == 'Art' %}
            <li class="list-group-item" style="margin-bottom:2%">
                <div class="row justify-content-left">
                    <h4 style="text-align: center;color: #c53025;margin-bottom:5%">{{ category[0] | camelcase }}</h4>
                </div>
                <div class="row" style="margin-bottom 2%">
                {% assign pages_list = category[1] %}
                {% for post in pages_list %}
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
                {% endfor %}
                </div>
            </li>
        {% endif %}
        {% endfor %}
        </ul>
    </div>
</section>
</div>


