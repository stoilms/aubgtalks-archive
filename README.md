# AUBGTalks — archived website

A preserved copy of **AUBGTalks**, the student project that recorded and published talks by guest speakers at the [American University in Bulgaria](https://www.aubg.edu/).

**Live at [aubgtalks.stoilms.com](https://aubgtalks.stoilms.com)**

The project ran from 2012 to 2020 at `aubg.edu/talks`, and earlier at `aubg.bg/talks`. It is no longer active. This repository holds the site as it existed when it stopped — 86 recorded talks across economics, politics, history, journalism, computer science and science, plus the pages describing the project and the people who ran it.

## What this repository is

Static HTML, served by GitHub Pages. There is no build step in CI, no framework and no dependencies — what is committed here is exactly what is served.

The original was a WordPress site. Rather than port the content to a modern static site generator, which would have meant rebuilding the theme and losing the original design, the WordPress install is kept offline as an editing tool and the rendered pages are crawled into flat HTML. The archive therefore looks and behaves as the site did, down to the layout and typography of its 2013 theme.

URLs are preserved from the original site, so links and citations from that era still resolve.

## What has changed from the original

- An archive notice appears at the top of every page, explaining that the site is no longer maintained.
- Comment submission and search were removed. They required a server; existing comments remain as static text.
- Google Analytics was removed. The archive uses [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) and [PostHog](https://posthog.com/) in cookieless mode, neither of which stores anything in the visitor's browser or builds personal profiles — so there is no consent banner. The PostHog settings live in `wp-content/analytics/posthog.js`, which every page loads.
- A defunct Google Plus script was removed, and resources that loaded over plain HTTP were switched to HTTPS.
- Self-referencing links point at the current domain.

Content, design, layout and images are otherwise untouched. Some outbound links have inevitably rotted in the years since; the archive notice says so.

## Contributing

This is a historical archive rather than a living site, so pull requests adding or changing content are not expected. If you spot something genuinely broken — a missing image, a page that fails to load — an issue is welcome.

## Credits

AUBGTalks was created and run by students and staff of the American University in Bulgaria. The recordings remain on the [AUBGTalks YouTube channel](https://www.youtube.com/AUBGTalks), which is where the videos embedded here are served from.

Archived and maintained by [Stoil M. Stoilov](https://github.com/stoilms), founder of AUBGTalks.
