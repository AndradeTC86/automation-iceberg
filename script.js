(function () {
  var LANGS = ['pt-BR', 'en', 'es', 'fr', 'it', 'de'];
  var LANG_LABELS = {
    'pt-BR': 'Português (Brasil)',
    en: 'English',
    es: 'Español',
    fr: 'Français',
    it: 'Italiano',
    de: 'Deutsch'
  };

  var app = document.getElementById('app');
  var selector = document.getElementById('language');

  LANGS.forEach(function (lang) {
    var option = document.createElement('option');
    option.value = lang;
    option.textContent = LANG_LABELS[lang];
    selector.appendChild(option);
  });

  var preferred = navigator.language || 'pt-BR';
  var initial = LANGS.indexOf(preferred) >= 0 ? preferred : preferred.slice(0, 2);
  if (LANGS.indexOf(initial) < 0) {
    initial = 'pt-BR';
  }

  function esc(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderTemplate(cfg) {
    var svgBands = [
      'ui', 'db', 'int', 'api', 'comp', 'unit'
    ].map(function (id) {
      var bandName = cfg.names[id];
      var color = id === 'ui' ? 'var(--b0)' : id === 'db' ? 'var(--b1)' : id === 'int' ? 'var(--b2)' : id === 'api' ? 'var(--b3)' : id === 'comp' ? 'var(--b4)' : 'var(--b5)';
      var y = id === 'ui' ? 20 : id === 'db' ? 190 : id === 'int' ? 270 : id === 'api' ? 350 : id === 'comp' ? 430 : 510;
      var h = id === 'ui' ? 170 : id === 'db' || id === 'int' || id === 'api' || id === 'comp' ? 80 : 110;
      var label = id === 'ui' ? 'UI' : id === 'db' ? cfg.names.db : id === 'int' ? cfg.names.int : id === 'api' ? 'API' : id === 'comp' ? cfg.names.comp : cfg.names.unit;
      var goTo = cfg.ariaGoTo || 'Go to ';
      return '<g class="band" data-layer="' + id + '" tabindex="0" role="button" aria-label="' + esc(goTo + bandName) + '"><rect class="fill" x="0" y="' + y + '" width="480" height="' + h + '" clip-path="url(#bergClip)" style="fill:' + color + '"/><rect class="ring" x="0" y="' + y + '" width="480" height="' + h + '" clip-path="url(#bergClip)"/><text x="210" y="' + (id === 'ui' ? 112 : id === 'db' ? 236 : id === 'int' ? 316 : id === 'api' ? 396 : id === 'comp' ? 476 : 568) + '" style="fill:#fff">' + esc(label) + '</text></g>';
    }).join('');

    var intro = cfg.intro || '';
    var summary = cfg.summary || { title: '', content: '' };
    var quizTitle = cfg.quizTitle || 'Which layer would catch this bug?';
    var page = [
      '<header class="masthead">',
      '<h1>' + esc(cfg.hero && cfg.hero.title ? cfg.hero.title : cfg.names.ui) + '</h1>',
      '<p class="lede">' + esc(cfg.hero && cfg.hero.lede ? cfg.hero.lede : '') + '</p>',
      '</header>',
      '<main class="layout">',
      '<aside class="stage" aria-label="' + esc(cfg.ariaStage || 'Iceberg das camadas de teste') + '">',
      '<div class="berg-wrap">',
      '<svg class="berg" id="berg" viewBox="0 0 480 640" role="group" aria-label="' + esc(cfg.ariaBerg || 'Iceberg com seis camadas de testes') + '">',
      '<defs><linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--sea-top)"/><stop offset="1" style="stop-color:var(--sea-bot)"/></linearGradient><clipPath id="bergClip"><path transform="translate(10 0)" d="M200,30 L232,80 L262,105 L300,150 L340,200 L372,260 L378,320 L360,380 L338,430 L300,500 L262,560 L226,605 L200,612 L172,605 L138,560 L100,500 L62,430 L40,380 L26,320 L34,260 L62,200 L100,150 L138,105 L168,80 Z"/></clipPath></defs>',
      '<rect x="0" y="0" width="480" height="150" style="fill:var(--sky)"/><rect x="0" y="150" width="480" height="490" fill="url(#seaGrad)"/>',
      svgBands,
      '<path transform="translate(10 0)" fill="none" style="stroke:var(--outline)" stroke-width="2.5" stroke-linejoin="round" d="M200,30 L232,80 L262,105 L300,150 L340,200 L372,260 L378,320 L360,380 L338,430 L300,500 L262,560 L226,605 L200,612 L172,605 L138,560 L100,500 L62,430 L40,380 L26,320 L34,260 L62,200 L100,150 L138,105 L168,80 Z"/><line x1="0" y1="150" x2="480" y2="150" stroke="#fff" stroke-opacity=".7" stroke-width="1.5"/>',
      '<text class="tick" x="416" y="145">' + esc(cfg.depth.ui) + '</text>',
      '<text class="tick" x="416" y="235">10 m</text><text class="tick" x="416" y="315">20 m</text><text class="tick" x="416" y="395">30 m</text><text class="tick" x="416" y="475">40 m</text><text class="tick" x="416" y="565">50 m</text>',
      '</svg>',
      '</div>',
      '<div class="readout" id="readout" aria-live="polite"><span>' + esc(cfg.readoutLabel || 'Camada atual:') + '</span> <strong id="readoutName">' + esc(cfg.surface) + '</strong></div>',
      '</aside>',
      '<article class="article">',
      '<section class="intro">' + intro + '</section>',
      (cfg.sections || []).map(function (section) {
        return '<section class="layer" id="' + section.id + '" data-layer="' + section.id + '" style="--c:var(--b' + (section.id === 'ui' ? '0' : section.id === 'db' ? '1' : section.id === 'int' ? '2' : section.id === 'api' ? '3' : section.id === 'comp' ? '4' : '5') + ')" data-name="' + esc(cfg.names[section.id]) + '" data-depth="' + esc(cfg.depth[section.id]) + '">' + section.content + '<div class="meters" data-m="' + (section.meters || '1,2,5') + '"></div></section>';
      }).join(''),
      '<section class="quiz" id="quiz" aria-labelledby="quizTitle"><h2 id="quizTitle">' + esc(quizTitle) + '</h2><p class="progress" id="qProgress"></p><div id="qBody"></div></section>',
      '<section class="summary"><h2>' + esc(summary.title) + '</h2>' + (summary.content || '') + '</section>',
      '</article>',
      '</main>'
    ].join('');

    return page;
  }

  function text(cfg, key, vars) {
    var value = cfg[key] || '';
    Object.keys(vars || {}).forEach(function (name) {
      value = value.replace(new RegExp('\\{' + name + '\\}', 'g'), vars[name]);
    });
    return value;
  }

  function setLanguage(lang) {
    var cfg = window.IcebergLocales && window.IcebergLocales[lang];
    if (!cfg) {
      return;
    }

    app.innerHTML = typeof cfg.template === 'function' ? cfg.template() : renderTemplate(cfg);
    selector.value = lang;
    document.documentElement.lang = lang;
    var heading = app.querySelector('h1');
    document.title = heading ? heading.textContent : document.title;

    var levels = ['ui', 'db', 'int', 'api', 'comp', 'unit'];
    var bands = Array.prototype.slice.call(app.querySelectorAll('.band'));
    var berg = app.querySelector('#berg');
    var readout = app.querySelector('#readout');
    var readoutName = app.querySelector('#readoutName');
    var qProgress = app.querySelector('#qProgress');
    var qBody = app.querySelector('#qBody');
    var current = null;
    var idx = 0;
    var score = 0;
    var answered = false;

    Array.prototype.forEach.call(app.querySelectorAll('.layer'), function (section) {
      var box = section.querySelector('.meters');
      if (!box) return;
      var values = box.getAttribute('data-m').split(',').map(Number);
      var html = '<dl>';
      values.forEach(function (v, i) {
        var dots = '';
        for (var k = 1; k <= 5; k += 1) {
          dots += '<i class="' + (k <= v ? 'on' : '') + '"></i>';
        }
        html += '<dt>' + esc(cfg.labels[i]) + '</dt>';
        html += '<dd role="img" aria-label="' + esc(text(cfg, 'ofFive', { v: v })) + '">' + dots + '</dd>';
      });
      box.innerHTML = html + '</dl><small>' + esc(cfg.meterNote) + '</small>';
    });

    function setActive(id) {
      if (id === current) return;
      current = id;
      bands.forEach(function (band) {
        band.classList.toggle('active', band.getAttribute('data-layer') === id);
      });
      berg.classList.toggle('has-active', !!id);
      readoutName.textContent = id ? cfg.names[id] + ': ' + cfg.depth[id] : cfg.surface;
      readout.classList.toggle('on', !!id);
    }

    function go(id) {
      var el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    bands.forEach(function (band) {
      var id = band.getAttribute('data-layer');
      band.addEventListener('click', function () {
        go(id);
      });
      band.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          go(id);
        }
      });
    });

    function render() {
      if (idx >= cfg.scen.length) {
        qProgress.textContent = cfg.result;
        var msg = score >= 5 ? cfg.high : score >= 3 ? cfg.mid : cfg.low;
        qBody.innerHTML = '<div class="result"><p class="score">' + esc(text(cfg, 'score', { s: score, t: cfg.scen.length })) + '</p><p>' + esc(msg) + '</p><button class="btn" id="again">' + esc(cfg.again) + '</button></div>';
        document.getElementById('again').addEventListener('click', function () {
          idx = 0;
          score = 0;
          render();
        });
        return;
      }

      answered = false;
      var scenario = cfg.scen[idx];
      qProgress.textContent = text(cfg, 'prog', { n: idx + 1, t: cfg.scen.length });
      var options = levels.map(function (id) {
        return '<button class="opt" data-id="' + id + '">' + esc(cfg.names[id]) + '</button>';
      }).join('');
      qBody.innerHTML = '<p class="scenario">' + esc(scenario.t) + '</p><div class="options">' + options + '</div><div class="feedback" id="fb" aria-live="polite"></div>';
      Array.prototype.forEach.call(qBody.querySelectorAll('.opt'), function (button) {
        button.addEventListener('click', function () {
          answer(button);
        });
      });
    }

    function answer(button) {
      if (answered) return;
      answered = true;
      var scenario = cfg.scen[idx];
      var pick = button.getAttribute('data-id');
      var ok = pick === scenario.a;
      if (ok) score += 1;

      Array.prototype.forEach.call(qBody.querySelectorAll('.opt'), function (option) {
        var id = option.getAttribute('data-id');
        option.disabled = true;
        if (id === scenario.a) {
          option.classList.add('right');
          option.textContent = '✓ ' + cfg.names[id];
        } else if (option === button) {
          option.classList.add('wrong');
          option.textContent = '✗ ' + cfg.names[id];
        }
      });

      var feedback = document.getElementById('fb');
      feedback.innerHTML = '<b>' + esc(ok ? cfg.correct : text(cfg, 'wrong', { name: cfg.names[scenario.a] })) + '</b>' + esc(scenario.why) + '<br><button class="btn" id="next">' + esc(idx === cfg.scen.length - 1 ? cfg.finish : cfg.next) + '</button>';
      var nextButton = document.getElementById('next');
      nextButton.addEventListener('click', function () {
        idx += 1;
        render();
      });
      nextButton.focus();
    }

    render();
    setActive(null);
  }

  selector.addEventListener('change', function () {
    setLanguage(this.value);
  });

  setLanguage(initial);
})();
