---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: category
---

<div> 
<section id="posts">
    <div class="container">
        <div class="row justify-content-center">            
        </div>
        <ul class="list-group list-group-flush">
        {% for category in site.categories %}
        {% if category[0] == 'social' %}
            <li class="list-group-item" style="margin-bottom:2%">
                <div class="row justify-content-left">
                    <h2 style="text-align: center;color: #c53025;margin-bottom:5%">{{ site.data.site.social }}</h2>
                </div>
                <div class="row">
                {% assign pages_list = category[1] %}
                {% for post in pages_list %}
                   {% include tile.html %}
                {% endfor %}
                </div>
            </li>
        {% endif %}
        {% endfor %}
        </ul>
    </div>
</section>
</div>


