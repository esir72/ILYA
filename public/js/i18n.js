(function () {
  window.i18n = {
    lang: localStorage.getItem('lang') || 'ru',
    data: null,
    loaded: false,

    _reqId: 0,

    async load() {
      this._reqId++;
      var id = this._reqId;
      try {
        const res = await fetch('/translations/' + this.lang + '.json');
        const data = await res.json();
        if (id === this._reqId) {
          this.data = data;
          this.loaded = true;
        }
      } catch (e) {
        if (id === this._reqId) {
          console.warn('i18n: failed to load', this.lang, e);
          this.data = {};
          this.loaded = true;
        }
      }
    },

    t(key, params) {
      if (!this.data) return key;
      var val = this.data[key];
      if (val === undefined) {
        val = key.split('.').reduce(function (o, k) {
          return o && o[k] !== undefined ? o[k] : undefined;
        }, this.data);
      }
      if (typeof val !== 'string') return key;
      if (!params) return val;
      return val.replace(/\{(\w+)\}/g, function (_, p) {
        return params[p] !== undefined ? params[p] : '{' + p + '}';
      });
    },

    apply() {
      var self = this;
      var defaults = { year: new Date().getFullYear() };

      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.dataset.i18n;
        var text = self.t(key, defaults);
        var tag = el.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') {
          el.placeholder = text;
        } else if (tag === 'OPTION') {
          el.textContent = text;
        } else {
          el.textContent = text;
        }
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        var key = el.dataset.i18nPlaceholder;
        el.placeholder = self.t(key, defaults);
      });

      document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
        var key = el.dataset.i18nValue;
        el.value = self.t(key, defaults);
      });

      document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
        var key = el.dataset.i18nContent;
        el.setAttribute('content', self.t(key, defaults));
      });

      document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
        var key = el.dataset.i18nAria;
        el.setAttribute('aria-label', self.t(key, defaults));
      });

      var toggle = document.getElementById('lang-toggle');
      if (toggle) {
        toggle.textContent = this.lang.toUpperCase();
      }

      document.documentElement.lang = this.lang;
      document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: this.lang } }));
    },

    async setLang(lang) {
      if (lang === this.lang && this.loaded) return;
      this.lang = lang;
      localStorage.setItem('lang', lang);
      await this.load();
      this.apply();
    },

    async init() {
      await this.load();
      this.apply();
      document.addEventListener('click', function (e) {
        var btn = e.target.closest('#lang-toggle');
        if (btn) {
          e.preventDefault();
          var newLang = window.i18n.lang === 'ru' ? 'en' : 'ru';
          window.i18n.setLang(newLang);
          return;
        }
        var langBtn = e.target.closest('[data-lang]');
        if (langBtn) {
          e.preventDefault();
          window.i18n.setLang(langBtn.dataset.lang);
        }
      });
    },
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { window.i18n.init(); });
  } else {
    window.i18n.init();
  }
})();
