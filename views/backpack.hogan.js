{% extends 'layout.hogan.js' %}
{% block body %}
{% if tooltips %}
<div class="alert alert-block alert-info">
  <h4 class="alert-heading">Welcome to your Badge Backpack!</h4>
  <p>
    You collect badges here from various issuers and learning experiences. In fact, you can see the badge(s) you just earned here.
  </p>
  <p>
    We've turned on some helpful tooltips to help you get oriented. Mouse over the different parts of your backpack to learn what they do, paying special attention anywhere you see the <i class="icon-info-sign"></i> icon.
  </p>
  <p>
    When you feel comfortable you can click the <a href="/">Help: Off</a> link here or above to toggle these messages off.
  </p>
</div>
{% endif %}

{% if not badges.length %}
<h1>No badges.  Better get out there and start earning some!</h1>
<p>By the way, <a href="http://p2pu.org">P2PU</a> would be a great place to start
{% endif %}

<div class="row" style="position: relative;">
  <div class="span4 column">
    {% if badges.length %}
    <h1><span data-title="Badges" data-content="These are the badges you've earned so far! Click on one to see its details." rel="popover">Badges{% if tooltips %}<i class="icon-info-sign"></i>{% endif %}</span></h1>
    <div id="badges" class="js-badges">
      {% for badge in badges %}
        <span draggable="true" class="openbadge" data-id="{{badge.attributes.id}}" rel="popinfo" data-title="{{badge.attributes.body.badge.name}}" data-content="<span>{{badge.attributes.body.badge.description}}</span><span>Issuer: {{badge.attributes.body.badge.issuer.name}}</span>">
          <img src="{{badge.attributes.image_path}}" width="64px"/>
        </span>
      {% endfor %}
    </div>
    {% endif %}
    
    <div class="upload">
      <h3><span data-title="Upload Badges" data-content="You can upload previously earned badges here, but they have to comply with the OBI metadata spec." rel="popover">Upload Badges{% if tooltips %}<i class="icon-info-sign"></i>{% endif %}</span></h3>
      <p>If you have badges you've been awarded, you can upload them manually</p>
      <form action="/backpack/badge" method="post" enctype="multipart/form-data">
        <fieldset>
          <div class="clearfix">
            <input type="hidden" name="_csrf" value="{{ csrfToken }}"></input>
            <input id="userBadge" type="file" name="userBadge" accept="image/png"></input>
          </div>
        </fieldset>
        <div class="clearfix">
          <input class="btn btn-primary" type="submit" value="Upload"></input>
        </div>
      </form>
    </div>
  </div>

  {% if badges.length %}
    <div id='groups' class="span8 column">
      <h1><span rel="popover" data-title="Groups" data-content="You can drag-and-drop badges into groups, which you can use to publish your badges for employers, social networks, etc.">Groups{% if tooltips %}<i class="icon-info-sign"></i>{% endif %}</span></h1>
      {% for group in groups %}
        <div class='group' data-id="{{group.attributes.id}}" data-url="{{group.attributes.url}}">
        <input class='groupName' type='text' value='{{group.attributes.name}}' style='display: block' rel="tooltip" data-title="Rename groups to whatever you want!">
        <span class='icon delete' rel="tooltip" data-title="Click to delete this group">&times;</span>
        <span class='icon share' rel="tooltip" data-placement="bottom" {% if not group.attributes.badgeObjects %}style='display: none'{% endif %} title='Share this group'>5</span>
        
        <span class='public'>
          <input type='checkbox' id='public{{group.attributes.id}}' class='js-privacy' {% if group.attributes.public %}checked{% endif %}>
          <label for='public{{group.attributes.id}}'>public</label>
        </span>
          
          {% for badge in group.attributes.badgeObjects %}
            <span draggable="true" class="openbadge" data-id="{{badge.attributes.id}}" rel="popinfo" data-title="{{badge.attributes.body.badge.name}}" data-content="<span>{{badge.attributes.body.badge.description}}</span><span>Issuer: {{badge.attributes.body.badge.issuer.name}}</span>">
              <img src="{{badge.attributes.image_path}}" width="64px"/>
            </span>
          {% endfor %}
        </div>
      {% endfor %}
      
      <div class='group isNew'>
        <input class='groupName' type='text' value='New Group'>
        <span class='icon delete'>&times;</span>
        <span class='icon share' title='share this group'>5</span>
        <h3 class='instructions'>Drag a Badge Here</h3>
      </div>
      
    </div>
  {% endif %}
</div>

<script>
  window.badgeData = {};
  {% for badge in badges %}
    window.badgeData[{{badge.attributes.id}}] = {{badge.serializedAttributes}};
  {% endfor %}
</script>

<script>
  $(function(){
    $('[rel="popinfo"]').popover({
      animation: false,
      trigger: 'hover'
    });
{% if tooltips %}
    $('[rel="popover"]').popover({
      animation: false,
      placement: 'right',
      trigger: 'hover'
    });
    $('[rel="tooltip"]').tooltip({
      animation: false
    });
{% endif %}
  });
</script>
{% endblock %}
