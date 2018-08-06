var inputs = [
  'post1',
  'post2',
  'navigation',
  'header',
  'sidemenu'
];

for (var i = 0, len = inputs.length; i < len; i++) {
  var query = getParameterByName(inputs[i]);
  var input = document.getElementById(inputs[i] + '_input');
  console.log(inputs[i] + '_input');
  if(query){
    document.getElementById(inputs[i] + '_input_ms').innerHTML = query;
    input.value = query;
  } else{
    document.getElementById(inputs[i] + '_input_ms').innerHTML = '1';
    input.value = 1;
  }
  console.log(input);
  input.oninput = function () {
    document.getElementById(this.id + '_ms').innerHTML = this.value;
  }
}

document.getElementById('refresh').addEventListener('click', function () {
  top.location.href = location.origin + '?' + inputs.map(function (id) {
    return id + '=' + document.getElementById(id + '_input_ms').innerHTML;
  }).join('&');
});


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

console.log('Panel working');
