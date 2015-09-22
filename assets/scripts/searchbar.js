var links = [{name: "cv", link: "/reference/cv"}, 
             {name: "camera", link: "/reference/camera"}];

var source = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: links
});

source.initialize();

$('#custom-templates .typeahead').typeahead(null, {
  name: 'matched-links',
  displayKey: 'name',
  source: source.ttAdapter(),
  templates: {
    empty: [
      '<div class="empty-message">',
      'unable to find any company that match current query',
      '</div>'
    ].join('\n'),
      suggestion: Handlebars.compile('<p><a href="{{link}}">{{name}}</a></p>')
  }
});