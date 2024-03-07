var _hsp = window._hsp = window._hsp || [];
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}

        var useGoogleConsentModeV2 = false;

        if (!window._hsGoogleConsentRunOnce) {
        window._hsGoogleConsentRunOnce = true;

        gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
        });

        if (useGoogleConsentModeV2) {
            _hsp.push(['useGoogleConsentModeV2'])
        } else {
            _hsp.push(['addPrivacyConsentListener', function(consent){
            var hasAnalyticsConsent = consent && (consent.allowed || (consent.categories && consent.categories.analytics));
            var hasAdsConsent = consent && (consent.allowed || (consent.categories && consent.categories.advertisement));

            gtag('consent', 'update', {
                'ad_storage': hasAdsConsent ? 'granted' : 'denied',
                'analytics_storage': hasAnalyticsConsent ? 'granted' : 'denied',
                'ad_user_data': hasAdsConsent ? 'granted' : 'denied',
                'ad_personalization': hasAdsConsent ? 'granted' : 'denied'
            });
            }]);
        }
        }

        gtag('js', new Date());
        gtag('set', 'developer_id.dZTQ1Zm', true);
        gtag('config', 'G-323046588');

        var _hsp = window._hsp = window._hsp || [];
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}

        var useGoogleConsentModeV2 = false;


        var hsLoadGtm = function loadGtm() {
            if(window._hsGtmLoadOnce) {
            return;
            }

            if (useGoogleConsentModeV2) {

            gtag('set','developer_id.dZTQ1Zm',true);

            // set up default denied consent
            gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
            });

            // instruct cookie banner to send consent updates to GCM
            _hsp.push(['useGoogleConsentModeV2'])
            }

            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TDN2M49');

            window._hsGtmLoadOnce = true;
        };

        _hsp.push(['addPrivacyConsentListener', function(consent){
        if(consent.allowed || (consent.categories && consent.categories.analytics)){
            hsLoadGtm();
        }
        }]);