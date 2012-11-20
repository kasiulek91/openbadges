  <div class='lightbox' data-id='{{id}}'>
    <div class='contents badge-details'>
      <header>
        <h2>{{body.badge.name}}</h2>
        <span class='close'>&times;</span>
      </header>
      <div class='body'>

        <div class='confirm-disown'>
          <p>
            This will remove the badge from your account. It will also be
            removed from all groups. The only way to get this badge back will be
            to go to the place where it was issued
            (<a href='{{body.badge.issuer.origin}}'>{{body.badge.issuer.name}}</a>)
            and get it re-issued.
          </p>

          <div class='buttons'>
            <button class='btn nope'>Nevermind, I want to keep this badge</button>
            <button class='btn yep btn-danger'>Yes, remove this badge</button>
          </div>
        </div>

        <table class='information table'>
          <tr>
            <td rowspan="100" class='image'>
              <img src="{{image_path}}" class='badge-image'>
              <button class='btn btn-danger disown'>Disown this Badge</button>
            </td>

            <td class='section-head' colspan='2'>Issuer Details</td>
          </tr>
          {% if body %}
          <tr>
            <td class='fieldlabel issuer-name'>Name</td>
            <td>{{body.badge.issuer.name}}</td>
          </tr>
          <tr>
            <td class='fieldlabel issuer-name'>URL</td>
            <td><a href="{{body.badge.issuer.origin}}">{{body.badge.issuer.origin}}</a></td>
          </tr>
          {% if body.badge.issuer.org %}
          <tr>
            <td class='fieldlabel issuer-name'>Organization</td>
            <td>{{body.badge.issuer.org}}</td>
          </tr>
          {% endif %}

          <tr>
            <td class='section-head' colspan='2'>Badge Details</td>
          </tr>
          <tr>
            <td class='fieldlabel'>Name</td>
            <td>{{body.badge.name}}</td>
          </tr>
          <tr>
            <td class='fieldlabel'>Description</td>
            <td>{{badge.description}}</td>
          </tr>
          <tr>
            <td class='fieldlabel'>Criteria</td>
            <td><a href='{{badge.criteria}}'>{{badge.criteria}}</a></td>
          </tr>

          <tr>
            <td class='section-head' colspan='2'>Issuance Details</td>
          </tr>
          <tr>
            <td class='fieldlabel recipient'>Recipient</td>
            <td>{{recipient}}</td>
          </tr>
          <tr>
            <td class='fieldlabel evidence'>Evidence</td>
            <td><a href='{{evidence}}'>{{evidence}}</a></td>
          </tr>
          {% if issued_on %}
          <tr>
            <td class='fieldlabel'>Issued On</td>
            <td>{{issued_on}}</td>
          </tr>
          {% endif %}

          {% if expires %}
          <tr>
            <td class='fieldlabel'>Expiration Date</td>
            <td>{{expires}}</td>
          </tr>
          {% endif %}

          {% endif %}
        </table>
      </div>
    </div>
  </div>
