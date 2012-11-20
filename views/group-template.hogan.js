  <div class='group {% if not attributes.id %}isNew{% endif %}'>
    <input class='groupName' type='text' value='{{name}}'>
    <span class='icon delete'>&times;</span>
    <span class='icon share' style='display: none' title='share this group'>5</span>

    {% if not attributes.id %}
      <h3 class='instructions'>Drag a Badge Here</h3>
    {% endif %}

    {% if attributes.id %}
      <span class='public'>
        <input type='checkbox' id='public{{attributes.id}}' class='js-privacy' {% if attributes.public %}checked{% endif %}>
        <label for='public{{attributes.id}}'>public</label>
      </span>
    {% endif %}
  </div>
