# BadAss Phone Farm

Static marketing site for the BadAss Phone Farm physical-device offer: 20 phones for $200/month, with additional phones at $10 per phone per month.

**Live:** https://badassphonefarm.com/

## Contents

- `index.html` — complete landing page.
- `assets/` — shared and site-specific CSS and browser JavaScript.
- `deploy/badassphonefarm.conf` — production Nginx virtual host with HTTPS.

No build step or external runtime is required; deploy these files directly to a static web root.

## Production

Served by Nginx on Hetzner `144.76.78.158` from `/srv/badass-websites/dist/badassphonefarm.com`. HTTPS uses a Let's Encrypt certificate managed by Certbot.
