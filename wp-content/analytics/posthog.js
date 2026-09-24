/*
 * PostHog Web Analytics, cookieless mode.
 *
 * Runs alongside Cloudflare Web Analytics. Nothing is written to cookies,
 * localStorage or sessionStorage: unique visitors are counted with a
 * privacy-preserving hash that PostHog computes server-side, so no consent
 * banner is needed. Requires "Cookieless server hash mode" to be enabled in
 * the PostHog project (Settings > Web analytics).
 *
 * Included on every page, so the token and region live here only.
 */
(function () {
  var POSTHOG_TOKEN = 'phc_REPLACE_ME';
  var POSTHOG_HOST = 'https://eu.i.posthog.com'; // US projects: https://us.i.posthog.com

  if (POSTHOG_TOKEN.indexOf('REPLACE_ME') !== -1) return;
  if (location.hostname !== 'aubgtalks.stoilms.com') return;

  var script = document.createElement('script');
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = POSTHOG_HOST.replace('.i.posthog.com', '-assets.i.posthog.com') + '/static/array.js';
  script.onload = function () {
    window.posthog.init(POSTHOG_TOKEN, {
      api_host: POSTHOG_HOST,
      defaults: '2026-05-30',
      cookieless_mode: 'always',
      person_profiles: 'never',
      disable_session_recording: true,
      disable_surveys: true
    });
  };
  document.head.appendChild(script);
})();
