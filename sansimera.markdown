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
        {% if category[0] == 'Sansimera' %}
            <li class="list-group-item" style="margin-bottom:2%">
                <div class="row justify-content-left">
                    <h4 style="text-align: center;color: #c53025;margin-bottom:5%">{{ category[0] | camelcase }}</h4>
                </div>
                <div class="row" style="margin-bottom 2%">
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


