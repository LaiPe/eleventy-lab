---
title: Bienvenue sur la PoC de l'utilisation de Décap avec un site généré par 11ty
---
# {{title}}

J'ai modifié la homepage depuis le backoffice :)

Salut

Voici mon test de prod !

J’aime beaucoup Valentina

Magnifique, le lien d'invitation est bien redirigé par le client !!

<!-- Redirection pour les liens d'invitation Netlify -> renvoie vers /admin en gardant les paramètres -->

<script>
(function () {
  var q = (location.search || '') + (location.hash || '');
  var s = q.toLowerCase();
  var looksLikeInvite = s.indexOf('invite') !== -1 ||
                        s.indexOf('invitation') !== -1 ||
                        s.indexOf('token') !== -1 ||
                        s.indexOf('confirmation') !== -1 ||
                        s.indexOf('access_token') !== -1 ||
                        location.pathname.indexOf('/.netlify/identity') !== -1;
  if (looksLikeInvite) {
    var dest = '/admin' + location.search + location.hash;
    window.location.replace(dest);
  }
})();
</script>
