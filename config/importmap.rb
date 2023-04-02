# Pin npm packages by running ./bin/importmap

pin "application", preload: true
# pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
# pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
# pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin "angular", to: "https://ga.jspm.io/npm:angular@1.8.2/index.js"

pin "angular-route", to: "https://ga.jspm.io/npm:angular-route@1.8.2/index.js"

pin "home-controller", to: "controllers/home.controller.js", preload: true


pin "material-kit", to: "material/material-kit.min.js", preload: true
pin "bootstrap", to: "material/core/bootstrap.bundle.min.js", preload: true