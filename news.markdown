---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: category
---

<section id="posts">
    <div class="container">
        {% for category in site.categories %}
        {% if category[0] == 'news' %}
        <h2 class="page-header">{{ site.data.site.news }}</h2>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
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
